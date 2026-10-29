import { existsSync, readFileSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { aboutAccordionItems, aboutJourneyItems } from '../src/data/about/about'
import { copy, type Language } from '../src/data/i18n/i18n'
import { links } from '../src/data/links/links'
import { projects } from '../src/data/projects/projects'
import { services } from '../src/data/services/services'
import { type SkillTreeNode, skillsTree } from '../src/data/skills/skills'
import { stack } from '../src/data/stack/stack'

const languages: Language[] = ['fr', 'en']
const skillNodes = (node: SkillTreeNode): SkillTreeNode[] => [
  node,
  ...(node.children ?? []).flatMap(skillNodes),
]
const nodes = skillNodes(skillsTree)

function expectUnique(values: string[]) {
  expect(values.every((value) => value.trim().length > 0)).toBe(true)
  expect(new Set(values).size).toBe(values.length)
}

describe('published content contracts', () => {
  it('has unique identities for keyed lists and controlled regions', () => {
    expectUnique(projects.map((project) => project.title))
    expectUnique(services.map((service) => service.id))
    expectUnique(aboutJourneyItems.map((item) => item.id))
    expectUnique(aboutAccordionItems.map((item) => item.id))
    expectUnique(nodes.map((node) => node.id))
    expectUnique(stack.map((category) => category.title))
    for (const category of stack) {
      expectUnique(category.items.map((item) => item.label))
    }
  })

  it.each(languages)('has nonempty published text in %s', (language) => {
    const strings = [
      copy[language].hero.role,
      copy[language].hero.subtitle,
      copy[language].about.subheading,
      copy[language].contact.subheading,
      ...services.flatMap((service) => [
        service.title[language],
        service.description[language],
      ]),
      ...projects.flatMap((project) => [
        project.description[language],
        project.imageAlt[language],
        project.status[language],
      ]),
      ...aboutJourneyItems.flatMap((item) => [
        item.title[language],
        item.description[language],
        ...(item.dateLabel ? [item.dateLabel[language]] : []),
      ]),
      ...aboutAccordionItems.flatMap((item) => [
        item.question[language],
        item.answer[language],
      ]),
      ...nodes.flatMap((node) => [
        node.label[language],
        ...(node.keywords?.[language] ?? []),
      ]),
    ]
    for (const value of strings) expect(value.trim()).not.toBe('')
  })

  it('references existing, nonempty project images and responsive candidates', () => {
    for (const project of projects) {
      const candidates =
        project.imageWebpSrcSet?.split(',').map((source) => {
          const match = source.trim().match(/^(\S+) ([1-9]\d*)w$/)
          expect(match, source).not.toBeNull()
          return match?.[1] ?? ''
        }) ?? []
      for (const source of [project.imageSrc, ...candidates]) {
        expect(source.startsWith('/'), source).toBe(true)
        const path = resolve('public', source.slice(1))
        expect(existsSync(path), source).toBe(true)
        expect(statSync(path).size, source).toBeGreaterThan(0)
      }
    }
  })

  it('publishes only HTTPS external project links and supported contact links', () => {
    for (const project of projects) {
      for (const href of [project.href, project.repositoryHref]) {
        if (href) expect(new URL(href).protocol).toBe('https:')
      }
    }
    for (const link of links) {
      expect(new URL(link.href).protocol).toBe(
        link.kind === 'email' ? 'mailto:' : 'https:',
      )
    }
  })

  it('revalidates stable image URLs and keeps hashed build assets immutable', () => {
    const { headers } = JSON.parse(readFileSync('vercel.json', 'utf8')) as {
      headers: { source: string; headers: { key: string; value: string }[] }[]
    }
    const policy = (source: string) =>
      headers
        .find((rule) => rule.source === source)
        ?.headers.find((header) => header.key.toLowerCase() === 'cache-control')
        ?.value
    expect(policy('/projects/generated/(.*)')).toBe('public, no-cache')
    expect(policy('/assets/(.*)')).toBe('public, max-age=31536000, immutable')
  })
})
