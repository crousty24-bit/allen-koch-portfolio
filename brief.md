# Brief du portfolio

## Produit et périmètre

Baseline actuelle : portfolio statique one-page 1.3.2 d’Allen Koch. La cible reste
un site one-page, avec refonte visuelle totale, navigation par ancres et
formulaire contact/devis.
Le positionnement vise un développeur IA freelance proposant sites et applications web,
intégrations/automatisations IA, outils et workflows agents.

Clientèles demandées par Allen : TPE/PME, startups et équipes techniques.
Les offres exactes et les preuves publiables restent à arbitrer. Les quatre
[maquettes Stitch importées](docs/maquettes_references/README.md) et leur palette
monochrome ont servi de référence à la synthèse validée par Allen dans
[DESIGN.md R8](DESIGN.md#r8-décisions-dallen-validé-le-28-octobre-2026).
Le [plan de refonte](docs/refonte-plan.md) contient encore les propositions de
phase 2, pas des prestations déjà vendues.

## Exigences de refonte confirmées

- Nouveau design global : palette, typographie, compositions, animations et transitions.
- Sections sur une page unique, accessibles par des ancres de navigation ;
  ordre précis à définir.
- Formulaire de contact et demande de devis avec envoi réel, solution à choisir.
- Une ou plusieurs sections de services/prestations.
- Conservation des projets personnels actuels et ajout d’un espace projets clients distinct.
- Section future « Ils m’ont fait confiance », publiée avec références réelles autorisées.

## Architecture et contrats à préserver

- React, Vite, TypeScript, CSS natif, npm ; Node 24 et npm 11 selon le dépôt.
- La baseline est statique sans backend/routeur. La cible conserve une page unique
  et autorise une intégration d’envoi de formulaire ; la solution de traitement
  reste à décider, sans backend généraliste, BDD ou authentification ajoutés par défaut.
- État thème/langue local ; FR/EN, sombre/clair, navigation clavier et responsive.
- Composants dans `src/components/`, contenu typé dans `src/data/`, styles dans
  `src/styles/globals/`, tests dans `tests/`.
- WebP responsive, effets mobile allégés, absence de particules WebGL à largeur
  mobile et en réduction des animations.
- Pas de dépendance nouvelle sans validation ; aucun changement de framework
  justifié à ce stade. Une offre de développement backend ne transforme pas le
  portfolio lui-même en application full-stack.

Les contrats détaillés, commandes et limites sont dans [AGENTS.md](AGENTS.md)
et [docs/tooling.md](docs/tooling.md). Le code et les contrôles courants établissent
le comportement effectif ; une description historique ne remplace pas une vérification.

## Répartition décidée

- Allen : informations sur son activité, priorités et validation produit/visuelle.
- Codex : orchestration, audit, architecture, intégration et vérifications.
- Claude : direction visuelle et spécifications UI ; code visuel si le mandat le prévoit.
- Les autres rôles sont des compétences mobilisées selon le risque, pas des agents
  lancés automatiquement. Voir [le routage](docs/routing-rules.md).

Allen demande la délégation dès qu'elle améliore le rapport coûts tokens/efficacité.
Le main reste choisi par l'humain ; les préférences Sol/Luna et Opus/Sonnet,
les efforts et les six profils proposés sont dans
[docs/custom-agents.md](docs/custom-agents.md). Leur configuration native reste à réaliser.

## État vérifié et autorisation courante

L'[audit du 27 octobre](docs/audit-2026-10-27.md) documente la baseline inspectée :
checks applicatifs réussis, alertes npm dans l'outillage, défaut de visibilité et
limitations SEO/tests. Ces résultats sont datés et ne remplacent pas de nouveaux checks.
La phase 1 est terminée : direction arbitrée (RUN-006), système visuel implémenté
sur le contenu existant et contrôlé (RUN-013), avec validation de clôture d'Allen.
La proposition textuelle initiale de Claude reste une référence historique.
La baseline de production déclarée reste 1.3.2 : cette clôture locale ne constitue
ni une release ni un déploiement.

Les nouvelles sections, les contenus définitifs, les ancres cibles et le traitement
du formulaire restent en phase 2. Aucun RUN suivant n'est lancé automatiquement.
A04 demeure une dette de RUN-003 ; les alertes de dépendances et le contrôle Biome
global sur les exports Stitch restent signalés, sans être déclarés corrigés.
Le statut et le périmètre de chaque tâche sont dans [runs-workflow.md](runs-workflow.md),
les preuves d'exécution dans [runs-journal.md](runs-journal.md).

## Décisions et inconnues

Préserver les documents de refonte existants ; reprendre le mécanisme de RUN du
boilerplate en l'adaptant au site statique. Ne pas importer pnpm, API, Prisma,
Playwright ou des rôles backend/base de données sur la seule foi de ce modèle.
L'origine et les adaptations sont consignées dans [docs/initialization.md](docs/initialization.md).

Restent à décider : promesse, offres prioritaires, rôle exact dans les cas présentés,
modalités d'intervention, disponibilité et canal de contact. La synthèse visuelle,
les polices, le clair par défaut, le maintien du compteur et la suppression des
particules sont déjà arbitrés dans DESIGN.md R8. Ajouter au cadrage : ordre des
sections, ancres de navigation, traitement de l'indexation EN,
solution d’envoi/destinataire du formulaire, données nécessaires et conservation.
Ne pas inventer ces réponses.

Mettre à jour ce brief pour une décision produit/architecture acquise ; garder les
résultats de commandes et le détail temporaire des tâches dans le journal.

## Ordre des phases et références Stitch

La phase 1 est clôturée : conception/validation visuelle (RUN-006), puis
système visuel sur la baseline (RUN-013). Les contenus définitifs, ancres et
fonctionnalités sont réalisés en phase 2 selon le tableau de suivi.
Les maquettes peuvent anticiper ces évolutions sans prétendre qu'elles fonctionnent.
Les décisions techniques ultérieures peuvent nécessiter une adaptation visuelle ciblée.
Les quatre [références Stitch importées](docs/maquettes_references/README.md)
ont fourni la base de la synthèse arbitrée par Allen et implémentée en phase 1.
