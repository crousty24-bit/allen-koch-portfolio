import { copy, type Language } from '../../data/i18n/i18n'
import { links } from '../../data/links/links'

type HeroProps = {
  language: Language
}

const iconByLabel = {
  Email: (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M4 6.5H20V17.5H4V6.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M5 7L12 12.4L19 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  ),
  GitHub: (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M15.5 19.2V16.6C15.55 15.98 15.35 15.38 14.95 14.9C17.1 14.66 19.35 13.84 19.35 10.1C19.35 9.14 18.99 8.22 18.35 7.5C18.65 6.66 18.61 5.74 18.22 4.92C18.22 4.92 17.4 4.68 15.5 5.92C13.9 5.5 12.22 5.5 10.62 5.92C8.72 4.68 7.9 4.92 7.9 4.92C7.51 5.74 7.47 6.66 7.77 7.5C7.13 8.22 6.77 9.14 6.77 10.1C6.77 13.82 9.01 14.66 11.15 14.9C10.75 15.38 10.55 15.98 10.6 16.6V19.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.55"
      />
      <path
        d="M10.6 17.2C8.7 17.8 7.15 17.2 6.45 15.55"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.55"
      />
    </svg>
  ),
  LinkedIn: (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M7.7 10.1V18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 18V13.75C12 11.35 17.1 10.75 17.1 14.65V18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M7.7 7.4V7.35"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.4"
      />
      <path
        d="M4.75 4.75H19.25V19.25H4.75V4.75Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  X: (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M6 5L18.2 19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
      <path
        d="M18 5L5.8 19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
    </svg>
  ),
} as const

export function Hero({ language }: HeroProps) {
  const pageCopy = copy[language]
  const heroCopy = pageCopy.hero
  const heroLinks = links.filter((link) => link.label in iconByLabel)

  return (
    <section className="hero section" id="home">
      <div aria-hidden="true" className="ambient ambient--primary" />
      <div aria-hidden="true" className="ambient ambient--secondary" />
      <div aria-hidden="true" className="hero__grid" />

      <div className="hero__content reveal">
        <p className="status-pill">{heroCopy.status}</p>

        <h1>
          {heroCopy.heading}
          {heroCopy.highlight ? (
            <>
              {' '}
              <span className="hero__highlight">{heroCopy.highlight}</span>
            </>
          ) : null}
        </h1>

        <p className="hero__subtitle">{heroCopy.subtitle}</p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            {heroCopy.projectsCta}
          </a>
          <a className="button button--secondary" href="#contact">
            {heroCopy.contactCta}
          </a>
        </div>

        <nav aria-label={pageCopy.nav.externalLabel} className="hero__socials">
          {heroLinks.map((link) => (
            <a
              aria-label={link.label}
              className="hero__social-link"
              href={link.href}
              key={link.href}
              rel={link.kind === 'social' ? 'noopener noreferrer' : undefined}
              target={link.kind === 'social' ? '_blank' : undefined}
            >
              {iconByLabel[link.label as keyof typeof iconByLabel]}
            </a>
          ))}
        </nav>
      </div>

      <a
        aria-label={heroCopy.projectsCta}
        className="hero__scroll"
        href="#projects"
      >
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 5V19M12 19L6.5 13.5M12 19L17.5 13.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
        <span className="visually-hidden">{heroCopy.projectsCta}</span>
      </a>
    </section>
  )
}
