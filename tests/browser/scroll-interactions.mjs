import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import { preview } from 'vite'
import { launchChrome } from './chrome.mjs'

let server
let browser
let url
before(async () => {
  server = await preview({
    preview: { host: '127.0.0.1', port: 0, open: false },
  })
  url = `http://127.0.0.1:${server.httpServer.address().port}`
  browser = await launchChrome()
})
after(async () => {
  try {
    if (browser) {
      await browser.close()
      assert.deepEqual(browser.exceptions, [], 'No uncaught browser errors')
    }
  } finally {
    if (server)
      await new Promise((resolve, reject) =>
        server.httpServer.close((error) => (error ? reject(error) : resolve())),
      )
  }
})

test('SEO: project content exists before interaction and description follows language', async (t) => {
  const page = await browser.page()
  t.after(() => page.close())
  await page.open(url)
  const read = () =>
    page.evaluate(() => ({
      cards: document.querySelectorAll('.project-card').length,
      extra: document.querySelectorAll('.projects-grid .project-card').length,
      hidden: document.querySelector('.projects-grid').hidden,
      display: getComputedStyle(document.querySelector('.projects-grid'))
        .display,
      lang: document.documentElement.lang,
      title: document.title,
      description: document.querySelector('meta[name="description"]').content,
    }))
  const initial = await read()
  assert.equal(initial.cards, 10)
  assert.equal(initial.extra, 5)
  assert.equal(initial.hidden, true)
  assert.equal(initial.display, 'none')
  assert.equal(
    await page.evaluate(() => {
      const grid = document.querySelector('.projects-grid')
      grid.querySelector('a').focus()
      return grid.contains(document.activeElement)
    }),
    false,
  )
  assert.equal(initial.lang, 'fr')
  assert.match(initial.description, /^Portfolio d'Allen Koch/)
  for (const width of [390, 1440]) {
    await page.viewport(width)
    for (const expanded of [true, false]) {
      await page.evaluate(() =>
        document.querySelector('.projects-toggle').click(),
      )
      await page.waitFor(
        (expanded) =>
          document
            .querySelector('.projects-toggle')
            .getAttribute('aria-expanded') === String(expanded),
        expanded,
      )
      const state = await read()
      assert.equal(state.cards, 10)
      assert.equal(state.hidden, !expanded)
      assert.equal(state.display, expanded ? 'grid' : 'none')
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth,
        ),
        false,
      )
    }
  }
  await page.evaluate(() => document.querySelector('.language-toggle').click())
  await page.waitFor(() => document.documentElement.lang === 'en')
  const english = await read()
  assert.match(english.title, /Fullstack & AI Developer/)
  assert.match(english.description, /^Allen Koch’s portfolio/)
  assert.notEqual(english.description, initial.description)
  await page.open(url)
  assert.equal((await read()).description, english.description)
  await page.evaluate(() => document.querySelector('.language-toggle').click())
  await page.waitFor(() => document.documentElement.lang === 'fr')
  assert.equal((await read()).description, initial.description)
})

