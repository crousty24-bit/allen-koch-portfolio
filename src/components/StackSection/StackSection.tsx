import { copy, type Language } from '../../data/i18n/i18n'
import { stack } from '../../data/stack/stack'
import { SkillsTree } from '../SkillsTree/SkillsTree'

type StackSectionProps = {
  language: Language
}

export function StackSection({ language }: StackSectionProps) {
  const stackCopy = copy[language].stack

  return (
    <section className="section stack-section" id="stack" tabIndex={-1}>
      <div className="section-heading section-heading--split reveal">
        <div>
          <p className="eyebrow eyebrow--section">{stackCopy.eyebrow}</p>
          <h2>{stackCopy.heading}</h2>
          <p>{stackCopy.text}</p>
        </div>
      </div>

      <dl className="stack-list reveal">
        {stack.map((category) => (
          <div className="stack-list__row" key={category.title}>
            <dt>{category.title}</dt>
            <dd>
              <ul className="chip-list">
                {category.items.map((item) => (
                  <li className="chip" key={item.label}>
                    {item.label}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      <SkillsTree language={language} />
    </section>
  )
}
