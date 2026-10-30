import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { setTimeout as delay } from 'node:timers/promises'

// Chrome's debugging protocol and Node 24 WebSocket keep these checks dependency-free.
// shortcut: Chrome only; use a cross-browser runner when Firefox/Safari enter CI.
export async function launchChrome() {
  const profile = await mkdtemp(join(tmpdir(), 'portfolio-browser-'))
  const chrome = spawn(process.env.CHROME_BIN || 'google-chrome', [
    '--headless',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--remote-debugging-port=0',
    `--user-data-dir=${profile}`,
    'about:blank',
  ])
  let socket
  try {
    const endpoint = await new Promise((resolve, reject) => {
      let output = ''
      const timeout = setTimeout(
        () => reject(new Error('Chrome startup timed out')),
        10000,
      )
      const finish = (error, url) => {
        clearTimeout(timeout)
        if (error) reject(error)
        else resolve(url)
      }
      chrome.once('error', (error) => finish(error))
      chrome.once('exit', (code) =>
        finish(new Error(`Chrome exited: ${code}\n${output}`)),
      )
      chrome.stderr.on('data', (chunk) => {
        output += chunk
        const match = output.match(/DevTools listening on (ws:\/\/\S+)/)
        if (match) finish(null, match[1])
      })
    })
    socket = new WebSocket(endpoint)
    await once(socket, 'open', { signal: AbortSignal.timeout(10000) })
  } catch (error) {
    socket?.close()
    if (chrome.pid && chrome.exitCode === null) {
      const exited = once(chrome, 'exit')
      chrome.kill()
      await exited
    }
    await rm(profile, { recursive: true, force: true, maxRetries: 3 })
    throw error
  }

  let id = 0
  const pending = new Map()
  const exceptions = []
  socket.addEventListener('message', ({ data }) => {
    const message = JSON.parse(data)
    if (message.method === 'Runtime.exceptionThrown')
      exceptions.push(message.params)
    if (!message.id) return
    const request = pending.get(message.id)
    if (!request) return
    pending.delete(message.id)
    clearTimeout(request.timeout)
    if (message.error) request.reject(new Error(JSON.stringify(message.error)))
    else request.resolve(message.result)
  })
  const send = (method, params = {}, sessionId) =>
    new Promise((resolve, reject) => {
      const requestId = ++id
      const timeout = setTimeout(() => {
        pending.delete(requestId)
        reject(new Error(`Chrome command timed out: ${method}`))
      }, 10000)
      pending.set(requestId, { resolve, reject, timeout })
      socket.send(JSON.stringify({ id: requestId, method, params, sessionId }))
    })

  return {
    async page() {
      const { browserContextId } = await send('Target.createBrowserContext')
      const { targetId } = await send('Target.createTarget', {
        url: 'about:blank',
        browserContextId,
      })
      const { sessionId } = await send('Target.attachToTarget', {
        targetId,
        flatten: true,
      })
      const command = (method, params) => send(method, params, sessionId)
      await command('Page.enable')
      await command('Runtime.enable')
      await command('Network.enable')
      // Layout assertions use measured geometry, not third-party font availability.
      await command('Network.setBlockedURLs', {
        urls: ['https://fonts.googleapis.com/*', 'https://fonts.gstatic.com/*'],
      })
      const evaluate = async (fn, ...args) => {
        const result = await command('Runtime.evaluate', {
          expression: `(${fn.toString()})(...${JSON.stringify(args)})`,
          returnByValue: true,
          awaitPromise: true,
        })
        assert.equal(
          result.exceptionDetails,
          undefined,
          JSON.stringify(result.exceptionDetails),
        )
        return result.result.value
      }
      const waitFor = async (fn, ...args) => {
        const deadline = Date.now() + 5000
        while (Date.now() < deadline) {
          if (await evaluate(fn, ...args)) return
          await delay(25)
        }
        assert.fail(
          `Browser condition timed out: ${fn.toString()} with ${JSON.stringify(args)}`,
        )
      }
      return {
        command,
        evaluate,
        waitFor,
        async viewport(width, height = 900) {
          await command('Emulation.setDeviceMetricsOverride', {
            width,
            height,
            deviceScaleFactor: 1,
            mobile: false,
          })
        },
        async motion(value) {
          await command('Emulation.setEmulatedMedia', {
            features: [{ name: 'prefers-reduced-motion', value }],
          })
        },
        async open(url) {
          await command('Page.navigate', { url })
          await waitFor(
            () =>
              document.readyState === 'complete' &&
              Boolean(document.querySelector('.project-card--feature')),
          )
          await evaluate(
            () =>
              new Promise((resolve) =>
                requestAnimationFrame(() => requestAnimationFrame(resolve)),
              ),
          )
        },
        async close() {
          await send('Target.disposeBrowserContext', { browserContextId })
        },
      }
    },
    exceptions,
    async close() {
      socket.close()
      if (chrome.exitCode === null) {
        const exited = once(chrome, 'exit')
        chrome.kill()
        await exited
      }
      await rm(profile, { recursive: true, force: true, maxRetries: 3 })
    },
  }
}
