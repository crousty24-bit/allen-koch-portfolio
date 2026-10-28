import { useState } from 'react'
import { copy, type Language } from '../../data/i18n/i18n'
import { projects } from '../../data/projects/projects'
import { ProjectCard } from '../ProjectCard/ProjectCard'

const visibleProjectsCount = 3

type ProjectsSectionProps = {
  language: Language
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const hasHiddenProjects = projects.length > visibleProjectsCount
  const projectsCopy = copy[language].projects
  const featuredProjects = projects.slice(0, visibleProjectsCount)
  const extraProjects = projects.slice(visibleProjectsCount)

  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading section-heading--split reveal">
        <div>
          <p className="eyebrow eyebrow--section">{projectsCopy.eyebrow}</p>
          <h2>{projectsCopy.heading}</h2>
          <p>{projectsCopy.text}</p>
        </div>
      </div>
      <div className="projects-features">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project.title}
            language={language}
            project={project}
            total={projects.length}
            variant="feature"
          />
        ))}
      </div>
      <div className="projects-grid" id="projects-grid">
        {showAllProjects
          ? extraProjects.map((project, index) => (
              <ProjectCard
                index={visibleProjectsCount + index}
                key={project.title}
                language={language}
                project={project}
                total={projects.length}
                variant="compact"
              />
            ))
          : null}
      </div>
      {hasHiddenProjects ? (
        <div className="projects-section__more">
          <button
            aria-controls="projects-grid"
            aria-expanded={showAllProjects}
            className="button button--secondary projects-toggle"
            onClick={() => setShowAllProjects((isShowingAll) => !isShowingAll)}
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
      <div className="projects-section__cta reveal">
        <p>{projectsCopy.ctaText}</p>
        <a className="button button--primary" href="#contact">
          {projectsCopy.ctaLink}
        </a>
      </div>
    </section>
  )
}
