import { useState } from 'react'
import {
  aboutJourneyItems,
  getCollapsedJourneyItemCount,
} from '../../data/about/about'
import type { Language } from '../../data/i18n/i18n'

type AboutJourneyProps = {
  language: Language
}

const timelineLabels: Record<
  Language,
  {
    end: string
    showLess: string
    showMore: string
    start: string
  }
> = {
  fr: {
    start: 'Octobre 2025',
    end: 'Aujourd’hui',
    showMore: 'Afficher plus',
    showLess: 'Réduire',
  },
  en: {
    start: 'October 2025',
    end: 'Today',
    showMore: 'More',
    showLess: 'Show less',
  },
}

export function AboutJourney({ language }: AboutJourneyProps) {
  const [showAllItems, setShowAllItems] = useState(false)
  const collapsedItemCount = getCollapsedJourneyItemCount(
    aboutJourneyItems.length,
  )
  const hasHiddenItems = aboutJourneyItems.length > collapsedItemCount
  const labels = timelineLabels[language]
  const visibleItems = showAllItems
    ? aboutJourneyItems
    : aboutJourneyItems.slice(0, collapsedItemCount)

  return (
    <section
      aria-labelledby="about-journey-title"
      className="about-journey reveal"
    >
      <header className="about-journey__header">
        <p className="eyebrow">Timeline</p>
        <h2 id="about-journey-title">My Coding Journey</h2>
      </header>

      <div className="about-journey__body">
        <p className="about-journey__bound">{labels.start}</p>
        <ol className="about-journey__list" id="about-journey-list">
          {visibleItems.map((item, index) => (
            <li className="about-journey__item" key={item.id}>
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
        {!hasHiddenItems || showAllItems ? (
          <p className="about-journey__bound">{labels.end}</p>
        ) : null}

        {hasHiddenItems ? (
          <button
            aria-controls="about-journey-list"
            aria-expanded={showAllItems}
            className="button button--secondary about-journey__toggle"
            onClick={() => setShowAllItems((isShowingAll) => !isShowingAll)}
            type="button"
          >
            {showAllItems ? labels.showLess : labels.showMore}
            <span aria-hidden="true" className="about-journey__sign">
              {showAllItems ? '−' : '+'}
            </span>
          </button>
        ) : null}
      </div>
    </section>
  )
}
