import { projects } from '../../data/projects/projects'
import { ProjectCard } from '../ProjectCard/ProjectCard'

export function ProjectsSection() {
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
        {projects.map((project, index) => (
          <ProjectCard index={index} key={project.title} project={project} />
        ))}
      </div>
      <div className="projects-section__cta reveal">
        <p>Une idée de projet ?</p>
        <a className="button button--primary" href="#contact">
          Se connecter
        </a>
      </div>
    </section>
  )
}
