import { useEffect, useRef, useState } from 'react'
import { copy, type Language } from '../../data/i18n/i18n'
import {
  isProjectPublished,
  type Project,
  projects,
} from '../../data/projects/projects'
import { ProjectCard } from '../ProjectCard/ProjectCard'

const visibleProjectsCount = 3

type ProjectsGroupProps = {
  category: Project['category']
  label: string
  language: Language
  projects: Project[]
}

function ProjectsGroup({
  category,
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
  const compact = showAllProjects
    ? groupProjects.slice(visibleProjectsCount)
    : []
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
    <section className="projects-group" aria-labelledby={titleId}>
      <header className="projects-group__header">
        <h3 className="projects-group__title" id={titleId}>
          {label}
        </h3>
        <span className="projects-group__count">
          {String(total).padStart(2, '0')}
        </span>
      </header>
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
          <div className="projects-grid" id={gridId}>
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
    { category: 'personal', label: projectsCopy.personalHeading },
    { category: 'client', label: projectsCopy.clientHeading },
    { category: 'game-dev', label: projectsCopy.gameHeading },
  ] as const

  return (
    <section className="section projects-section" id="projects" tabIndex={-1}>
      <div className="section-heading section-heading--split reveal">
        <div>
          <h2 className="section-title">{projectsCopy.heading}</h2>
          <p>{projectsCopy.text}</p>
        </div>
      </div>
      {groups.map((group) => {
        const groupProjects = publishedProjects.filter(
          (project) => project.category === group.category,
        )
        if (!groupProjects.length) return null

        return (
          <ProjectsGroup
            category={group.category}
            key={group.category}
            label={group.label}
            language={language}
            projects={groupProjects}
          />
        )
      })}
      <div className="projects-section__cta reveal">
        <p>{projectsCopy.ctaText}</p>
        <a className="button button--primary" href="#contact">
          {projectsCopy.ctaLink}
        </a>
      </div>
    </section>
  )
}
