import { describe, expect, it } from 'vitest'

import { isProjectPublished, projects } from '../src/data/projects/projects'

describe('projects data', () => {
  it('keeps eight personal projects, one approved client project and one game', () => {
    expect(projects).toHaveLength(10)
    expect(
      projects.filter((project) => project.category === 'personal'),
    ).toHaveLength(8)
    expect(
      projects
        .filter((project) => project.category === 'game-dev')
        .map((project) => project.title),
    ).toEqual(["Milady's Knight"])
    expect(
      projects.filter((project) => project.category === 'client'),
    ).toHaveLength(1)
    expect(projects.filter(isProjectPublished)).toHaveLength(10)
  })

  it('publishes SEOS as an internship client project without a GitHub link', () => {
    const seos = projects.find((project) => project.title.startsWith('SEOS -'))
    expect(seos).toMatchObject({
      category: 'client',
      href: 'https://seos-exemple.thehackingproject.org/',
      stack: ['Rails', 'PostgreSQL'],
      status: {
        fr: 'Stage · première expérience client',
        en: 'Internship · first client project',
      },
      client: {
        name: 'Seos',
        role: { fr: 'Développeur fullstack', en: 'Full-stack developer' },
        publicationApproved: true,
      },
    })
    expect(seos?.repositoryHref).toBeUndefined()
  })
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
      status: { fr: 'MVP (contributeur)', en: 'MVP (contributor)' },
      repositoryHref: 'https://github.com/Naethr/SnipStack/tree/develop',
    })
    expect(snipStack.href).toBeUndefined()
    expect(projects.slice(0, 3).map((project) => project.title)).toEqual([
      'Diff Impact Analyzer',
      'SnipStack',
      'Code Quality Guardian',
    ])
    expect(projects.slice(3, 8).map((project) => project.title)).toEqual([
      'Sokwak AI',
      'Portfolio AK',
      'Questonaut',
      'Mission Control',
      'Kane',
    ])
    expect(projects[3].status).toEqual({
      fr: 'MVP (contributeur)',
      en: 'MVP (contributor)',
    })
    for (const project of [snipStack, projects[3]]) {
      expect(project.description.fr).toContain('Projet collaboratif.')
      expect(project.description.en).toContain('Collaborative project.')
    }
  })

  it("presents Milady's Knight as a Godot game project", () => {
    const miladysKnight = projects.find(
      (project) => project.title === "Milady's Knight",
    )

    expect(miladysKnight).toMatchObject({
      category: 'game-dev',
      stack: ['Godot', 'GDScript', 'demo-beta'],
      status: { fr: 'en développement', en: 'In development' },
    })
    expect(miladysKnight?.repositoryHref).toBeUndefined()
    expect(projects.some((project) => project.title === 'HabitFlower')).toBe(
      false,
    )
  })
})
