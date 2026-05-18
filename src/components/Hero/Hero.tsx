import { copy, type Language } from '../../data/i18n/i18n'

type HeroProps = {
  language: Language
}

export function Hero({ language }: HeroProps) {
  const heroCopy = copy[language].hero

  return (
    <section className="hero section" id="home">
      <div aria-hidden="true" className="ambient ambient--primary" />
      <div aria-hidden="true" className="ambient ambient--secondary" />

      <div className="hero__content reveal">
        <p className="status-pill">{heroCopy.status}</p>

        <h1>
          {heroCopy.heading}{' '}
          <span className="hero__highlight">{heroCopy.highlight}</span>
        </h1>

        <p className="hero__subtitle">{heroCopy.subtitle}</p>

        <p className="hero__note">{heroCopy.note}</p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            {heroCopy.projectsCta}
          </a>
          <a className="button button--secondary" href="#contact">
            {heroCopy.contactCta}
          </a>
        </div>
      </div>
    </section>
  )
}
