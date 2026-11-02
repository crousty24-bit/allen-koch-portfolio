import { useEffect, useRef, useState } from 'react'
import { copy, type Language } from '../../data/i18n/i18n'
import {
  isProjectPublished,
  type Project,
  projects,
} from '../../data/projects/projects'
import { ProjectCard } from '../ProjectCard/ProjectCard'

const visibleProjectsCount = 3

type JumpTarget = { category: Project['category']; label: string }

type ProjectsGroupHeaderProps = {
  category: Project['category']
  jumpLabel: string
  jumpTargets: JumpTarget[]
  label: string
  titleId: string
  total: number
}

function ProjectsGroupHeader({
  category,
  jumpLabel,
  jumpTargets,
  label,
  titleId,
  total,
}: ProjectsGroupHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuId = `${category}-projects-menu`

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    const closeOutside = (event: Event) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    document.addEventListener('focusin', closeOutside)
    document.addEventListener('pointerdown', closeOutside)

    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('focusin', closeOutside)
      document.removeEventListener('pointerdown', closeOutside)
    }
  }, [isMenuOpen])

  return (
    <header className="projects-group__header" ref={headerRef}>
      <h3 className="projects-group__title" id={titleId}>
        {jumpTargets.length ? (
          <button
            aria-controls={menuId}
            aria-expanded={isMenuOpen}
            className="projects-group__toggle"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            ref={toggleRef}
            type="button"
          >
            {label}
            <span aria-hidden="true" className="projects-group__chevron">
              ▾
            </span>
          </button>
        ) : (
          label
        )}
      </h3>
      <span className="projects-group__count">
        {String(total).padStart(2, '0')}
      </span>
      {jumpTargets.length ? (
        <ul
          aria-label={jumpLabel}
          className="projects-group__jumps"
          hidden={!isMenuOpen}
          id={menuId}
        >
          {jumpTargets.map((target) => (
            <li key={target.category}>
              <a
                className="button button--secondary projects-group__jump"
                href={`#${target.category}-projects`}
                onClick={() => setIsMenuOpen(false)}
              >
                {target.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  )
}

type ProjectsGroupProps = {
  category: Project['category']
  jumpTargets: JumpTarget[]
  label: string
  language: Language
  projects: Project[]
}

function ProjectsGroup({
  category,
  jumpTargets,
  label,
  language,
  projects: groupProjects,
}: ProjectsGroupProps) {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const featuresRef = useRef<HTMLDivElement>(null)
  const projectsCopy = copy[language].projects
  const total = groupProjects.length
  const featured = groupProjects.slice(0, visibleProjectsCount)
  const compact = groupProjects.slice(visibleProjectsCount)
  const titleId = `${category}-projects-title`
  const gridId = `${category}-projects-grid`

  useEffect(() => {
    const cards = Array.from(
      featuresRef.current?.querySelectorAll('.project-card--feature') ?? [],
    )
    let frame = 0
    const updateIndex = () => {
      const next = cards.findLastIndex(
        (card) => card.getBoundingClientRect().top <= window.innerHeight * 0.2,
      )
      setActiveFeature(Math.max(0, next))
    }
    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(updateIndex)
    }

    updateIndex()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [])

  return (
    <section
      className="projects-group"
      aria-labelledby={titleId}
      id={`${category}-projects`}
    >
      <ProjectsGroupHeader
        category={category}
        jumpLabel={projectsCopy.jumpLabel}
        jumpTargets={jumpTargets}
        label={label}
        titleId={titleId}
        total={total}
      />
      <div className="projects-features" ref={featuresRef}>
        <p
          aria-hidden="true"
          className="project-card__index projects-features__index"
        >
          <span className="projects-features__window">
            <span
              className="projects-features__track"
              style={{ transform: `translateY(-${activeFeature}em)` }}
            >
              {featured.map((project, index) => (
                <span className="projects-features__number" key={project.title}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              ))}
            </span>
          </span>
          <span className="project-card__total">
            / {String(total).padStart(2, '0')}
          </span>
        </p>
        <div className="projects-features__cards">
          {featured.map((project, index) => (
            <ProjectCard
              index={index}
              key={project.title}
              language={language}
              project={project}
              total={total}
              variant="feature"
            />
          ))}
        </div>
      </div>
      {total > visibleProjectsCount ? (
        <>
          <div className="projects-section__more">
            <button
              aria-controls={gridId}
              aria-expanded={showAllProjects}
              className="button button--secondary projects-toggle"
              onClick={() =>
                setShowAllProjects((isShowingAll) => !isShowingAll)
              }
              type="button"
            >
              {showAllProjects
                ? projectsCopy.hideExtraLabel
                : projectsCopy.showAllLabel}
              <span aria-hidden="true" className="projects-toggle__sign">
                {showAllProjects ? '−' : '+'}
              </span>
            </button>
          </div>
          <div className="projects-grid" hidden={!showAllProjects} id={gridId}>
            {compact.map((project, index) => (
              <ProjectCard
                index={visibleProjectsCount + index}
                key={project.title}
                language={language}
                project={project}
                total={total}
                variant="compact"
              />
            ))}
          </div>
        </>
      ) : null}
    </section>
  )
}

type ProjectsSectionProps = {
  language: Language
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const projectsCopy = copy[language].projects
  const publishedProjects = projects.filter(isProjectPublished)
  const groups = [
    { category: 'personal' as const, label: projectsCopy.personalHeading },
    { category: 'client' as const, label: projectsCopy.clientHeading },
    { category: 'game-dev' as const, label: projectsCopy.gameHeading },
  ]
    .map((group) => ({
      ...group,
      projects: publishedProjects.filter(
        (project) => project.category === group.category,
      ),
    }))
    .filter((group) => group.projects.length)

  return (
    <section className="section projects-section" id="projects" tabIndex={-1}>
      <div className="section-heading section-heading--split reveal">
        <div>
          <h2 className="section-title">{projectsCopy.heading}</h2>
          <p>{projectsCopy.text}</p>
        </div>
      </div>
      {groups.map((group) => (
        <ProjectsGroup
          category={group.category}
          jumpTargets={groups.filter((other) => other !== group)}
          key={group.category}
          label={group.label}
          language={language}
          projects={group.projects}
        />
      ))}
      <div className="projects-section__cta reveal">
        <p>{projectsCopy.ctaText}</p>
        <a className="button button--primary" href="#contact">
          {projectsCopy.ctaLink}
        </a>
      </div>
    </section>
  )
}
