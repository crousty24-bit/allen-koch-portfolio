import type { CSSProperties } from 'react'
import type { Project } from '../../data/projects/projects'

const chipColors = [
  { accent: '#2f6bff' },
  { accent: '#16e4ff' },
  { accent: '#b95cff' },
  { accent: '#ff3f7f' },
  { accent: '#ffcc24' },
]

type ProjectCardProps = {
  index: number
  project: Project
}

export function ProjectCard({ index, project }: ProjectCardProps) {
  const hasDemoLink = Boolean(project.href)
  const hasRepositoryLink = Boolean(project.repositoryHref)
  const projectImage = (
    <img
      src={project.imageSrc}
      alt={project.imageAlt}
      height="720"
      loading="lazy"
      width="1280"
    />
  )

  return (
    <article
      className="project-card reveal"
      style={{ '--index': index } as CSSProperties}
    >
      {hasDemoLink ? (
        <a
          aria-label={`Voir le projet ${project.title}`}
          className="project-card__media"
          href={project.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {projectImage}
        </a>
      ) : (
        <div aria-disabled="true" className="project-card__media">
          {projectImage}
        </div>
      )}

      <div className="project-card__body">
        <div className="project-card__header">
          <div>
            <p>{project.status}</p>
            <h3>{project.title}</h3>
          </div>
        </div>

        <p className="project-card__description">{project.description}</p>

        <div className="chip-list">
          {project.stack.map((tag, tagIndex) => (
            <span
              className="chip project-card__chip"
              key={tag}
              style={
                {
                  '--chip-accent':
                    chipColors[tagIndex % chipColors.length].accent,
                } as CSSProperties
              }
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="project-card__links">
          <a
            aria-disabled={!hasRepositoryLink}
            className={`project-card__link project-card__link--secondary${
              hasRepositoryLink ? '' : ' project-card__link--empty'
            }`}
            href={project.repositoryHref ?? ''}
            rel={hasRepositoryLink ? 'noopener noreferrer' : undefined}
            target={hasRepositoryLink ? '_blank' : undefined}
          >
            GitHub
          </a>
          <a
            aria-disabled={!hasDemoLink}
            className={`project-card__link project-card__link--primary${
              hasDemoLink ? '' : ' project-card__link--empty'
            }`}
            href={project.href ?? ''}
            rel={hasDemoLink ? 'noopener noreferrer' : undefined}
            target={hasDemoLink ? '_blank' : undefined}
          >
            Voir
          </a>
        </div>
      </div>
    </article>
  )
}