for (const width of [390, 1440]) {
  test(`section stack: reversible, anchors and height changes (${width}px)`, async (t) => {
    const page = await browser.page()
    t.after(() => page.close())
    await page.viewport(width)
    await page.open(url)
    await page.waitFor(() =>
      document.querySelector('main').classList.contains('section-stack'),
    )

    for (const id of ['services', 'projects', 'stack', 'about']) {
      const geometry = await page.evaluate((id) => {
        const section = document.getElementById(id)
        let start = 0
        for (const sibling of section.parentElement.children) {
          if (sibling === section) break
          start += sibling.offsetHeight
        }
        const top = parseFloat(
          section.style.getPropertyValue('--section-pin-top'),
        )
        return {
          scroll: start - top,
          distance: top + section.offsetHeight - 80,
        }
      }, id)
      for (const fraction of [0, 0.5, 1, 0]) {
        await page.evaluate(
          (y) => scrollTo({ top: y, behavior: 'instant' }),
          geometry.scroll + geometry.distance * fraction,
        )
        await page.waitFor(
          (id, fraction) =>
            Math.abs(
              Number(getComputedStyle(document.getElementById(id)).opacity) -
                (1 - fraction),
            ) < 0.015,
          id,
          fraction,
        )
        const state = await page.evaluate((id) => {
          const style = getComputedStyle(document.getElementById(id))
          return {
            position: style.position,
            scale: new DOMMatrix(style.transform).a,
            pointerEvents: style.pointerEvents,
          }
        }, id)
        assert.equal(state.position, fraction === 1 ? 'relative' : 'sticky')
        assert.ok(
          Math.abs(state.scale - (fraction === 1 ? 1 : 1 - fraction * 0.05)) <
            0.002,
        )
        if (fraction === 1) assert.equal(state.pointerEvents, 'none')
        assert.equal(
          await page.evaluate(
            () => document.documentElement.scrollWidth > innerWidth,
          ),
          false,
        )
      }
    }

    for (const id of ['contact', 'services', 'projects']) {
      await page.evaluate((id) => {
        if (innerWidth <= 760) document.querySelector('.menu-toggle').click()
        document.querySelector(`.navbar__links a[href="#${id}"]`).click()
      }, id)
      await page.waitFor(async (id) => {
        const section = document.getElementById(id)
        if (Math.abs(section.getBoundingClientRect().top - 80) >= 2)
          return false
        const y = scrollY
        await new Promise((resolve) => setTimeout(resolve, 100))
        return (
          scrollY === y &&
          Math.abs(section.getBoundingClientRect().top - 80) < 2 &&
          getComputedStyle(section).opacity === '1'
        )
      }, id)
    }

    const pin = () =>
      page.evaluate(() =>
        document
          .getElementById('projects')
          .style.getPropertyValue('--section-pin-top'),
      )
    const toggleTop = () =>
      page.evaluate(
        () =>
          document.querySelector('.projects-toggle').getBoundingClientRect()
            .top,
      )
    const before = await pin()
    const closedTop = await toggleTop()
    await page.evaluate(() =>
      document.querySelector('.projects-toggle').click(),
    )
    await page.waitFor(
      (before) =>
        document
          .getElementById('projects')
          .style.getPropertyValue('--section-pin-top') !== before,
      before,
    )
    assert.equal(await toggleTop(), closedTop)
    assert.equal(
      await page.evaluate(() =>
        document
          .querySelector('.projects-toggle')
          .getAttribute('aria-expanded'),
      ),
      'true',
    )
    await page.evaluate(() =>
      document.querySelector('.projects-toggle').click(),
    )
    await page.waitFor(
      (before) =>
        document
          .getElementById('projects')
          .style.getPropertyValue('--section-pin-top') === before,
      before,
    )

    await page.motion('reduce')
    await page.waitFor(() =>
      [...document.querySelectorAll('main > .section')].every((el) => {
        const style = getComputedStyle(el)
        return (
          style.position === 'relative' &&
          style.opacity === '1' &&
          style.transform === 'none'
        )
      }),
    )
  })
}

