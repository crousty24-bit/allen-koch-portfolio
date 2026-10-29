import { spawnSync } from 'node:child_process'
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, describe, expect, it } from 'vitest'

const projectRoot = fileURLToPath(new URL('..', import.meta.url))
const scriptPath = join(projectRoot, 'scripts/update-hero-stats.mjs')
const fixturePath = join(projectRoot, 'tests/fixtures/hero-stats-fetch.mjs')
const temporaryRoots: string[] = []
const originalContent = 'export const githubStats = { old: true }\n'

afterEach(async () => {
  await Promise.all(
    temporaryRoots
      .splice(0)
      .map((path) => rm(path, { recursive: true, force: true })),
  )
})

async function runCommand(
  options: { mode?: string; token?: string; initialContent?: string } = {},
) {
  const root = await mkdtemp(join(tmpdir(), 'hero-stats-command-'))
  temporaryRoots.push(root)
  await mkdir(join(root, 'scripts'))
  await writeFile(
    join(root, 'scripts/update-hero-stats.mjs'),
    await readFile(scriptPath),
  )
  if (options.initialContent !== undefined) {
    await mkdir(join(root, 'src/data/hero'), { recursive: true })
    await writeFile(
      join(root, 'src/data/hero/githubStats.ts'),
      options.initialContent,
    )
  }

  const env: NodeJS.ProcessEnv = {
    ...process.env,
    GITHUB_LOGIN: 'test-user',
    HERO_STATS_FETCH_MODE: options.mode ?? 'success',
  }
  if (options.token === undefined) delete env.GH_PROFILE_TOKEN
  else env.GH_PROFILE_TOKEN = options.token

  const result = spawnSync(
    process.execPath,
    ['--import', fixturePath, join(root, 'scripts/update-hero-stats.mjs')],
    {
      env,
      encoding: 'utf8',
      timeout: 10_000,
    },
  )

  return { root, result }
}

describe('update-hero-stats command', () => {
  it('creates the expected stats file from a valid response', async () => {
    const { root, result } = await runCommand({ token: 'test-token' })
    const year = new Date().getUTCFullYear()

    expect(result.status).toBe(0)
    expect(
      await readFile(join(root, 'src/data/hero/githubStats.ts'), 'utf8'),
    ).toBe(
      `export const githubStats = {\n  commitContributions: 42,\n  contributionYear: ${year},\n} as const\n`,
    )
  })

  it('leaves an up-to-date file unchanged', async () => {
    const year = new Date().getUTCFullYear()
    const content = `export const githubStats = {\n  commitContributions: 42,\n  contributionYear: ${year},\n} as const\n`
    const { root, result } = await runCommand({
      token: 'test-token',
      initialContent: content,
    })

    expect(result.status).toBe(0)
    expect(result.stdout).toContain(
      `already up to date: 42 commit contributions for ${year}`,
    )
    expect(
      await readFile(join(root, 'src/data/hero/githubStats.ts'), 'utf8'),
    ).toBe(content)
  })

  it.each([
    ['HTTP error', 'http-error', 'GitHub GraphQL request failed'],
    ['GraphQL error', 'graphql-error', 'GitHub GraphQL returned errors'],
    [
      'invalid count',
      'invalid-count',
      'Invalid totalCommitContributions value',
    ],
    ['missing user', 'missing-user', 'Invalid totalCommitContributions value'],
  ])('preserves the existing file on %s', async (_label, mode, message) => {
    const { root, result } = await runCommand({
      mode,
      token: 'test-token',
      initialContent: originalContent,
    })

    expect(result.status).not.toBe(0)
    expect(result.stderr).toContain(message)
    expect(
      await readFile(join(root, 'src/data/hero/githubStats.ts'), 'utf8'),
    ).toBe(originalContent)
  })

  it('fails without a token and does not create or change the stats file', async () => {
    const { root, result } = await runCommand({
      initialContent: originalContent,
    })

    expect(result.status).not.toBe(0)
    expect(result.stderr).toContain('Missing GH_PROFILE_TOKEN')
    expect(
      await readFile(join(root, 'src/data/hero/githubStats.ts'), 'utf8'),
    ).toBe(originalContent)
  })
})
