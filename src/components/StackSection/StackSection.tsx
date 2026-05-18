import type { CSSProperties } from 'react'
import { skills } from '../../data/skills/skills'
import { stack } from '../../data/stack/stack'

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

      <div className="stack-layout">
        <div className="stack-grid">
          {stack.map((category, index) => (
            <article
              className={`stack-card stack-card--${category.tone} reveal`}
              key={category.title}
              style={{ '--index': index } as CSSProperties}
            >
              <span className="stack-card__icon" aria-hidden="true" />
              <h3>{category.title}</h3>
              <p>{category.summary}</p>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside className="mindset-panel reveal">
          <p className="eyebrow">Approche</p>
          <h3>Comprendre d'abord. Construire ensuite.</h3>
          <p>
            Le code sert le besoin utilisateur. L'objectif est de livrer petit,
            clair, testable, puis d'améliorer avec des retours concrets.
          </p>
        </aside>
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
