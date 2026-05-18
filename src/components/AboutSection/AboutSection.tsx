import portraitSrc from '../../assets/images/allen-portrait1.jpg'
import { copy, type Language } from '../../data/i18n/i18n'
import { links } from '../../data/links/links'

type AboutSectionProps = {
  language: Language
}

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
            {aboutCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
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
    </section>
  )
}
