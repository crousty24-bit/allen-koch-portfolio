import type { CSSProperties } from 'react'
import { copy, type Language } from '../../data/i18n/i18n'
import { isProjectPublished, type Project } from '../../data/projects/projects'

type ProjectCardProps = {
  index: number
  language: Language
  project: Project
  total: number
  variant: 'feature' | 'compact'
}

// Rendered widths per layout (DESIGN.md R14), used to pick the WebP candidate.
const imageSizesByVariant = {
  feature:
    '(max-width: 760px) calc(100vw - 2.5rem), (max-width: 1040px) calc(100vw - 4rem), 985px',
  compact:
    '(max-width: 760px) calc(100vw - 2.5rem), (max-width: 1040px) calc((100vw - 5.5rem) / 2), 420px',
} as const

const formatIndex = (value: number) => String(value).padStart(2, '0')

export function ProjectCard({
  index,
  language,
  project,
  total,
  variant,
}: ProjectCardProps) {
  if (!isProjectPublished(project)) return null

  const hasDemoLink = Boolean(project.href)
  const hasRepositoryLink = Boolean(project.repositoryHref)
  const projectCopy = copy[language].projects
  const clientFacts =
    project.category === 'client'
      ? [
          {
            label: projectCopy.missionLabel,
            value: project.client.mission[language],
          },
          {
            label: projectCopy.roleLabel,
            value: project.client.role[language],
          },
          {
            label: projectCopy.deliverablesLabel,
            value: project.client.deliverables[language],
          },
          ...(project.client.results
            ? [
                {
                  label: projectCopy.resultsLabel,
                  value: project.client.results[language],
                },
              ]
            : []),
        ]
      : []
  const imageSizes = imageSizesByVariant[variant]
  const position = formatIndex(index + 1)
  const projectImage = (
    <picture>
      {project.imageWebpSrcSet ? (
        <source
          sizes={imageSizes}
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
        sizes={imageSizes}
        width="1280"
      />
    </picture>
  )

  return (
    <article
      className={`project-card project-card--${variant} reveal`}
      style={{ '--index': index } as CSSProperties}
    >
      {variant === 'feature' ? (
        <p aria-hidden="true" className="project-card__index">
          {position}
          <span>/ {formatIndex(total)}</span>
        </p>
      ) : null}

      <div className="project-card__main">
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
          <div className="project-card__media">{projectImage}</div>
        )}

        <div className="project-card__body">
          <div className="project-card__summary">
            <p className="project-card__meta">
              {variant === 'compact' ? `${position} / ` : null}
              {project.category === 'client'
                ? `${project.client.name} / `
                : null}
              {project.status[language]}
            </p>
            <h4>{project.title}</h4>
            <p className="project-card__description">
              {project.description[language]}
            </p>
            {clientFacts.length ? (
              <dl className="project-card__facts">
                {clientFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>

          <div className="project-card__details">
            <ul className="chip-list">
              {project.stack.map((tag) => (
                <li className="chip" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>

            {hasRepositoryLink || hasDemoLink ? (
              <div className="project-card__links">
                {hasDemoLink ? (
                  <a
                    className="button button--primary project-card__link"
                    href={project.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {projectCopy.view}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
                {hasRepositoryLink ? (
                  <a
                    className="button button--secondary project-card__link"
                    href={project.repositoryHref}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {projectCopy.github}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}
