import { describe, expect, it } from 'vitest'

import { githubStats } from '../src/data/hero/githubStats'
import { heroStats } from '../src/data/hero/heroStats'
import { copy, type Language } from '../src/data/i18n/i18n'
import { isProjectPublished, projects } from '../src/data/projects/projects'

describe('hero stats', () => {
  it('derives the project stat from the projects data source', () => {
    const projectStat = heroStats.find((stat) => stat.id === 'projects')

    expect(projectStat?.value).toBe(projects.filter(isProjectPublished).length)
  })

  it('uses the generated GitHub contribution total with explicit labels', () => {
    expect(heroStats.find((stat) => stat.id === 'contributions')?.value).toBe(
      githubStats.totalContributions,
    )
    expect(copy.fr.hero.statLabels.contributions).toBe('contributions GitHub')
    expect(copy.en.hero.statLabels.contributions).toBe('GitHub contributions')
  })

  it('has localized labels for every hero stat', () => {
    const languages: Language[] = ['fr', 'en']

    for (const language of languages) {
      for (const stat of heroStats) {
        expect(copy[language].hero.statLabels[stat.id]).toBeTruthy()
        if (stat.id === 'profile') {
          expect(copy[language].hero.role).toContain(stat.value[language])
          expect(copy[language].footer.brand).toContain(stat.value[language])
          expect(copy[language].hero.title).toContain(stat.value[language])
        }
      }
    }
  })
})
