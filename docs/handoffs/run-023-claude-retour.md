# RUN-023 — Retour Claude : titres de sections et Hero

```text
RUN et sous-tâche / auteur réel : RUN-023, passe structure titres + Hero ; Claude (main, session Claude Code).
Modèle et effort effectifs (ou inconnus) : Claude Opus 5.5 (claude-opus-5-5), effort bas ; aucun sous-agent.
Statut : completed (sous-tâche) ; validation visuelle d'Allen et QA Codex requises.
```

## Faits vérifiés et décisions proposées

- Cinq H2 de sections `.section-title` : Services, Portfolio, Stack & skills,
  About, Contact. Préfixe « 01 / » à « 05 / » fourni **uniquement** par le
  compteur CSS existant (`section-index`, désormais incrémenté sur
  `.section-title`, `::before` en couleur atténuée). Pas de préfixe dans le DOM.
  Le texte DOM du H2 est le libellé seul ; selon la spec accname, le contenu
  `::before` entre dans le nom accessible (« 01 / Services ») — non vérifié
  avec un lecteur d'écran.
- Anciens H2 Services/Projets/Stack supprimés ; About et Contact passent en H3
  (`.about-content__subtitle`, `.contact-panel__title`) ; parcours en H3
  (`#about-journey-title` conservé), douze étapes en H4. Groupes de projets H3,
  cartes H4, prestations H3 inchangés. Aucun `.eyebrow` restant dans le DOM ni
  dans les CSS (`.eyebrow`, `.eyebrow--section` supprimés après recherche).
- Hero : H1 = nom seul ; `span.hero__role` supprimé ; H2 = `hero.role`
  existant ; sous-titre FR/EN du contrat ; champs `hero.heading`/`highlight` et
  la branche JSX du highlight supprimés (usages recherchés : composant, tests).
- **Décision proposée (à valider par Allen)** : les H3 About/Contact/parcours
  sont ramenés à 2.25rem (1.75rem sous 760 px) pour que le H2 numéroté domine.
  Avant ajustement, le H3 Contact restait à 80 px sous un H2 de 56 px :
  hiérarchie visuelle inversée. Le titre Contact est aligné en haut de sa
  rangée pour éviter un vide sous le H2 (grille alignée en bas).
- Badges About : `aria-label` = `about.heading` (« About »), valeur toujours
  valide après retrait de l'eyebrow.

## Travail effectué / fichiers modifiés

- Composants : Hero, ServicesSection, ProjectsSection, StackSection,
  AboutSection, AboutJourney, ContactSection.
- `src/data/i18n/i18n.ts` : `heading` porte le libellé de section ;
  `about.subheading`, `contact.subheading` portent les anciens titres ;
  `eyebrow`, `hero.heading`, `hero.highlight` retirés ; sous-titres Hero.
- CSS : section-headings (titre partagé, compteur, grille split sans ligne
  fantôme : intro sur la même rangée que le H2), hero, about-profile,
  about-journey, contact-footer, responsive-1040, responsive-760.
  Sélecteur `.section-heading--split p` (au lieu de `> div > p`) pour éviter
  un nouvel avertissement Biome `noDescendingSpecificity`.
- Tests : `content-contracts` (nouveaux champs) ; `render-contracts` ajoute un
  test FR/EN de hiérarchie (H1 nom seul, H2 Hero = rôle, pas de hero__role,
  un H2 par section avec libellé attendu, services-title, aucun eyebrow,
  H3 About/Contact/parcours, 12 H4, aucun autre H2 dans About).

Hors liste : aucun fichier modifié. `DESIGN.md:620` décrit encore le compteur
sur `.eyebrow--section` suivi d'un filet ; patch proposé pour Codex :
« `01 / Services` … `05 / Contact` par compteur CSS sur `.section-title`
(H2), sans filet ».

## Commandes et résultats

- `npm run build`, `npm run lint`, `npm run biome:check` (74 fichiers, 0
  avertissement), `npm run test` (54/54), `git diff --check` : réussis.
- Chrome headless (google-chrome, CDP, script hors dépôt) sur `vite preview` :
  24 combinaisons 320×740, 390×844, 768×1024, 1440×900, 667×375 (reduced-motion),
  1440×300 × FR/EN × clair/sombre, accès direct `#about` puis reload : aucun
  débordement horizontal de page, aucune erreur JS, un seul H1, zéro `.eyebrow`,
  focus sur `#about` sans contour, Tab → lien suivant `:focus-visible`.
  Les seuls éléments hors viewport sont les étapes du parcours dans la piste
  horizontale défilante (comportement attendu).
- Captures avant (build de HEAD 17dfeb0, sans RUN-022) / après, FR, 1440×900
  clair, 768×1024 clair, 390×844 sombre, sections home, services, projects,
  stack, about, contact : dossier de session éphémère
  `/tmp/claude-1000/-home-allen-mes-projets-portfolio-dev/b0694b71-9780-4e68-bc6f-823da72b5e98/scratchpad/shots/`
  (à régénérer par Codex si besoin d'une preuve durable).

## Contrôles non exécutés / limites

- Dépliage Projets, accordéons, flèches de la timeline et transitions
  inter-sections non rejoués interactivement (DOM/JS de ces composants non
  modifiés ; seules les hauteurs d'en-tête changent).
- Firefox/Safari, lecteur d'écran réel et appareil physique non vérifiés.
- Moteur RUN-022 (App, sectionStack, animations, reduced-motion) non touché ;
  ses changements restent non committés et hors du commit RUN-023.

## Action requise et reprise

- Allen : valider la nouvelle hiérarchie et l'échelle réduite des H3
  About/Contact.
- Codex : QA, mise à jour DESIGN.md/journal/suivi, statut RUN-022/RUN-023.
- Écart au contrat : celui-ci prévoyait « pas de commit » ; Allen a demandé
  explicitement de committer. Seuls les fichiers RUN-023 sont committés,
  sans push.
