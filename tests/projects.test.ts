import { describe, expect, it } from 'vitest'

import { projects } from '../src/data/projects/projects'

describe('projects data', () => {
  it('places the new MVP projects first with their verified links', () => {
    const [diffImpactAnalyzer, snipStack] = projects

    expect(diffImpactAnalyzer).toMatchObject({
      title: 'Diff Impact Analyzer',
      status: { fr: 'MVP', en: 'MVP' },
      repositoryHref: 'https://github.com/crousty24-bit/diff-impact-analyzer',
      href: 'https://diff-impact-analyzer.vercel.app/',
    })
    expect(snipStack).toMatchObject({
      title: 'SnipStack',
      status: { fr: 'MVP', en: 'MVP' },
      repositoryHref: 'https://github.com/Naethr/SnipStack/tree/develop',
    })
    expect(snipStack.href).toBeUndefined()
    expect(projects.slice(0, 3).map((project) => project.title)).toEqual([
      'Diff Impact Analyzer',
      'SnipStack',
      'Code Quality Guardian',
    ])
  })
})
