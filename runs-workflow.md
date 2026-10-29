# Runs Workflow

Source de vérité du suivi : objectifs, responsables, dépendances et état des RUN.
Les preuves vont dans [runs-journal.md](runs-journal.md). Le cycle d'exécution est
défini dans [docs/agentic-workflow.md](docs/agentic-workflow.md).

## Règles de suivi

- Identifiants stables `RUN-000`, `RUN-001`, etc. Ne pas renuméroter l'historique.
- Statuts : `planned`, `in_progress`, `verify`, `done`, `blocked`.
- Un seul RUN `in_progress` ou `verify` à la fois ; aucun obligatoire au repos.
  Des sous-tâches peuvent être déléguées dans ce RUN avec propriétaires distincts.
- `planned` → `in_progress` après contrôle du mandat et des dépendances ; puis
  `verify` pendant les contrôles/revues ; `done` lorsque ses critères sont satisfaits.
  `blocked` nomme l'obstacle et la condition de reprise, sans masquer le travail restant.
- L'ordre de priorité ne vaut pas autorisation de tout exécuter. Une correction
  découverte ou un RUN suivant reste planifié s'il sort de la demande en cours.
- Les responsables ci-dessous sont des affectations prévues. Une délégation
  effective doit être nommée et tracée ; ne pas inventer un agent actif.

## Tableau de suivi — ordre d'exécution

Les identifiants historiques restent stables ; l'ordre des lignes indique l'ordre
prévu. Deux phases : design/visuel d'abord, puis contenu, sections et fonctionnalités.
La clôture de RUN-013 ouvre la phase 2. Les détails ci-dessous se lisent avec ces
nouvelles dépendances ; aucune dépendance de contenu ou de formulaire ne bloque
la recherche graphique initiale.

### Historique de préparation terminé

| RUN | Priorité | Sujet | Responsable | Dépendances | Statut |
| --- | --- | --- | --- | --- | --- |
| RUN-000 | P1 | Audit et préparation initiale de refonte | Codex ; contribution design de Claude | Aucune | done |
| RUN-001 | P1 | Workflow agentique adapté du boilerplate | Codex, rôle Documentation | RUN-000 | done |
| RUN-009 | P1 | Proposition de custom agents et politique de délégation | Codex ; revue Luna | RUN-001 | done |
| RUN-010 | P1 | Cadrage documentaire du périmètre élargi | Codex ; revue Luna | RUN-009 | done |
| RUN-019 | P2 | Règle shadcn/ui et cadrage CSS natif dans la documentation | Codex | Aucune | done |

### Phase 1 — Refonte visuelle et design

Partir des quatre maquettes Stitch importées et de leur système monochrome :
les reproduire et les adapter, puis appliquer la direction validée à la baseline.
Les futures sections peuvent être représentées avec contenus de travail
identifiés ; leur contenu final, ancres et fonctionnement viennent en phase 2.
Le formulaire reste une maquette sans envoi à ce stade.

| RUN | Priorité | Sujet | Responsable | Dépendances | Statut |
| --- | --- | --- | --- | --- | --- |
| RUN-006 | P1 | Refonte visuelle totale et maquettes one-page | Claude ; arbitrage Allen | RUN-010 | done |
| RUN-013 | P1 | Nouveau système visuel, animations et transitions | Claude ; Codex performance/QA | RUN-006 | done |

### Phase 2 — Contenus, sections et fonctionnalités

| RUN | Priorité | Sujet | Responsable | Dépendances | Statut |
| --- | --- | --- | --- | --- | --- |
| RUN-002 | P1 | Alertes de dépendances de développement | Codex ; compétence Security | RUN-013 | done |
| RUN-003 | P1 | Visibilité des sections en fenêtre courte | Codex ; Frontend et Test/QA | RUN-013 | done |
| RUN-004 | P2 | Activation du typage strict | Codex ; Frontend | RUN-013 | done |
| RUN-020 | P1 | Correctifs et tests du socle avant nouvelles sections | Codex ; contributions nettoyage et tests CLI | RUN-004 | done |
| RUN-005 | P1 | Offres, contenu et preuves réelles | Allen + Codex | RUN-013 | done |
| RUN-011 | P1 | Architecture des sections et ancres | Codex ; SEO ; contenu Allen | RUN-005, RUN-010 | done |
| RUN-012 | P1 | Navigation par ancres et socle one-page | Codex ; Claude UI | RUN-011, RUN-013 | done |
| RUN-014 | P1 | Sections services et prestations | Claude UI + Codex | RUN-005, RUN-012 | done |
| RUN-015 | P1 | Projets personnels, clients et game dev | Claude UI + Codex ; preuves Allen | RUN-005, RUN-012 | done |
| RUN-016 | P1 | Choix et contrat du traitement contact/devis | Codex ; Security ; Allen | RUN-005, RUN-010 | done |
| RUN-017 | P3 — reporté | Formulaire contact/devis et envoi réel | Codex + Claude UI ; QA | RUN-012, RUN-016 | planned |
| RUN-021 | P2 | Timeline About horizontale | Claude UI + Codex QA | RUN-005, RUN-013 | done |
| RUN-007 | P1 | Assemblage et cohérence globale de la refonte | Codex + Claude | RUN-002 à RUN-004, RUN-020, RUN-012 à RUN-015, RUN-021 | done |
| RUN-022 | P2 | Passe visuelle 1 — transitions de sections au scroll | Claude UI ; Codex QA ; validation Allen | RUN-007 | done |
| RUN-023 | P2 | Passe structure — titres des sections et Hero | Claude UI ; Codex QA ; validation Allen | RUN-022 | done |
| RUN-008 | P1 | Validation finale et préparation de release | Codex ; validation Allen | RUN-007 | planned |
| RUN-018 | P3 — futur | « Ils m'ont fait confiance » | Allen + Claude + Codex | RUN-008, RUN-015 ; références autorisées | planned |

