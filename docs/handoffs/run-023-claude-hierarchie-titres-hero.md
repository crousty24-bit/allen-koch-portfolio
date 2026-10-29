# RUN-023 — Passe structure : titres de sections et Hero

## Mandat et transfert

Allen demande le 29 octobre 2026, après le correctif de focus, une nouvelle passe
sur la hiérarchie et la disposition des titres et sur les textes du Hero. Ce
contrat autorise son implémentation par Claude ; Codex coordonne et vérifie le
retour. Aucun message automatique envoyé à Claude.

- Branche : `feature/refonte-integration-visuelle`. Correctif de focus committé
  séparément par Codex : `17dfeb0`. Les changements RUN-022 de Claude sont encore
  présents hors de ce commit : les préserver et travailler séquentiellement.
- Modèle principal Claude : choix d’Allen ; sous-agent seulement si utile,
  préférence UI Engineer Sonnet 5.5 medium, disponibilité à vérifier selon
  `../custom-agents.md`. Pour cette passe liée JSX/CSS/contenu, un seul auteur
  suffit généralement ; aucune délégation factice.
- Bénéfice : la disposition visuelle et la hiérarchie sont réalisées ensemble
  par Claude, puis contrôlées par Codex sans écritures concurrentes.
- RUN-022 garde ses preuves et sa validation propres. RUN-023 est préparé/planned ;
  ne pas conserver deux RUN actifs : achever le relais de RUN-022 avant d’activer
  cette passe. RUN-008 reste réservé à la validation finale.

## Changements exacts demandés

### Services, Projets, Stack, About, Contact

Supprimer les éléments `p.eyebrow` des cinq sections. Leur texte actuel devient
le titre principal H2, avec la numérotation actuellement visible conservée :

| Section / ancre | Nouveau H2 FR et EN (libellés actuels volontairement anglais) | Ancien H2 |
| --- | --- | --- |
| Services / #services | 01 / Services | Supprimer « Deux prestations » / “Two services” |
| Projets / #projects | 02 / Portfolio | Supprimer “Build & Learn” |
| Stack / #stack | 03 / Stack & skills | Supprimer la phrase de titre actuelle FR/EN |
| About / #about | 04 / About | « Bonjour, moi c’est Allen. » / “Hello, I'm Allen.” devient H3 |
| Contact / #contact | 05 / Contact | « Parlons de votre projet. » / “Let's talk about your project.” devient H3 |

Les nouveaux H2 prennent la place des titres principaux, pas une petite ligne
secondaire au-dessus d’un ancien H2. Adapter la grille, les espacements et les
styles partagés à cette nouvelle structure. Conserver les paragraphes introductifs
Projets/Stack et les autres contenus non cités. Ne pas déplacer les anciens titres
Services/Projets/Stack ailleurs pour les garder artificiellement.

About : “My Coding Journey” devient H3. Supprimer également son `p.eyebrow`
“Timeline”, conformément à la suppression des p.eyebrow dans ces sections.
Les titres des étapes, enfants du parcours, deviennent H4 pour maintenir une
hiérarchie cohérente ; préserver leur rendu, leurs données et les douze étapes.
Les groupes de projets restent H3 et leurs cartes H4 ; les prestations restent H3.

Conserver les ID existants référencés par aria-labelledby, notamment
services-title et about-journey-title, sur les bons titres après changement de
balise. Les badges About restent en anglais selon la décision d’Allen ; leur
libellé accessible doit rester valable après retrait du p.eyebrow.

Numérotation : garder une seule source, en réutilisant le compteur existant si
adapté ; pas de double préfixe DOM + pseudo-élément. Le nom accessible des titres
reste clair. Ne pas ajouter une nouvelle abstraction pour cinq titres statiques.

### Hero / #home

- H1 : conserver uniquement le nom Allen Koch ; supprimer le span.hero__role
  qui répétait le métier sous le nom.
- H2 : remplacer intégralement le texte actuel par
  « Développeur Fullstack & IA / Alsace, France » en FR,
  “Fullstack & AI Developer / Alsace, France” en EN.
  Réutiliser hero.role déjà présent pour ce contenu ; ne pas dupliquer la donnée.
- p.hero__subtitle : remplacer le texte actuel par une légère reformulation de
  la phrase fournie par Allen. Texte retenu pour cette passe :

  **EN** : “I build fast, modern digital products that help businesses grow, and
  I’m available for freelance projects worldwide.”

  **FR** : « Je conçois des produits numériques modernes et rapides pour aider
  les entreprises à se développer. Je suis disponible pour des missions freelance
  dans le monde entier. »

