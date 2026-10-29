import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import App from '../src/App'
import { AboutSection } from '../src/components/AboutSection/AboutSection'
import { Footer } from '../src/components/Footer/Footer'
import { Hero } from '../src/components/Hero/Hero'
import { Navbar } from '../src/components/Navbar/Navbar'
import { ProjectCard } from '../src/components/ProjectCard/ProjectCard'
import { ProjectsSection } from '../src/components/ProjectsSection/ProjectsSection'
import { ServicesSection } from '../src/components/ServicesSection/ServicesSection'
import { copy, type Language } from '../src/data/i18n/i18n'
import { navItems } from '../src/data/links/navigation'
import {
  isProjectPublished,
  type Project,
  projects,
} from '../src/data/projects/projects'
import { services } from '../src/data/services/services'

const page = renderToStaticMarkup(createElement(App))
const languages: Language[] = ['fr', 'en']
const fixture: Project = {
  category: 'personal',
  title: 'Projet témoin',
  description: { fr: 'Description française', en: 'English description' },
  imageAlt: { fr: 'Image française', en: 'English image' },
  status: { fr: 'Prototype français', en: 'English prototype' },
  imageSrc: '/fixture.svg',
  stack: ['TypeScript'],
}

// These contracts cover HTML output, not effects, events or computed styles.
describe('page render contracts', () => {
  it('has unique IDs and targets for every internal link and ARIA reference', () => {
    const ids = [...page.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1])
    expect(new Set(ids).size).toBe(ids.length)
    const references = [
      ...[...page.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]),
      ...[...page.matchAll(/aria-(?:controls|labelledby)="([^"]+)"/g)].flatMap(
        (match) => match[1].split(/\s+/),
      ),
    ]
    for (const target of references) expect(ids).toContain(target)
    for (const item of navItems) expect(ids).toContain(item.href.slice(1))
    expect(page.match(/<h1[\s>]/g)).toHaveLength(1)
    for (const id of [
      'main-content',
      ...navItems.map((item) => item.href.slice(1)),
    ]) {
      expect(page).toMatch(new RegExp(`id="${id}"[^>]*tabindex="-1"`))
    }
    expect(
      [
        ...page.matchAll(
          /<section[^>]*id="(home|services|projects|stack|about|contact)"/g,
        ),
      ].map((match) => `#${match[1]}`),
    ).toEqual(navItems.map((item) => item.href))
  })

  it.each(
    languages,
  )('renders two services and one contact CTA in %s', (language) => {
    const html = renderToStaticMarkup(
      createElement(ServicesSection, { language }),
    )
    expect(html.match(/<h3[\s>]/g)).toHaveLength(2)
    expect(html.match(/<a[\s>]/g)).toHaveLength(1)
    expect(html).toContain(
      `href="#contact">${renderToStaticMarkup(copy[language].hero.contactCta)}</a>`,
    )
    for (const service of services) {
      expect(html).toContain(renderToStaticMarkup(service.title[language]))
      expect(html).toContain(
        renderToStaticMarkup(service.description[language]),
      )
    }
  })

  it('initially renders featured projects without mounting the extra cards', () => {
    expect(page.match(/project-card--feature/g)).toHaveLength(3)
    expect(page.match(/project-card--compact/g)).toHaveLength(2)
    expect(page).toContain('client-projects-title')
    const personal =
      page.match(
        /<section[^>]*aria-labelledby="personal-projects-title"[^>]*>([\s\S]*?)<\/section>/,
      )?.[1] ?? ''
    const game =
      page.match(
        /<section[^>]*aria-labelledby="game-dev-projects-title"[^>]*>([\s\S]*?)<\/section>/,
      )?.[1] ?? ''
    const gameTitle = renderToStaticMarkup("Milady's Knight")
    expect(personal).not.toContain(gameTitle)
    expect(game).toContain(`<h4>${gameTitle}</h4>`)
    expect(game).toContain('10 / Prototype')
    expect(page).toContain(
      'aria-controls="projects-grid" aria-expanded="false"',
    )
  })

  it.each(
    languages,
  )('publishes client cases only with approval in %s', (language) => {
    const client: Project = {
      ...fixture,
      category: 'client',
      title: 'Mission témoin hors production',
      client: {
        name: 'Client de test',
        mission: { fr: 'Mission française', en: 'English mission' },
        role: { fr: 'Rôle français', en: 'English role' },
        deliverables: { fr: 'Livrables français', en: 'English deliverables' },
        publicationApproved: false,
      },
    }
    const originalLength = projects.length
    try {
      projects.push(client)
      const render = () =>
        renderToStaticMarkup(createElement(ProjectsSection, { language }))
      expect(render()).toContain('client-projects-title')
      expect(render()).not.toContain(client.title)
      expect(projects.filter(isProjectPublished)).toHaveLength(originalLength)
      expect(
        renderToStaticMarkup(
          createElement(ProjectCard, {
            project: client,
            language,
            index: 8,
            total: 10,
            variant: 'compact',
          }),
        ),
      ).toBe('')
      client.client.publicationApproved = true
      const html = render()
      expect(html).toContain('client-projects-title')
      expect(html).toContain(client.client.name)
      expect(html).toContain(client.client.mission[language])
      expect(html).toContain(client.client.role[language])
      expect(html).toContain(client.client.deliverables[language])
      expect(html).not.toContain(
        `<dt>${copy[language].projects.resultsLabel}</dt>`,
      )
      expect(html.indexOf('personal-projects-title')).toBeLessThan(
        html.indexOf('client-projects-title'),
      )
      expect(html.indexOf('client-projects-title')).toBeLessThan(
        html.indexOf('game-dev-projects-title'),
      )
      client.client.results = {
        fr: 'Résultat vérifié témoin',
        en: 'Verified fixture result',
      }
      expect(render()).toContain(client.client.results[language])
    } finally {
      projects.splice(originalLength)
    }
  })

  it.each(
    languages,
  )('renders localized navigation and sections in %s', (language) => {
    const nav = renderToStaticMarkup(
      createElement(Navbar, {
        language,
        theme: 'light',
        onToggleLanguage: () => {},
        onToggleTheme: () => {},
      }),
    )
    expect(nav).toContain(
      `aria-label="${renderToStaticMarkup(copy[language].nav.mainLabel)}"`,
    )
    expect(nav).toContain(
      `aria-label="${renderToStaticMarkup(copy[language].nav.openMenuLabel)}"`,
    )
    for (const item of navItems) {
      expect(nav).toContain(
        `href="${item.href}">${renderToStaticMarkup(copy[language].nav[item.key])}</a>`,
      )
    }
    expect(nav.match(/aria-current="location"/g)).toHaveLength(1)
    const hero = renderToStaticMarkup(createElement(Hero, { language }))
    expect(hero).toContain(
      `class="button button--primary" href="#contact">${renderToStaticMarkup(copy[language].hero.contactCta)}</a>`,
    )
    expect(hero).toContain(
      `class="button button--secondary" href="#projects">${renderToStaticMarkup(copy[language].hero.projectsCta)}</a>`,
    )
    const footer = renderToStaticMarkup(createElement(Footer, { language }))
    expect(footer).toContain(
      renderToStaticMarkup(copy[language].footer.navHeading),
    )
    expect(footer).toContain(
      renderToStaticMarkup(copy[language].footer.linksHeading),
    )
    const about = renderToStaticMarkup(
      createElement(AboutSection, { language }),
    )
    expect(about).toContain(
      `alt="${renderToStaticMarkup(copy[language].about.alt)}"`,
    )
    const projects = renderToStaticMarkup(
      createElement(ProjectsSection, { language }),
    )
    expect(projects).toContain(
      renderToStaticMarkup(copy[language].projects.showAllLabel),
    )
    expect(projects).toContain(
      `href="#contact">${renderToStaticMarkup(copy[language].projects.ctaLink)}</a>`,
    )
  })
})

