import type { CSSProperties } from 'react'
import type { Project } from '../../data/projects/projects'

type ProjectCardProps = {
  index: number
  project: Project
}

export function ProjectCard({ index, project }: ProjectCardProps) {
  const hasLinks = Boolean(project.href || project.repositoryHref)

  return (
    <article
      className="project-card reveal"
      style={{ '--index': index } as CSSProperties}
    >
      <div className="project-card__media">
        <img
          src={project.imageSrc}
          alt={project.imageAlt}
          height="720"
          loading="lazy"
          width="1280"
        />
      </div>

      <div className="project-card__body">
        <div className="project-card__header">
          <div>
            <p>{project.status}</p>
            <h3>{project.title}</h3>
          </div>
        </div>

        <p className="project-card__description">{project.description}</p>

        <div className="chip-list">
          {project.stack.map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        {hasLinks ? (
          <div className="project-card__links">
            {project.href ? (
              <a href={project.href} rel="noopener noreferrer" target="_blank">
                Demo live
              </a>
            ) : null}
            {project.repositoryHref ? (
              <a
                href={project.repositoryHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}
