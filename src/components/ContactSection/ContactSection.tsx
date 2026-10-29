import { copy, type Language } from '../../data/i18n/i18n'
import { links } from '../../data/links/links'

type ContactSectionProps = {
  language: Language
}

export function ContactSection({ language }: ContactSectionProps) {
  const email = links.find((link) => link.kind === 'email')
  const contactCopy = copy[language].contact

  return (
    <section className="section contact-section" id="contact" tabIndex={-1}>
      <div className="contact-panel reveal">
        <h2 className="section-title">{contactCopy.heading}</h2>
        <h3 className="contact-panel__title">{contactCopy.subheading}</h3>
        <div className="contact-panel__aside">
          <p>{contactCopy.text}</p>
          {email ? (
            <a className="contact-panel__email" href={email.href}>
              {email.href.replace('mailto:', '')}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