for (const language of languages) {
  describe(`project card contracts (${language})`, () => {
    it.each([
      {
        name: 'demo and repository',
        href: 'https://example.com/demo',
        repositoryHref: 'https://example.com/repository',
      },
      {
        name: 'demo only',
        href: 'https://example.com/demo',
        repositoryHref: undefined,
      },
      {
        name: 'repository only',
        href: undefined,
        repositoryHref: 'https://example.com/repository',
      },
      { name: 'no links', href: undefined, repositoryHref: undefined },
    ])('renders $name without empty links', ({ href, repositoryHref }) => {
      for (const variant of ['feature', 'compact'] as const) {
        const html = renderToStaticMarkup(
          createElement(ProjectCard, {
            project: { ...fixture, href, repositoryHref },
            language,
            variant,
            index: 0,
            total: 1,
          }),
        )
        expect(html).toContain(fixture.description[language])
        expect(html).toContain(`alt="${fixture.imageAlt[language]}"`)
        expect(html).toContain(fixture.status[language])
        const urls = [...html.matchAll(/\shref="([^"]*)"/g)].map(
          (match) => match[1],
        )
        expect(urls).toEqual([
          ...(href ? [href, href] : []),
          ...(repositoryHref ? [repositoryHref] : []),
        ])
        expect(html).not.toContain('href="undefined"')
        for (const link of html.matchAll(/<a\s[^>]*>/g)) {
          expect(link[0]).toContain('rel="noopener noreferrer"')
          expect(link[0]).toContain('target="_blank"')
        }
      }
    })
  })
}
