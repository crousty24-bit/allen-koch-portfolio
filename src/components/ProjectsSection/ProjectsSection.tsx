import { useState } from 'react'
import { copy, type Language } from '../../data/i18n/i18n'
import { isProjectPublished, projects } from '../../data/projects/projects'
import { ProjectCard } from '../ProjectCard/ProjectCard'

const visibleProjectsCount = 3

type ProjectsSectionProps = {
  language: Language
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const projectsCopy = copy[language].projects
  const publishedProjects = projects.filter(isProjectPublished)
  const groups = [
    { category: 'personal', label: projectsCopy.personalHeading },
    { category: 'client', label: projectsCopy.clientHeading },
    { category: 'game-dev', label: projectsCopy.gameHeading },
  ].map((group) => ({
    ...group,
    projects: publishedProjects.filter(
      (project) => project.category === group.category,
    ),
  }))

  return (
    <section className="section projects-section" id="projects" tabIndex={-1}>
      <div className="section-heading section-heading--split reveal">
        <div>
          <h2 className="section-title">{projectsCopy.heading}</h2>
          <p>{projectsCopy.text}</p>
        </div>
      </div>
      {groups.map((group, groupIndex) => {
        if (!group.projects.length) return null
        const isPersonal = group.category === 'personal'
        const featured = isPersonal
          ? group.projects.slice(0, visibleProjectsCount)
          : []
        const compact = isPersonal
          ? showAllProjects
            ? group.projects.slice(visibleProjectsCount)
            : []
          : group.projects
        const offset = groups
          .slice(0, groupIndex)
          .reduce((total, item) => total + item.projects.length, 0)
        const titleId = `${group.category}-projects-title`

        return (
          <section
            className="projects-group"
            aria-labelledby={titleId}
            key={group.category}
          >
            <header className="projects-group__header">
              <h3 className="projects-group__title" id={titleId}>
                {group.label}
              </h3>
              <span className="projects-group__count">
                {String(group.projects.length).padStart(2, '0')}
              </span>
            </header>
            {featured.length ? (
              <div className="projects-features">
                {featured.map((project, index) => (
                  <ProjectCard
                    index={offset + index}
                    key={project.title}
                    language={language}
                    project={project}
                    total={publishedProjects.length}
                    variant="feature"
                  />
                ))}
              </div>
            ) : null}
            <div
              className={`projects-grid${isPersonal ? '' : ' projects-grid--group'}`}
              id={isPersonal ? 'projects-grid' : undefined}
            >
              {compact.map((project, index) => (
                <ProjectCard
                  index={offset + featured.length + index}
                  key={project.title}
                  language={language}
                  project={project}
                  total={publishedProjects.length}
                  variant="compact"
                />
              ))}
            </div>
            {isPersonal && group.projects.length > visibleProjectsCount ? (
              <div className="projects-section__more">
                <button
                  aria-controls="projects-grid"
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
            ) : null}
          </section>
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
