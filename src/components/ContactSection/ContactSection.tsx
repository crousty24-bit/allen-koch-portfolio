import { links } from '../../data/links/links'

export function ContactSection() {
  const email = links.find((link) => link.kind === 'email')

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-panel reveal">
        <div aria-hidden="true" className="contact-panel__overlay" />
        <div className="contact-panel__content">
          <p className="eyebrow">Contact</p>
          <h2>Travaillons sur un projet clair, utile et maintenable.</h2>
          <p>
            Disponible pour échanger autour d'un produit web, d'un MVP ou d'une
            base technique à rendre plus propre.
          </p>
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
              <dt>Profil</dt>
              <dd>Fullstack Junior</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Rails / React</dd>
            </div>
            <div>
              <dt>Localisation</dt>
              <dd>France</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
