import type { Language } from '../i18n/i18n'
import { isProjectPublished, projects } from '../projects/projects'
import { githubStats } from './githubStats'

export type HeroStatId = 'profile' | 'contributions' | 'projects'

export type NumericHeroStat = {
  id: Exclude<HeroStatId, 'profile'>
  prefix: string
  value: number
}

export type TextHeroStat = {
  id: 'profile'
  value: Record<Language, string>
}

export type HeroStat = NumericHeroStat | TextHeroStat

export const heroStats: HeroStat[] = [
  {
    id: 'profile',
    value: {
      fr: 'Développeur Fullstack & IA',
      en: 'Fullstack & AI Developer',
    },
  },
  {
    id: 'contributions',
    prefix: '+',
    value: githubStats.commitContributions,
  },
  {
    id: 'projects',
    prefix: '',
    value: projects.filter(isProjectPublished).length,
  },
]
