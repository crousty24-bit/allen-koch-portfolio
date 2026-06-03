import { describe, expect, it } from 'vitest'

import { heroStats } from '../src/data/hero/heroStats'
import { copy, type Language } from '../src/data/i18n/i18n'
import { projects } from '../src/data/projects/projects'

describe('hero stats', () => {
  it('derives the project stat from the projects data source', () => {
    const projectStat = heroStats.find((stat) => stat.id === 'projects')

    expect(projectStat?.value).toBe(projects.length)
  })

  it('has localized labels for every hero stat', () => {
    const languages: Language[] = ['fr', 'en']

    for (const language of languages) {
      for (const stat of heroStats) {
        expect(copy[language].hero.statLabels[stat.id]).toBeTruthy()
      }
    }
  })
})
