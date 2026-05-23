import { useState } from 'react'
import { aboutAccordionItems } from '../../data/about/about'
import type { Language } from '../../data/i18n/i18n'

type AboutAccordionProps = {
  language: Language
}

export function AboutAccordion({ language }: AboutAccordionProps) {
  const [openItemId, setOpenItemId] = useState(
    () => aboutAccordionItems[0]?.id ?? '',
  )

  return (
    <div className="about-accordion reveal">
      {aboutAccordionItems.map((item) => {
        const panelId = `about-accordion-${item.id}-panel`
        const isOpen = openItemId === item.id

        return (
          <div className="about-accordion__item" key={item.id}>
            <h3 className="about-accordion__heading">
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="about-accordion__trigger"
                onClick={() =>
                  setOpenItemId((currentId) =>
                    currentId === item.id ? '' : item.id,
                  )
                }
                type="button"
              >
                <span>{item.question[language]}</span>
                <svg
                  aria-hidden="true"
                  className="about-accordion__chevron"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="m5 7.5 5 5 5-5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </button>
            </h3>

            <div
              className="about-accordion__panel"
              hidden={!isOpen}
              id={panelId}
            >
              <p>{item.answer[language]}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
