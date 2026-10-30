import { useEffect, useState } from 'react'

import { heroStats } from '../../data/hero/heroStats'
import { copy, type Language } from '../../data/i18n/i18n'
import { links } from '../../data/links/links'

type HeroProps = {
  language: Language
}

type CountUpProps = {
  label: string
  prefix: string
  value: number
}

function CountUp({ label, prefix, value }: CountUpProps) {
  const [displayValue, setDisplayValue] = useState(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    return prefersReducedMotion ? value : 0
  })

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      return
    }

    const duration = 1200
    const start = performance.now()
    let animationFrameId = 0

    const updateValue = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1)
      const easedProgress = 1 - (1 - progress) ** 3

      setDisplayValue(Math.round(value * easedProgress))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateValue)
      }
    }

    animationFrameId = requestAnimationFrame(updateValue)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [value])

  return (
    <>
      <span aria-hidden="true" className="hero__stat-value">
        {prefix}
        {displayValue}
      </span>
      <span className="visually-hidden">
        {prefix}
        {value} {label}
      </span>
    </>
  )
}

export function Hero({ language }: HeroProps) {
  const pageCopy = copy[language]
  const heroCopy = pageCopy.hero

  return (
    <section className="hero section" id="home" tabIndex={-1}>
      <div className="hero__content reveal">
        <h1 className="hero__title">
          <span className="hero__name">{heroCopy.name}</span>
        </h1>

        <div className="hero__body">
          <div className="hero__intro">
            <h2 className="hero__heading">{heroCopy.role}</h2>

            <p className="hero__subtitle">{heroCopy.subtitle}</p>
          </div>

          <div className="hero__aside">
            <div className="hero__actions">
              <a className="button button--primary" href="#contact">
                {heroCopy.contactCta}
              </a>
              <a className="button button--secondary" href="#projects">
                {heroCopy.projectsCta}
              </a>
            </div>

            <nav
              aria-label={pageCopy.nav.externalLabel}
              className="hero__socials"
            >
              {links.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  rel={
                    link.kind === 'social' ? 'noopener noreferrer' : undefined
                  }
                  target={link.kind === 'social' ? '_blank' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="hero__footer">
          <dl aria-label={heroCopy.statsLabel} className="hero__stats">
            {heroStats.map((stat) => {
              const label = heroCopy.statLabels[stat.id]

              return (
                <div className="hero__stat" key={stat.id}>
                  <dt>{label}</dt>
                  <dd>
                    {'prefix' in stat ? (
                      <CountUp
                        label={label}
                        prefix={stat.prefix}
                        value={stat.value}
                      />
                    ) : (
                      <span className="hero__stat-text">
                        {stat.value[language]}
                      </span>
                    )}
                  </dd>
                </div>
              )
            })}
          </dl>

          <a className="hero__scroll" href="#projects">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 5V19M12 19L6.5 13.5M12 19L17.5 13.5"
                stroke="currentColor"
                strokeLinecap="square"
                strokeWidth="1.5"
              />
            </svg>
            <span className="visually-hidden">{heroCopy.projectsCta}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
