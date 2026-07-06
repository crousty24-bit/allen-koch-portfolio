import type { CSSProperties } from 'react'
import { copy, type Language } from '../../data/i18n/i18n'
import type { Project } from '../../data/projects/projects'

type ProjectCardProps = {
  index: number
  language: Language
  project: Project
}

export function ProjectCard({ index, language, project }: ProjectCardProps) {
  const hasDemoLink = Boolean(project.href)
  const hasRepositoryLink = Boolean(project.repositoryHref)
  const projectCopy = copy[language].projects
  const projectImage = (
    <picture>
      {project.imageWebpSrcSet ? (
        <source
          sizes={project.imageSizes}
          srcSet={project.imageWebpSrcSet}
          type="image/webp"
        />
      ) : null}
      <img
        src={project.imageSrc}
        alt={project.imageAlt[language]}
        decoding="async"
        height="720"
        loading="lazy"
        sizes={project.imageSizes}
        width="1280"
      />
    </picture>
  )

  return (
    <article
      className="project-card reveal"
      style={{ '--index': index } as CSSProperties}
    >
      {hasDemoLink ? (
        <a
          aria-label={`${projectCopy.viewProject} ${project.title}`}
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
            <p>{project.status[language]}</p>
            <h3>{project.title}</h3>
          </div>
        </div>

        <p className="project-card__description">
          {project.description[language]}
        </p>

        <div className="chip-list">
          {project.stack.map((tag) => (
            <span className="chip project-card__chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        {hasRepositoryLink || hasDemoLink ? (
          <div className="project-card__links">
            {hasRepositoryLink ? (
              <a
                className="project-card__link project-card__link--secondary"
                href={project.repositoryHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                {projectCopy.github}
              </a>
            ) : null}
            {hasDemoLink ? (
              <a
                className="project-card__link project-card__link--primary"
                href={project.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {projectCopy.view}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}
