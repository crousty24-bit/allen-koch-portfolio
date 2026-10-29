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

  it("presents Milady's Knight as a Godot game project", () => {
    const miladysKnight = projects.find(
      (project) => project.title === "Milady's Knight",
    )

    expect(miladysKnight).toMatchObject({
      category: 'game-dev',
      repositoryHref: 'https://github.com/crousty24-bit/Milady-s-Knight-godot',
      stack: ['Godot', 'GDScript', 'GPT-6 Astra'],
      status: { fr: 'Prototype', en: 'Prototype' },
    })
    expect(projects.some((project) => project.title === 'HabitFlower')).toBe(
      false,
    )
  })
})
