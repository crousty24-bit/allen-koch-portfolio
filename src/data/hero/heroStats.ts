import { projects } from '../projects/projects'
import { githubStats } from './githubStats'

export type HeroStatId = 'contributions' | 'projects'

export type HeroStat = {
  id: HeroStatId
  prefix: string
  value: number
}

export const heroStats: HeroStat[] = [
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
