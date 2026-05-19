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
    <img
      src={project.imageSrc}
      alt={project.imageAlt[language]}
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
            {projectCopy.github}
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
            {projectCopy.view}
          </a>
        </div>
      </div>
    </article>
  )
}
