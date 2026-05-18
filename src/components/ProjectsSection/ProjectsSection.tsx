import { projects } from '../../data/projects/projects'
import { ProjectCard } from '../ProjectCard/ProjectCard'

export function ProjectsSection() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading section-heading--split reveal">
        <div>
          <p className="eyebrow">Projets sélectionnés</p>
          <h2>
            Des produits construits pour être compris, utilisés et maintenus.
          </h2>
        </div>
        <p>
          Une sélection courte de projets orientés produit, automatisation et
          interfaces techniques. Les liens publics seront ajoutés quand ils sont
          disponibles.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard index={index} key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
