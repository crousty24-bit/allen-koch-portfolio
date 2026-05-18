import type { CSSProperties } from 'react'
import { skills } from '../../data/skills/skills'
import { stack } from '../../data/stack/stack'

const iconUrl = (icon: string, color?: string) =>
  `https://cdn.simpleicons.org/${icon}${color ? `/${color}` : ''}`

export function StackSection() {
  return (
    <section className="section stack-section" id="stack">
      <div className="section-heading section-heading--center reveal">
        <p className="eyebrow">Stack & skills</p>
        <h2>Une base technique simple, lisible et orientée livraison.</h2>
        <p>
          La stack met l'accent sur des outils que je peux comprendre, déployer
          et maintenir dans le temps.
        </p>
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
                    src={iconUrl(item.icon, item.iconColor)}
                    width="16"
                  />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <article
            className="skill-card reveal"
            key={skill.title}
            style={{ '--index': index } as CSSProperties}
          >
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="chip-list">
              {skill.keywords.map((keyword) => (
                <span className="chip chip--muted" key={keyword}>
                  {keyword}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