test('contact form reports provider results and keeps failed input', async (t) => {
  const page = await browser.page()
  t.after(() => page.close())
  await page.command('Page.addScriptToEvaluateOnNewDocument', {
    source: `
      window.contactCalls = [];
      window.contactMode = 'pending';
      const originalFetch = window.fetch.bind(window);
      window.fetch = (url, options) => {
        if (url !== 'https://api.web3forms.com/submit')
          return originalFetch(url, options);
        window.contactCalls.push(Object.fromEntries(options.body));
        return new Promise((resolve) => {
          window.finishContact = (success) => resolve(new Response(
            JSON.stringify({ success, message: '<img src=x onerror=window.__injected=1>' }),
            { status: success ? 200 : 400, headers: { 'Content-Type': 'application/json' } },
          ));
        });
      };
    `,
  })
  await page.open(url)
  const configured = await page.evaluate(() =>
    Boolean(document.querySelector('.contact-panel__form')),
  )
  if (!configured) {
    t.skip('Build has no public Web3Forms key')
    return
  }

  assert.equal(
    await page.evaluate(() =>
      Boolean(document.querySelector('iframe[src*="hcaptcha"]')),
    ),
    false,
  )
  assert.equal(
    await page.evaluate(() =>
      performance
        .getEntriesByType('resource')
        .some((entry) => /hcaptcha\.com/.test(entry.name)),
    ),
    false,
  )
  const solveCaptcha = async () => {
    await page.waitFor(() =>
      Boolean(
        window.hcaptcha?.getResponse &&
          document.querySelector('iframe[title*="hCaptcha"]'),
      ),
    )
    await page.evaluate(() => {
      if (!window.contactCaptchaMocked) {
        const reset = window.hcaptcha.reset.bind(window.hcaptcha)
        window.hcaptcha.reset = (...args) => {
          window.contactCaptchaToken = ''
          return reset(...args)
        }
        window.hcaptcha.getResponse = () => window.contactCaptchaToken || ''
        window.contactCaptchaMocked = true
      }
      window.contactCaptchaToken = 'ci-test-token'
    })
  }

  const injectionProbe = '<img src=x onerror=window.__injected=1>'
  await page.evaluate((injectionProbe) => {
    const form = document.querySelector('.contact-panel__form')
    form.elements.namedItem('email').value = 'visitor@example.com'
    form.elements.namedItem('message').value = injectionProbe
    form.requestSubmit()
    form.requestSubmit()
  }, injectionProbe)
  assert.equal(await page.evaluate(() => window.contactCalls.length), 0)
  assert.equal(
    await page.evaluate(() =>
      document
        .querySelector('.contact-panel__status')
        .textContent.includes('contrôle anti-spam'),
    ),
    true,
  )
  await page.evaluate(() =>
    document.querySelector('.contact-panel__captcha-choice').click(),
  )
  await solveCaptcha()
  await page.evaluate(() => {
    const render = window.hcaptcha.render.bind(window.hcaptcha)
    window.hcaptcha.render = (container, options) => {
      window.failContactCaptcha = options['error-callback']
      window.verifyContactCaptcha = options.callback
      return render(container, options)
    }
    document.querySelector('.language-toggle').click()
  })
  await page.waitFor(() => typeof window.failContactCaptcha === 'function')
  await page.evaluate(() => window.failContactCaptcha('network-error'))
  await page.waitFor(() =>
    Boolean(document.querySelector('.contact-panel__captcha-error')),
  )
  assert.equal(await page.evaluate(() => window.contactCalls.length), 0)
  assert.equal(
    await page.evaluate(() => document.querySelector('#contact-message').value),
    injectionProbe,
  )
  assert.equal(
    await page.evaluate(() =>
      document
        .querySelector('.contact-panel__form')
        .textContent.includes('Sending failed'),
    ),
    false,
  )
  await page.evaluate(() =>
    document.querySelector('.contact-panel__captcha-error button').click(),
  )
  await page.waitFor(
    () => !document.querySelector('.contact-panel__captcha-error'),
  )
  await solveCaptcha()
  await page.evaluate(() => window.failContactCaptcha('challenge-error'))
  await page.waitFor(() =>
    Boolean(document.querySelector('.contact-panel__captcha-error')),
  )
  await page.evaluate(() => window.verifyContactCaptcha('ci-test-token'))
  await page.waitFor(
    () => !document.querySelector('.contact-panel__captcha-error'),
  )
  await page.evaluate(() => document.querySelector('.language-toggle').click())
  await solveCaptcha()
  await page.evaluate(() => {
    const form = document.querySelector('.contact-panel__form')
    form.requestSubmit()
    form.requestSubmit()
  })
  await page.waitFor(() => window.contactCalls.length === 1)
  assert.equal(
    await page.evaluate(
      () =>
        document.querySelector('.contact-panel__form button[type="submit"]')
          .disabled,
    ),
    true,
  )
  assert.equal(
    await page.evaluate(() => window.contactCalls[0].message),
    injectionProbe,
  )
  assert.deepEqual(
    await page.evaluate(() => Object.keys(window.contactCalls[0]).sort()),
    ['access_key', 'email', 'h-captcha-response', 'message', 'name'],
  )
  assert.equal(
    await page.evaluate(() =>
      Boolean(window.contactCalls[0]['h-captcha-response']),
    ),
    true,
  )
  assert.equal(
    await page.evaluate(() => Boolean(window.contactCalls[0].access_key)),
    true,
  )
  await page.evaluate(() => window.finishContact(false))
  await page.waitFor(
    () =>
      document.querySelector('.contact-panel__status').getAttribute('role') ===
      'alert',
  )
  assert.equal(
    await page.evaluate(() => document.querySelector('#contact-message').value),
    injectionProbe,
  )
  assert.equal(
    await page.evaluate(() =>
      Boolean(
        window.__injected ||
          document.querySelector('.contact-panel__status img'),
      ),
    ),
    false,
  )

  await solveCaptcha()
  await page.evaluate(() =>
    document.querySelector('.contact-panel__form').requestSubmit(),
  )
  await page.waitFor(() => window.contactCalls.length === 2)
  await page.evaluate(() => window.finishContact(true))
  await page.waitFor(() =>
    document
      .querySelector('.contact-panel__confirmation')
      ?.textContent.includes('transmis'),
  )
  assert.equal(
    await page.evaluate(
      () =>
        document.activeElement ===
        document.querySelector('.contact-panel__confirmation h4'),
    ),
    true,
  )
  assert.equal(
    await page.evaluate(() =>
      Boolean(document.querySelector('#contact-message')),
    ),
    false,
  )
  assert.equal(
    await page.evaluate(() =>
      document
        .querySelector('.contact-panel__confirmation a')
        .getAttribute('href'),
    ),
    '#projects',
  )
  for (const width of [390, 1440]) {
    await page.viewport(width)
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
    )
  }
  await page.evaluate(() =>
    document.querySelector('.contact-panel__confirmation button').click(),
  )
  await page.waitFor(() => document.activeElement?.id === 'contact-name')
  assert.equal(
    await page.evaluate(() => document.querySelector('#contact-message').value),
    '',
  )
  assert.equal(await page.evaluate(() => Boolean(window.__injected)), false)
  await page.evaluate(() => {
    document.querySelector('.icon-toggle').click()
    document.querySelector('.language-toggle').click()
  })
  await page.waitFor(() => {
    const frame = document.querySelector('iframe[title*="hCaptcha"]')
    return frame?.src.includes('hl=en') && frame.src.includes('theme=dark')
  })
  assert.equal(
    await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    ),
    false,
  )
  await page.evaluate(() =>
    document.querySelector('.contact-panel__captcha-choice').click(),
  )
  await page.waitFor(
    () =>
      document.readyState === 'complete' &&
      Boolean(document.querySelector('.contact-panel__captcha-choice')) &&
      !document.querySelector('iframe[src*="hcaptcha"]'),
  )
  assert.equal(
    await page.evaluate(() =>
      performance
        .getEntriesByType('resource')
        .some((entry) => /hcaptcha\.com/.test(entry.name)),
    ),
    false,
  )
  assert.deepEqual(
    await page.evaluate(() => Object.keys(localStorage).sort()),
    ['language', 'theme'],
  )
})