## RUN-000 — Audit et préparation initiale

- Objectif : auditer le dépôt et préparer le positionnement IA freelance.
- Périmètre : audit, plan de refonte, brief Claude, première proposition, documents racines.
- Vérification : preuves datées et limites dans l'audit et le journal.
- Fin : livrables documentaires disponibles ; aucune correction frontend requise pour ce RUN.
- Risque conservé : les anomalies relevées restent à traiter dans les RUN suivants.

## RUN-001 — Organisation agentique du dépôt

- Mandat : demande d'Allen du 27 octobre 2026 de reprendre le workflow du
  `react-node-boilerplate`, avec documents `docs/`, workflow et journal des RUN.
- Objectif : permettre à un agent de reprendre une tâche, déléguer un périmètre
  et retrouver les preuves sans reconstituer tout l'historique de conversation.
- Périmètre : brief, RUN, journal, cycle, routage, contrats de transfert, politiques,
  outils, fiches de rôles et liens des points d'entrée.
- Préservé : frontend, dépendances, CI, données et ressources de refonte existantes ;
  dépôt source consulté en lecture seule.
- Risques : doublons entre documents, fausses capacités importées, affectations
  confondues avec une délégation exécutée, écrasement de travaux existants.
- Acceptation : sources de vérité distinctes, RUN futurs bornés, transferts et
  propriétaires définis, rôles adaptés au statique, liens valides, checks exécutés
  et résultats consignés sans inventer de déploiement ou de revue indépendante.
- Relais : suite choisie par Allen parmi les RUN planifiés ; pas de déclenchement automatique.

## RUN-002 — Dépendances

- Objectif/périmètre : corriger les alertes de l'outillage identifiées en A01,
  versions compatibles et lockfile ; pas de nouvelle fonctionnalité.
- Risques : rupture d'outils ou upgrade majeur involontaire.
- Acceptation : diff expliqué, build/lint/Biome/tests réussis, audit complet au seuil
  moderate et audit production exécutés ; toute alerte restante explicitement traitée.
- Clôture locale le 29 octobre 2026 : audit complet et production sans alerte,
  installation propre, build/lint/Biome et 13 tests réussis ; revue indépendante
  du manifeste et du lockfile sans constat actionnable. Preuves et limites au journal.
- Relais : RUN-003 reste planifié ; aucun RUN suivant lancé automatiquement.

## RUN-003 — Visibilité au défilement

- Objectif/périmètre : corriger A04 dans App et styles concernés sans refonte graphique.
- Risques : section invisible, régression clavier/ancres ou effets mobile/desktop.
- Acceptation : reproduction avant/après à 1440 × 300 et 1440 × 900 px ; mobile,
  reduced-motion, ancres/clavier et contrôles applicatifs vérifiés.
- Clôture locale le 29 octobre 2026 : A04 reproduit puis corrigé à 1440 × 300/500 ;
  témoin à 1440 × 900 et mobile vérifiés. 19 scénarios Chrome réussis, contrôles
  applicatifs verts et revue indépendante sans constat actionnable ; preuves au
  journal. RUN-007 en vérifiera l’intégration avant release.
- Relais : Frontend → Test/QA → Codex avec preuve navigateur et limites.

## RUN-004 — TypeScript strict

- Objectif/périmètre : activer strict dans les configurations application, outils
  et tests ; corriger les erreurs éventuelles sans refactorisation hors sujet.
- Risques : assertions ou exceptions de configuration masquant de vraies erreurs.
- Acceptation : build, lint, Biome et tests réussis ; aucune erreur ignorée pour
  obtenir le résultat.
- Clôture locale le 29 octobre 2026 : `strict: true` dans les trois tsconfig,
  aucun correctif de code nécessaire ; build/lint/Biome et 13 tests réussis.
  Preuves et limites au journal ; aucun RUN suivant lancé automatiquement.

