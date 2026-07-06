import { useEffect, useRef, useState } from 'react'
import portraitSrc from '../../assets/images/allen-portrait1.jpg'
import portrait360Src from '../../assets/images/generated/allen-portrait-360.webp'
import portrait640Src from '../../assets/images/generated/allen-portrait-640.webp'
import portrait900Src from '../../assets/images/generated/allen-portrait-900.webp'
import { copy, type Language } from '../../data/i18n/i18n'
import { links } from '../../data/links/links'
import { AboutAccordion } from '../AboutAccordion/AboutAccordion'
import { AboutJourney } from '../AboutJourney/AboutJourney'

type AboutSectionProps = {
  language: Language
}

export function AboutSection({ language }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasEnteredAbout, setHasEnteredAbout] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const socialLinks = links.filter((link) => link.kind === 'social')
  const aboutCopy = copy[language].about

  useEffect(() => {
    const section = sectionRef.current

    if (!section || hasEnteredAbout) {
      return
    }

    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        setHasEnteredAbout(true)
        aboutObserver.disconnect()
      },
      {
        rootMargin: '0px 0px -18%',
        threshold: 0.12,
      },
    )

    aboutObserver.observe(section)

    return () => aboutObserver.disconnect()
  }, [hasEnteredAbout])

  return (
    <section
      className={`section about-section${
        hasEnteredAbout ? ' about-section--title-animated' : ''
      }`}
      id="about"
      ref={sectionRef}
    >
      <div className="about-layout">
        <div className="about-visual reveal">
          <div aria-hidden="true" className="about-visual__glow" />
          <figure className="portrait-card">
            <picture>
              <source
                sizes="(max-width: 760px) min(100vw - 2.2rem, 420px), 38vw"
                srcSet={`${portrait360Src} 360w, ${portrait640Src} 640w, ${portrait900Src} 900w`}
                type="image/webp"
              />
              <img
                src={portraitSrc}
                alt={aboutCopy.alt}
                height="1280"
                loading="lazy"
                sizes="(max-width: 760px) min(100vw - 2.2rem, 420px), 38vw"
                width="1024"
              />
            </picture>
          </figure>
        </div>

        <div className="about-content reveal">
          <p className="eyebrow">{aboutCopy.eyebrow}</p>
          <h2>{aboutCopy.heading}</h2>
          <ul className="about-badges" aria-label={aboutCopy.eyebrow}>
            {aboutCopy.badges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
          <div className="about-copy">
            {aboutCopy.intro.map((paragraph) => (
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

      <AboutAccordion language={language} />
      <AboutJourney language={language} />
    </section>
  )
}
