# RUN-007 — Contrat Claude : cohérence visuelle intégrée et image sociale

## Mandat et relais

Allen demande le 29 octobre 2026 de commencer RUN-007 sur une nouvelle branche
feature commune à RUN-007, RUN-008 et aux améliorations qu’il donnera ensuite.
Ce contrat est préparé par Codex pour qu’Allen l’exécute dans une session Claude
séparée. Aucun message n’a été envoyé à Claude et aucune contribution Claude
n’est encore reçue pour ce RUN.

- Branche : `feature/refonte-integration-visuelle` ; rester sur cette branche.
- Émetteur : Codex, coordination et QA. Destinataire : Claude, design/UI.
- Modèle principal : choix d’Allen. Si Claude délègue un lot utile : préférence
  Sonnet 5.5, effort medium selon `../custom-agents.md`, disponibilité à vérifier.
- Bénéfice attendu : revue de composition par le responsable design et adaptation
  de l’asset social, sans faire redessiner le site par l’intégrateur technique.
- Statut global : RUN-007 reste `verify` jusqu’au retour et à sa vérification Codex.
  Ne pas lancer RUN-008, versionner une release ou publier depuis ce relais.

## Objectif et livrables

Revoir le rendu intégré Hero → Services → Projets → Stack → About → Contact,
avec header/footer, dans la direction monochrome validée. Vérifier la hiérarchie,
les espacements entre lots, les alignements, le rythme et les deux thèmes/langues
sur desktop et mobile. Séparer défauts observés et propositions esthétiques.
Corriger uniquement les écarts ciblés à la direction existante ; une nouvelle
direction ou une refonte de section doit revenir à Allen sous forme de proposition.
L’absence de défaut visuel est un résultat recevable, sans CSS ajouté pour justifier le lot.

Défaut déjà vérifié par Codex et le relecteur SEO : `public/og-image.png`
(1200×630) utilise encore le fond bleu/violet et le texte « développeur fullstack
junior ». Créer une image sociale monochrome cohérente avec le site actuel,
à 1200×630, lisible en aperçu réduit, sans « junior », ni références/chiffres
inventés. Réutiliser les polices et l’identité validées, sans nouvelle dépendance.
Fournir la source reproductible minimale de cet asset si un fichier source est
nécessaire. Employer une nouvelle URL telle que `/og-image-refonte.png` pour
éviter de réutiliser une image stable potentiellement en cache ; mettre à jour
les références image OG/Twitter/JSON-LD ensemble dans `index.html`.

## Références à lire

- `../../AGENTS.md`, `../../CLAUDE.md`, `../../brief.md`, `../../DESIGN.md` R8–R25.
- `../../runs-workflow.md` RUN-007 et dernière entrée RUN-007 du journal.
- `../claude-design-brief.md`, `../testing.md`, `../review-policy.md`.
- Les composants et styles effectivement concernés dans `src/` ; les maquettes
  de `../maquettes_references/` sont des références, pas du code à importer.
- Preuves techniques initiales Codex : chemin et limites au journal RUN-007.

## Propriété des fichiers après remise à Allen

Claude peut modifier séquentiellement, une fois le tour Codex terminé :

- `src/styles/globals/*.css` pour les écarts graphiques prouvés et ciblés ;
- le nouvel asset social et sa source minimale dans `public/` ;
- uniquement les références de cet asset dans `index.html` ;
- un rapport `docs/handoffs/run-007-claude-retour.md` (nouveau fichier).

Les composants TSX, les données, App, les tests, package/lock, les instructions,
le brief, DESIGN, le workflow et le journal restent réservés à Codex ou en lecture.
Si un correctif visuel exige un de ces fichiers, donner le patch proposé dans
le rapport pour intégration Codex. Ne pas reformater les fichiers réservés.
Avant de commencer : `git status` et diffs ; préserver les changements Codex non
commités. Ne pas créer un autre worktree/une branche ou effacer les diffs du relais.

## Contrats à préserver

- One-page, six ancres actuelles, CTA vers Contact et mailto `allen.kch24@gmail.com`.
- Deux prestations provisoires, neuf projets : huit personnels, un seul Milady’s
  Knight dans game dev ; aucun groupe client sans références autorisées.
- Présentation About FR/EN conservée intégralement, timeline à douze étapes,
  bornes accessibles, fondu à l’entrée dans l’écran, pas d’autoscroll.
- FR/EN et clair/sombre persistants ; clavier, focus visible, mobile et reduced-motion.
- CSS natif, polices/tokens existants, assets WebP responsives et effets mobile allégés.
- Aucun formulaire, routeur, backend, contrôle global ou nouvelle dépendance.
- Aucun nouveau composant UI de base prévu : pas d’intégration shadcn/Tailwind
  dans ce lot. Si nécessaire, revenir avec le cadrage exigé par AGENTS.md.

## Vérification et condition d’arrêt

Build de production puis preview locale. Contrôler au minimum 320×740, 390×844,
768×1024 et 1440×900, les deux langues/thèmes et reduced-motion ; vérifier aussi
le menu à 667×375 et la visibilité des sections en fenêtre 1440×300. Documenter
les combinaisons réellement testées et les limites ; fournir des captures des
écarts corrigés et de l’image sociale, avec leurs chemins.

Après modifications : `npm run build`, `npm run lint`, `npm run biome:check`,
`npm run test`, `git diff --check`. Aucun nouveau runner à installer. Ne pas
annoncer un test navigateur absent, une conformité globale ou un score non mesuré.
Aucun commit, push, merge, déploiement, envoi email ou changement de version.

S’arrêter après le rapport de retour selon `../handoff-contracts.md` : auteur,
modèle/effort effectifs ou inconnus, fichiers, constats/corrections, commandes et
résultats, captures, risques et arbitrages restants. Codex reprend pour relire le
diff, vérifier l’intégration puis clôturer RUN-007 si ses critères sont satisfaits.