## RUN-005 — Offres et cas

- Mandat ajusté le 29 octobre : Allen privilégie le design ; activité freelance
  débutante, entreprise non créée. Contenus de services simples et temporaires.
- Objectif/périmètre : promesse, deux prestations FR/EN et CTA. Regrouper IA et
  workflows agents ; conserver l'offre sites/applications et le catalogue actuel.
  Les trois cas préparés sont des pistes, sans étude détaillée exigée à ce stade.
- Risques : doublons, catalogue commercial prématuré, expérience client inventée.
- Acceptation : structure à deux prestations conforme à la correction d'Allen,
  textes FR/EN simples pour la composition, caractère provisoire explicite dans
  les documents ; les faits publiés restent exacts. Aucun engagement à inventer.
- Clôture : `done` le 29 octobre après validation explicite d'Allen des corrections
  et demande de passer à la suite. Contenu validé comme base provisoire de design ;
  preuves détaillées et modalités commerciales seront précisées avant publication
  si nécessaires, sans bloquer la préparation visuelle.
- Complément Allen : trois espaces personnels/clients/game dev (Milady's Knight
  dans game dev), statuts Code Quality Guardian MVP (deprecated) et Sokwak AI MVP.
  Présentation About actuelle intacte ; timeline horizontale réservée à RUN-021.
- Préservé : code UI, neuf projets, assets/liens, thèmes, langues et présentation.
  Seuls les deux statuts sont corrigés dans les données sur mandat explicite.
- Vérification : cohérence FR/EN, liens locaux et diff selon docs/tooling.md.
- Relais : base simplifiée validée pour Claude ; RUN-011 autorisé par Allen.

## RUN-006 — Refonte visuelle totale confiée à Claude

- Périmètre de clôture : phase 1 limitée par Allen le 28 octobre 2026 au design
  du contenu existant. Synthèse Stitch arbitrée dans DESIGN.md R8 ; RUN `done`.
  Les sections services/clients/confiance et le formulaire des passes initiales
  ci-dessous restent en phase 2 ; leur absence ne rouvre pas RUN-006.

- Passe A : comparer les [quatre références Stitch](docs/maquettes_references/README.md),
  reproduire leur langage visuel monochrome et proposer les adaptations de palette,
  typographie, grille, iconographie et composants. Les choix 1.3.2 et « Atelier
  technique » ne sont pas la base de cette refonte.
- Passe B : maquette de la page et navigation par ancres, sections services,
  projets personnels/clients, contact/devis ; emplacement futur de la confiance.
- Passe C : spécifier animations, transitions entre sections/états, focus, formulaire
  et variantes FR/EN, sombre/clair, mobile/desktop, reduced-motion.
- Livrables : synthèse des maquettes Stitch déjà importées dans
  `docs/maquettes_references/`, adaptations documentées, décisions visuelles et
  contrat de relais ;
  pas d'envoi réel de formulaire ni d'implémentation implicite à ce stade.
- Risques : validation supposée, design ne couvrant qu'une langue ou un thème.
- Acceptation : fidélité expliquée aux références Stitch, adaptations attribuées
  à Claude, desktop/mobile et sombre/clair, états/focus et FR/EN couverts ;
  direction arbitrée par Allen avant implémentation.
- Relais : transfert design → frontend avec fichiers, décisions et limites ;
  mettre à jour DESIGN pour les décisions validées en distinguant le rendu livré.

## RUN-007 — Assemblage de la refonte

- Mandat du 29 octobre : Allen demande une nouvelle branche feature pour RUN-007,
  RUN-008 puis les correctifs/RUN supplémentaires qu’il donnera. Branche commune :
  `feature/refonte-integration-visuelle`. Commencer par RUN-007 ; relais Claude
  préparé pour exécution séparée par Allen si nécessaire. RUN-008 reste planned
  tant que RUN-007 n’est pas terminé. Aucun mandat de publication.

- Périmètre actuel après RUN-016 : contact par email seul. RUN-017 reporté ne
  conditionne pas cet assemblage ; aucune intégration ou validation d'envoi de
  formulaire à prétendre réalisée. Ses critères seront repris si le formulaire est relancé.

- Clôture locale le 29 octobre : [revue Claude reçue](docs/handoffs/run-007-claude-retour.md),
  arbitrages A1–A5 d’Allen appliqués et changements complémentaires Claude conservés
  à sa demande. Contrôles Codex réussis, image sociale intégrée ; preuves et limites
  au journal. Validation finale/release réservée à RUN-008, non lancé ici.
- Passe A : intégrer les passes visuelles, services, projets et contact sur une page ;
  réserver les fichiers communs, vérifier les préférences globales et ancres.
- Passe B : harmoniser FR/EN, sombre/clair, contenus, métadonnées/OG/sitemap et assets.
- Passe C : revue intégrée avec parcours clavier, accès direct/rechargement aux ancres, cas de
  contact email et données réelles ; corriger les interactions entre lots.
  Le formulaire est exclu du périmètre actuel, reporté en RUN-017.
