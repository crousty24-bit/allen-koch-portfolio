import { copy, type Language } from '../../data/i18n/i18n'
import { links } from '../../data/links/links'

type ContactSectionProps = {
  language: Language
}

export function ContactSection({ language }: ContactSectionProps) {
  const email = links.find((link) => link.kind === 'email')
  const contactCopy = copy[language].contact

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-panel reveal">
        <div aria-hidden="true" className="contact-panel__overlay" />
        <div className="contact-panel__content">
          <p className="eyebrow">Contact</p>
          <h2>{contactCopy.heading}</h2>
          <p>{contactCopy.text}</p>
          {email ? (
            <a
              className="button button--primary button--large"
              href={email.href}
            >
              {email.href.replace('mailto:', '')}
            </a>
          ) : null}
          <dl className="contact-meta">
            <div>
              <dt>{contactCopy.meta.profile[0]}</dt>
              <dd>{contactCopy.meta.profile[1]}</dd>
            </div>
            <div>
              <dt>{contactCopy.meta.focus[0]}</dt>
              <dd>{contactCopy.meta.focus[1]}</dd>
            </div>
            <div>
              <dt>{contactCopy.meta.location[0]}</dt>
              <dd>{contactCopy.meta.location[1]}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