for (const width of [390, 1440]) {
  test(`project category shortcuts reach every group (${width}px)`, async (t) => {
    const page = await browser.page()
    t.after(() => page.close())
    await page.viewport(width)
    await page.open(url)
    await page.waitFor(() =>
      document.querySelector('main').classList.contains('section-stack'),
    )

    await page.evaluate(() =>
      document
        .getElementById('personal-projects')
        .scrollIntoView({ behavior: 'instant' }),
    )

    for (const [from, to] of [
      ['personal', 'game-dev'],
      ['game-dev', 'client'],
      ['client', 'personal'],
      ['personal', 'client'],
      ['client', 'game-dev'],
      ['game-dev', 'personal'],
    ]) {
      await page.evaluate(
        (from) =>
          document.querySelector(`#${from}-projects-title button`).click(),
        from,
      )
      await page.waitFor(
        (from, to) => {
          const link = document.querySelector(
            `#${from}-projects a[href="#${to}-projects"]`,
          )
          const box = link.getBoundingClientRect()
          // Hit-testing proves the sticky index and the cards stay underneath.
          return (
            box.height > 0 &&
            document.elementFromPoint(box.x + 8, box.y + box.height / 2) ===
              link
          )
        },
        from,
        to,
      )
      await page.evaluate(
        (from, to) =>
          document
            .querySelector(`#${from}-projects a[href="#${to}-projects"]`)
            .click(),
        from,
        to,
      )
      await page.waitFor(async (to) => {
        const group = document.getElementById(`${to}-projects`)
        const top = () => group.getBoundingClientRect().top
        if (Math.abs(top() - 80) >= 2) return false
        const y = scrollY
        await new Promise((resolve) => setTimeout(resolve, 100))
        return (
          scrollY === y &&
          Math.abs(top() - 80) < 2 &&
          getComputedStyle(document.getElementById('projects')).opacity === '1'
        )
      }, to)
      assert.equal(
        await page.evaluate(
          (from) => document.getElementById(`${from}-projects-menu`).hidden,
          from,
        ),
        true,
      )
    }
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
    )

    const toggle = () =>
      page.evaluate(() =>
        document.querySelector('#personal-projects-title button').click(),
      )
    const menuHidden = () =>
      document.getElementById('personal-projects-menu').hidden
    await toggle()
    await page.waitFor(
      () => !document.getElementById('personal-projects-menu').hidden,
    )
    await page.evaluate(() =>
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })),
    )
    await page.waitFor(menuHidden)
    assert.equal(
      await page.evaluate(() => document.activeElement.textContent),
      await page.evaluate(
        () =>
          document.querySelector('#personal-projects-title button').textContent,
      ),
    )
    await toggle()
    await page.waitFor(
      () => !document.getElementById('personal-projects-menu').hidden,
    )
    await page.evaluate(() =>
      document.body.dispatchEvent(
        new PointerEvent('pointerdown', { bubbles: true }),
      ),
    )
    await page.waitFor(menuHidden)
  })
}