- Risques : collisions CSS/navigation/i18n, perte du catalogue personnel, référence client fictive.
- Acceptation : critères des passes satisfaits, problèmes du socle traités, contrôles
  applicatifs/navigateur et revue finale ; docs alignées avec l'état livré.

## RUN-008 — Validation et préparation de release

- Décision d'Allen du 29 octobre, confirmée pendant l'audit de la branche :
  reste `planned` et sera exécuté sur une nouvelle branche. Les corrections
  post-audit de RUN-022/023 ne déclenchent pas RUN-008.
- Passe A : build/lint/Biome/tests/audit et mesures de performance de la page sur
  build production ; mobile/desktop, langues/thèmes, clavier et reduced-motion.
- Passe B : accès direct/rechargement aux ancres, navigation, métadonnées/canonical/sitemap,
  anciens liens et contact email. Les cas formulaire (succès, échec, anti-abus,
  réception de contrôle autorisée) ne s’appliquent que si RUN-017 est relancé.
- Passe C : validation visuelle/contenu d'Allen et cohérence version/docs avant release.
- La section confiance future RUN-018 ne conditionne pas cette release ; pas de
  références client fictives pour remplir les espaces prévus.
- Risques : présenter un build local comme un déploiement ou un score comme un gain terrain.
- Acceptation : preuves techniques et validation visuelle d'Allen consignées ;
  si une validation requise manque, rester en `verify`.
- Publication : vérifier le mandat et la cible avant push/merge/déploiement ;
  préparer un transfert Production si la publication est demandée.

## RUN-009 — Custom agents et efficacité de délégation

- Mandat : proposer quatre agents Codex code/logique/SEO/optimisation et deux
  agents Claude design/front ; intégrer les préférences de modèles d'Allen.
- Périmètre : proposition de profils, politique coûts/efficacité, routage,
  consignes principales et journal. Aucun agent natif installé dans ce RUN.
- Risques : doublons code/front, escalade coûteuse implicite, noms de modèles
  pris pour des identifiants vérifiés, délégation plus chère que le travail direct.
- Acceptation : six profils aux frontières explicites, choix humain du main,
  modèles/efforts de sous-agents documentés, délégation requise lorsqu'avantageuse,
  transferts minimaux, relecture et liens vérifiés.
- Relais : configuration native après choix de la proposition et vérification des
  formats/capacités ; aucun RUN frontend lancé.


## RUN-010 — Planification du périmètre élargi

- Mandat : ajouter au workflow les demandes de refonte totale, multipage, formulaire,
  prestations, projets clients distincts et confiance future, découpées en RUN/passes.
- Décision ultérieure du 28 octobre : la cible multipage est remplacée par une page
  unique avec navigation par ancres ; conserver ce mandat comme historique.
- Périmètre : brief, plan, suivi, consignes et brief Claude ; historique préservé.
- Risques : anciennes limites one-page reprises comme contraintes, dépendances
  cycliques, formulaire faussement opérationnel, faux clients/témoignages.
- Acceptation : exigences couvertes, RUN bornés avec responsables/dépendances,
  stratégie de contact laissée à choisir, confiance future non bloquante, liens et
  graphe de dépendances vérifiés. Aucun code applicatif modifié.

## RUN-011 — Architecture des sections et ancres

- Passe A : définir l'ordre des sections (Accueil, Services, Projets, À propos,
  Contact proposés), leurs contenus et les espaces personnels/clients/game dev.
- Passe B : fixer les identifiants d'ancres, les liens de navigation et CTA,
  la compatibilité des anciennes ancres et le traitement FR/EN et SEO sur une page.
- Passe C : définir les critères d'accès direct/rechargement avec fragment, de
  défilement et de focus clavier, sur desktop et mobile.
- Risques : ancres cassées, sections masquées après navigation et liens existants rompus.
- Acceptation : ordre et ancres documentés dans le brief, critères de tests transmis
  à Claude/Frontend ; aucune nouvelle page ni dépendance de routage prévue.
- Contrat du 29 octobre : Accueil → Services → Projets → Stack → À propos → Contact ;
  anciennes ancres conservées, `#services` ajouté lors de RUN-014 avec sa section.
  Une URL FR/EN, trois espaces dans Projets, présentation About inchangée.
- Livrables : contrat dans docs/refonte-plan.md, synthèse dans brief.md et relais
  documentaire Claude, critères de navigation transmis à docs/testing.md.
- Préservé : tout le code courant et les changements RUN-005 ; aucune nouvelle
  dépendance, page, migration CSS ou implémentation UI dans ce cadrage.
- Clôture locale : `done` le 29 octobre après relecture et contrôle des liens,
  fragments et statuts ; RUN-012 reste planifié, contrat prêt pour intégration.

