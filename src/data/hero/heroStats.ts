import { projects } from '../projects/projects'
import { githubStats } from './githubStats'

export type HeroStatId = 'profile' | 'contributions' | 'projects'

export type NumericHeroStat = {
  id: Exclude<HeroStatId, 'profile'>
  prefix: string
  value: number
}

export type TextHeroStat = {
  id: 'profile'
  value: string
}

export type HeroStat = NumericHeroStat | TextHeroStat

export const heroStats: HeroStat[] = [
  {
    id: 'profile',
    value: 'Fullstack Developer / AI Builder',
  },
  {
    id: 'contributions',
    prefix: '+',
    value: githubStats.commitContributions,
  },
  {
    id: 'projects',
    prefix: '',
    value: projects.length,
  },
]