test('section stack: no motion or ResizeObserver keeps content visible', async (t) => {
  for (const fallback of ['reduce', 'observer']) {
    await t.test(fallback, async (t) => {
      const page = await browser.page()
      t.after(() => page.close())
      await page.viewport(1440)
      if (fallback === 'reduce') await page.motion('reduce')
      else
        await page.command('Page.addScriptToEvaluateOnNewDocument', {
          source: 'delete window.ResizeObserver',
        })
      await page.open(url)
      assert.equal(
        await page.evaluate(() =>
          document.querySelector('main').classList.contains('section-stack'),
        ),
        false,
      )
      assert.equal(
        await page.evaluate(() =>
          [...document.querySelectorAll('main > .section')].every(
            (el) => getComputedStyle(el).opacity === '1',
          ),
        ),
        true,
      )
    })
  }
})

for (const width of [760, 761, 1040, 1041, 1440]) {
  test(`project index: responsive and reversible (${width}px)`, async (t) => {
    const page = await browser.page()
    t.after(() => page.close())
    await page.viewport(width)
    await page.open(`${url}/#projects`)
    const displays = await page.evaluate(() => ({
      shared: getComputedStyle(
        document.querySelector('.projects-features__index'),
      ).display,
      individual: getComputedStyle(
        document.querySelector('.project-card--feature .project-card__index'),
      ).display,
    }))
    if (width <= 760) {
      assert.equal(displays.shared, 'none')
      assert.notEqual(displays.individual, 'none')
    } else {
      assert.notEqual(displays.shared, 'none')
      assert.equal(displays.individual, 'none')
      assert.equal(
        await page.evaluate(
          () =>
            getComputedStyle(
              document.querySelector('.projects-features__index'),
            ).fontSize,
        ),
        width <= 1040 ? '72px' : '192px',
      )
      assert.notEqual(
        await page.evaluate(
          () =>
            getComputedStyle(
              document.querySelector('.projects-features__track'),
            ).transitionDuration,
        ),
        '0s',
      )
      for (const index of [0, 1, 2, 0]) {
        await page.evaluate((index) => {
          const card = document.querySelectorAll('.project-card--feature')[
            index
          ]
          scrollTo({
            top:
              card.getBoundingClientRect().top +
              scrollY -
              innerHeight * 0.2 +
              2,
            behavior: 'instant',
          })
        }, index)
        await page.waitFor(
          (index) =>
            document.querySelector('.projects-features__track').style
              .transform === `translateY(${-index}em)`,
          index,
        )
        await page.waitFor((index) => {
          const track = document.querySelector('.projects-features__track')
          const y = new DOMMatrix(getComputedStyle(track).transform).m42
          return (
            Math.abs(y + index * parseFloat(getComputedStyle(track).fontSize)) <
            1
          )
        }, index)
        if (index > 0)
          assert.ok(
            await page.evaluate(
              () =>
                Math.abs(
                  document
                    .querySelector('.projects-features__index')
                    .getBoundingClientRect().top - 96,
                ) < 2,
            ),
          )
      }
      assert.ok(
        await page.evaluate(() => {
          const index = document.querySelector('.projects-features__index')
          const end = Math.max(
            ...[...index.children].map(
              (el) => el.getBoundingClientRect().right,
            ),
          )
          return (
            end <=
            document
              .querySelector('.projects-features__cards')
              .getBoundingClientRect().left
          )
        }),
        'The index must not overlap the project cards',
      )
    }
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
    )
    await page.motion('reduce')
    await page.waitFor(
      () =>
        getComputedStyle(document.querySelector('.projects-features__track'))
          .transitionDuration === '0s',
    )
  })
}

