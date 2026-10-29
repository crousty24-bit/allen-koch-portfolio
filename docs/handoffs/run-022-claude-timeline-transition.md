# RUN-022 — Complément Claude : transition de la timeline About

## Mandat et transfert

Allen demande le 29 octobre 2026 une animation lors des clics sur les flèches
de « My Coding Journey » : les étapes se déplacent de droite à gauche vers la
suite, avec un léger fondu de disparition et d’apparition calé sur la vitesse du
défilement. Le bouton précédent applique le mouvement inverse. Ce complément
fait partie de la passe visuelle RUN-022 déjà active ; il n’ouvre pas un second
RUN. La suppression des liens X est traitée séparément par Codex.

- Émetteur : Codex, cadrage, intégration et QA finale.
- Destinataire : Claude, responsable UI de cette animation. Utiliser le modèle
  principal configuré par Allen ; si un sous-agent est utile, suivre
  `../custom-agents.md` sans en lancer un par principe. L’intérêt du relais est
  le réglage visuel du fondu sur le mouvement réel, domaine de Claude.
- Branche : `feature/refonte-integration-visuelle`. Relire `git status` et les
  diffs avant toute écriture ; préserver les changements Codex en cours dans
  AGENTS.md, index.html, src/data/links/links.ts et la documentation.
- Livrable : modification ciblée de la timeline, preuves navigateur et rapport
  dans `run-022-claude-timeline-retour.md`. Ne pas committer, pousser ou déployer.

## État vérifié du code

- `src/components/AboutJourney/AboutJourney.tsx` : `scrollTrack` appelle
  `scrollBy` sur la liste avec un déplacement de 80 % de sa largeur visible ;
  `behavior: smooth` devient `instant` en `prefers-reduced-motion: reduce`.
  Les boutons précédent/suivant sont désactivés aux extrémités.
- `src/styles/globals/about-journey.css` : piste native `overflow-x: auto`,
  `scroll-snap-type: x mandatory`, défilement doux ; `journeyFade` anime les
  étapes une seule fois quand la piste devient visible. Ce fondu d’entrée est
  distinct de la nouvelle transition au clic.
- `src/styles/globals/reduced-motion.css` : défilement et animation d’entrée
  neutralisés en mouvement réduit. La piste reste focalisable et navigable au
  clavier. Douze étapes FR/EN sont rendues depuis les données existantes.

## Résultat demandé

1. Clic sur « Étapes suivantes » : la piste conserve sa trajectoire horizontale
   actuelle ; les éléments sortants s’estompent légèrement pendant qu’ils
   quittent l’écran à gauche, les entrants apparaissent à droite. Le bouton
   précédent inverse le sens de cet effet.
2. Le fondu suit le défilement **réel** de `scrollLeft` et cesse à l’arrêt,
   y compris après l’alignement final de `scroll-snap`. Éviter un minuteur fixe
   de 600 ms qui continuerait après le mouvement ou finirait avant lui. Une
   opacité faible et un masque ponctuel conviennent ; aucun texte ne doit rester
   estompé une fois la piste immobile.
3. Garder les étapes lisibles pendant le mouvement : pas de disparition globale
   de la liste, de flash, de doublon de contenu ou de perte de focus. Les clics
   rapprochés et le retour inverse ne doivent pas bloquer la piste.
4. En mouvement réduit, déplacement immédiat sans nouveau fondu. Préserver le
   défilement natif au doigt, à la molette et au clavier, les bornes, les douze
   étapes, les libellés FR/EN, les thèmes clair/sombre et le rendu mobile.

Claude choisit le réglage visuel et la technique minimale dans le CSS natif et
React existants. Si la synchronisation impose JavaScript, utiliser la position
de scroll comme source de vérité, regrouper les mises à jour par frame et nettoyer
les abonnements. Ne pas installer de dépendance ou remplacer le rail natif.

## Fichiers et droits

Écriture réservée à Claude pour ce complément :

- `src/components/AboutJourney/AboutJourney.tsx` ;
- `src/styles/globals/about-journey.css` ;
- `src/styles/globals/reduced-motion.css` si nécessaire ;
- `src/styles/globals/responsive-760.css` si nécessaire ;
- `tests/about-journey.test.ts` si une logique non triviale est ajoutée ;
- `docs/handoffs/run-022-claude-timeline-retour.md` pour le retour.

Lire AGENTS.md, CLAUDE.md, brief.md, DESIGN.md, `../testing.md` et
`../handoff-contracts.md`. App.tsx, données About/i18n/liens, métadonnées,
autres composants/styles/tests et documentation de suivi restent en lecture
seule. Si un fichier hors liste est indispensable, arrêter et proposer le patch
et sa raison dans le retour ; Codex l’intégrera. Aucun nouveau composant de base
ni changement de contenu.

## Vérification et condition d’arrêt

- Contrôler dans le navigateur le clic suivant et précédent, les clics rapides,
  les deux extrémités et le focus, sur desktop et mobile ; comparer le mouvement
  et le fondu dans les deux thèmes et en FR/EN. Observer que l’opacité est revenue
  à 1 à l’arrêt et que la position finale garde le `scroll-snap` attendu.
- Vérifier `prefers-reduced-motion` dès le chargement et après bascule dynamique :
  pas de fondu supplémentaire, défilement immédiat. Tester clavier et tactile
  ou préciser ce qui n’a pas pu l’être. Noter navigateur/version et limites.
- Exécuter `npm run build`, `npm run lint`, `npm run biome:check`, `npm run test`
  et `git diff --check`. Un test utile doit couvrir toute nouvelle logique de
  contrôle ; une assertion CSS textuelle ne remplace pas la preuve navigateur.
- Remettre un rapport selon `../handoff-contracts.md` avec auteur réel, fichiers,
  technique et réglages, résultats, captures ou vidéo, risques et points ouverts.
  Codex reprend pour relire, intégrer et documenter. L’exécution de ce complément
  ne clôt pas à elle seule RUN-022 ni la validation visuelle d’Allen.
