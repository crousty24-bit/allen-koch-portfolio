import type { CSSProperties } from 'react'
import { copy, type Language } from '../../data/i18n/i18n'
import { stack } from '../../data/stack/stack'
import { SkillsTree } from '../SkillsTree/SkillsTree'

const iconUrl = (icon: string, color?: string) =>
  `https://cdn.simpleicons.org/${icon}${color ? `/${color}` : ''}`

type StackSectionProps = {
  language: Language
}

export function StackSection({ language }: StackSectionProps) {
  const stackCopy = copy[language].stack

  return (
    <section className="section stack-section" id="stack">
      <div className="section-heading section-heading--split reveal">
        <div>
          <p className="eyebrow">{stackCopy.eyebrow}</p>
          <h2>{stackCopy.heading}</h2>
          <p>{stackCopy.text}</p>
        </div>
      </div>

      <div className="stack-grid">
        {stack.map((category, index) => (
          <article
            className={`stack-card stack-card--${category.tone} reveal`}
            key={category.title}
            style={{ '--index': index } as CSSProperties}
          >
            <span className="stack-card__icon" aria-hidden="true">
              <img
                alt=""
                height="24"
                loading="lazy"
                src={iconUrl(category.icon, category.iconColor)}
                width="24"
              />
            </span>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item) => (
                <li className="stack-badge" key={item.label}>
                  <img
                    alt=""
                    height="16"
                    loading="lazy"
                    src={item.iconSrc ?? iconUrl(item.icon, item.iconColor)}
                    width="16"
                  />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <SkillsTree language={language} />
    </section>
  )
}
