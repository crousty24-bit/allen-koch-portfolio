import { type CSSProperties, useEffect, useRef, useState } from 'react'
import { aboutJourneyItems } from '../../data/about/about'
import type { Language } from '../../data/i18n/i18n'

type AboutJourneyProps = {
  language: Language
}

const timelineLabels: Record<
  Language,
  {
    end: string
    next: string
    previous: string
    region: string
    start: string
  }
> = {
  fr: {
    start: 'Octobre 2025',
    end: 'Aujourd’hui',
    next: 'Étapes suivantes',
    previous: 'Étapes précédentes',
    region: 'Étapes du parcours, défilement horizontal',
  },
  en: {
    start: 'October 2025',
    end: 'Today',
    next: 'Next steps',
    previous: 'Previous steps',
    region: 'Journey steps, horizontal scroll',
  },
}

export function AboutJourney({ language }: AboutJourneyProps) {
  const trackRef = useRef<HTMLOListElement>(null)
  const [edges, setEdges] = useState({ atStart: true, atEnd: false })
  const labels = timelineLabels[language]

  useEffect(() => {
    const track = trackRef.current
    if (!track) {
      return
    }

    const updateEdges = () => {
      const maxScroll = track.scrollWidth - track.clientWidth
      // 1px tolerance absorbs subpixel scroll positions.
      setEdges({
        atStart: track.scrollLeft <= 1,
        atEnd: track.scrollLeft >= maxScroll - 1,
      })
    }

    updateEdges()
    track.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)

    return () => {
      track.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [])

  const scrollTrack = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) {
      return
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: reduceMotion ? 'instant' : 'smooth',
    })
  }

  return (
    <section
      aria-labelledby="about-journey-title"
      className="about-journey reveal"
    >
      <header className="about-journey__header">
        <div>
          <p className="eyebrow">Timeline</p>
          <h2 id="about-journey-title">My Coding Journey</h2>
        </div>
        <div className="about-journey__controls">
          <button
            aria-controls="about-journey-list"
            aria-label={labels.previous}
            className="button button--secondary about-journey__arrow"
            disabled={edges.atStart}
            onClick={() => scrollTrack(-1)}
            type="button"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            aria-controls="about-journey-list"
            aria-label={labels.next}
            className="button button--secondary about-journey__arrow"
            disabled={edges.atEnd}
            onClick={() => scrollTrack(1)}
            type="button"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </header>

      <div className="about-journey__bounds">
        <span>{labels.start}</span>
        <span>{labels.end}</span>
      </div>

      {/* Focusable region so arrow keys scroll the track natively. */}
      <ol
        aria-label={labels.region}
        className="about-journey__list"
        id="about-journey-list"
        ref={trackRef}
        // biome-ignore lint/a11y/noNoninteractiveTabindex: scrollable region must be keyboard reachable
        tabIndex={0}
      >
        {aboutJourneyItems.map((item, index) => (
          <li
            className="about-journey__item"
            key={item.id}
            style={{ '--index': index } as CSSProperties}
          >
            <span aria-hidden="true" className="about-journey__index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="about-journey__content">
              {item.dateLabel ? (
                <p className="about-journey__date">
                  {item.dateLabel[language]}
                </p>
              ) : null}
              <h3 className="about-journey__title">{item.title[language]}</h3>
              <p className="about-journey__description">
                {item.description[language]}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
