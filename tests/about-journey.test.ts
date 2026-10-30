import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'

import { AboutJourney } from '../src/components/AboutJourney/AboutJourney'
import { aboutJourneyItems } from '../src/data/about/about'
import type { Language } from '../src/data/i18n/i18n'

describe('about journey', () => {
  it.each([
    ['fr', 'Octobre 2025', 'Aujourd’hui'],
    ['en', 'October 2025', 'Today'],
  ] as const)('keeps the date range accessible in %s', (language: Language, start, end) => {
    const html = renderToStaticMarkup(createElement(AboutJourney, { language }))
    const bounds = html.match(
      /<div[^>]*class="about-journey__bounds"[^>]*>[\s\S]*?<\/div>/,
    )?.[0]
    expect(bounds).toBeDefined()
    expect(bounds).not.toContain('aria-hidden')
    expect(bounds).toContain(start)
    expect(bounds).toContain(end)
  })

  it('ends with the localized internship and freelance milestones', () => {
    expect(aboutJourneyItems).toHaveLength(12)
    expect(aboutJourneyItems.at(-2)).toMatchObject({
      id: 'thp-internship',
      dateLabel: {
        fr: 'Juillet–août 2026',
        en: 'July–August 2026',
      },
      title: {
        fr: 'Stage',
        en: 'Internship',
      },
    })
    expect(aboutJourneyItems.at(-1)).toMatchObject({
      id: 'freelance-start',
      dateLabel: {
        fr: 'Septembre 2026',
        en: 'September 2026',
      },
      title: {
        fr: 'Dev Web Freelance',
        en: 'Freelance Web Developer',
      },
      description: {
        fr: "Début d'activité",
        en: 'Start of freelance activity',
      },
    })
  })
})
