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
    const before = await pin()
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
            JSON.stringify({ success }),
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

  await page.evaluate(() => {
    const form = document.querySelector('.contact-panel__form')
    form.elements.namedItem('email').value = 'visitor@example.com'
    form.elements.namedItem('message').value = 'A project enquiry'
    form.requestSubmit()
    form.requestSubmit()
  })
  await page.waitFor(() => window.contactCalls.length === 1)
  assert.equal(
    await page.evaluate(
      () => document.querySelector('.contact-panel__form button').disabled,
    ),
    true,
  )
  assert.equal(
    await page.evaluate(() => window.contactCalls[0].message),
    'A project enquiry',
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
    'A project enquiry',
  )

  await page.evaluate(() =>
    document.querySelector('.contact-panel__form').requestSubmit(),
  )
  await page.waitFor(() => window.contactCalls.length === 2)
  await page.evaluate(() => window.finishContact(true))
  await page.waitFor(() =>
    document
      .querySelector('.contact-panel__status')
      .textContent.includes('transmise'),
  )
  assert.equal(
    await page.evaluate(() => document.querySelector('#contact-message').value),
    '',
  )
})

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