## RUN-012 — Socle et navigation par ancres

- Passe A : intégrer les sections dans la page unique ; conserver thème/langue,
  navigation et pied de page cohérents.
- Passe B : intégrer la navigation desktop/mobile, les états actifs et liens internes,
  le focus, l'accès direct et le rechargement avec fragment.
  Le défaut d’accès initial observé en RUN-003 est corrigé par RUN-020 ; conserver
  sa régression lors du raccordement des nouvelles sections et ancres.
- Passe C : mettre à jour les liens/ancres selon RUN-011 et vérifier les parcours
  clavier et navigateur, sans publication automatique.
- Risques : régression de navigation, section inaccessible, préférences incohérentes.
- Acceptation : chaque ancre prévue mène à la bonne section ; anciens liens connus
  préservés, tests utiles et parcours navigateur réussis.
- Périmètre exécuté : sections existantes, indication de position active dans le
  menu, cibles focalisables, CTA Hero contact principal/projets secondaire,
  libellés FR/EN et fermeture du menu par la marque. Services et son lien restent
  réservés à RUN-014, espaces projets à RUN-015, timeline à RUN-021.
- Préservé : présentation About, catalogue, thèmes/langues locaux, ordre courant,
  CSS natif et dépendances ; aucun nouveau composant UI de base.
- Clôture locale le 29 octobre : build/lint/Biome, 41 tests et 18 scénarios
  Chrome réussis ; revue indépendante et correction de fermeture par la marque.
  Captures desktop/mobile contrôlées. Preuves/limites au journal ; RUN-014 reste
  planifié, sans intégration ni publication automatique.

## RUN-013 — Système visuel, animations et transitions

- Portée phase 1 : habillage de la baseline et composants visuels ; les nouveaux
  contenus, ancres et fonctions restent en phase 2. Les transitions entre sections
  sont spécifiées ici puis raccordées à la navigation en RUN-012.
- Passe A — Claude UI : intégrer les tokens, la typographie, la grille,
  les composants et assets issus de la synthèse Stitch acceptée, avec clair/sombre.
- Passe B — Claude UI : animations et transitions de sections/états, hover/focus et
  variantes reduced-motion ; contenu visible si un effet échoue.
- Passe C — Codex Performance/QA : contrôler mobile/desktop, contraste, focus,
  débordements et coût réel du mouvement sur build production ; ajuster avec Claude.
- Risques : lourdeur décorative, blocage du contenu, régression accessibilité/mobile.
- Acceptation : fidélité au design arbitré, états accessibles et mesures consignées ;
  dépendances éventuelles validées. A04 est constaté et reporté explicitement à
  RUN-003, dont la résolution sera vérifiée dans RUN-007. RUN-003 peut ainsi
  démarrer après RUN-013 ; sa résolution n'est pas un préalable à cette clôture.
