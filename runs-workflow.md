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
| RUN-005 | P1 | Offres, contenu et preuves réelles | Allen + Codex | RUN-013 | planned |
| RUN-011 | P1 | Architecture des sections et ancres | Codex ; SEO ; contenu Allen | RUN-005, RUN-010 | planned |
| RUN-012 | P1 | Navigation par ancres et socle one-page | Codex ; Claude UI | RUN-011, RUN-013 | planned |
| RUN-014 | P1 | Sections services et prestations | Claude UI + Codex | RUN-005, RUN-012 | planned |
| RUN-015 | P1 | Projets personnels conservés et espace clients | Claude UI + Codex ; preuves Allen | RUN-005, RUN-012 | planned |
| RUN-016 | P1 | Choix et contrat du traitement contact/devis | Codex ; Security ; Allen | RUN-005, RUN-010 | planned |
| RUN-017 | P1 | Formulaire contact/devis et envoi réel | Codex + Claude UI ; QA | RUN-012, RUN-016 | planned |
| RUN-007 | P1 | Assemblage et cohérence globale de la refonte | Codex + Claude | RUN-002 à RUN-004, RUN-020, RUN-012 à RUN-015, RUN-017 | planned |
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

- Objectif/périmètre : promesse, trois familles d'offres à arbitrer, deux ou trois
  cas avec contribution/preuves/limites, contenu FR/EN et CTA.
- Risques : promesses non démontrées, confusion projet personnel/mission client.
- Acceptation : faits validés par Allen, variantes linguistiques cohérentes,
  décisions dans le brief/plan, contenu prêt à transmettre à Claude.
- Relais : brief design avec décisions acquises et inconnues restantes.

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

- Passe A : intégrer les passes visuelles, services, projets et contact sur une page ;
  réserver les fichiers communs, vérifier les préférences globales et ancres.
- Passe B : harmoniser FR/EN, sombre/clair, contenus, métadonnées/OG/sitemap et assets.
- Passe C : revue intégrée avec parcours clavier, accès direct/rechargement aux ancres, cas de
  formulaire et données réelles ; corriger les interactions entre lots.
- Risques : collisions CSS/navigation/i18n, perte du catalogue personnel, référence client fictive.
- Acceptation : critères des passes satisfaits, problèmes du socle traités, contrôles
  applicatifs/navigateur et revue finale ; docs alignées avec l'état livré.

## RUN-008 — Validation et préparation de release

- Passe A : build/lint/Biome/tests/audit et mesures de performance de la page sur
  build production ; mobile/desktop, langues/thèmes, clavier et reduced-motion.
- Passe B : accès direct/rechargement aux ancres, navigation, métadonnées/canonical/sitemap,
  anciens liens et formulaire (succès, échec, anti-abus, réception de contrôle autorisée).
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
  Contact proposés), leurs contenus et la distinction personnel/client.
- Passe B : fixer les identifiants d'ancres, les liens de navigation et CTA,
  la compatibilité des anciennes ancres et le traitement FR/EN et SEO sur une page.
- Passe C : définir les critères d'accès direct/rechargement avec fragment, de
  défilement et de focus clavier, sur desktop et mobile.
- Risques : ancres cassées, sections masquées après navigation et liens existants rompus.
- Acceptation : ordre et ancres documentés dans le brief, critères de tests transmis
  à Claude/Frontend ; aucune nouvelle page ni dépendance de routage prévue.

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

- Passe A : structurer offres, besoins, livrables, limites et CTA sur contenu d'Allen.
- Passe B : intégrer une ou plusieurs sections dédiées sur la page unique,
  données FR/EN et ancres vers contact/devis.
- Passe C : vérifier lisibilité, cohérence offres/formulaire, responsive et SEO.
- Risques : promesses non démontrées ou catalogue technique sans bénéfice explicite.
- Acceptation : services clairement accessibles, contenu validé et CTA fonctionnels ;
  pas de tarif, gain ou délai inventé.

## RUN-015 — Projets personnels et projets clients

- Passe A : inventorier et conserver le catalogue personnel actuel, ses contenus,
  liens et assets ; définir les champs distincts de mission client et droits de publication.
- Passe B : intégrer deux espaces distincts dans la section Projets, détails de cas
  si documentés et données FR/EN ; aucune requalification automatique personnel → client.
- Passe C : vérifier liens, attribution, preuves et autorisations ; absence de cas
  client publiable = espace masqué, données de test hors contenu de production.
- Risques : perte d'un projet personnel, confusion de statut, référence client fictive.
- Acceptation : catalogue personnel préservé, affichage clients prêt et testé avec
  politique d'absence de données ; seuls les cas réels autorisés sont publics.

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

## RUN-017 — Formulaire et envoi contact / devis

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