test('project index: no internal crop while resizing the viewport', async (t) => {
  const page = await browser.page()
  t.after(() => page.close())
  await page.motion('reduce')
  await page.open(`${url}/#projects`)
  for (const [width, height] of [
    [1440, 900],
    [1280, 720],
    [1100, 600],
    [1041, 300],
    [1040, 600],
    [761, 300],
    [760, 600],
    [390, 844],
    [320, 568],
    [1440, 300],
  ]) {
    await page.viewport(width, height)
    await page.evaluate(
      () =>
        new Promise((resolve) =>
          requestAnimationFrame(() => requestAnimationFrame(resolve)),
        ),
    )
    const geometry = await page.evaluate(() => {
      const index = document.querySelector('.projects-features__index')
      const window = index.querySelector('.projects-features__window')
      const number = index.querySelector('.projects-features__number')
      const range = document.createRange()
      range.selectNodeContents(number)
      return {
        shared: getComputedStyle(index).display !== 'none',
        textWidth: range.getBoundingClientRect().width,
        windowWidth: window.getBoundingClientRect().width,
        end: Math.max(
          ...[...index.children].map((el) => el.getBoundingClientRect().right),
        ),
        cardsLeft: document
          .querySelector('.projects-features__cards')
          .getBoundingClientRect().left,
        overflow: document.documentElement.scrollWidth > innerWidth,
        overflowingElements:
          document.documentElement.scrollWidth > innerWidth
            ? [...document.querySelectorAll('body *')]
                .filter((el) => el.getBoundingClientRect().right > innerWidth)
                .slice(0, 20)
                .map((el) => ({
                  tag: el.tagName,
                  class: el.className,
                  right: el.getBoundingClientRect().right,
                }))
            : [],
      }
    })
    if (geometry.shared) {
      assert.ok(
        geometry.textWidth <= geometry.windowWidth + 1,
        `${width}×${height}: digits must fit inside the animation window: ${JSON.stringify(geometry)}`,
      )
      assert.ok(
        geometry.end <= geometry.cardsLeft,
        `${width}×${height}: index must not overlap cards`,
      )
    }
    assert.equal(
      geometry.overflow,
      false,
      `${width}×${height}: no page overflow: ${JSON.stringify(geometry)}`,
    )
  }
})

