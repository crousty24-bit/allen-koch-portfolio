import portraitSrc from '../../assets/images/allen-portrait1.jpg'
import { copy, type Language } from '../../data/i18n/i18n'
import { links } from '../../data/links/links'
import { AboutAccordion } from '../AboutAccordion/AboutAccordion'
import { AboutJourney } from '../AboutJourney/AboutJourney'

type AboutSectionProps = {
  language: Language
}

const aboutCardIcons = [
  <svg
    aria-hidden="true"
    className="about-card__icon"
    fill="none"
    focusable="false"
    key="backend"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 8.5h14M7 4.5h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    />
    <path
      d="M8.5 13h2.25l1.5 2.5 2.25-5 1.5 3H18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    />
  </svg>,
  <svg
    aria-hidden="true"
    className="about-card__icon"
    fill="none"
    focusable="false"
    key="product"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4.5v15M5.5 12h15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.6"
    />
    <path
      d="M8.5 6.5h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.6"
    />
  </svg>,
  <svg
    aria-hidden="true"
    className="about-card__icon"
    fill="none"
    focusable="false"
    key="ai"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 8.5h10M7 14.5h5.5M8.5 4.5h7a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    />
    <path
      d="m15.25 14.25 1.25 1.25 2.25-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    />
  </svg>,
]

export function AboutSection({ language }: AboutSectionProps) {
  const socialLinks = links.filter((link) => link.kind === 'social')
  const aboutCopy = copy[language].about

  return (
    <section className="section about-section" id="about">
      <div className="about-layout">
        <div className="about-visual reveal">
          <div aria-hidden="true" className="about-visual__glow" />
          <figure className="portrait-card">
            <img
              src={portraitSrc}
              alt={aboutCopy.alt}
              height="1280"
              loading="lazy"
              width="1024"
            />
          </figure>
          <div className="floating-tags">
            {aboutCopy.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="about-content reveal">
          <p className="eyebrow">{aboutCopy.eyebrow}</p>
          <h2>{aboutCopy.heading}</h2>
          <div className="about-copy">
            <p>{aboutCopy.intro}</p>
            <div className="about-cards">
              {aboutCopy.cards.map((card, index) => (
                <article className="about-card" key={card.title}>
                  <div className="about-card__icon-shell">
                    {aboutCardIcons[index]}
                  </div>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="social-row">
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <AboutAccordion language={language} />
      <AboutJourney language={language} />
    </section>
  )
}
