# Brief du portfolio

## Produit et périmètre

Baseline actuelle : portfolio statique one-page 1.3.2 d’Allen Koch. La cible est
un portfolio multipage avec refonte visuelle totale et formulaire contact/devis.
Le positionnement vise un développeur IA freelance proposant sites et applications web,
intégrations/automatisations IA, outils et workflows agents.

Clientèles demandées par Allen : TPE/PME, startups et équipes techniques.
Les offres exactes et les preuves publiables restent à arbitrer. Les quatre
[maquettes Stitch importées](docs/maquettes_references/README.md) et leur palette
monochrome servent de modèle visuel à reproduire et à adapter ; la variante finale
reste à choisir. Le [plan de refonte](docs/refonte-plan.md) contient les propositions,
pas des prestations déjà vendues ni un design finalisé.

## Exigences de refonte confirmées

- Nouveau design global : palette, typographie, compositions, animations et transitions.
- Pages séparées avec navigation et URL propres ; découpage précis à définir.
- Formulaire de contact et demande de devis avec envoi réel, solution à choisir.
- Une ou plusieurs sections de services/prestations.
- Conservation des projets personnels actuels et ajout d’un espace projets clients distinct.
- Section future « Ils m’ont fait confiance », publiée avec références réelles autorisées.

## Architecture et contrats à préserver

- React, Vite, TypeScript, CSS natif, npm ; Node 24 et npm 11 selon le dépôt.
- La baseline est statique sans backend/routeur. La cible autorise le multipage
  et une intégration d’envoi de formulaire ; stratégie de routage/rendu et solution
  de traitement restent à décider, sans backend généraliste, BDD ou authentification
  ajoutés par défaut.
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
Une [proposition textuelle de Claude](docs/references/claude-design-proposal.md)
existe et les quatre maquettes Stitch sont importées. La refonte n'est pas implémentée.

Les demandes traitées à ce stade portent sur l'audit, la préparation de refonte
et l’adaptation du workflow agentique depuis le boilerplate, puis la planification
du périmètre élargi ci-dessus. Elles ne déclenchent
pas automatiquement les corrections frontend, la refonte, une release ou un déploiement.
Le statut et le périmètre de chaque tâche sont dans [runs-workflow.md](runs-workflow.md),
les preuves d'exécution dans [runs-journal.md](runs-journal.md).

## Décisions et inconnues

Préserver les documents de refonte existants ; reprendre le mécanisme de RUN du
boilerplate en l'adaptant au site statique. Ne pas importer pnpm, API, Prisma,
Playwright ou des rôles backend/base de données sur la seule foi de ce modèle.
L'origine et les adaptations sont consignées dans [docs/initialization.md](docs/initialization.md).

Restent à décider : promesse, offres prioritaires, rôle exact dans les cas présentés,
modalités d'intervention, disponibilité, canal de contact, variante et adaptations
visuelles, intérêt des statistiques/particules et indexation EN. Ajouter au cadrage :
arborescence/URL/rendu multipage,
solution d’envoi/destinataire du formulaire, données nécessaires et conservation.
Ne pas inventer ces réponses.

Mettre à jour ce brief pour une décision produit/architecture acquise ; garder les
résultats de commandes et le détail temporaire des tâches dans le journal.

## Ordre des phases et références Stitch

Exécuter d'abord la phase 1 : conception/validation visuelle (RUN-006), puis
système visuel sur la baseline (RUN-013). Les contenus définitifs, pages/routage,
sections et fonctionnalités sont réalisés en phase 2 selon le tableau de suivi.
Les maquettes peuvent anticiper ces évolutions sans prétendre qu'elles fonctionnent.
Les décisions techniques ultérieures peuvent nécessiter une adaptation visuelle ciblée.
Les quatre [références Stitch importées](docs/maquettes_references/README.md)
forment la base à reproduire et à adapter en RUN-006 ; Allen arbitre la variante
ou la synthèse avant l'implémentation visuelle.
