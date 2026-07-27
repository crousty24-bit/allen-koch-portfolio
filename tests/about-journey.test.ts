import { describe, expect, it } from 'vitest'

import {
  aboutJourneyItems,
  getCollapsedJourneyItemCount,
} from '../src/data/about/about'

describe('about journey', () => {
  it('adds the localized THP internship after Dev 1.0', () => {
    expect(aboutJourneyItems.at(-2)?.title).toEqual({
      fr: 'Dev 1.0',
      en: 'Dev 1.0',
    })
    expect(aboutJourneyItems.at(-1)).toMatchObject({
      id: 'thp-internship',
      icon: 'thp',
      dateLabel: {
        fr: 'Juillet–août 2026',
        en: 'July–August 2026',
      },
      title: {
        fr: 'Stage',
        en: 'Internship',
      },
    })
  })

  it('shows a scalable first half when collapsed', () => {
    expect(getCollapsedJourneyItemCount(10)).toBe(5)
    expect(getCollapsedJourneyItemCount(11)).toBe(6)
    expect(getCollapsedJourneyItemCount(12)).toBe(6)
    expect(getCollapsedJourneyItemCount(aboutJourneyItems.length)).toBe(6)
  })
})
