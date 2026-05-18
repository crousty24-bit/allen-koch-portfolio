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
      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          <ProjectCard index={index} key={project.title} project={project} />
        ))}
      </div>
      {hasHiddenProjects && !showAllProjects ? (
        <div className="projects-section__more reveal">
          <button
            className="button button--secondary"
            onClick={() => setShowAllProjects(true)}
            type="button"
          >
            Voir tous les projets
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
