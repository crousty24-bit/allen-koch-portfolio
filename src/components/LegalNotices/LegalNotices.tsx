import type { Language } from '../../data/i18n/i18n'
import { legalCopy, privacySources, publisher } from '../../data/legal/legal'

type LegalNoticesProps = { language: Language }

export function LegalNotices({ language }: LegalNoticesProps) {
  const text = legalCopy[language]
  return (
    <div className="legal-notices">
      <section id="legal-notice" tabIndex={-1} aria-labelledby="legal-title">
        <h2 id="legal-title">{text.legalTitle}</h2>
        <p>{text.publisher}</p>
        <p>{text.status}</p>
        <p>
          <a href={`mailto:${publisher.email}`}>{publisher.email}</a>
        </p>
        {publisher.address ? <p>{publisher.address}</p> : null}
        {publisher.phone ? <p>{publisher.phone}</p> : null}
        {publisher.host ? (
          <p>
            {text.host} : {publisher.host}
          </p>
        ) : null}
      </section>
      <section id="privacy" tabIndex={-1} aria-labelledby="privacy-title">
        <h2 id="privacy-title">{text.privacyTitle}</h2>
        <p>{text.updated}</p>
        {text.sections.map((section) => (
          <div key={section.title}>
            <h3>{section.title}</h3>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}
        <h3>{text.sources}</h3>
        <ul>
          {privacySources.map((source) => (
            <li key={source.href}>
              <a href={source.href}>{source.label}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