La demande d’Allen autorise ici ce nouveau texte commercial ; ne pas ajouter de
chiffre, résultat client ou garantie de performance. Garder FR/EN fonctionnel.
Retirer les anciennes données hero.heading/highlight seulement après recherche
complète de leurs usages ; ne pas conserver de branche JSX pour un highlight
qui n’est plus utilisé. Préserver CTA, liens sociaux, statistiques et métadonnées.

## Sources et fichiers réservés pour cette passe

Lire `../../AGENTS.md`, `../../CLAUDE.md`, `../../brief.md`, `../../DESIGN.md`,
`../testing.md`, `../handoff-contracts.md`, puis les fichiers concernés.

Claude peut écrire, après stabilisation du travail RUN-022 et remise à Allen :

- composants Hero, ServicesSection, ProjectsSection, StackSection, AboutSection,
  AboutJourney et ContactSection ; uniquement la structure décrite ici ;
- `src/data/i18n/i18n.ts` : cette passe autorise explicitement les textes Hero,
  la promotion des libellés de section et le retrait des champs devenus inutilisés ;
- CSS concernés dans `src/styles/globals/` : section-headings, hero, about-profile,
  about-journey, contact-footer, responsive-1040 et responsive-760 ;
- tests de contenu/rendu affectés, avec attentes actualisées sur la vraie hiérarchie ;
- `docs/handoffs/run-023-claude-retour.md` (nouveau rapport).

App, sectionStack, animations, reduced-motion, base.css (correctif de focus),
les autres données, assets, package/lock, instructions, DESIGN, brief, suivi et
journal sont réservés à Codex/en lecture. Si une modification hors liste est
indispensable, donner sa justification et le patch proposé dans le retour.
Aucun nouveau composant UI de base, paquet, framework ou outil à installer.

## Risques précis et contrats préservés

- Les sélecteurs actuels `.contact-panel h2`, `.about-content h2` et
  `.about-journey__header h2` devront être répartis entre nouveaux titres H2 et
  sous-titres H3 : ne pas attribuer accidentellement le style géant aux index seuls,
  ni laisser un H3 avec des marges/polices navigateur par défaut.
- L’en-tête split actuel place l’introduction sur deux lignes de grille ; après
  suppression de l’eyebrow, retirer la ligne fantôme pour éviter les espaces vides.
- Les changements de hauteur doivent être pris en compte par l’animation existante,
  sans réécrire le moteur RUN-022 dans ce lot ni forcer des hauteurs d’écran.
- Préserver six ancres, IDs/ARIA, focus clavier, correctif du cadre, ordre DOM des
  sections, liens et préférences locales FR/EN/clair/sombre.
- Préserver les animations, reduced-motion, projets personnels/clients/game dev
  tels qu’ils existent à la reprise (SEOS client ajouté depuis le premier contrat),
  contact email seul, About texte avant portrait sous 1040, données du parcours.
- Pas de formulaire, nouvelle navigation, nouvelle disposition générale ou
  refonte des cartes. Pas de nettoyage de classes sans recherche de tous les usages.

## Vérification et acceptation

- Tests de rendu FR/EN : un seul H1, Hero H2 contenant le métier et plus aucun
  span.hero__role ; cinq H2 de sections avec leurs nouveaux libellés ; About et
  Contact en H3, parcours H3 puis étapes H4 ; aucun p.eyebrow dans les cinq sections.
  Tous les IDs et références ARIA restent valides ; pas de snapshots HTML complets.
- Réviser les anciens tests qui attendent des H2 ou H3 devenus faux ; ne pas
  affaiblir les contrats de contenu, de publication client ou d’ancres.
- Build production puis contrôle 320×740, 390×844, 768×1024 et 1440×900,
  FR/EN et clair/sombre ; vérifier aussi 667×375, 1440×300 et reduced-motion.
  Aucun débordement dû aux nouveaux titres longs, aucun espace vide d’ancienne
  grille, toute la présentation et les contrôles accessibles.
- Vérifier accès direct/reload aux ancres (sans cadre noir), Tab après cible,
  dépliage Projets, accordéons, timeline et transitions inter-sections.
- Fournir captures avant/après Hero, Services, About et Contact ; noter les
  conditions réellement vérifiées et les contrôles non exécutés.
- Exécuter build, lint, biome:check, test et git diff --check via les scripts npm.
  Une assertion CSS n’est pas une preuve du rendu navigateur.

## Retour et arrêt

Rapport selon `../handoff-contracts.md` : auteur réel, modèle/effort ou inconnus,
fichiers et changements, contrôles/résultats, captures, limites et arbitrages.
S’arrêter après implémentation et rapport ; pas de commit, push, merge, déploiement,
changement de version ni lancement d’un autre RUN depuis ce contrat.
Codex reprend pour QA et intégration ; Allen valide la nouvelle présentation.