- État au 28 octobre 2026 : huit lots Claude commités de `f49f71c` à `95969f2`,
  audit Codex réalisé, correctifs du menu commités dans `346d204` et vérifiés.
  Allen valide le point 1 de l'audit après contrôle du menu mobile, des accordéons,
  du dépliage des projets et de la timeline. RUN passé `done` ; preuves et limites
  dans [le journal](runs-journal.md#run-013-clôture-de-la-phase-1-28-octobre-2026).
  Cette clôture ne vaut ni release ni déploiement et ne lance aucun RUN suivant.

### Relais passe C — Claude → Codex (contrat historique, exécuté)

Le contrat ci-dessous est conservé dans sa rédaction initiale. Allen l'a transmis
à Codex ; le retour, les correctifs et la validation de clôture sont consignés
au journal. Les inconnues qu'il énumère décrivent le départ de la passe C.

```text
RUN et sous-tâche : RUN-013 passe C, contrôle performance/QA de la refonte visuelle.
Émetteur / destinataire / rôle : Claude (design, lots 1 à 8) / Codex / Performance et QA.
Modèle et effort demandés / bénéfice attendu : selon docs/custom-agents.md ; contrôle
  indépendant de l'implémenteur, exigé par la passe C et la politique de revue.
Objectif et livrable : retour au format « Retour » de docs/handoff-contracts.md, avec
  constats priorisés ; pas de refonte graphique.
Dans le périmètre : build production, mobile/desktop, clair/sombre, FR/EN, contraste,
  focus, débordements, coût réel du mouvement (apparitions 600 ms, compteur, éléments
  collants), poids et chargement des polices, régressions par rapport à 1.3.2.
Hors périmètre : contenus, sections nouvelles, ancres (RUN-011/012), formulaire
  (RUN-016/017), dépendances (RUN-002), typage strict (RUN-004).
Fichiers et preuves utiles : DESIGN.md partie R (R1 garde-fous, R3 tokens, R6 mouvement,
  R11 à R18 contrôles), runs-journal.md entrées RUN-013, src/styles/globals/*.css,
  composants Navbar, Hero, ProjectCard, ProjectsSection, StackSection, SkillsTree,
  AboutSection, AboutAccordion, AboutJourney, ContactSection, Footer, BackToTopButton.
Fichiers réservés en écriture : aucun pour Codex sans accord ; correctifs proposés en
  constats, appliqués par Claude ou par Codex après répartition explicite.
Contrats à préserver : garde-fous R1, palette monochrome, rayon 0, clair par défaut,
  thème/langue locaux, pas de WebGL, contenu 1.3.2 inchangé, tests existants.
Dépendances / inconnues / risques : A04 (visibilité en fenêtre courte, RUN-003) non
  traité ; mesures de Claude faites en Chrome sans interface, densité 1, sans réseau
  ralenti ni lecteur d'écran ; npm run biome:check échoue sur les exports HTML Stitch
  de docs/ (configuration commune, décision à prendre).
Actions autorisées : lecture, build et preview locaux, mesures navigateur ; aucun
  commit, push, déploiement ni ajout de dépendance sans mandat d'Allen.
Vérifications attendues : Lighthouse ou équivalent mobile/desktop sur build production,
  contrôle navigateur réel (pas seulement sans interface), lecteur d'écran sur le menu
  mobile, les accordéons et le dépliage des projets.
Condition d'arrêt et reprise : retour transmis ; Claude reprend les constats
  visuels, Codex ceux de performance après répartition ; Allen arbitre la clôture.
```

## RUN-014 — Services / prestations

- Passe A : reprendre les deux prestations provisoires validées en RUN-005,
  un titre et un paragraphe chacune, sans catalogue contractuel ni offre doublonnée.
- Passe B : intégrer une ou plusieurs sections dédiées sur la page unique,
  données FR/EN et ancres vers contact/devis.
- Passe C : vérifier lisibilité, cohérence offres/formulaire, responsive et SEO.
- Risques : promesses non démontrées ou catalogue technique sans bénéfice explicite.
- Acceptation : services clairement accessibles, contenu validé et CTA fonctionnels ;
  pas de tarif, gain ou délai inventé.
- Périmètre intégré : section Services avant Projets, lien ajouté simultanément
  dans la liste partagée header/footer ; données FR/EN typées et CTA commun Contact.
  Composition de Claude Sonnet 5.5, intégration et QA Codex ; aucune dépendance
  ni nouveau composant de base. Présentation About et neuf projets conservés.
- Clôture locale le 29 octobre : build/lint/Biome, 43 tests, 22 scénarios Chrome
  et contrôles documentaires réussis ; débordement 320 px corrigé et captures
  mobile/desktop relues. RUN-015 reste planifié ; preuves et limites au journal.

## RUN-015 — Projets personnels, clients et game dev

- Passe A : inventorier et conserver le catalogue personnel actuel, ses contenus,
  liens et assets ; définir les champs distincts de mission client et droits de publication.
- Passe B : intégrer trois espaces personnels/clients/game dev ; Milady's Knight
  uniquement dans game dev, sans perdre de projet. Intégrer détails de cas
  si documentés et données FR/EN ; aucune requalification automatique personnel → client.
- Passe C : vérifier liens, attribution, preuves et autorisations ; absence de cas
  client publiable = espace masqué, données de test hors contenu de production.
- Risques : perte d'un projet personnel, confusion de statut, référence client fictive.
- Acceptation : catalogue personnel préservé, affichage clients prêt et testé avec
  politique d'absence de données ; seuls les cas réels autorisés sont publics.
- Clôture locale le 29 octobre : huit personnels, jeu indépendant en position 09,
  groupe clients masqué sans données autorisées ; filtre partagé carte/section/
  compteur et métadonnées client typées. Aucun client ajouté en production.
  Composition Claude Sonnet 5.5, intégration/QA Codex, revue Luna indépendante.
  Build/lint/Biome, 46 tests, 28 scénarios navigateur/fixtures et 51 liens locaux
  réussis. Contenus/liens/assets préservés ; preuves et limites au journal.
  Aucun RUN suivant lancé automatiquement.

## RUN-016 — Décision de traitement contact / devis

- Passe A : besoins et champs minimaux, destinataire, données transmises/conservation,
  états attendus et alternative de contact ; budget/délai optionnels si utiles.
- Passe B : choisir service d'envoi ou endpoint minimal ; vérifier coût/limites,
  validation à la frontière de traitement, anti-abus, secrets, exploitation et maintenance.
- Passe C : documenter contrat succès/erreurs, configuration et test de réception
  vers une boîte de contrôle autorisée, informations de confidentialité à publier.
- Risques : dépendance payante implicite, données exposées, spam ou email non reçu.
- Acceptation : décision explicite et solution vérifiée, périmètre de traitement
  borné, données et critères d'envoi documentés ; aucun fournisseur supposé choisi.
- Mandat révisé par Allen : lien email seul pour l'instant, formulaire reporté.
  Clôture `done` le 29 octobre sur cette décision, sans fournisseur ni endpoint.
  Adresse allen.kch24@gmail.com et futur test de réception vers cette adresse
  validés ; conservation des demandes sans suite fixée à 30 jours, sans automatisation.
- Contrat et étude antérieure dans docs/contact-form-contract.md. Aucun compte,
  abonnement, envoi, configuration distante ou suppression de messages effectué.
- Relais : RUN-017 reste planned/reporté, non bloquant pour l'assemblage de
  l'itération email seul. RUN-021 est la prochaine étape visuelle possible.

## RUN-017 — Formulaire et envoi contact / devis

- Reporté à la demande d'Allen : pas de formulaire pour l'itération actuelle.
  Ne pas lancer ce RUN à la seule clôture de RUN-016. Reprise sur mandat explicite
  avec choix/configuration du service ; contact email seul conservé entre-temps.

- Passe A — Claude UI : formulaire selon design, labels/aides accessibles, champs
  contact/prestation/devis selon contrat, navigation clavier et validations client.
- Passe B — Codex : intégrer traitement choisi, validation serveur/service,
  anti-abus proportionné, secrets hors bundle et configuration documentée.
- Passe C — QA : attente/succès/échec, doubles soumissions, réseau/service indisponible,
  conservation de saisie après échec et test de réception de contrôle autorisé.
- Risques : faux succès, injection/spam, perte de saisie ou fuite de coordonnées.
- Acceptation : envoi réel vérifié dans le cadre autorisé, feedback accessible,
  alternative contact et confidentialité ; aucune clé dans le navigateur. Pas de
  backend généraliste, base de données ou authentification ajoutés par défaut.

## RUN-018 — Futur « Ils m'ont fait confiance »

- Extension future, non requise pour la première release ; emplacement prévu par RUN-006.
- Passe A : recueillir références/logos/témoignages réels et accords de publication.
- Passe B : intégrer le contenu autorisé, formats d'assets, attribution et FR/EN.
- Passe C : vérifier lisibilité, accessibilité, performance et validité des références.
- Risques : faux cautionnement, logo non autorisé, témoignage fabriqué.
- Acceptation : seules références documentées et autorisées publiées ; aucun bloc
  vide/fictif affiché pour anticiper des clients inexistants.

## RUN-019 — Règle shadcn/ui et cadrage CSS natif

- Mandat : consigne validée par Allen le 29 octobre 2026 ; ajouts documentaires
  uniquement, avec prise en compte explicite du CSS natif actuel.
- Périmètre : AGENTS, brief, cycle agentique, outillage, suivi et journal.
- Préservé : code, CSS, dépendances, configuration et composants existants.
- Acceptation : règle obligatoire pour les nouveaux composants de base adaptés,
  consultation MCP et réutilisation, exceptions justifiées ; cadrage et validation
  de la coexistence CSS natif avant intégration, aucune installation/migration implicite.
- Vérification : cohérence, liens locaux et `git diff --check` ; relecture par
  l’implémenteur, pas de revue indépendante requise pour ce lot documentaire.
- Relais : intégration technique hors mandat ; aucun RUN suivant lancé automatiquement.


## RUN-020 — Correctifs et tests du socle

- Mandat : Allen valide les cinq propositions de la revue globale du 29 octobre
  2026, nettoyage compris ; réalisation sur la branche existante.
- Périmètre : accès initial aux ancres, cache des images publiques, tests de
  contenu/rendu/stockage/commande de statistiques, propriété du style des tags,
  retrait des tokens et métadonnées inutilisés. Pas de nouvelle dépendance.
- Préservé : design, textes et ordre du contenu, FR/EN, clair/sombre, responsive,
  accessibilité, effets reduced-motion, préférences locales et scripts de production.
- Acceptation : ancres initiales/rechargement/historique vérifiés en navigateur,
  cache révalidable pour les images aux URL stables, contrats utiles intégrés dans
  Vitest, sept cas CLI isolés sans réseau réel, rendu visuel préservé, build/lint/
  Biome/tests et audits réussis. Matrice navigateur documentée et reproductible
  avec outils disponibles, sans faire dépendre la CI d’un cache local.
- Hors périmètre : nouvelles sections, fournisseur de formulaire, migration UI,
  routeur, nouveau runner navigateur, SSR/SSG et stratégie SEO EN.
- Risques : saut initial concurrençant la restauration de défilement, cascade CSS,
  suppression de champs encore consommés, tests trop liés à l’implémentation.
- Clôture locale le 29 octobre 2026 : 41 tests, build/lint/Biome et audits verts ;
  ancres et interactions contrôlées dans Chrome, 16 cas de menu mobile, huit
  comparaisons de rendu identiques au commit de départ. Revue indépendante sans
  défaut actionnable ; procédure dans `docs/testing.md`, preuves au journal.
- Limites : cache effectif à vérifier sur preview hébergée autorisée ; pas de purge
  des anciens caches ni de nouveau runner navigateur dans la CI.
- Relais : aucun RUN suivant automatique, aucun commit/push/déploiement.


## RUN-021 — Timeline About horizontale

- Mandat : demande d'Allen pendant le cadrage RUN-005 le 29 octobre 2026.
  Planifié ; aucune implémentation de cette UI dans RUN-005.
- Périmètre : My Coding Journey horizontal, apparition en fondu et défilement
  horizontal animé pour afficher la suite ; conception Claude, intégration et QA.
- Contrats : présentation About FR/EN inchangée, étapes du parcours conservées,
  clair/sombre, tactile/clavier et accès à tout le contenu en reduced-motion.
- Acceptation : responsive sans débordement global, focus visible, déplacement
  utilisable au clavier et au tactile ; animations désactivées en reduced-motion.
  Build/lint/Biome/tests et contrôle navigateur mobile/desktop, FR/EN, clair/sombre.
- Dépendances : RUN-005 et RUN-013 ; intégration globale vérifiée dans RUN-007.
  Consultation shadcn et cadrage CSS requis si un nouveau composant de base est
  nécessaire ; aucun ajout de dépendance autorisé par cette planification.
- Réalisation Claude le 29 octobre 2026 : rail horizontal natif (overflow-x,
  scroll-snap), boutons précédent/suivant désactivés aux extrémités, région
  focalisable défilant aux flèches, fondu échelonné des étapes. Les 12 étapes sont
  visibles par défilement ; le bouton Afficher plus et getCollapsedJourneyItemCount
  sont retirés. Aucune dépendance, texte About inchangé.
- Clôture locale le 29 octobre après QA Codex : bornes de dates rendues accessibles,
  fondu déclenché à l'entrée du rail via l'observateur existant, reduced-motion et
  absence d'observateur préservés. Build/lint/Biome, 47 tests, revue indépendante
  et 16 cas navigateur ciblés réussis ; preuves et limites au journal.
  RUN-007 reste planifié, aucune publication ou validation de release implicite.


## RUN-022 — Passe visuelle 1 : transitions de sections au scroll

- Mandat d’Allen du 29 octobre : analyser sa vidéo puis préparer un contrat
  Claude pour intégrer le même effet fluide d’apparition/disparition entre sections.
- Branche commune feature/refonte-integration-visuelle, état de départ 5f08752.
  RUN-007 done ; RUN-008 reste planned et attend cette passe avant validation finale.
- [Contrat Claude](docs/handoffs/run-022-claude-transitions-scroll.md) : référence
  vidéo analysée, cinq frontières, transition réversible avec recouvrement/fondu,
  lecture intégrale des sections longues, ancres/clavier/reduced-motion préservés.
- Clôture le 29 octobre 2026 après implémentation des transitions de sections
  (`80272f7`) et du complément timeline par Claude, QA Codex et confirmation
  d'Allen dans sa demande de correction post-audit. Les contrôles
  applicatifs/navigateur et la vidéo de preuve sont tracés
  au journal. Aucun paquet ni publication ; la validation finale de release reste
  réservée à RUN-008.
- Les passes suivantes feront chacune l’objet d’un contrat sur instruction d’Allen ;
  aucun périmètre futur n’est déduit de cette première demande.
- Complément explicitement demandé par Allen le 29 octobre : transition légère
  de la timeline About sur clic des flèches, fondu synchronisé au défilement réel
  et absent en mouvement réduit. [Contrat Claude](docs/handoffs/run-022-claude-timeline-transition.md)
  borné à la piste About ; son implémentation, sa QA Codex et la confirmation
  d'Allen sont incluses dans cette clôture.


## RUN-023 — Passe structure : titres des sections et Hero

- Mandat d’Allen du 29 octobre : committer le correctif de focus Codex, puis
  préparer la passe suivante selon la discipline du contrat Claude par passe.
- Commit ciblé effectué : 17dfeb0, base.css et entrée de journal seulement.
  Les changements RUN-022 de Claude étaient alors préservés hors commit.
- [Contrat Claude](docs/handoffs/run-023-claude-hierarchie-titres-hero.md) : suppression
  des p.eyebrow, leurs libellés numérotés deviennent les H2 ; sous-titres About,
  parcours et Contact en H3, étapes en H4 ; Hero sans rôle répété sous le H1,
  métier en H2 et nouveau sous-titre commercial légèrement reformulé FR/EN.
- Clôture le 29 octobre 2026 après implémentation par Claude, QA Codex et
  confirmation d'Allen. La hiérarchie des titres, ARIA et ancres ont été contrôlés ;
  responsive, thèmes, langues et animations préservés selon les preuves du journal.
  RUN-008 reste planifié pour la validation finale de release.
