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
  const motionRef = useRef({ frame: 0 })
  const [edges, setEdges] = useState({ atStart: true, atEnd: false })
  const labels = timelineLabels[language]

  useEffect(() => {
    const track = trackRef.current
    const motion = motionRef.current
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
      cancelAnimationFrame(motion.frame)
      motion.frame = 0
    }
  }, [])

  // Edge fade driven by the measured scroll speed: it eases with the real
  // motion and ends once scrollLeft (snap included) has stopped for 100 ms.
  const fadeWhileMoving = (track: HTMLOListElement) => {
    const motion = motionRef.current
    if (motion.frame) {
      return
    }

    let lastLeft = track.scrollLeft
    let lastTime = performance.now()
    let stillSince = lastTime
    let edge = 1
    track.setAttribute('data-moving', '')

    const step = (time: number) => {
      const left = track.scrollLeft
      const speed = Math.abs(left - lastLeft) / Math.max(time - lastTime, 1)
      if (left !== lastLeft) {
        stillSince = time
      }
      lastLeft = left
      lastTime = time

      if (time - stillSince > 100) {
        track.removeAttribute('data-moving')
        track.style.removeProperty('--journey-edge')
        motion.frame = 0
        return
      }

      // Full fade (edges at 30 % opacity) from 1.5 px/ms, eased halfway each frame to absorb jitter.
      edge += (1 - 0.7 * Math.min(speed / 1.5, 1) - edge) / 2
      track.style.setProperty('--journey-edge', edge.toFixed(3))
      motion.frame = requestAnimationFrame(step)
    }

    motion.frame = requestAnimationFrame(step)
  }

  const scrollTrack = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) {
      return
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (!reduceMotion) {
      fadeWhileMoving(track)
    }
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
        <h3 id="about-journey-title">My Coding Journey</h3>
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
              <h4 className="about-journey__title">{item.title[language]}</h4>
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
