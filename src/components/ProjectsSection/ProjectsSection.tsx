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

  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading section-heading--split reveal">
        <div>
          <p className="eyebrow">{projectsCopy.eyebrow}</p>
          <h2>{projectsCopy.heading}</h2>
          <p>{projectsCopy.text}</p>
        </div>
      </div>
      <div className="projects-grid" id="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            index={index}
            isCollapsed={!showAllProjects && index >= visibleProjectsCount}
            key={project.title}
            language={language}
            project={project}
          />
        ))}
      </div>
      {hasHiddenProjects ? (
        <div className="projects-section__more reveal">
          <button
            aria-controls="projects-grid"
            aria-expanded={showAllProjects}
            aria-label={
              showAllProjects
                ? projectsCopy.hideExtraLabel
                : projectsCopy.showAllLabel
            }
            className="projects-toggle"
            onClick={() => setShowAllProjects((isShowingAll) => !isShowingAll)}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="projects-toggle__icon"
              fill="none"
              height="20"
              viewBox="0 0 20 20"
              width="20"
            >
              <path
                d="M5 8L10 13L15 8"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
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