for (const width of [390, 1440]) {
  test(`timeline: rapid clicks, reverse, keyboard and reduced motion (${width}px)`, async (t) => {
    const page = await browser.page()
    t.after(() => page.close())
    await page.viewport(width)
    await page.open(`${url}/#about`)
    await page.evaluate(() =>
      document.querySelectorAll('.about-journey__arrow')[1].click(),
    )
    await page.waitFor(() =>
      document
        .querySelector('.about-journey__list')
        .hasAttribute('data-moving'),
    )
    await page.waitFor(
      () =>
        Number(
          document
            .querySelector('.about-journey__list')
            .style.getPropertyValue('--journey-edge'),
        ) < 0.99,
    )
    assert.notEqual(
      await page.evaluate(
        () =>
          getComputedStyle(document.querySelector('.about-journey__list'))
            .maskImage,
      ),
      'none',
    )
    await page.evaluate(() =>
      document.querySelectorAll('.about-journey__arrow')[1].click(),
    )
    await page.waitFor(
      () =>
        !document
          .querySelector('.about-journey__list')
          .hasAttribute('data-moving'),
    )
    const moved = await page.evaluate(
      () => document.querySelector('.about-journey__list').scrollLeft,
    )
    assert.ok(moved > 0)
    assert.equal(
      await page.evaluate(() =>
        document
          .querySelector('.about-journey__list')
          .style.getPropertyValue('--journey-edge'),
      ),
      '',
    )
    assert.equal(
      await page.evaluate(
        () =>
          getComputedStyle(document.querySelector('.about-journey__list'))
            .maskImage,
      ),
      'none',
    )
    await page.evaluate(() =>
      document.querySelectorAll('.about-journey__arrow')[0].click(),
    )
    await page.waitFor((moved) => {
      const rail = document.querySelector('.about-journey__list')
      return rail.scrollLeft < moved && !rail.hasAttribute('data-moving')
    }, moved)

    await page.evaluate(() =>
      document.querySelector('.about-journey__list').focus(),
    )
    const left = await page.evaluate(
      () => document.querySelector('.about-journey__list').scrollLeft,
    )
    await page.command('Input.dispatchKeyEvent', {
      type: 'keyDown',
      key: 'ArrowRight',
      code: 'ArrowRight',
      windowsVirtualKeyCode: 39,
    })
    await page.command('Input.dispatchKeyEvent', {
      type: 'keyUp',
      key: 'ArrowRight',
      code: 'ArrowRight',
      windowsVirtualKeyCode: 39,
    })
    await page.waitFor(
      (left) =>
        document.querySelector('.about-journey__list').scrollLeft > left,
      left,
    )
    assert.equal(
      await page.evaluate(() =>
        document
          .querySelector('.about-journey__list')
          .hasAttribute('data-moving'),
      ),
      false,
    )

    await page.evaluate(() =>
      document.querySelectorAll('.about-journey__arrow')[1].click(),
    )
    await page.motion('reduce')
    await page.waitFor(
      () =>
        getComputedStyle(document.querySelector('.about-journey__list'))
          .maskImage === 'none',
    )
    await page.waitFor(
      () =>
        !document
          .querySelector('.about-journey__list')
          .hasAttribute('data-moving'),
    )
    await page.evaluate(() =>
      document.querySelectorAll('.about-journey__arrow')[0].click(),
    )
    assert.equal(
      await page.evaluate(() =>
        document
          .querySelector('.about-journey__list')
          .hasAttribute('data-moving'),
      ),
      false,
    )
    assert.equal(
      await page.evaluate(
        () =>
          getComputedStyle(document.querySelector('.about-journey__list'))
            .scrollBehavior,
      ),
      'auto',
    )
  })
}

for (const width of [320, 1440]) {
  test(`legal pages are readable, noindexed and link home (${width}px)`, async (t) => {
    const page = await browser.page()
    t.after(() => page.close())
    await page.viewport(width)
    for (const language of ['fr', 'en']) {
      await page.open(url)
      await page.evaluate((language) => {
        localStorage.setItem('language', language)
        localStorage.setItem('theme', language === 'fr' ? 'light' : 'dark')
      }, language)
      for (const [path, titleId] of [
        ['/mentions-legales', 'legal-title'],
        ['/confidentialite', 'privacy-title'],
      ]) {
        // page.open waits for home-only content.
        await page.command('Page.navigate', { url: `${url}${path}` })
        await page.waitFor(
          ({ language, titleId }) =>
            document.documentElement.lang === language &&
            document.getElementById(titleId) &&
            !document.querySelector('link[rel="canonical"]'),
          { language, titleId },
        )
        const state = await page.evaluate(() => ({
          robots: document.head.querySelector('meta[name="robots"]')?.content,
          overflow: document.documentElement.scrollWidth > innerWidth,
          titleBelowHeader:
            document.querySelector('h1').getBoundingClientRect().top >=
            document.querySelector('.site-header').getBoundingClientRect()
              .bottom,
          titleMatchesTab: document.title.startsWith(
            document.querySelector('h1').textContent,
          ),
          home: document.querySelector('.navbar__links a').getAttribute('href'),
          current: document.querySelectorAll('[aria-current]').length,
          stacked: document
            .querySelector('main')
            .classList.contains('section-stack'),
          contact: Boolean(document.getElementById('contact')),
        }))
        assert.deepEqual(state, {
          robots: 'noindex',
          overflow: false,
          titleBelowHeader: true,
          titleMatchesTab: true,
          home: '/#home',
          current: 0,
          stacked: false,
          contact: false,
        })
      }
      await page.evaluate(() =>
        document.querySelector('.navbar__links a[href="/#services"]').click(),
      )
      await page.waitFor(() =>
        document.querySelector('main')?.classList.contains('section-stack'),
      )
      assert.equal(
        await page.evaluate(() => location.pathname + location.hash),
        '/#services',
      )
    }
  })
}
