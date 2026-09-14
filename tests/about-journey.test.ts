import { describe, expect, it } from 'vitest'

import {
  aboutJourneyItems,
  getCollapsedJourneyItemCount,
} from '../src/data/about/about'

describe('about journey', () => {
  it('ends with the localized internship and freelance milestones', () => {
    expect(aboutJourneyItems).toHaveLength(12)
    expect(aboutJourneyItems.at(-2)).toMatchObject({
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
    expect(aboutJourneyItems.at(-1)).toMatchObject({
      id: 'freelance-start',
      icon: 'fullstack',
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

  it('shows a scalable first half when collapsed', () => {
    expect(getCollapsedJourneyItemCount(10)).toBe(5)
    expect(getCollapsedJourneyItemCount(11)).toBe(6)
    expect(getCollapsedJourneyItemCount(12)).toBe(6)
    expect(getCollapsedJourneyItemCount(aboutJourneyItems.length)).toBe(6)
  })
})
