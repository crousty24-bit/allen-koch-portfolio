# Brief du portfolio

## Produit et périmètre

Baseline actuelle : portfolio statique one-page 1.3.2 d’Allen Koch. La cible reste
un site one-page, avec refonte visuelle totale et navigation par ancres. Le contact
reste un lien email pour l’itération actuelle ; le formulaire contact/devis est reporté.
Le positionnement vise un développeur fullstack et IA démarrant son activité
freelance. Allen précise le 29 octobre 2026 ne pas avoir encore créé son entreprise.
La priorité actuelle reste visuelle : deux prestations de travail, sites/applications
web et développement assisté par IA avec workflows agents. Intégrations IA et
workflows sont regroupés ; ces textes provisoires pourront évoluer et ne constituent
pas un catalogue commercial définitif. Ce contexte d'activité reste interne.

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
  ordre défini par RUN-011 ci-dessous.
- Contact actuel par lien email ; formulaire contact/devis reporté à une évolution future (décision RUN-016).
- Une ou plusieurs sections de services/prestations.
- Trois espaces projets : personnels, clients et game dev ; conserver les neuf
  projets et placer Milady's Knight dans game dev, sans doublon personnel.
- Statuts confirmés : Code Quality Guardian « MVP (deprecated) », Sokwak AI « MVP ».
- À propos : conserver le texte de présentation actuel FR/EN ; revoir uniquement
  la timeline My Coding Journey en horizontal, avec fondu et défilement animé
  pour voir la suite (RUN-021), accessible et compatible reduced-motion.
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

## Composants UI — décision du 29 octobre 2026

Allen valide shadcn/ui pour les nouveaux composants de base lorsqu’un composant
adapté existe, avec consultation préalable du MCP et réutilisation des composants
déjà intégrés ; les exceptions doivent être justifiées (règle dans [AGENTS.md](AGENTS.md)).
La direction visuelle reste confiée à Claude.

Décision acquise, intégration technique non réalisée : le projet reste en CSS natif,
sans configuration `components.json` ni dépendances Tailwind/Radix déclarées lors
de l’inspection. Avant la première intégration, cadrer et valider la coexistence
avec les tokens, la cascade et les styles globaux/resets actuels, les thèmes et
le responsive. Aucun remplacement du CSS natif, ajout de Tailwind/dépendances ou
migration générale de l’existant n’est autorisé par cette décision documentaire.
Le cadrage et l’implémentation devront relever d’un mandat technique borné.

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

