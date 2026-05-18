export function Hero() {
  return (
    <section className="hero section" id="home">
      <div aria-hidden="true" className="ambient ambient--primary" />
      <div aria-hidden="true" className="ambient ambient--secondary" />

      <div className="hero__content reveal">
        <p className="status-pill">
          <span aria-hidden="true" />
          Fullstack Developer - Rails / React - Product-minded - AI Workflows
        </p>

        <h1>
          Construire des produits web{' '}
          <span className="hero__highlight">
            clairs, utiles et maintenables.
          </span>
        </h1>

        <p className="hero__subtitle">
          Développeur Fullstack Junior Rails / React, je construis des
          applications web orientées produit, de la conception MVP à
          l'amélioration continue.
        </p>

        <p className="hero__note">
          Penser produit, coder proprement, livrer utile avec l'IA comme levier,
          pas comme raccourci.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            Voir les projets
          </a>
          <a className="button button--secondary" href="#contact">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  )
}
