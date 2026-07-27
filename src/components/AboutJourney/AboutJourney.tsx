import { useState } from 'react'
import {
  type AboutJourneyItem,
  aboutJourneyItems,
  getCollapsedJourneyItemCount,
} from '../../data/about/about'
import type { Language } from '../../data/i18n/i18n'

type AboutJourneyProps = {
  language: Language
}

type JourneyIconProps = {
  kind: AboutJourneyItem['icon']
}

const timelineLabels: Record<
  Language,
  {
    close: string
    end: string
    open: string
    showLess: string
    showMore: string
    start: string
  }
> = {
  fr: {
    start: 'Octobre 2025',
    end: 'Aujourd’hui',
    open: 'Ouvrir',
    close: 'Fermer',
    showMore: 'Afficher plus',
    showLess: 'Réduire',
  },
  en: {
    start: 'October 2025',
    end: 'Today',
    open: 'Open',
    close: 'Close',
    showMore: 'More',
    showLess: 'Reduce',
  },
}

function JourneyIcon({ kind }: JourneyIconProps) {
  switch (kind) {
    case 'markup':
      return (
        <svg
          aria-hidden="true"
          className="about-journey__icon"
          fill="none"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="m9 8-4 4 4 4M15 8l4 4-4 4M13 6l-2 12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
      )
    case 'javascript':
      return (
        <svg
          aria-hidden="true"
          className="about-journey__icon"
          fill="none"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="M7.5 6.5h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M10 10v3.3c0 1-.55 1.7-1.55 1.7M12.35 14.35c.42.43.98.65 1.68.65.8 0 1.47-.38 1.47-1.1 0-.64-.45-.93-1.46-1.2-.9-.24-1.5-.56-1.5-1.27 0-.77.67-1.28 1.5-1.28.58 0 1.04.16 1.4.48"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.45"
          />
        </svg>
      )
    case 'odin':
      return (
        <svg
          aria-hidden="true"
          className="about-journey__icon"
          fill="none"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="m12 5 6.5 3.7-2 7.4L12 19l-4.5-2.9-2-7.4L12 5Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          <path
            d="m8.4 9.2 3.6 6.3 3.6-6.3-3.6 2.1-3.6-2.1Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      )
    case 'thp':
      return (
        <svg
          aria-hidden="true"
          className="about-journey__icon"
          fill="none"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="m4.8 9.2 7.2-3 7.2 3-7.2 3-7.2-3Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
          <path
            d="M7.2 10.6v4.2c1.35 1 2.85 1.5 4.8 1.5s3.45-.5 4.8-1.5v-4.2M19.2 9.2v4.4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
      )
    case 'ruby':
      return (
        <svg
          aria-hidden="true"
          className="about-journey__icon"
          fill="none"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="m6 8.4 3-3h6l3 3-6 10.2L6 8.4Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
          <path
            d="M6 8.4h12M9 5.4l3 13.2 3-13.2M9 5.4l3 3 3-3"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35"
          />
        </svg>
      )
    case 'rails':
      return (
        <svg
          aria-hidden="true"
          className="about-journey__icon"
          fill="none"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="M6.5 8.2c0-1.2 2.45-2.2 5.5-2.2s5.5 1 5.5 2.2-2.45 2.2-5.5 2.2-5.5-1-5.5-2.2Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M6.5 8.2v7.6c0 1.2 2.45 2.2 5.5 2.2s5.5-1 5.5-2.2V8.2M6.5 12c0 1.2 2.45 2.2 5.5 2.2s5.5-1 5.5-2.2"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </svg>
      )
    case 'fullstack':
      return (
        <svg
          aria-hidden="true"
          className="about-journey__icon"
          fill="none"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="m12 5 7 3.6-7 3.6-7-3.6L12 5ZM5 12l7 3.6 7-3.6M5 15.8l7 3.6 7-3.6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
      )
    case 'react':
      return (
        <svg
          aria-hidden="true"
          className="about-journey__icon"
          fill="none"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 12.2c4.4 0 8-1.45 8-3.25s-3.6-3.25-8-3.25-8 1.45-8 3.25 3.6 3.25 8 3.25Z"
            stroke="currentColor"
            strokeWidth="1.35"
          />
          <path
            d="M9.15 10.55c2.2 3.8 5.05 6.6 6.62 5.7 1.55-.9.42-4.75-1.78-8.56S8.94 1.1 7.37 2c-1.55.9-.42 4.75 1.78 8.55Z"
            stroke="currentColor"
            strokeWidth="1.35"
          />
          <path
            d="M14 10.55c-2.2 3.8-5.05 6.6-6.62 5.7-1.55-.9-.42-4.75 1.78-8.56s5.05-6.6 6.62-5.7c1.55.9.42 4.75-1.78 8.55ZM12 12.2h.01"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.35"
          />
        </svg>
      )
    case 'today':
      return (
        <svg
          aria-hidden="true"
          className="about-journey__icon"
          fill="none"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="m5 16 4.2-4.2 3 3L19 8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
          <path
            d="M14.5 8H19v4.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
      )
    default:
      return (
        <svg
          aria-hidden="true"
          className="about-journey__icon"
          fill="none"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="M9.1 6.3c1.15 0 2.05.9 2.05 2s-.9 2-2.05 2c-1.1 0-2-.9-2-2s.9-2 2-2ZM14.9 11.1c1.15 0 2.05.9 2.05 2s-.9 2-2.05 2c-1.1 0-2-.9-2-2s.9-2 2-2ZM8.1 14.8c.95 0 1.7.75 1.7 1.7s-.75 1.7-1.7 1.7-1.7-.75-1.7-1.7.75-1.7 1.7-1.7Z"
            stroke="currentColor"
            strokeWidth="1.65"
          />
        </svg>
      )
  }
}

export function AboutJourney({ language }: AboutJourneyProps) {
  const [openItemIds, setOpenItemIds] = useState(() => [
    aboutJourneyItems[0]?.id ?? '',
  ])
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

      <div className="about-journey__tree">
        <span className="about-journey__badge about-journey__badge--start">
          {labels.start}
        </span>
        <ol className="about-journey__list" id="about-journey-list">
          {visibleItems.map((item, index) => {
            const side = index % 2 === 0 ? 'left' : 'right'
            const isOpen = openItemIds.includes(item.id)
            const panelId = `about-journey-${item.id}-panel`

            return (
              <li
                className={`about-journey__item about-journey__item--${side}${
                  isOpen ? ' about-journey__item--open' : ''
                }${item.dateLabel ? ' about-journey__item--dated' : ''}`}
                key={item.id}
              >
                <span aria-hidden="true" className="about-journey__branch" />
                {item.dateLabel ? (
                  <span className="about-journey__date">
                    {item.dateLabel[language]}
                  </span>
                ) : null}
                <span aria-hidden="true" className="about-journey__node" />
                <button
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  aria-label={`${isOpen ? labels.close : labels.open} ${index + 1}. ${
                    item.title[language]
                  }`}
                  className="about-journey__card"
                  onClick={() =>
                    setOpenItemIds((currentIds) =>
                      currentIds.includes(item.id)
                        ? currentIds.filter(
                            (currentId) => currentId !== item.id,
                          )
                        : [...currentIds, item.id],
                    )
                  }
                  type="button"
                >
                  <span className="about-journey__index">{index + 1}</span>
                  <span className="about-journey__icon-shell">
                    <JourneyIcon kind={item.icon} />
                  </span>
                  <span
                    aria-hidden={!isOpen}
                    className="about-journey__content"
                    id={panelId}
                  >
                    <span className="about-journey__title">
                      {item.title[language]}
                    </span>
                    <span className="about-journey__description">
                      {item.description[language]}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ol>
        {!hasHiddenItems || showAllItems ? (
          <span className="about-journey__badge about-journey__badge--end">
            {labels.end}
          </span>
        ) : null}
      </div>
      {hasHiddenItems ? (
        <div className="about-journey__actions">
          <button
            aria-controls="about-journey-list"
            aria-expanded={showAllItems}
            className="about-journey__toggle"
            onClick={() => setShowAllItems((isShowingAll) => !isShowingAll)}
            type="button"
          >
            <span>{showAllItems ? labels.showLess : labels.showMore}</span>
            <svg
              aria-hidden="true"
              className="about-journey__toggle-icon"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="M5 8L10 13L15 8"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </section>
  )
}