La phase 2 a démarré par RUN-002, clôturé localement le 29 octobre 2026 :
les dépendances de développement concernées sont mises à jour, les audits npm
complet et production ne signalent aucune vulnérabilité, et les contrôles passent,
y compris Biome global avec la configuration d’exclusion des exports Stitch déjà
présente au départ de ce RUN. Les preuves datées sont au journal.
Les nouvelles sections, contenus définitifs, ancres cibles et traitement du
formulaire restent à réaliser. RUN-003 et RUN-004 sont également clôturés
localement le 29 octobre : A04 corrigé et vérifié en navigateur, typage strict
activé pour l’application, l’outillage et les tests. RUN-020, validé par Allen
après revue globale, corrige l’accès initial avec fragment et le cache des images,
intègre les contrats de tests de contenu/rendu/stockage/statistiques, et retire
les résidus inutilisés du design. Aucun changement visuel ou nouvelle dépendance.
La [procédure de tests](docs/testing.md) distingue les contrôles Node de la matrice
navigateur ; son automatisation en CI reste une décision d’outillage distincte.
RUN-012 raccorde les ancres actuelles ; Services sera activé avec sa section en
RUN-014. RUN-007 vérifiera l’intégration globale.
RUN-005 est lancé le 29 octobre sur `feature/run-005-offres-contenus` :
inventaire des neuf projets et proposition FR/EN des offres, de trois cas et des
CTA dans le [plan](docs/refonte-plan.md#run-005--proposition-éditoriale-fren-du-29-octobre-2026).
Correction d'Allen : priorité au design et textes simples, provisoires ; deux
prestations au lieu de trois, avec adaptations FR/EN de ses exemples commerciaux.
La base provisoire est validée par Allen ; preuves détaillées et modalités
commerciales ne conditionnent pas la préparation visuelle. Seuls les statuts de Code Quality
Guardian et Sokwak AI sont corrigés dans les données ; présentation About intacte
et aucune mission client déduite du catalogue.
RUN-005 est clôturé après validation d'Allen ; sa demande de passer à la suite
mandate RUN-011. Architecture retenue : Accueil `#home`, Services `#services`,
Projets `#projects`, Stack `#stack`, À propos `#about`, Contact `#contact`, avec
`#main-content` pour l'évitement. Les trois espaces de projets restent sous une
seule entrée Projets. Présentation About actuelle inchangée. Services et son lien
sont intégrés ensemble en RUN-014, sans section vide intermédiaire.
Même URL et mêmes ancres FR/EN ; canonical racine conservée, pas de version EN
indexable distincte promise. Le [contrat d'architecture](docs/refonte-plan.md#run-011--architecture-des-sections-et-ancres)
détaille les CTA et critères navigateur pour RUN-012/014/015/021.
RUN-012, autorisé ensuite par Allen et clôturé localement, raccorde le CTA principal du Hero à Contact,
le secondaire aux projets et les libellés FR/EN. La section courante est soulignée
avec `aria-current="location"` ; les cibles d'ancres sont focalisables et le menu
mobile se ferme aussi sur la marque. Présentation About, parcours, catalogue et
préférences locales sont préservés. Aucun nouveau composant ni dépendance.
RUN-014 intègre la section Services avant Projets : deux lignes éditoriales à
filets, titres et paragraphes FR/EN validés, CTA commun vers Contact. Design de
Claude Sonnet 5.5, intégration/QA Codex ; contenu toujours provisoire, aucune
nouvelle dépendance. RUN-015 réalise les espaces Projets ; RUN-021 intègre la timeline horizontale,
avec corrections QA du fondu à l’entrée du rail et des dates accessibles.
RUN-015 a réparti les neuf projets initiaux : huit personnels (trois mis en avant,
cinq supplémentaires dépliables) et Milady's Knight seul en game dev. SEOS est
ensuite ajouté comme premier projet client autorisé, réalisé lors d'un stage ;
le groupe clients est désormais visible et le compteur public affiche dix projets.
Mission, rôle, livrables et accord de publication sont requis pour une carte
client ; un résultat reste facultatif et doit être vérifié.
RUN-016 est clôturé sur la [décision contact](docs/contact-form-contract.md)
validée par Allen : lien email seul vers `allen.kch24@gmail.com` pour l'instant.
Formulaire RUN-017 reporté ; aucun prestataire ni abonnement choisi. Conservation
retenue des demandes sans suite : 30 jours en messagerie, sans suppression
automatique mise en place. Un futur test de réception du formulaire est autorisé
vers cette même adresse, mais aucun envoi n'est effectué maintenant. Le formulaire
reste une évolution future, sans bloquer l'itération visuelle et son assemblage.
RUN-021 est clôturé localement après correctifs et contrôles ; présentation
About inchangée. Allen lance RUN-007 le 29 octobre sur la nouvelle branche
`feature/refonte-integration-visuelle`, commune à RUN-008 et aux correctifs/RUN
supplémentaires qu’il donnera. Le [contrat Claude](docs/handoffs/run-007-claude-coherence-visuelle.md)
a été exécuté : retour Claude reçu, correctifs arbitrés par Allen intégrés et
RUN-007 clôturé localement. Intitulé principal FR « Développeur Fullstack & IA »,
équivalent EN « Fullstack & AI Developer » dans Hero, profil et footer ; badges
et libellés anglais conservés volontairement. About commence par le texte sous
1040 px ; bouton retour déplacé dans la marge desktop seulement. Image sociale
monochrome sous une nouvelle URL. RUN-008 reste planifié pour la validation finale ;
aucune publication autorisée.
Le statut et le périmètre de chaque tâche sont dans [runs-workflow.md](runs-workflow.md),
les preuves d'exécution dans [runs-journal.md](runs-journal.md).

## Décisions et inconnues

Préserver les documents de refonte existants ; reprendre le mécanisme de RUN du
boilerplate en l'adaptant au site statique. Ne pas importer pnpm, API, Prisma,
Playwright ou des rôles backend/base de données sur la seule foi de ce modèle.
L'origine et les adaptations sont consignées dans [docs/initialization.md](docs/initialization.md).

Restent à décider : promesse, offres prioritaires, rôle exact dans les cas présentés,
modalités d'intervention et disponibilité. Le canal actuel est l'email confirmé. La synthèse visuelle,
les polices, le clair par défaut, le maintien du compteur et la suppression des
particules sont déjà arbitrés dans DESIGN.md R8. RUN-011 fixe l'ordre, les ancres et le maintien d'une URL unique FR/EN. Le contact reste un lien email pour l'itération actuelle ; en cas de reprise du
formulaire, resteront à décider le fournisseur, l'endpoint et les données. Adresse
et durée des demandes sans suite déjà arbitrées dans RUN-016.
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
