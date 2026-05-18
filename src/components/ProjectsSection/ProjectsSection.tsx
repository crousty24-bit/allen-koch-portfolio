import { useState } from 'react'
import { projects } from '../../data/projects/projects'
import { ProjectCard } from '../ProjectCard/ProjectCard'

const visibleProjectsCount = 3

export function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, visibleProjectsCount)
  const hasHiddenProjects = projects.length > visibleProjectsCount

  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading section-heading--split reveal">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h2>
            Des produits construits pour être compris, utilisés et maintenus.
          </h2>
        </div>
      </div>
      <div className="projects-grid" id="projects-grid">
        {visibleProjects.map((project, index) => (
          <ProjectCard index={index} key={project.title} project={project} />
        ))}
      </div>
      {hasHiddenProjects ? (
        <div className="projects-section__more reveal">
          <button
            aria-controls="projects-grid"
            aria-expanded={showAllProjects}
            aria-label={
              showAllProjects
                ? 'Masquer les projets supplémentaires'
                : 'Afficher tous les projets'
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
        <p>Une idée de projet ?</p>
        <a className="button button--primary" href="#contact">
          Se connecter
        </a>
      </div>
    </section>
  )
}
