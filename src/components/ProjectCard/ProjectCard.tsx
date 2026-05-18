import type { CSSProperties } from 'react'
import type { Project } from '../../data/projects/projects'

const chipColors = [
  { accent: '#2e5bff', glow: 'rgba(46, 91, 255, 0.2)' },
  { accent: '#54d5ff', glow: 'rgba(84, 213, 255, 0.18)' },
  { accent: '#d4bbff', glow: 'rgba(212, 187, 255, 0.16)' },
  { accent: '#ff4d6d', glow: 'rgba(255, 77, 109, 0.16)' },
  { accent: '#ffd166', glow: 'rgba(255, 209, 102, 0.14)' },
]

type ProjectCardProps = {
  index: number
  project: Project
}

export function ProjectCard({ index, project }: ProjectCardProps) {
  const hasDemoLink = Boolean(project.href)
  const hasRepositoryLink = Boolean(project.repositoryHref)

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
          {project.stack.map((tag, tagIndex) => (
            <span
              className="chip project-card__chip"
              key={tag}
              style={
                {
                  '--chip-accent':
                    chipColors[tagIndex % chipColors.length].accent,
                  '--chip-glow': chipColors[tagIndex % chipColors.length].glow,
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
