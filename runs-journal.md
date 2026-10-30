# Runs Journal

Journal des exécutions, en ordre chronologique. Les statuts courants et priorités
sont dans [runs-workflow.md](runs-workflow.md). Ajouter une entrée de reprise si un
RUN est suspendu ou bloqué : dernier état vérifié, obstacle, prochain geste et propriétaire.
Ne pas effacer un échec historique parce qu'un contrôle ultérieur réussit.

Chaque entrée contient date, branche/révision, mandat, rôles réellement intervenus,
périmètre, fichiers, commandes et résultats, revue, limites et relais. Ne jamais
copier de secret, donnée client ou résultat supposé.

## RUN-000 — Audit et préparation initiale

- Date : 27 octobre 2026.
- Statut : `done` pour l'audit/documentation ; corrections et design final non exécutés.
- Branche/révision auditée : `develop`, `23db1c02d589afd435ce6802eb8c0b39dcc7792a`.
- Origine de l'entrée : reprise rétrospective du rapport existant
  [audit-2026-10-27.md](docs/audit-2026-10-27.md), pas une nouvelle exécution.
- Intervenants : Codex pour l'audit et les documents ; Claude Code pour une
  proposition textuelle, reçue et conservée dans `docs/references/`.
- Livrables : audit, plan, brief Claude, références, première version de WORKFLOW/CLAUDE,
  notes de transition AGENTS/README/DESIGN.
- Contrôles consignés dans le rapport : `npm run build`, `npm run lint`,
  `npm run biome:check` réussis ; `npm run test` : 13 tests réussis.
  `npm audit --audit-level=moderate` en échec : 2 moderate, 4 high ;
  `npm audit --omit=dev --audit-level=moderate` : zéro signalement.
- Preuves supplémentaires : contrôle strict ponctuel de l'application ; parcours
  Chrome desktop/mobile/reduced-motion, EN/clair et menu/Échap. Les conditions
  et limites exactes sont dans le rapport, dont le défaut à 1440 × 300 px.
- Revue : recoupement par Codex de la proposition de Claude avec les sources ;
  aucune revue indépendante globale ou validation visuelle finale attribuée à un tiers.
- Risques/non-changements : alertes npm et anomalies frontend conservées ;
  pas de maquettes finales, correction, commit ou déploiement dans ce RUN.
- Relais : workflow agentique puis RUN techniques/contenu planifiés.

## RUN-001 — Workflow agentique

- Date : 27 octobre 2026.
- Statut : `done` pour l'adaptation documentaire.
- Branche/révision de départ : `develop`, même HEAD que RUN-000 ; documents de
  RUN-000 déjà modifiés/non suivis, préservés pendant cette intervention.
- Mandat : adapter les Markdown, `runs-workflow.md` et `runs-journal.md` du boilerplate.
- Intervenant : Codex, rôles orchestration/documentation. Aucun autre agent
  sollicité pour cette adaptation documentaire.
- Source inspectée : `/home/allen/mes_projets/my-boilerplates/react-node-boilerplate`,
  révision `b58765736c6c63ad0e50d33ac27f88c662d60e45`, arbre propre au contrôle initial.
- Périmètre : documents uniquement ; source consultée en lecture seule.
- Fichiers : `brief.md`, RUN/workflow/journal, entrées AGENTS/CLAUDE/README,
  `docs/README.md`, politiques, contrats et fiches de rôles ; plan de refonte relié aux RUN.
- Décisions : suivi centralisé, un RUN actif, relais traçables, Claude chargé du
  design, Codex responsable de l'intégration ; pas de copie des couches full-stack.
- Vérifications exécutées :
  - `npm run build` : réussite ; bundle inchangé par ce lot documentaire.
  - `npm run lint` : réussite.
  - `npm run biome:check` : réussite, 66 fichiers contrôlés ; pas de validation
    implicite du Markdown par ce résultat.
  - `npm run test` : 5 fichiers, 13 tests réussis.
  - `git diff --check` : réussite sur les modifications suivies.
  - Contrôle Python ponctuel, sans script ajouté au projet : liens et ancres de
    30 Markdown, 9 identifiants RUN uniques, statuts reconnus, au maximum un RUN
    actif, 9 fiches indexées et commandes vérifiées contre `package.json`.
  - Source boilerplate revérifiée : même révision, arbre Git toujours propre.
- Revue : relecture par Codex, implémenteur du lot ; pas de revue indépendante
  revendiquée. Nouveaux fichiers inspectés hors du seul diff Git.
- Contrôles non exécutés : navigateur et audit npm non relancés, aucun changement
  UI ou dépendance dans ce RUN ; résultats historiques conservés dans RUN-000.
- Changement voisin préservé : ajout de `.claude` dans `.gitignore` apparu pendant
  l'intervention, non effectué par ce lot ; aucune réécriture de ce fichier.
- Risques conservés : anomalies de RUN-000 non corrigées ; capacités des outils
  externes à revérifier au moment de chaque délégation.
- Relais : RUN-002 à RUN-008 restent planifiés, sans agent distinct lancé ni
  publication ; choisir le prochain périmètre selon la demande d'Allen.

## RUN-009 — Proposition de custom agents et modèles

- Date : 27 octobre 2026 ; statut `done` pour la proposition/documentation.
- Branche/révision : `develop`, `23db1c02d589afd435ce6802eb8c0b39dcc7792a` ;
  travaux documentaires existants et `.gitignore` préservés.
- Mandat : proposition de quatre custom agents Codex, deux Claude et règle de
  délégation selon coûts tokens/efficacité, avec les modèles préférés d'Allen.
- Livrables : `docs/custom-agents.md`, pointeurs AGENTS/CLAUDE/WORKFLOW/brief/index,
  routage et cycle, champs modèle/effort dans le contrat de transfert, suivi RUN.
- Intervenants réels : Codex pour la rédaction/intégration ; sous-agent
  `workflow_review`, modèle `gpt-6-luna`, effort `medium`, contexte autonome borné,
  pour recommandations puis revue finale en lecture seule.
- Bénéfice attendu de la délégation : obtenir une lecture indépendante des frontières
  et des règles avec un contexte court sur le modèle préféré pour les sous-tâches.
  Consommation et économies de tokens non mesurées.
- Retour Luna : aucun défaut concret dans la proposition et les pointeurs relus ;
  revue statique uniquement, disponibilité native des agents non contrôlée.
- Vérifications : contrôle Python ponctuel des liens/ancres de 31 Markdown,
  unicité des six profils, dix RUN uniques et un RUN actif maximum : réussite ;
  `git diff --check` : réussite. Relecture des retours et des documents concernés.
- Non exécutés : build/lint/Biome/tests, navigateur, audit npm et invocation des six
  profils natifs ; lot documentaire sans code/configuration exécutable modifié,
  selon `docs/tooling.md`. Les résultats des RUN précédents restent historiques.
- Limites : libellés Sol/Luna/Opus/Sonnet transcrits comme préférences utilisateur,
  identifiants et efforts natifs à vérifier avant installation. Main choisi par
  l'humain ; aucun changement automatique de modèle principal.
- Relais : proposition prête pour choix puis configuration native et test de
  découverte dans un lot distinct. Aucun commit, déploiement ou correction frontend.

## RUN-010 — Planification de la refonte élargie

- Date : 27 octobre 2026 ; statut `done` pour le cadrage documentaire seulement.
- Branche/révision : `develop`, `23db1c02d589afd435ce6802eb8c0b39dcc7792a` ;
  modifications existantes conservées.
- Mandat : découper en RUN/passes refonte visuelle totale, multipage, formulaire
  contact/devis, services, projets personnels conservés/clients distincts et confiance future.
- Livrables : RUN-006/007/008 actualisés, RUN-011 à RUN-018 planifiés, brief/plan,
  brief Claude, consignes AGENTS/CLAUDE, index et notes README/DESIGN actualisés ;
  politique sécurité/routage adaptée au traitement de formulaire prévu.
- Intervenants : Codex pour rédaction/intégration ; sous-agent `workflow_review`,
  `gpt-6-luna`, effort `medium`, lecture seule pour critères puis revue finale.
  Bénéfice attendu : vérifier indépendamment les contradictions de périmètre avec
  contexte borné ; tokens et économie non mesurés.
- Revue Luna : un conflit résiduel dans DESIGN section 18 signalé puis corrigé par
  Codex : les interdictions historiques sont maintenant bornées à la maintenance
  de baseline, avec renvoi aux décisions multipage/formulaire. Correction relue
  par l'implémenteur ; pas de nouvelle validation indépendante revendiquée.
- Vérifications exécutées : contrôle Python ponctuel des liens/ancres de 31 Markdown,
  19 RUN uniques, références de dépendances existantes et graphe sans cycle ;
  section confiance future hors prérequis de release. `git diff --check` réussi.
- Non exécutés : build/lint/Biome/tests, navigateur, audit npm ou envoi de formulaire ;
  modification documentaire sans code ni configuration exécutable, selon tooling.
- Décisions non prises : palette finale, URL/stratégie de rendu/routage, prestataire
  ou endpoint, champs/destinataire/conservation et références clients disponibles.
- Relais : les RUN d'implémentation restent `planned`. RUN-018 est une extension
  future avec références autorisées, sans faux clients ni bloc public vide.


## Réorganisation du suivi — 28 octobre 2026

- Demande : design/visuel en phase 1, contenu/sections/features en phase 2.
- Tableau réordonné sans renuméroter les RUN ; RUN-006 dépend de RUN-010,
  RUN-013 de RUN-006 ; socle technique et contenu suivent RUN-013.
- Brief, plan et brief Claude alignés ; maquettes anticipant les futures fonctions
  distinguées de leur implémentation. Répertoire `docs/maquettes_references/`
  documenté pour import via MCP Stitch avec provenance et statut de validation.
- Contrôles : 19 RUN uniques, dépendances sans cycle, liens locaux et
  `git diff --check` réussis. Relecture locale ; pas de délégation pour cette
  correction documentaire bornée, dont le transfert aurait dupliqué la lecture.
- Non exécutés : import Stitch, build/tests et navigateur ; aucun code modifié.

## Import de références Stitch — 28 octobre 2026

- Branche : `develop` ; documents déjà modifiés par les travaux précédents,
  préservés. Préparation de RUN-006, sans exécution du design confié à Claude.
- Mandat : importer « Minimalist Developer Portfolio templates » via MCP Stitch,
  ses quatre variantes et sa palette monochrome.
- Intervenant réel : Codex pour l'export et l'indexation ; aucun sous-agent,
  le transfert d'un téléchargement borné aurait ajouté du coût d'intégration.
- Source : projet Stitch `2072749873957336725`, quatre écrans desktop et système
  `d9370495eb9f4a598ab64aab1589649a`.
- Livrables : captures PNG, HTML bruts et DESIGN.md sous
  `docs/maquettes_references/minimalist-developer-portfolio-templates/` ; index
  de provenance et statut des variantes dans le README du répertoire.
- Contrôles : présence des neuf fichiers, ouverture UTF-8 des quatre HTML,
  signatures PNG et dimensions 2560 px de large, en-tête du DESIGN.md et
  `git diff --check` réussis. Build/lint/Biome non lancés : aucun code produit modifié.
- Limites : auteur précis non vérifié ; pas de choix de variante, d'écran mobile,
  d'export EN ni d'intégration React. Les HTML dépendent de ressources externes.
- Relais : Claude examine les quatre propositions ; Allen arbitre la direction
  avant l'implémentation de RUN-013.

## Décision sur la base visuelle Stitch — 28 octobre 2026

- Mandat d'Allen : les quatre variantes Stitch importées et leur système
  monochrome servent de modèle à reproduire et à adapter pour la refonte.
- Portée : alignement documentaire de `AGENTS.md`, `CLAUDE.md`, `DESIGN.md`,
  `README.md`, `brief.md`, `runs-workflow.md`, du plan, du brief Claude,
  de l'index `docs/` et de l'index des maquettes. Aucun code produit modifié.
- Intervenant : Codex, sans sous-agent pour cet alignement documentaire ciblé.
- Contrôles : `git diff --check` réussi, liens locaux des onze documents concernés
  vérifiés, recherche des anciennes consignes contradictoires sans résultat.
  Build/lint/Biome non lancés : aucun code produit modifié.
- Décision encore ouverte : variante ou synthèse finale et ses adaptations ;
  Claude prépare la proposition, Allen l'arbitre avant RUN-013. Les exports
  desktop ne valident ni mobile, ni FR/EN, ni sombre/clair ou le comportement.

## Décision de conserver une page unique — 28 octobre 2026

- Branche/révision de départ : `feature/refonte_new_design`, `585acc6` ; arbre propre.
- Mandat d'Allen : la refonte reste one-page, avec navigation par ancres et aucune
  nouvelle page dédiée. Cette décision remplace la cible multipage de RUN-010
  sans effacer son historique.
- Portée : brief, plan, RUN-006/011/012 et critères de validation, consignes agents,
  index et références de refonte. Aucun code applicatif modifié.
- Intervenant : Codex ; pas de sous-agent pour cet alignement documentaire borné.
- Contrôles : `git diff --check` réussi ; recherche des consignes multipages dans
  les documents courants, avec seules mentions restantes dans l'historique RUN-010.
  Build/lint/Biome non lancés : aucun code ni configuration exécutable modifié.
- Relais : Claude compose une page unique ; RUN-011 fixe sections et ancres, puis
  RUN-012 les intègre. Le traitement du formulaire et la variante visuelle restent
  à décider dans leurs RUN respectifs.

## RUN-006, itération 1, passe A : analyse Stitch et garde-fous (28 octobre 2026)

- Branche : `feature/refonte_new_design`, révision `739d094` ; modifications
  documentaires antérieures commitées, arbre propre au départ.
- Mandat d'Allen : démarrer la phase 1, analyser workflow, documentation et les
  quatre variantes Stitch ; refonte visuelle seule, contenu actuel conservé sans
  nouvelle section ; ajouter les garde-fous anti « vibecode slop » ; tenir
  DESIGN.md à jour par itération ; rendre un compte-rendu et un plan d'intégration
  soumis à validation.
- Statut : RUN-006 passé en `in_progress` ; passe A livrée au statut proposé.
- Livrables : `DESIGN.md` partie R (journal d'itérations, garde-fous R1, analyse
  des variantes, tokens, typographie, correspondance des sections, mouvement,
  fichiers RUN-013, décisions attendues, limites) ; renvoi aux garde-fous dans
  `docs/claude-design-brief.md`. Partie baseline 1.3.2 de DESIGN.md non modifiée.
- Intervenant : Claude (Opus 5.5, main choisi par Allen). Pas de sous-agent :
  l'analyse visuelle exigeait les captures dans le contexte principal ; un
  transfert aurait dupliqué la lecture sans gain.
- Contrôles : 24 tranches des captures examinées (outil Pillow dans un venv
  temporaire hors dépôt) ; HTML exportés inspectés (polices Geist, Material
  Symbols, Tailwind CDN, `backdrop-blur`) ; recherche d'emojis et de tirets
  cadratins dans `src/` sans résultat ; contrastes WCAG calculés par script
  (non mesurés dans un navigateur), dont un échec AA de la palette Stitch
  (`#73716D` sur `#ECEAE4` = 4,05:1) corrigé dans la proposition.
- Non exécutés : build/lint/Biome (aucun code modifié), navigateur, rendu React.
- Relais : décisions d'Allen listées dans DESIGN.md R8, puis RUN-013 par lots.

## RUN-006 clôture et RUN-013 lot 1 : fondations (28 octobre 2026)

- Branche : `feature/refonte_new_design`, révision `739d094`, modifications de
  l'itération 1 non commitées conservées.
- Décisions d'Allen sur DESIGN.md R8 : synthèse recommandée, Schibsted Grotesk
  et IBM Plex Mono (Space Mono ponctuelle), clair par défaut, captures en couleur,
  suppression des particules, compteur conservé, survol sans mouvement.
  RUN-006 passé `done` ; RUN-013 `in_progress`.
- Analyse de `weihangli.dev` (inspiration des maquettes selon Allen) : captures
  après défilement et CSS de production ; reprises et rejets dans DESIGN.md R10.
- Lot 1 implémenté : `tokens.css` réécrit (clair par défaut, sombre via
  `data-theme="dark"`, alias transitoires), polices dans `index.html`,
  `theme-color` clair/sombre, script de thème inversé, `App.tsx` (particules et
  défaut clair), suppression de `Particles`, `DecorativeErrorBoundary` et de la
  dépendance `ogl` (`package.json`, lockfile), retrait des orbes, de la trame,
  du halo About et du voile Contact, base/boutons/focus/eyebrow monochromes,
  marges dans `responsive-1040/760.css`. Neutralisation mécanique dans le CSS des
  sections : 133 couleurs chromatiques, 26 ombres, 11 transformations de survol.
- Intervenant : Claude (Opus 5.5, main). Pas de sous-agent : le lot fixe les
  modèles réutilisés ensuite, la délégation aurait coûté plus que l'exécution.
- Contrôles : build, lint et tests (13/13) réussis ; `biome check` du code
  réussi, `npm run biome:check` en échec sur les exports HTML Stitch de `docs/`
  uniquement (antérieur au lot) ; captures 1440/390/320 px en clair et sombre sur
  le build de production, polices chargées vérifiées, aucun débordement
  horizontal à 320/390/768/1440 px. Outils de capture (`playwright-core`,
  Pillow) installés dans le scratchpad, hors dépôt.
- Une erreur de suppression dans `responsive-760.css` (fusion de deux règles)
  a été détectée à la relecture et corrigée depuis la version commitée.
- Non exécutés : audit npm, contraste mesuré par composant, zoom 200 %,
  performance, revue indépendante. Aucun commit.
- Relais : lot 2 (navbar, menu mobile, en-têtes de section, footer, retour en
  haut). `AGENTS.md` décrit encore « dark theme by default » dans sa partie
  baseline : alignement à faire par Codex ou sur mandat, fichier partagé.

## RUN-013 lot 2 : cadre global (28 octobre 2026)

- Branche : `feature/refonte_new_design` ; départ `f49f71c` (lot 1 commité à la
  demande d'Allen, qui a validé le lot et les intitulés de colonnes du pied de page).
- Fichiers : `Navbar.tsx`, `Footer.tsx`, `BackToTopButton.tsx`, nouveau
  `src/data/links/navigation.ts`, `i18n.ts` (`navHeading`, `linksHeading` ajoutés,
  `socialLabel` retiré), eyebrows de `ProjectsSection`, `StackSection`,
  `AboutSection`, `ContactSection` ; CSS `navigation`, `contact-footer`,
  `back-to-top`, `section-headings`, `animations`, `base`, `responsive-1040/760`.
- Intervenant : Claude (Opus 5.5, main), sans sous-agent (composants partagés,
  modèles fixés pour les lots suivants).
- Contrôles : build, lint, tests 13/13, `biome check` du code réussis ; captures
  production 1440/800/768/390/320 px, clair/sombre, FR/EN, menu ouvert, focus ;
  débordement horizontal mesuré nul. Défauts trouvés et corrigés en cours de lot :
  débordement du pied de page sur mobile, alignement du menu mobile, index de
  section sur la ligne du titre About, taille de l'index Contact. Biome signalait
  un titre masqué aux lecteurs d'écran : corrigé par `aria-labelledby`.
- Non exécutés : lecteur d'écran réel, zoom 200 %, contraste mesuré par composant.
  Aucun commit de ce lot.
- Relais : lot 3 (Hero).

## RUN-013 lot 3 : hero (28 octobre 2026)

- Départ `0458d23` (lot 2 commité après validation d'Allen).
- Fichiers : `Hero.tsx`, `i18n.ts` (`hero.name`, `hero.role`), `hero.css`
  réécrit, règle de titres partagée déplacée dans `section-headings.css`,
  `responsive-1040/760/430.css`, `animations.css` (`scrollCue` retiré).
- Intervenant : Claude (Opus 5.5, main), sans sous-agent.
- Contrôles : build, lint, tests 13/13, `biome check` du code réussis ; captures
  production 1440/1024/768/390/320 px, clair/sombre, FR/EN ; débordement mesuré
  nul ; largeur du nom mesurée. Ajustement après capture : chiffres clés sur deux
  colonnes en mobile (hauteur du hero ramenée de 1063 à 942 px à 390 px).
- Non exécutés : zoom 200 %, lecteur d'écran, contraste par composant. Aucun commit.
- Relais : lot 4 (Projets).

## RUN-013 lot 4 : projets (28 octobre 2026)

- Départ `e946e25` (lot 3 commité après validation d'Allen).
- Fichiers : `ProjectCard.tsx` (variantes `feature` et `compact`),
  `ProjectsSection.tsx`, `projects.ts` (`srcset` étendus, `imageSizes` retiré),
  6 nouveaux WebP dans `public/projects/generated/`, CSS `projects` réécrit,
  `buttons` (`.chip`), `section-headings` (en-têtes en grille),
  `responsive-1040/760.css`.
- Intervenant : Claude (Opus 5.5, main), sans sous-agent. Assets générés avec
  Pillow dans le scratchpad, depuis les PNG du dépôt.
- Contrôles : build, lint, tests 13/13, `biome check` du code réussis ; captures
  production 1440/768/390/320 px, clair/sombre, FR/EN, replié/déplié ;
  débordement mesuré nul après correction ; fichiers d'image servis et position
  de l'index collant mesurés. Écart à R5 documenté dans DESIGN.md R14.
- Non exécutés : densité 2, zoom 200 %, lecteur d'écran. Aucun commit.
- Relais : lot 5 (Stack et arbre de compétences).

## RUN-013 lot 5 : stack et arbre de compétences (28 octobre 2026)

- Départ `cd8be76` (lot 4 commité après validation d'Allen).
- Fichiers : `StackSection.tsx`, `SkillsTree.tsx` (icônes retirées, index et
  profondeur), CSS `stack` et `skills-tree` réécrits, `projects.css` (bloc
  transitoire réduit), `animations.css`, `responsive-1040/760.css`. Données
  `stack.ts` et `skills.ts` inchangées.
- Intervenant : Claude (Opus 5.5, main), sans sous-agent.
- Contrôles : build, lint, tests 13/13, `biome check` du code réussis ; captures
  production 1440/768/390/320 px, clair/sombre, FR/EN, replié/déplié ;
  débordement nul, 0 requête Simple Icons, ouverture clavier vérifiés par script.
- Non exécutés : lecteur d'écran, zoom 200 %. Aucun commit.
- Relais : lot 6 (About, accordéon, parcours).

## RUN-013 lot 6 : about, accordéon et parcours (28 octobre 2026)

- Départ `441c465` (lot 5 commité après validation d'Allen).
- Fichiers : `AboutSection.tsx` (observateur retiré, accordéon déplacé dans la
  colonne de texte), `AboutAccordion.tsx` (signe +/−), `AboutJourney.tsx` (liste
  plate, icônes et ouverture par étape retirées), CSS `about-profile`,
  `about-accordion`, `about-journey` réécrits, `animations.css`, nettoyage de
  `responsive-430/760/1040.css` et `reduced-motion.css`. Données inchangées.
- Intervenant : Claude (Opus 5.5, main), sans sous-agent.
- Contrôles : build, lint, tests 13/13, `biome check` du code réussis ; captures
  production 1440/768/390/320 px, clair/sombre, FR/EN ; débordement mobile de 70
  à 140 px détecté puis corrigé ; titre collant et accordéon clavier mesurés.
- Écart d'interaction documenté (DESIGN.md R16) : étapes du parcours toujours
  ouvertes. Non exécutés : lecteur d'écran, zoom 200 %. Aucun commit.
- Relais : lot 7 (Contact).

## RUN-013 lot 7 : contact (28 octobre 2026)

- Départ `088c05d` (lot 6 commité après validation d'Allen).
- Fichiers : `ContactSection.tsx`, `contact-footer.css` (bloc inversé),
  `section-headings.css` et `projects.css` (règles transitoires retirées),
  `responsive-1040/760.css`.
- Intervenant : Claude (Opus 5.5, main), sans sous-agent.
- Contrôles : build, lint, tests 13/13, `biome check` du code réussis ; captures
  production 1440/768/390/320 px, clair/sombre, FR/EN ; débordement nul ; couleur
  du focus dans le bloc inversé mesurée ; contrastes calculés par script.
- Décision de composition documentée (DESIGN.md R17). Aucun commit.
- Relais : lot 8 (mouvement, reduced-motion, contrôle qualité avec Codex).

## RUN-013 lot 8 : mouvement et contrôle qualité (28 octobre 2026)

- Départ `91256b9` (lot 7 commité après validation d'Allen).
- Fichiers : `animations.css` (durées et décalages d'entrée), DESIGN.md R18,
  `runs-workflow.md` (RUN-013 en `verify`, relais passe C préparé).
- Intervenant : Claude (Opus 5.5, main), sans sous-agent. Le relais vers Codex est
  rédigé mais **non transmis** : aucun canal vers Codex dans cette session.
- Contrôles par script sur build production : contraste de 256 textes en clair et
  en sombre (0 échec), parcours clavier complet desktop et mobile (0 problème),
  zoom 200 % et 400 % (0 débordement), reduced-motion, poids de chargement.
  build, lint, tests 13/13, `biome check` du code réussis.
- Un premier passage clavier, faussé par le défilement doux, a été relancé avec
  attente de fin de défilement ; seul le second résultat est retenu.
- Non exécutés : navigateur réel, Lighthouse, réseau ralenti, lecteur d'écran,
  revue indépendante. Aucun commit.
- Relais : passe C de Codex ; Allen transmet le contrat ou mandate son envoi.


## RUN-013 passe C : correctifs menu 1 et 2 (28 octobre 2026)

- Mandat explicite d'Allen : corriger les deux constats du retour Codex sur les
  lots 1 à 8, depuis `95969f2`. Périmètre borné : hauteur du menu mobile et
  fermeture lorsque le focus quitte l'en-tête. A04 reste dans RUN-003.
- Acceptation : Contact, thème et langue accessibles en paysage ; Tab et
  Maj+Tab ne laissent pas le focus derrière le panneau ; Échap ferme et rend le
  focus au bouton ; thèmes, FR/EN et présentation desktop préservés.
- Fichiers : `responsive-760.css` (hauteur bornée à l'espace écran disponible,
  défilement interne conservé), `Navbar.tsx` (écoute `focusin` pendant l'ouverture,
  fermeture à la sortie de l'en-tête, nettoyage des écouteurs).
- Intervenant : Codex main, relecture par l'implémenteur. Pas de délégation pour
  ces deux corrections ciblées ; pas de revue indépendante des correctifs.
- Vérifications : build, ESLint, 13 tests Vitest et Biome applicatif réussis.
  Biome global échoue sur les quatre HTML Stitch (10 erreurs, 6 avertissements,
  2 informations). Avertissement de build préexistant : CSS 430 px vide.
- Autocontrôle navigateur avec assertions : Chrome 156 avec interface sur build
  production, émulation tactile DPR 2, 390×844 / 667×375 / 740×320 / 320×568,
  FR/EN et clair/sombre (16 cas) ; hauteur du panneau, accès aux réglages,
  sortie par Tab et Maj+Tab, Échap et restauration du focus réussis. À 1440×900,
  bouton mobile masqué et structure desktop inchangée (`display: contents`).
  Effet visuel desktop attendu : aucun ; modification CSS limitée au mobile.
- Preuves conservées hors dépôt, sans dépendance ajoutée :
  [script d'assertions](/mnt/c/Users/allen/.codex/visualizations/2026/10/28/01a18329-02d8-7f22-9277-e1d837bac67c/RUN-013-audit/check-menu-fixes.mjs),
  [résultats](/mnt/c/Users/allen/.codex/visualizations/2026/10/28/01a18329-02d8-7f22-9277-e1d837bac67c/RUN-013-audit/menu-fixes-results.json).
  Le script emploie Playwright déjà présent dans le cache de cet environnement ;
  il n'est pas une commande de test portable du projet.
- Non exécutés : lecteur d'écran réel, téléphone physique, zoom navigateur réel,
  nouveau Lighthouse (les deux changements ciblent le menu ouvert).
- État : constats 1 et 2 corrigés localement ; RUN-013 reste en `verify` pour les
  validations restantes. Aucun commit, push ni déploiement.

## RUN-013 clôture de la phase 1 (28 octobre 2026)

- Mandat : Allen confirme avoir vérifié le menu mobile, les accordéons, le
  dépliage des projets et de la timeline, valide le point 1 de l'audit de clôture,
  puis demande les corrections documentaires 2 et 3. Validation humaine reçue
  dans cette conversation ; navigateur, matériel et lecteur d'écran non précisés.
  Cette acceptation est attribuée à Allen, sans inventer un essai par Codex.
- État : RUN-006 reste `done` pour le périmètre visuel de phase 1 arbitré par Allen ;
  RUN-013 passe de `verify` à `done`. Aucun RUN de phase 2 lancé automatiquement.
- Preuves techniques de la passe C Codex : Chrome 156 avec interface, 24 états
  largeur/langue/thème sans débordement horizontal ni erreur console ; réduction
  des animations et contrastes contrôlés dans les états examinés. Lighthouse
  13.4.1 sur build production local : performance 99 mobile / 100 desktop,
  accessibilité, bonnes pratiques et SEO 100 pour les deux profils. Mesures de
  laboratoire du 28 octobre, pas des métriques terrain ni une conformité complète.
- [Rapport et preuves de l'audit initial](/mnt/c/Users/allen/.codex/visualizations/2026/10/28/01a18329-02d8-7f22-9277-e1d837bac67c/RUN-013-audit/report.md).
  Le rapport conserve les constats avant correction ; ses deux défauts de menu
  ont ensuite été corrigés dans `346d204` et vérifiés dans 16 cas mobiles et sur
  desktop. Build, lint, 13 tests et Biome applicatif repassés lors de l'audit de
  clôture ; Biome global reste en échec sur les quatre HTML Stitch.
- Correction 2 : suppression de la dépendance circulaire implicite. RUN-013
  constate le report d'A04 ; RUN-003 porte sa résolution après RUN-013 et RUN-007
  vérifiera son intégration. A04 est toujours reproduit à 1440 × 500 sur Projets.
- Correction 3 : suivi, brief, index documentaire, brief Claude et entrée README
  alignés sur la phase 1 terminée ; complément R19 à DESIGN. Les références
  historiques et la baseline de production 1.3.2 restent distinguées du code local.
- Intervenant : Codex main, relecture documentaire par l'auteur, sans sous-agent
  pour cette mise à jour bornée. Aucun code, dépendance ou contrat exécutable modifié.
- Vérification de ce lot : diff, cohérence des statuts et des renvois, existence des
  liens locaux ajoutés. Pas de nouvelle exécution build/lint/tests/Lighthouse pour
  ces seules corrections Markdown, conformément à docs/tooling.md.
- Limites conservées : pas de lecteur d'écran exécuté par Codex, de téléphone
  physique ni de zoom navigateur réel contrôlés par Codex. Les résultats humains
  acceptés ci-dessus n'ajoutent pas de détails techniques absents du message d'Allen.
- Clôture locale uniquement : aucun commit, push, déploiement ou nouvelle release.


## RUN-002 : dépendances de développement (29 octobre 2026)

- Mandat : Allen demande de démarrer la phase 2 par RUN-002 et de créer une
  branche `feature/`. Départ : `develop` propre, commit `7e0ab8e` ; branche créée
  `feature/run-002-dependencies`. RUN passé par `in_progress`, `verify`, puis `done`.
- Périmètre : `package.json`, `package-lock.json`, suivi et brief ; aucune
  modification frontend, CI, configuration de tests, dépendance de production
  ou fonctionnalité. Contrats préservés : Node 24/npm 11, React, one-page,
  FR/EN, thèmes, mobile et accessibilité. Risque ciblé : compatibilité de
  l’outillage et de son bundle ; aucune donnée utilisateur modifiée.
- État initial reproduit : audit complet en échec (6 paquets : 2 moderate,
  4 high), production sans alerte. Chaînes inspectées avec `npm ls` :
  Vite → PostCSS → source-map-js ; Vitest → @vitest/mocker ;
  ESLint → minimatch → brace-expansion ; react-hooks → Zod.
- Diagnostic : versions correctives compatibles disponibles. Avis consultés :
  [Vitest/mocker](https://github.com/advisories/GHSA-qxg6-89mg-rqv8),
  [Vite/launch-editor](https://github.com/advisories/GHSA-587h-7wmj-h5pm),
  [Zod](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5).
  Ces alertes concernent l’outillage ; aucune exploitation du site publié
  n’est démontrée par cet audit.
- Correction : `npm audit fix --dry-run --json` inspecté, puis mises à jour
  ciblées avec `npm install --save-dev 'vite@^8.3.5' 'vitest@^4.1.12'` et
  `npm update brace-expansion zod`. Aucun `--force`, override ou nouvelle
  dépendance directe. Minimums déclarés Vite/Vitest relevés aux versions
  installées ; React/React DOM et les autres dépendances directes inchangés.
- Versions verrouillées : Vite 8.1.2 → 8.3.5 ; Vitest et @vitest/mocker
  4.1.11 → 4.1.12 ; brace-expansion 5.0.9 → 5.0.12 ; source-map-js
  1.2.1 → 1.2.2 ; Zod 4.4.3 → 4.6.7. Transitifs associés actualisés :
  Rolldown/bindings 1.2.15, Lightning CSS/bindings 1.33.0, PostCSS 8.5.32,
  picomatch 4.0.7, nanoid 3.3.20, chai 6.3.0, tinyrainbow 3.2.0,
  @oxc-project/types 0.155.0. Ancienne chaîne optionnelle WASM Rolldown retirée
  par npm ; bindings natifs des autres plateformes conservés/actualisés.
- Vérifications sur Node 24.22.1/npm 11.19.1, après `npm ci` réussi :
  `npm run build`, `npm run lint`, `npm run biome:check` (64 fichiers),
  `npm run test` (5 fichiers, 13/13 tests),
  `npm audit --audit-level=moderate` et
  `npm audit --omit=dev --audit-level=moderate` réussis ; les deux audits
  signalent 0 vulnérabilité. `npm ls --all` réussi, sans dépendance invalide.
  Diff du lockfile relu ; aucun saut majeur involontaire identifié.
- Intervenants : Codex main pour diagnostic, modification, contrôles et intégration ;
  sous-agent `review_dependencies`, modèle `gpt-6-luna`, effort demandé low,
  revue indépendante en lecture seule de `package.json`/lock depuis `7e0ab8e`.
  Bénéfice attendu : contrôle borné des versions, engines/peers et changements
  transitifs sans transfert du contexte UI. Retour : aucun constat actionnable,
  dépendances de production inchangées et compatibilité Node vérifiée ; résultat
  confronté au diff et à l’installation propre par le main. Aucune économie de
  tokens mesurée, aucune délégation récursive.
- Limites : pas de contrôle navigateur, Windows/macOS ou CI distante ; les tests
  existants couvrent données/utilitaires et contrat CSS, pas le rendu complet.
  Avertissement préexistant de build : `responsive-430.css` vide, non corrigé ici.
  Biome global passe déjà avec les exclusions Stitch présentes dans la baseline :
  aucune modification de sa configuration dans RUN-002.
- Relais : RUN-002 `done` localement ; RUN-003 reste `planned`. Aucun commit,
  push, déploiement ou release effectué ; aucun autre RUN exécuté.

## RUN-003 : visibilité des longues sections (29 octobre 2026)

- Mandat : Allen valide RUN-002, indique l’avoir commité et demande RUN-003,
  puis RUN-004 sur la même branche si son coût reste borné. Départ vérifié :
  `feature/run-002-dependencies` propre, `75dbce1`.
- Périmètre : observateur dans `src/App.tsx`, visibilité clavier dans
  `animations.css`, suivi documentaire ; aucun contenu, asset, thème, dépendance
  ou nouvelle ancre. Contrats : fondu 600 ms/16 px/une fois, mobile et
  reduced-motion directement visibles, préférences FR/EN et sombre/clair.
- Cause : seuil de 12 % appliqué à une section de 3432 px, avec une marge
  d’observation négative ; le ratio requis ne tient pas dans une fenêtre courte.
  Reproduction sur build du code de `75dbce1`, servi séparément : après molette,
  Projets garde une opacité de 0 à 1440×300 et 1440×500, contre 1 à 1440×900.
- Correction : seuil 0 sans marge, apparition dès l’intersection, visibilité
  préservée si `IntersectionObserver` est absent, nettoyage des classes lors du
  démontage de l’effet. `:focus-within` évite de garder une section transparente
  lorsqu’un de ses éléments reçoit le focus. Effet desktop attendu : déclenchement
  plus tôt ; composition inchangée. Styles mobile/reduced-motion inchangés.
- Premières preuves après correction : opacité 1 à 1440×300/500/900,
  390×844 et 667×375 après molette ; captures comparées et inspectées.
  Build, ESLint, Biome (64 fichiers) et 13 tests réussis. Un premier Biome a
  signalé le format du nettoyage des classes ; corrigé avant le passage réussi.
- Vérification navigateur : Chrome 156.0.8078.47 avec interface, profil isolé,
  contrôle par Playwright déjà disponible dans le cache, sans dépendance ajoutée.
  Les assertions et captures sont conservées hors dépôt dans
  `/mnt/c/Users/allen/.codex/visualizations/2026/10/29/01a186ed-3611-71f1-a7fa-5368c12b732f/run003/`.
- Protocole corrigé avant les mesures retenues : le premier chargement direct
  avec hash restait à scrollY=0, sans atteindre la section. La reproduction
  retenue utilise la molette ; les ancres sont testées après montage React.
  Le premier contrôle mobile lisait la géométrie avant le défilement doux :
  il attend désormais à la fois l’intersection avec l’écran et l’opacité finale.
- Intervenants : Codex main pour diagnostic, correction, intégration et tests ;
  sous-agent `review_scroll`, `gpt-6-luna`, effort demandé medium, revue
  indépendante en lecture seule de App/CSS et styles mobile/reduced-motion.
  Bénéfice attendu : contrôle borné des cas de cycle de vie et d’accessibilité.
  Retour : aucun défaut actionnable, pas de test navigateur par le relecteur ;
  retour confronté au diff par le main. Aucune économie de tokens mesurée.
- Limite distincte observée : chargement initial d’une URL `/#projects` sans
  défilement vers la cible ; traitement de navigation réservé à RUN-012.
  Ni téléphone physique, ni lecteur d’écran, ni nouvel audit Lighthouse.
  Avertissement de build préexistant : `responsive-430.css` vide.
- Matrice finale : 19 scénarios réussis (5 tailles avec/sans réduction des
  animations, 8 combinaisons FR/EN et clair/sombre à 1440×300 et 390×844,
  et 1 cas sans observateur à 1440×300). Ancres Projets/Stack/About/Contact
  après montage, défilement à la molette, activation clavier et focus dans About
  vérifiés ; aucune erreur JavaScript/console ni débordement horizontal détectés.
  Assertions : `regression.mjs`, résultats `regression-results.json`, comparaison
  `check.mjs`, `before.json`/`after.json` et captures dans le dossier ci-dessus.
  Ces contrôles ne sont pas une commande portable du dépôt.
- État : `done` localement. Aucun commit, push ou déploiement. RUN-004 suit
  sur la même branche conformément au mandat, sans autre RUN actif.


## RUN-004 : activation TypeScript strict (29 octobre 2026)

- Mandat : suite de RUN-003 autorisée par Allen sur la même branche si le coût
  reste borné. Le contrôle préalable `tsc -p … --strict` avec caches temporaires
  distincts réussissait pour les trois configurations avant modification : aucun
  motif de report, bénéfice immédiat avant les ajouts de phase 2.
- RUN-003 clôturé avant activation de RUN-004 ; transitions `in_progress`,
  `verify`, puis `done`. Périmètre : une option `strict: true` ajoutée à
  `tsconfig.app.json`, `tsconfig.node.json`, `tsconfig.test.json`.
  Aucun changement de code, test, dépendance, assertion ou directive d’ignorance ;
  aucun contournement ajouté. Les autres réglages existants restent inchangés.
- Vérification : build (compilation des trois projets référencés), lint, Biome
  (64 fichiers), 13/13 tests réussis après activation. Options strict effectives
  contrôlées via l’API du compilateur installé (`parseJsonConfigFileContent` et
  `getStrictOptionValue`) pour les trois projets. La première assertion utilisait
  à tort `tsc --showConfig` comme s’il développait toutes les options implicites :
  ce contrôle a été corrigé pour interroger leur valeur effective.
- Build final : mêmes fichiers CSS/JS et mêmes tailles que RUN-003 ; l’activation
  du typage ne change pas le bundle généré. Aucun nouveau passage navigateur
  pour ces seules options de compilation ; les 19 scénarios de RUN-003 couvrent
  ce même code livré. Avertissement CSS vide préexistant conservé.
- Intervenant : Codex main, relecture par l’implémenteur. Pas de sous-agent pour
  ces trois lignes de configuration : transfert et intégration sans bénéfice
  attendu. La revue indépendante de RUN-003 ne porte pas sur RUN-004.
- État : `done` localement sur `feature/run-002-dependencies`. Aucun commit,
  push, déploiement ou nouveau RUN exécuté. RUN-005 reste planifié et nécessitera
  les arbitrages de contenu d’Allen ; limites navigateur consignées dans RUN-003.


## RUN-019 : règle shadcn/ui et cadrage CSS natif (29 octobre 2026)

- Mandat : Allen valide la consigne proposée et demande son ajout documentaire,
  en insistant sur le cadrage avec le CSS natif actuel.
- Périmètre : AGENTS, brief, cycle agentique, outillage, suivi et journal uniquement.
  Règle : shadcn/ui pour les nouveaux composants de base adaptés, consultation MCP,
  réutilisation et exceptions justifiées ; direction visuelle de Claude préservée.
- Avant la première intégration : cadrer et valider tokens, cascade, styles
  globaux/resets, thèmes, responsive et dépendances. Aucune installation Tailwind,
  substitution du CSS natif ou migration générale autorisée par ce lot.
- Preuve MCP issue de l’inspection précédente dans cette même conversation :
  `view_items_in_registries` sur `@shadcn/button` a répondu avec les détails du
  composant. Accès à revérifier dans une autre session ou pour Claude.
- Vérification : diff relu, `git diff --check` réussi et cibles des liens locaux
  des six fichiers modifiés contrôlées. Aucun code, CSS, manifeste ou configuration
  modifié ; build, lint, Biome, tests et audit non exécutés pour ce lot documentaire,
  conformément à docs/tooling.md. Pas de vérification de compatibilité UI à ce stade.
- Intervenant : Codex main, skill Ponytail ; relecture par l’implémenteur.
  Pas de délégation : lot documentaire ciblé sans bénéfice attendu du transfert.
- État : `done` après rédaction et vérification ; intégration technique hors mandat,
  aucun RUN suivant lancé, aucun commit, push ou déploiement.


## RUN-020 : correctifs et tests du socle validés après revue (29 octobre 2026)

- Mandat : Allen valide les cinq propositions de l’audit global, nettoyage
  compris, avec Ponytail et sans nouvelle dépendance. Branche conservée :
  `feature/run-002-dependencies`, départ code `69228a7`. À la prise en charge,
  six fichiers documentaires portent déjà la décision shadcn de RUN-019 :
  AGENTS, brief, cycle, outillage, suivi et journal. Ces changements sont préservés ;
  les compléments de RUN-020 sont ciblés et ne les remplacent pas.
- RUN borné, seul actif : transitions `in_progress`, `verify`, `done`.
  Périmètre : App, cache, données/styles non consommés, tests et documentation.
  Aucun nouveau composant UI, paquet, routeur, fonctionnalité ou migration CSS ;
  la règle shadcn concernant les nouveaux composants n’est donc pas déclenchée.
- Ancres : après montage React, décodage du fragment et `scrollIntoView` instantané
  sur la cible existante ; fragment absent/inconnu/mal encodé sans erreur.
  L’effet ne réécrit ni l’historique ni les navigations natives suivantes.
- Cache : `public, no-cache` sur `/projects/generated/*` ; cache long immutable
  de `/assets/*` inchangé. Cela ne purge pas les anciennes réponses fraîches ;
  changement d’URL à prévoir au remplacement d’une image déjà publiée avec le
  cache long. Aucun asset remplacé et aucun en-tête distant contrôlé dans ce RUN.
- Nettoyage : 23 déclarations de tokens sans consommateur, icônes/tons morts de
  Stack, icônes de Skills/Parcours, textes non consommés `hero.status` et
  `contact.meta` retirés. Assertions d’icônes obsolètes du test About supprimées.
  Règle `.chip-list` déplacée auprès de `.chip` dans `buttons.css`, ajustements
  des projets conservés. Textes et ordre affichés préservés.
- Tests versionnés : 8 fichiers, 41 cas contre 5 fichiers/13 au départ :
  stockage 7, parcours 2, statistiques hero 2, projets 2, CSS 3, contrats de
  contenu 6, rendu React 12, commande statistiques 7. Contrats : identités, FR/EN
  non vide, fichiers d’images/srcset, liens, cache, cibles d’ancres et ARIA,
  variantes de cartes avec/sans démo/dépôt, sécurité des liens externes.
  Tests statiques via `react-dom/server`, sans effets ni événements simulés.
  Types DOM/JSX/Vite ajoutés dans la configuration stricte des tests seulement.
- Tests CLI : copie de la commande réelle dans un répertoire temporaire,
  préchargement d’une fixture `fetch` sans réseau réel, jeton bidon et nettoyage.
  Sept cas : création valide, idempotence, HTTP, GraphQL, compteur invalide,
  utilisateur absent, jeton absent. Les erreurs préservent le fichier existant ;
  aucune modification du script de production pour rendre son code testable.
- Contrôles finaux : `npm run build`, `npm run lint`, `npm run biome:check`
  (68 fichiers), `npm run test` (41/41), `npm audit --audit-level=moderate` et
  `npm audit --omit=dev --audit-level=moderate` réussis, 0 vulnérabilité.
  Un premier build signalait une inférence TypeScript trop étroite de l’environnement
  du test CLI : corrigée par `NodeJS.ProcessEnv`, puis compilation réussie.
  Avertissement préexistant conservé : `responsive-430.css` vide.
- Chrome 156.0.8078.47 avec interface, profils isolés, build de production :
  huit cas de navigation (1440×300/900, 390×844, 667×375, avec/sans reduced-motion)
  vérifient accès initial aux quatre sections, reload, fragment encodé, fragments
  invalides, précédent/suivant et entrée au clavier. Six autres cas vérifient
  langue/thème persistés ou stockage bloqué, dépliage projets 3→9→3 et parcours
  6→12→6, exclusivité About et branches multiples de compétences, sans erreur
  JavaScript ni débordement horizontal détectés dans ces cas.
- Menu : 16 cas mobiles (390×844, 667×375, 740×320, 320×568, FR/EN, clair/sombre),
  géométrie, Tab/Maj+Tab, Échap et restitution du focus réussis ; témoin desktop
  à 1440×900 réussi. Script repris du contrôle RUN-013, sans modification Navbar.
- Comparaison : code de `69228a7` exporté dans un dossier temporaire et servi
  séparément, sans modifier les sources de travail. Huit couples avant/après
  à 1440×900 et 390×844, FR/EN, clair/sombre : textes et styles calculés des
  titres/cartes/tags/parcours/compétences identiques ; huit paires de captures
  PNG intégrales identiques (SHA-256). Captures mobile comparées visuellement.
  JS : 229,52 → 228,48 kB (gzip 71,77 → 71,50) ; CSS : 27,17 → 26,54 kB
  (gzip 5,36 → 5,24). Tailles de build, sans gain de réactivité terrain annoncé.
- Protocole : corrections de tests exploratoires avant résultats retenus : un
  fragment inconnu changé dans le même document conserve sa position native,
  contrairement à un chargement initial ; les cas initiaux utilisent désormais
  une nouvelle navigation. Le focus au retour d’historique n’est pas assimilé à
  une activation d’ancre avec Entrée : ce parcours est testé séparément.
  Une attente de position a interrompu le premier passage de comparaison via
  clavier ; la comparaison finale est isolée et prépare les sections par clics.
  Les assertions clavier indépendantes et les comparaisons finales réussissent.
- Preuves : scripts, captures et résultats dans
  `/mnt/c/Users/allen/.codex/visualizations/2026/10/29/01a186ed-3611-71f1-a7fa-5368c12b732f/run020/` :
  `browser-check.mjs` / `browser-results.json` (8 navigations, JSON partiel),
  `interaction-summary.md` (6 succès observés avant interruption de la comparaison),
  `visual-check.mjs` / `visual-results.json` (8 comparaisons),
  `screenshot-comparison.json`, `menu-check.mjs` / `menu-fixes-results.json`.
  Playwright provient du cache de l’environnement et ne devient pas une dépendance
  du dépôt. La procédure portable manuelle est versionnée dans `docs/testing.md`.
- Contributeurs effectifs : Codex main pour App/cache, tests contenu/rendu/stockage,
  intégration, contrôles et documentation ; `cleanup_shared` (gpt-6-luna, effort
  demandé medium) pour les huit fichiers attribués de données/CSS/test About ;
  `stats_tests` (gpt-6-luna, medium) pour les deux fichiers de test CLI ;
  `review_run020` (gpt-6-luna, high) pour revue indépendante en lecture seule.
  Bénéfices attendus : deux lots autonomes sans collision d’écriture et revue
  indépendante des interactions du diff ; retours confrontés aux fichiers et
  contrôles par le main, aucune économie de tokens mesurée. Aucun défaut
  actionnable confirmé par le relecteur ; il n’a pas exécuté le navigateur.
- Limites : pas de navigateur automatisé portable dans la CI, en-têtes Vercel
  non vérifiés à distance, pas de Safari/Firefox, lecteur d’écran, téléphone
  physique, nouveau Lighthouse ni validation humaine du rendu dans ce RUN.
  Les futures fonctionnalités clients/contact restent dans leurs RUN prévus.
- État : `done` localement ; aucun commit, push, déploiement ou RUN suivant lancé.


## RUN-005 : offres et contenu bilingue (29 octobre 2026)

- Mandat : Allen valide la recommandation puis demande de lancer RUN-005.
  Départ propre sur `feature/run-005-offres-contenus`, créée depuis `develop`
  à `a6778bb`. Seul RUN actif ; transitions `in_progress` puis `verify`.
- Périmètre : plan éditorial, brief, relais Claude, suivi et journal. Préparer
  promesse, offres, trois cas, présentation/contact et CTA FR/EN. Préserver code,
  neuf projets, liens/assets, design, langues/thèmes ; aucune dépendance ni UI.
- Sources : données projets, i18n, About et liens ; brief, suivi, journal récent,
  plan, brief Claude, DESIGN R8, workflow et règles d'outillage.
  Le catalogue ne prouve pas une expérience client ni la contribution individuelle.
  Aucun dépôt externe audité ni lien distant vérifié.
- Livrable : proposition bilingue centralisée dans docs/refonte-plan.md,
  familles web / intégrations IA / workflows agents avec besoins, livrables,
  limites et CTA ; neuf projets inventoriés. Trois cas proposés : Portfolio AK,
  Diff Impact Analyzer, Code Quality Guardian. Rôles et preuves à confirmer.
  Offre IA conditionnée à un cas maîtrisé démontrable ; à défaut hors publication.
- Cohérence : statistiques conservées, WebGL supprimé et synthèse visuelle déjà
  arbitrés dans DESIGN R8 ; plan corrigé sur ces points. Les autres RUN et leur
  ordre ne changent pas. Le brief Claude renvoie à la proposition non validée.
- Intervenant : Codex main, skill Ponytail ; relecture par l'implémenteur.
  Pas de sous-agent : rédaction et arbitrages produit liés, sans lot autonome
  justifiant le transfert. Aucune revue indépendante revendiquée.
- Vérification : `git diff --check` réussi ; 40 liens vers des fichiers locaux
  contrôlés et fragment RUN-005 des deux renvois validé ; seul RUN-005 actif en
  `verify`. Textes FR/EN relus par l'implémenteur, sans traduction indépendante.
  Build/lint/Biome/tests/audit non relancés : documents seuls, aucun contrat
  exécutable modifié, conformément à docs/tooling.md. Pas de contrôle navigateur.
- État : `verify` en attente de validation d'Allen sur les textes/offres, cas et
  rôles, modalités/disponibilité/contact. Autoriser le RUN ne valide pas ces faits.
  Aucun contenu public, commit, push, déploiement ni RUN suivant exécuté.


### RUN-005 : simplification demandée par Allen (29 octobre 2026)

- Correction du mandat : démarche d'abord visuelle ; Allen démarre son activité
  freelance, entreprise non créée. Les textes de services sont temporaires et
  sujets à évolution, sans catalogue commercial définitif requis maintenant.
- Deux prestations : sites/applications web ; développement assisté par IA avec
  workflows agents. Fusion IA/workflows, adaptation FR/EN des exemples commerciaux
  fournis par Allen, paragraphes courts et CTA commun. Détails de livrables,
  support et conditions retirés de la proposition visuelle.
- Plan, brief, relais Claude et critères RUN-005 alignés. L'obligation ajoutée
  de produire un cas IA pour avancer visuellement est retirée. Les trois pistes
  de cas et l'inventaire restent disponibles pour plus tard ; aucune expérience
  client inventée. Les inconnues factuelles ne sont pas des exigences de clôture
  commerciale pour ce cadrage ; les contenus réellement publiés devront rester exacts.
- État : `verify`, structure corrigée selon la demande, rédaction adaptée proposée.
  Aucun autre RUN lancé et aucun code public modifié. Même branche et changements
  documentaires précédents préservés ; relecture par Codex main, sans délégation
  pour cette correction éditoriale ciblée.
- Vérification : `git diff --check` réussi ; 40 liens locaux et fragment RUN-005
  valides, présence des deux prestations contrôlée, textes FR/EN relus. Pas de
  build, lint, Biome ni tests applicatifs pour des documents seuls (docs/tooling.md).


### RUN-005 : projets et conservation du texte About (29 octobre 2026)

- Mandat complémentaire d'Allen : Code Quality Guardian « MVP (deprecated) »,
  Sokwak AI « MVP » ; trois espaces personnels/clients/game dev avec Milady's
  Knight dans game dev. Timeline My Coding Journey à revoir en horizontal,
  apparition en fondu et défilement horizontal animé ; présentation actuelle intacte.
- Modification de données bornée : deux statuts corrigés FR/EN dans projects.ts.
  Consommateurs inspectés : ProjectsSection/ProjectCard, statistiques et tests.
  Aucun champ, ordre, lien, asset ni compte de projets changé ; pas de nouveau
  test pour ces libellés seuls. La présentation et AboutJourney ne sont pas modifiés.
- Cadrage : plan, brief, relais Claude et DESIGN R21 alignés ; remplacement de
  la présentation About retiré. Trois espaces réservés à RUN-015. RUN-021
  planifié pour la timeline, avec accès clavier/tactile, reduced-motion et
  contrôles responsive ; RUN-007 inclut son intégration. Aucun RUN suivant lancé.
- Vérification : build, lint, Biome (68 fichiers) et tests (41/41) réussis.
  Avertissement de build préexistant : responsive-430.css vide.
  Diff sans erreur d'espacement ; 41 liens locaux contrôlés. Diff vide pour i18n,
  AboutSection et AboutJourney : présentation actuelle et composant préservés.
- Intervenant : Codex main, relecture par l'implémenteur ; pas de délégation
  justifiée pour ces libellés et ce cadrage ciblé. RUN-005 reste `verify`.
- Limites : pas de contrôle navigateur ni d'audit npm pour cette correction de
  contenu ; espaces projets et timeline uniquement spécifiés, pas implémentés.
  Aucun commit, push ni déploiement.


### RUN-005 : clôture validée (29 octobre 2026)

- Allen valide les derniers correctifs projets/About et demande de passer à la
  suite. RUN-005 passe `done` avec le mandat simplifié : base de contenu pour le
  design, deux prestations temporaires, statuts corrigés, trois espaces projets
  et présentation actuelle conservée. Aucun catalogue commercial définitif requis.
- Les vérifications applicatives du lot précédent restent datées : build, lint,
  Biome et 41 tests réussis ; aucun code modifié depuis ces résultats.
- Suite autorisée : RUN-011. Aucun commit, push ou déploiement demandé/effectué.

## RUN-011 : architecture des sections et ancres (29 octobre 2026)

- Mandat : suite demandée après validation RUN-005 ; même branche
  feature/run-005-offres-contenus, changements existants conservés. RUN-005 clos
  avant démarrage ; transitions `in_progress`, `verify`, puis clôture après contrôle.
- Sources : App, liste navigation, consommateurs Navbar/Footer/Hero et autres
  sections, AboutJourney, index.html, robots/sitemap, plan et procédure de tests.
  Sources locales uniquement ; pas d'audit SEO distant ni de résultat navigateur.
- Décision : ordre Accueil/Services/Projets/Stack/About/Contact ; conserver les
  cinq ancres de menu existantes et main-content, ajouter services avec son contenu
  en RUN-014. Trois espaces sous Projets, sans nouveau filtre/onglet obligatoire,
  huit projets personnels et Milady's Knight en game dev ; clients masqués si vides.
- CTA et séquencement documentés : Hero contact principal/projets secondaire,
  Services contact commun, mailto de secours conservé, lien Services activé avec
  sa section. RUN-012 ne doit pas publier de lien sans cible ou section vide.
- FR/EN : même URL et fragments ; canonical actuelle conservée, pas de version
  EN distincte promise. Date historique du sitemap signalée pour RUN-007/008,
  sans changement arbitraire ni stratégie SEO supplémentaire.
- Livrables : plan, synthèse brief, relais Claude, critères de navigation et
  procédure de tests. Tests à exécuter lors de l'intégration, pas déclarés réussis
  ici. Mandat borné au cadrage, aucune interface ni configuration modifiée.
- Intervenant : Codex main, skill Ponytail et relecture par l'implémenteur.
  Pas de délégation : contrat documentaire ciblé lié aux décisions déjà connues,
  coût du transfert sans bénéfice attendu. Aucun agent Claude appelé.
- Vérifications : git diff --check réussi, 51 liens locaux et fragments RUN-011
  contrôlés ; RUN-011 seul actif pendant la vérification puis aucun à sa clôture.
  Contrat relu face aux sources ; aucun code changé dans ce lot, donc build/lint/
  Biome/tests non relancés selon docs/tooling.md. Résultats RUN-005 conservés.
- État : `done` localement ; RUN-012 reste planifié avec contrat d'intégration prêt.
- Limites : code navigateur non exécuté pour ce lot documentaire ; vérifications
  précédentes RUN-005 non présentées comme une preuve de la future UI.
  Aucun commit, push, déploiement ou lancement RUN-012 effectué.


## RUN-012 : navigation et CTA du socle (29 octobre 2026)

- Mandat : Allen valide RUN-011 puis demande de passer à la suite. Départ propre
  sur feature/run-005-offres-contenus à b9cc192, contenant les décisions précédentes.
  Seul RUN actif, transitions in_progress puis verify.
- Périmètre : Navbar, Hero, cibles d'ancres dans App et cinq sections existantes,
  libellés navigation/CTA FR/EN, règle de soulignement, contrats de rendu et docs.
  Services/lien restent en RUN-014, espaces projets en RUN-015, parcours en RUN-021.
  Aucun composant de base nouveau : règle shadcn non déclenchée, aucune dépendance.
- Hero : Contact principal, projets secondaire. Menu FR Accueil/À propos et
  footer utilisent toujours la même liste ; lien de défilement conservé.
- Position active : aria-current location et soulignement, calcul depuis les
  sections et le scroll-padding CSS ; écoute scroll passive regroupée par rAF,
  resize et ResizeObserver pour les changements de hauteur. Contact actif en bas
  de page. Nettoyage des écouteurs/observateur/rAF ; aucun déplacement de focus
  pendant le défilement. Fonctionne sans IntersectionObserver ni ResizeObserver.
- Focus : sections et main avec tabindex -1, hors parcours Tab ; navigation native
  conservée, focus sur la cible initiale après décodage et scroll instantané du
  fragment, avec preventScroll. Fragments inconnus/mal formés sans erreur.
- Préservé : blocs About FR/EN comparés textuellement à HEAD et identiques ;
  données projets/parcours et AboutJourney sans diff. Palette, typographie,
  préférences locales, liste/ordre des sections et dépendances inchangés.
- Tests versionnés : assertions ajoutées aux contrats existants pour cibles
  focalisables, CTA principal/secondaire FR/EN, un seul aria-current initial et
  absence de lien Services avant sa section. Toujours 8 fichiers et 41 cas.
- Contrôles finaux : build, ESLint, Biome (68 fichiers), Vitest 41/41 et
  git diff --check réussis. Avertissement préexistant : responsive-430.css vide.
  Premiers Biome : dépendance language non consommée et format signalés ; effet
  corrigé avec ResizeObserver pour les changements de hauteur, puis formaté.
  Sur la marque avec onClick, la règle d'ancre rejetait le href littéral ;
  réutilisation de navItems[0].href, sans désactivation de règle.
- Navigateur : Chrome 156.0.8078.47 avec interface, profils isolés, build de
  production, Playwright déjà en cache. Huit scénarios de navigation :
  1440×900, 1440×300, 390×844, 667×375 avec/sans reduced-motion. Cinq ancres
  directes et reload, évitement, activation clavier/focus/Tab, molette, bas de
  page, historique précédent/suivant, fragments encodés/inconnus/mal formés,
  fermeture par marque/Échap vérifiés. Huit variantes FR/EN et clair/sombre à
  1440×900 et 390×844 : préférences après reload, CTA, cohérence header/footer,
  projets 3→9→3 et absence de débordement vérifiés. Deux cas supplémentaires
  sans observateurs, dont un avec stockage bloqué, réussis. Aucune exception
  pageerror dans ces 18 scénarios. Pas d'audit exhaustif console/réseau.
- Protocole corrigé avant résultats retenus : mesure Home initiale attendait
  à tort 63 px de marge au lieu de son bord de page ; historique exécuté trop
  tôt avant enregistrement de la position ; Tab vers GitHub dans About pouvait
  encore défiler au lancement de l'action suivante en paysage. Attentes de
  stabilisation ajoutées, contrôle isolé history.mjs/mobile.mjs, sans correctif
  source pour ces artefacts. Fixture de préférences ne doit pas les réécrire à
  chaque reload : initialisation seulement si absentes. Captures reprises après
  fin du fondu, chargement des polices et compteurs à leurs valeurs finales.
- Contributeurs : Codex main pour code, tests, intégration et navigateur ;
  review_run012, sous-agent gpt-6-luna effort demandé medium, revue indépendante
  en lecture seule selon docs/handoff-contracts.md. Bénéfice attendu : contrôle
  borné des nouveaux effets et du focus. Constat : marque ne fermant pas le menu
  mobile ; corrigé puis contrôlé en navigateur par le main. Reprise diagnostique
  sur le paysage : aucune cause source supplémentaire établie, hypothèse de
  défilement en cours cohérente avec le protocole corrigé. Le relecteur n'a pas
  exécuté le navigateur. Aucune économie de tokens mesurée.
- Preuves hors dépôt : scripts check.mjs, history.mjs, mobile.mjs, captures.mjs,
  results.json (8 navigation, 8 variantes, 2 fallback) et huit captures Hero dans
  /mnt/c/Users/allen/.codex/visualizations/2026/10/29/01a1873c-4579-7f52-9eb8-bba8ca3bc53b/run012/.
  Ces scripts ne sont pas une suite navigateur portable du dépôt.
- Limites : pas de Safari/Firefox, téléphone physique, lecteur d'écran,
  Lighthouse ou nouvelle mesure de performance. Pas d'audit npm pour ce lot
  sans dépendance/release. Contrôle global et validation humaine finale restent
  en RUN-007/008 ; aucun commit, push, déploiement ni autre RUN exécuté.

- Clôture : RUN-012 `done` localement après contrôles et relecture des captures
  Hero desktop/mobile, FR clair et EN sombre notamment. 43 liens documentaires
  locaux valides et diff sans erreur d'espacement. Aucun RUN actif à la fin ;
  RUN-014 est le prochain lot d'intégration visuelle, sous direction Claude.


## RUN-014 : intégration des deux prestations (29 octobre 2026)

- Mandat : Allen demande la suite après RUN-012 ; départ propre sur
  feature/run-005-offres-contenus à af85a1d. Seul RUN actif, transitions
  in_progress puis verify. Les prestations restent provisoires pour le design.
- Contribution visuelle réelle : Claude Code 2.1.287 authentifié, alias sonnet,
  effort demandé medium ; sortie JSON confirme claude-sonnet-5-5. Contrat borné
  en lecture seule/texte, outils désactivés : composition et CSS indicatifs sur
  extraits ciblés, aucun fichier partagé modifié par Claude. Bénéfice attendu :
  respecter sa propriété du design et limiter le transfert ; aucune économie de
  tokens mesurée. Codex main assure seul l'intégration et les contrôles, sans
  présenter sa relecture comme indépendante.
- Design : deux lignes à filets, titres à gauche et paragraphes à droite en
  desktop, empilés sous 1040 px, heading Deux prestations / Two services,
  un CTA commun Contact. Système monochrome, typographie et effets existants.
  Les dimensions suggérées par Claude n'étaient pas des mesures navigateur.
- Fichiers : nouveau ServicesSection, données Service typées et CSS services ;
  insertion App entre Hero et Projets, lien Services partagé Navbar/Footer,
  deux clés i18n de heading et libellé navigation, responsive et import CSS.
  Aucun composant de base nouveau : lien .button existant réutilisé, aucune
  première intégration shadcn ni ajout de dépendance nécessaire.
- Contenu : quatre paragraphes comparés par assertion à la version FR/EN
  validée du plan, identiques. Blocs About comparés à HEAD, intacts ; données
  projets/parcours et AboutJourney sans diff. Pas de catalogue contractuel,
  chiffre, backend, formulaire ni nouvelle promesse ajouté.
- Tests versionnés : contrats de contenu étendus aux identités/textes Services ;
  rendu de deux services et un CTA par langue ; ordre des six sections comparé
  à la navigation, liens et cibles d'ancres/ARIA existants conservés. L'ancienne
  assertion interdisant tout lien Services est remplacée lors de son intégration.
- Contrôles : build/lint/Biome (71 fichiers), tests 43/43 et diff-check réussis.
  Premier Biome : ordre d'import du test corrigé. Avertissement de build
  préexistant conservé : responsive-430.css vide. Aucun audit npm pour ce lot
  sans dépendance ni release.
- Contrôle navigateur Chrome 156.0.8078.47 avec interface, profils isolés et
  build production, Playwright en cache : 16 variantes 320×740, 390×844,
  768×1024, 1440×900, FR/EN et clair/sombre ; quatre cas 1440×300/667×375
  avec/sans reduced-motion ; deux cas sans observateurs dont stockage bloqué.
  Accès direct/reload Services, focus clavier, CTA Contact, retour Services,
  anciennes ancres Projets/About, indication active, cohérence header/footer,
  alignement des deux lignes, géométrie du menu desktop/paysage et absence de
  débordement vérifiés. Aucun pageerror dans ces 22 scénarios.
- Défaut découvert : grille empilée conservant douze colonnes et onze gaps de
  2.5rem, largeur 440 px dans 280 px disponibles à 320 px. Codex passe la grille
  à une colonne réelle sous 1040 px, puis tous les scénarios passent ; desktop
  inchangé par ce correctif. Une fermeture du navigateur a interrompu le premier
  passage après les 16 variantes ; les six cas restants ont été repris et réussis.
- Captures de section conservées pour les 16 variantes ; rendu mobile FR clair
  et desktop FR clair inspecté par le main. Scripts check.mjs/inspect.mjs,
  results.json, captures et contrat/retour Claude design-prompt.txt/design-result.json
  hors dépôt dans /mnt/c/Users/allen/.codex/visualizations/2026/10/29/01a1873c-4579-7f52-9eb8-bba8ca3bc53b/run014/.
- Limites : pas de Safari/Firefox, téléphone physique, lecteur d'écran, nouveau
  Lighthouse ni validation humaine finale du rendu. Les scripts navigateur ne
  sont pas une suite portable intégrée à la CI ; pas d'audit SEO/réseau distant.
  Les espaces projets, la timeline et le formulaire restent dans leurs RUN.
  Aucun commit, push, déploiement ou autre RUN exécuté.

- Clôture locale : RUN-014 done après relecture, 43 liens documentaires locaux
  valides, nouveaux fichiers explicitement inspectés et diff sans erreur.
  Aucun RUN actif ; RUN-015 reste planifié, sans lancement automatique.


## RUN-015 : projets personnels, clients et game dev (29 octobre 2026)

- Mandat : Allen demande la suite après RUN-014. Départ propre à 71141dd sur
  feature/run-005-offres-contenus. Seul RUN actif : in_progress puis verify.
- Composition : Claude Code appelé avec alias sonnet, effort demandé medium,
  outils désactivés, contrat visuel borné sans écriture ; sortie JSON confirme
  claude-sonnet-5-5. Groupes empilés, h3 mono avec effectif, cartes h4, filets,
  réutilisation des cartes/bouton. Codex main intègre et contrôle le résultat.
- Migration : catégorie explicite sur les neuf projets, huit personnels et seul
  Milady's Knight en game-dev. Assertion de comparaison à HEAD : tous les champs
  préexistants identiques (textes, statuts, liens, assets, stack et ordre).
  About FR/EN comparé textuellement à HEAD et intact, parcours sans diff.
- Affichage : trois personnels feature, cinq supplémentaires dépliables ; jeu
  compact toujours présent et unique, position globale 09. Les comptes de groupes
  sont 08 et 01 ; Hero reste à neuf. Aucun onglet, filtre ni nouvelle ancre de menu.
- Clients : catégorie discriminée avec nom, mission, rôle, livrables, accord de
  publication et résultat facultatif. isProjectPublished partagé par section,
  cartes et statistiques ; aucun groupe vide ni cas non approuvé affiché.
  Le flag ne cache pas le contenu d'un bundle frontend : les données non
  autorisées/confidentielles ne doivent pas entrer dans les sources publiques.
  Aucun client ajouté en production. Contrat documenté dans le plan.
- Tests : jeux de données/compteur ajustés, hiérarchie h3/h4, jeu isolé et absence
  clients vérifiés ; fixtures clients avec/sans accord et avec/sans résultat,
  présentes seulement dans les tests et retirées en finally. Pas de prop ou
  mécanisme de production ajouté pour injecter les fixtures.
- Vérifications finales : build/lint/Biome (71 fichiers), 46/46 tests et
  git diff --check réussis. Avertissement CSS vide préexistant conservé.
  Une ligne vide EOF lors du regroupement de la règle projects-toggle a été
  corrigée ; regroupement CSS sans changement de comportement.
- Navigateur : Chrome 156.0.8078.47 avec interface, profils isolés, build de
  production, Playwright en cache. Seize variantes 320×740, 390×844, 768×1024,
  1440×900, FR/EN, clair/sombre : accès direct/reload Projets, focus clavier,
  personnels 3→8→3, total cartes DOM 4→9→4, unicité des neuf titres, jeu toujours
  seul dans son groupe, compteurs, CTA Contact et retour Projets, absence de
  débordement. Quatre cas 1440×300/667×375 avec/sans reduced-motion complètent
  ces parcours ; aucune exception pageerror dans ces vingt cas applicatifs.
- Huit fixtures visuelles client supplémentaires : 320/1440, FR/EN, clair/sombre.
  ProjectCard rendu côté serveur par Vite en mode middleware, HTML écrit hors
  dépôt puis injecté dans des documents navigateur isolés avec les styles livrés.
  Les quatre faits client, libellés, titre et absence de débordement sont vérifiés.
  Aucun fichier de fixture dans src, public ou dist. Captures mobile personnelles,
  jeu desktop et client mobile sombre inspectées par le main.
- Contributeurs : Claude pour spécification ; Codex main pour code, intégration,
  tests/navigateur et docs ; review_run015, gpt-6-luna effort demandé medium,
  revue indépendante en lecture seule du contrat partagé et migration. Bénéfice
  attendu : second contrôle publication/comptage/appels. Aucun constat bloquant ;
  21 tests ciblés réussis chez le relecteur, sans navigateur. Retour confronté
  au diff et aux contrôles par le main, aucune économie de tokens mesurée.
- Preuves hors dépôt : design-prompt.txt/design-result.json, baseline-projects.ts,
  fixtures.mjs/client-fr.html/client-en.html, check.mjs/results.json et captures
  dans /mnt/c/Users/allen/.codex/visualizations/2026/10/29/01a1873c-4579-7f52-9eb8-bba8ca3bc53b/run015/.
  Results : 16 parcours production, 4 reduced-motion/fenêtre courte et 8 fixtures.
- Limites : aucun cas client réel ni droit de publication validé dans ce RUN ;
  pas de Safari/Firefox, téléphone physique, lecteur d'écran, Lighthouse ou audit
  SEO/réseau. Pas d'audit npm pour ce lot sans dépendance ni release. Scripts
  navigateur hors CI ; aucune nouvelle dépendance ni nouveau composant de base.
  Aucun commit, push, déploiement ou autre RUN exécuté.

- Clôture locale : RUN-015 done après contrôles, captures relues, 51 liens locaux
  valides et diff sans erreur. Aucun RUN actif ; la suite prévue reste RUN-016.


## RUN-016 : proposition de traitement contact/devis (29 octobre 2026)

- Mandat : Allen demande la suite après RUN-015. Branche conservée,
  feature/run-005-offres-contenus ; HEAD 71141dd, travaux RUN-015 encore non
  commités au démarrage, tous préservés. RUN-015 est done ; seul RUN-016 actif,
  transitions in_progress puis verify.
- Sources locales : RUN/brief/plan, package, vercel.json, politique sécurité et
  liens ; site statique React/Vite, aucune logique d'envoi/configuration choisie.
  Email public existant allen.kch24@gmail.com, pas encore destinataire approuvé.
  Configuration Vercel présente, sans audit de compte/plan/hébergement distant.
- Recherche officielle datée du 29 octobre : tarifs/quotas Formspree, Workflow
  (validation serveur sur tous les plans), limites de compte, AJAX/fetch, sécurité
  et guide officiel Vercel ; Resend pricing pour comparaison. Le contrat inclut
  les liens directs. Free Formspree est présenté pour tests/développement,
  50 soumissions/mois, archive consultable 30 jours ; Personal mensuel 15 USD
  ou 120 USD/an. Aucun plan de production supposé choisi ni coût engagé.
- Recommandation de travail : essai Formspree et fetch natif, trois champs nom
  facultatif/email/message, validation dans le service, statut d'envoi vérifié,
  erreurs bilingues, saisie conservée et contact email maintenu. Endpoint minimal
  avec Resend comparé mais non retenu par défaut car ajoute serveur/secrets/maintenance.
- Données : prestataire et messagerie distincts, rétention technique non déduite
  de l'archive visible. Formspree annonce AWS États-Unis ; conservation de la
  messagerie à décider par Allen, pas de durée légale ni conformité inventée.
  Captcha/AJAX et paramètres anti-abus devront être vérifiés dans le compte réel.
- Livrable : docs/contact-form-contract.md, renvois brief/plan/brief Claude/index,
  suivi et journal. Politique sécurité corrigée sur le périmètre one-page (ancienne
  mention multipage retirée), sans élargir les droits ni le périmètre backend.
- Trois questions envoyées à Allen : choix de solution, adresse et futur test de
  réception autorisé, durée de conservation des demandes sans suite. Aucun
  choix, création de compte, abonnement, message de contrôle ou lecture Gmail
  effectué. Les questions restent sans réponse au moment de la préparation.
- Intervenant : Codex main, relecture par l'auteur, sans délégation pour cette
  décision produit et ce cadrage documentaire liés aux arbitrages de l'humain.
  Aucun changement applicatif supplémentaire dans RUN-016, aucun secret consulté.
- Vérification : git diff --check réussi, 82 liens locaux valides, nouveau contrat
  inspecté et seul RUN-016 actif en verify ; build, lint, Biome, tests et audit
  non relancés pour ce lot de documents seuls selon
  docs/tooling.md. Résultats applicatifs RUN-015 (46 tests et 28 cas navigateur)
  restent datés, pas une preuve d'un service d'envoi configuré.
- État : verify ; fournisseur/plan/destinataire/conservation et configuration réelle
  restent à valider. Aucun RUN-017 lancé ; ni commit, push, déploiement ou envoi.


### RUN-016 : décision email seul et clôture (29 octobre 2026)

- Réponses d'Allen : conserver uniquement le lien email pour l'instant ; adresse
  allen.kch24@gmail.com validée avec autorisation d'un futur message de contrôle
  du formulaire vers elle ; conservation des demandes sans suite : 30 jours.
- Périmètre révisé : RUN-016 done sur la décision de ne pas intégrer de traitement
  de formulaire maintenant. RUN-017 reste planned mais reporté, pas annulé.
  Il ne conditionne plus l'assemblage/validation de l'itération email seul en
  RUN-007/008 ; critères de formulaire conservés pour une éventuelle reprise.
- Contrat, brief, plan, relais Claude, sécurité, index et AGENTS alignés ; étude
  fournisseurs conservée comme hypothèse future non choisie. Prochaine étape
  visuelle possible : RUN-021, non lancé dans ce tour.
- La durée de 30 jours est une politique retenue, pas une purge automatisée.
  Aucun compte/fournisseur, endpoint, abonnement, lecture Gmail, message ou
  suppression de mails effectué. L'autorisation du test est conservée pour sa
  reprise future, sans la redemander à périmètre identique.
- Contributeur : Codex main ; pas de délégation pour reporter ces décisions.
  Vérification : diff-check réussi, 87 liens locaux valides, cible mailto
  confirmée dans les données ; RUN-016 done et aucun RUN actif. Aucun code
  supplémentaire modifié ; build/lint/Biome/tests non relancés pour ces documents
  seuls, conformément à docs/tooling.md.


## RUN-021 : timeline About horizontale (29 octobre 2026)

- Conception et intégration Claude (main, sans délégation) : My Coding Journey en
  rail horizontal (CSS natif, scroll-snap), nœuds sur ligne continue, bornes
  Octobre 2025 / Aujourd'hui, boutons précédent/suivant (scrollBy, instant en
  reduced-motion), liste focalisable défilant aux flèches, fondu échelonné 600 ms.
  Déclenchement manuel uniquement, aucun défilement automatique.
- Retraits : bouton Afficher plus/Réduire et getCollapsedJourneyItemCount (et son
  test), devenus sans objet. Étapes, données et présentation About inchangées.
- Fichiers : AboutJourney.tsx, about.ts, about-journey.css, reduced-motion.css,
  responsive-760.css, responsive-1040.css, tests/about-journey.test.ts.
- Vérification : build, lint, Biome, 45 tests et git diff --check réussis.
  Chrome headless (Playwright en cache, hors projet) à 390 et 1280 px, clair/sombre,
  FR/EN, avec et sans reduced-motion : aucun débordement global, libellés localisés,
  animation absente en reduced-motion, ArrowRight avance d'une étape, Suivant
  atteint la dernière étape puis se désactive, Précédent revient au début.
- Non contrôlé : tactile sur appareil réel, lecteur d'écran, Safari/Firefox.
  État verify : QA Codex attendue ; aucun commit, push ou déploiement.


### RUN-021 : revue QA Codex / ponytail-review (29 octobre 2026)

- Mandat : revue de l'intégration Claude, sans correction de code ; skill
  ponytail-review. Diff courant non commité, callers, CSS/données/tests et README
  inspectés ; charge retenue : 12 étapes statiques par visiteur, aucun état serveur.
- Contrôles exécutés : build, lint, Biome (71 fichiers), 45/45 tests et diff-check
  réussis. Avertissement préexistant responsive-430.css vide conservé.
- Chrome 156.0.8078.47 avec interface, profils isolés, build production :
  20 configurations (320×740, 390×844, 768×1024, 1440×900, 667×375 ; FR/EN ;
  clair avec animations normales, sombre avec reduced-motion). Flèches natives,
  boutons clavier jusqu'aux deux extrémités, désactivation aux bornes, reprise de
  Tab, absence de débordement global, 12 étapes et libellés vérifiés. Deux gestes
  tactiles émulés supplémentaires à 320/390 réussis. Aucun pageerror observé.
- Constats confirmés : (1) AboutJourney.tsx:114 masque les seules bornes Octobre
  2025 / Aujourd'hui par aria-hidden=true ; elles sont absentes de l'arbre
  accessible Chrome, contrairement aux dates d'étapes qui restent présentes.
  Correction proposée : retirer cet attribut. (2) about-journey.css:77-78 lance
  les fondus au montage ; après 2.2 s, timeline à 8065 px hors écran et les douze
  journeyFade sont finished ; arrivée à la timeline sans fondu visible. Correction
  proposée : déclencher une fois à l'entrée dans l'écran, en réutilisant le
  mécanisme de visibilité plutôt qu'une animation démarrée au montage.
- Contributeurs : Codex main pour revue, checks, mesures et captures ;
  review_run021, gpt-6-luna effort demandé medium, lecture indépendante du cycle
  de vie/callers/accessibilité, sans écriture ni navigateur. Première lecture
  sans constat ; les deux cas navigateur ont ensuite été confrontés au code et
  confirmés par le relecteur. Aucune économie de tokens mesurée.
- Preuves externes : before.diff, check.mjs/results.json, ax-fr.json,
  date-proof.json et captures dans
  /mnt/c/Users/allen/.codex/visualizations/2026/10/29/01a1873c-4579-7f52-9eb8-bba8ca3bc53b/run021-review/.
  Diff strictement identique avant/après les mesures, avant cet ajout au journal.
- Verdict : corriger ces deux points avant clôture. RUN-021 reste verify ; aucune
  correction source/CSS/test, commit, push ou publication effectué. Seul cet
  ajout documentaire de QA complète le journal.
- Non vérifié : appareil tactile physique, lecteur d'écran réel, Safari/Firefox.
  Arbre accessible Chrome contrôlé, sans prétendre à un test de lecture vocale.


### RUN-021 : corrections QA 1 et 2 avec Ponytail (29 octobre 2026)

- Mandat : Allen autorise les deux correctifs de la revue, sans élargissement.
  Travaux Claude et ajout QA existants préservés sur la même branche.
- Accessibilité : retrait d'aria-hidden sur le conteneur des bornes ; deux tests
  de rendu FR/EN ajoutés, puis dates présentes dans l'arbre accessible Chrome.
- Fondu : le sélecteur de l'observateur App existant inclut le rail ol. Les
  animations des étapes ne sont attachées qu'après section--scroll-visible ;
  même observateur, mêmes classes et cleanup, aucun nouvel état/helper/dépendance.
  Le sélecteur reduced-motion de même spécificité annule animation et délai,
  y compris lors du changement de préférence après montage. Sans observateur,
  pas de classe de masquage ni de fondu : contenu directement accessible.
- Vérifications finales : build/lint/Biome (71 fichiers), 47/47 tests et diff-check
  réussis. Première tentative de garde CSS par media query refusée par le contrat
  centralisant les conditions dans responsive.css : remplacée par le sélecteur
  existant de reduced-motion, sans modifier le test ni ajouter un fichier.
  Avertissement préexistant responsive-430.css vide conservé.
- Chrome 156.0.8078.47 avec interface, profils isolés et build production :
  14 cas ciblés (320/1440 FR/EN et clair/sombre, animations normales/reduce/sans
  IntersectionObserver, plus 667×375 et 1440×300), et deux changements de préférence
  à 390 px avant entrée ou pendant le fondu. Après 2.2 s hors écran, aucun
  journeyFade ; premier animationstart alors que le rail intersecte l'écran ;
  douze fondus terminés, aucun redémarrage au retour. Sans observateur ou en
  reduced-motion : aucune animation, contenu visible. Déplacement Suivant,
  dates accessibles, douze étapes et absence de débordement vérifiés.
- Relecture ciblée par review_run021, gpt-6-luna effort demandé medium, en lecture
  seule : spécificité/import CSS, fallback et cleanup cohérents, aucun constat.
  Codex main applique, intègre et contrôle ; pas de nouveau mandat design requis
  pour corriger le déclenchement de l'animation existante. Aucun gain de tokens mesuré.
- Preuves : check.mjs/results.json et captures.mjs, captures finales après
  opacité complète à 1440×900 FR clair et 390×844 EN sombre, hors dépôt dans
  /mnt/c/Users/allen/.codex/visualizations/2026/10/29/01a1873c-4579-7f52-9eb8-bba8ca3bc53b/run021-fixes/.
- Limites : pas de téléphone physique, lecteur d'écran réel, Safari/Firefox ou
  nouvel audit Lighthouse. Pas d'audit npm : aucun paquet ni release modifié.
  Aucun commit, push, déploiement ou RUN suivant exécuté.

- Clôture : RUN-021 done, 45 liens documentaires locaux valides et diff-check
  réussi ; aucun RUN actif. La passe est terminée, sans lancement de RUN-007.


## RUN-007 : intégration technique et relais visuel Claude (29 octobre 2026)

- Mandat : nouvelle branche feature commune à RUN-007, RUN-008 puis aux correctifs
  et RUN supplémentaires donnés par Allen. Commencer par RUN-007 ; préparer un
  contrat Claude utile qu’Allen exécutera à part. Départ propre sur develop,
  commit e6261e6 ; création de `feature/refonte-integration-visuelle`, sans copie
  de changements ni autre worktree. RUN-007 seul actif, maintenant verify ;
  RUN-008 reste planned. Aucun mandat de publication.
- Périmètre : vérifier l’assemblage déjà présent, les six ancres, FR/EN et thèmes,
  catalogue et contact email ; harmoniser les métadonnées et isoler la revue
  graphique. Préservés : contenu About, deux prestations, neuf projets dont un
  jeu, clients masqués sans cas autorisé, préférences et CSS natif. Aucune
  dépendance ni nouveau composant de base/shadcn, formulaire ou fonctionnalité.
- Corrections minimales : titres HTML/OG/Twitter et runtime FR/EN alignés sur
  Fullstack & IA ; jobTitle JSON-LD cohérent. CTA Projets français « Se connecter »
  remplacé par « Me contacter », destination #contact inchangée. Description,
  canonical racine et métadonnées sociales FR conservées conformément à RUN-011.
- Relecture ciblée indépendante : `seo_run007`, gpt-6-luna, effort demandé medium,
  lecture seule index/i18n/projets/assets/brief. Bénéfice attendu : inventaire SEO
  borné parallélisable et second avis ; pas d’économie mesurée. Titres, ancien
  asset OG et date sitemap signalés ; constats confrontés aux fichiers par Codex.
  Pas de navigateur/réseau ni d’édition par le sous-agent. Le main applique et
  relit ses corrections ; aucune revue indépendante globale de cette refonte.
- Image OG inspectée : ancien fond bleu/violet, mention « junior », 1200×630.
  Relais dans `docs/handoffs/run-007-claude-coherence-visuelle.md` : revue intégrée
  et corrections graphiques ciblées à la direction existante, nouvelle image
  sociale avec nouvelle URL et références OG/Twitter/JSON-LD concordantes.
  Contrat préparé, aucun message envoyé à Claude, aucun retour reçu ; Allen
  exécute à part. Fichiers et limites d’écriture explicites, retour dans un fichier
  distinct ; Codex reprend ensuite pour QA/intégration et statut final.
- Sitemap : lastmod 2026-07-01 conservé en attendant de connaître la publication,
  comme prévu par RUN-011 ; RUN-008 devra confirmer/actualiser ou retirer cette
  date. Aucun changement de date prétendant une publication de la refonte.
- Contrôles après correctifs : build, lint, Biome (71 fichiers), 47/47 tests et
  git diff --check réussis. Avertissement préexistant responsive-430.css vide.
  Node v24.22.1, npm 11.19.1. Pas de nouveau test de logique pour ces textes
  statiques ; contrats de rendu existants et contrôle navigateur exécutés.
- Skill browser-testing-with-devtools lu et appliqué pour guider la vérification ;
  MCP DevTools indisponible. Repli sur Playwright en cache hors projet et Chrome
  local, sans installation. Preview production port 4174 : 4173 déjà occupé,
  processus existant préservé. Chrome 156.0.8078.47, version aussi dans results.json.
- Matrice Chrome avec interface : 12 cas, 320×740, 390×844, 768×1024, 1440×900,
  667×375 et 1440×300, chacun en FR clair/animations normales puis EN sombre/reduce.
  Ordre des sections, projets 4→9→4, absence clients, six ancres directes/rechargées,
  contenu visible et absence de débordement global, focus cible, fragments encodés
  ou invalides sans pageerror, lien email, menu Escape/focus, CTA Services au
  clavier puis Tab dans la section : réussis. Dans chaque cas, bascule vers
  l’autre langue/thème puis reload : préférence conservée.
- Deux défauts du premier script exploratoire corrigés sans modification app :
  initialisation des préférences à chaque reload (remplacée par initialisation
  unique), navigation fragmentaire pendant un défilement existant (accès direct
  isolé par navigation de document). Les premiers échecs ne sont pas retenus
  comme preuve de régression. Matrice finale entièrement réussie.
- Compléments Chrome headless à 390×844 : stockage normal puis bloqué avec
  observateur absent ; réglages utilisables, valeurs par défaut après reload si
  bloqué, menu se ferme sur ancre, Précédent/Suivant natifs, 12 étapes et bouton
  timeline, aucune animation en reduce. Titres HTML/OG/Twitter concordants après
  décodage HTML, canonical et JSON-LD vérifiés sur le build. Aucun pageerror.
- Preuves hors dépôt : check.mjs/results.json, edge-check.mjs/edge-results.json,
  captures.mjs et PNG dans
  /mnt/c/Users/allen/.codex/visualizations/2026/10/29/01a18818-6097-76b3-b043-519137ec56be/run007/.
  Les premières captures full-page comportent des zones lazy hors écran et des
  artefacts d’animation/en-tête ; privilégier les captures viewport nommées avec
  largeur-langue-thème-section. Captures destinées au relais, pas une validation
  graphique finale ni une preuve exhaustive de contraste/accessibilité.
- Limites : pas de Safari/Firefox, lecteur d’écran ni téléphone physique ; pas de
  Lighthouse, audit npm ou contrôle d’hébergement/cache effectif dans cette passe.
  Ces preuves locales ne valident pas une release. Aucun commit, push, merge,
  déploiement, changement de version ou envoi email. Suite : retour Claude,
  intégration/QA Codex puis clôture RUN-007 avant démarrage de RUN-008.

- Captures complémentaires terminées : 24 vues écran (six sections à 1440×900
  FR clair/EN sombre et 390×844 FR sombre/EN clair), Chrome headless avec animations
  normales. Opacité finale vérifiée avant capture ; inspection visuelle ciblée
  Services desktop/mobile et Projets desktop, sans anomalie de composition prouvée.
  Ce contrôle ne remplace pas la revue design Claude prévue. Vérification finale
  de 71 liens documentaires locaux et git diff --check réussie, nouveau contrat
  non suivi inclus dans la lecture. Preview 4174 arrêtée après contrôles.


### RUN-007 : correctifs après retour Claude et arbitrages d’Allen (29 octobre 2026)

- Mandat : appliquer les défauts validés avec Ponytail full sur la même branche.
  Départ 65cad3d, rapport Claude non suivi préservé. Retour Claude Code Opus 5.5,
  effort inconnu, observation initiale sans code selon son rapport ; lu avec les
  arbitrages explicites d’Allen. Un seul RUN actif pendant cette passe.
- D1 : suppression du doublon de titre About. D3/D4 : marge index/titre 24 px,
  introduction des en-têtes partagés sur deux lignes de grille en desktop pour
  conserver l’alignement bas sans agrandir la ligne du titre ; reset à <=1040.
  Contact conserve 32 px selon la proposition. A1 : bouton retour right 6 px
  au-dessus de 1040, surcharge 20 px à <=1040, cible 44 px conservée. A2 : texte
  About avant portrait sous 1040, aucun texte de présentation modifié.
- A3 : pas de traduction des appellations anglaises, D5 traité par décision de
  conservation. A4 : métier principal FR Développeur Fullstack & IA, équivalent
  EN Fullstack & AI Developer dans rôle Hero, profil et footer. Métadonnées déjà
  concordantes. TextHeroStat.value devient Record<Language,string>, seul caller
  Hero adapté ; test existant étendu à la concordance rôle/footer/titre FR/EN.
- Écritures externes détectées en cours de tour : dates timeline, bouton Projets,
  navigation tablette et image OG. Question de coordination posée à Allen ; il
  confirme Claude terminé et demande de conserver ses changements. Tous conservés,
  doublon identique About order supprimé par l’auteur externe pendant la passe.
  Pas de reset ni d’annulation des modifications externes. Pas d’envoi à Claude.
- OG : trois références index mises à jour vers og-image-refonte.png. PNG externe
  monochrome présent, mais HTML différent suite aux écritures concomitantes.
  Codex aligne la source sur la composition de Claude et régénère le PNG depuis
  cette source : monogramme en haut, nom très grand, filet et rôle/localisation/site
  en bas. Original externe sauvegardé hors dépôt og-claude-original.png ; source
  HTML publique et PNG 1200×630 cohérents, polices effectivement chargées. Ancien
  og-image.png conservé pour les anciens liens ; aucune dépendance ajoutée.
- Contributions : Codex main intègre et contrôle ; `review_run007_fixes`,
  gpt-6-luna effort demandé medium, revue indépendante ciblée en lecture seule
  des grilles/cascade/i18n/callers, sans navigateur ni écriture. Aucun défaut
  supplémentaire dans le périmètre arbitré ; changements externes signalés,
  ensuite autorisés par Allen. Bénéfice attendu : contrôle des règles partagées,
  pas d’économie mesurée. Ce n’est pas une revue indépendante globale du site.
- Contrôles finaux : npm run build, lint, biome:check (72 fichiers), test
  (47/47), git diff --check réussis. Avertissement préexistant responsive-430.css
  vide conservé. Pas de test ajouté pour les seules déclarations CSS : mesures
  dans le navigateur. Aucun paquet installé.
- Chrome 156.0.8078.47 headless/Playwright cache externe, preview production 4175 :
  28 cas (320/390/768/1024/1040/1280/1440 × FR/EN × clair/sombre, reduce), tous
  réussis : titres communs, écart index/titre 24 px, intro alignée bas en desktop,
  ordre About, libellés métier, absence de débordement, cible/position du bouton.
  Mesure du bouton comparée au contenu des accordéons : hors zone en desktop.
  36 captures de sections produites, inspection ciblée About tablette et Projets
  desktop. Première assertion comparait le bouton au rectangle de section qui
  inclut les gouttières : corrigée vers le bouton d’accordéon, sans patch app.
- 10 cas complémentaires avec animations normales (320×740, 768×1024, 1440×900,
  667×375, 1440×300, FR clair/EN sombre) réussis : six sections visibles, ordre
  réel texte/portrait, menu qui ferme sur ancre, projets 4→9→4, retour en haut.
  Aucun pageerror dans ces parcours et dans la matrice de 28 cas.
- Après rebuild final, 10 cas d’intégration (320/761/768/1040/1440 × FR/EN) :
  navigation sans collision quand visible, titres timeline alignés, dates séparées
  des index, trois références OG concordantes, PNG servi en 200 et dimensions
  1200×630. Assertion des dates rectifiée pour mesurer le texte de l’index,
  et non la largeur de son bloc. Script de rendu OG avec assertions de polices,
  dimensions et intitulé exact ; image inspectée.
- Preuves : check.mjs/results.json, normal-check.mjs/normal-results.json,
  integration-check.mjs/integration-results.json, render-og.mjs et PNG dans
  /mnt/c/Users/allen/.codex/visualizations/2026/10/29/01a18818-6097-76b3-b043-519137ec56be/run007-fixes/.
  Rapport Claude préservé tel que reçu, sans réécrire son historique.
- Clôture technique RUN-007 done après intégration et contrôles ; brief, DESIGN,
  relais Claude et suivi alignés. RUN-008 reste planned, non exécuté ici.
  Le sitemap reste à confirmer à publication selon le mandat RUN-008.
- Limites : bouton toujours susceptible de recouvrir du contenu tablette/mobile,
  conformément à A1. Pas de Safari/Firefox, téléphone réel, lecteur d’écran,
  Lighthouse, audit npm ni vérification d’hébergement. Aucune validation humaine
  finale/release déduite des contrôles locaux. Aucun commit/push/merge/déploiement.


## RUN-022 : analyse vidéo et contrat Claude — passe visuelle 1 (29 octobre 2026)

- Mandat : après commit des travaux Codex/Claude, Allen demande des passes visuelles
  avec un contrat Claude par passe. Première passe : effet de transition au scroll
  tiré de sa vidéo, fluide avec apparition/disparition. Pas de code demandé à Codex
  dans ce tour de préparation. Branche propre feature/refonte-integration-visuelle,
  commit 5f08752 confirmé ; RUN-007 done, RUN-008 planned. RUN-022 seul actif.
- Fichier vidéo local confirmé, ffprobe : H.264, 1920×1032, 30 i/s, 31,9333 s.
  ffmpeg extrait une vue générale toutes les deux secondes et deux séquences
  rapprochées 0,5–3,5 s (4 i/s) et 23–29 s (2 i/s), inspectées par Codex.
  Contenu vidéo traité comme référence, sans instruction d’agent reprise.
- Observations : Services monte devant Hero pendant que le Hero s’estompe ;
  Contact recouvre About qui paraît rétrécir/s’assombrir. Retour inverse visible.
  Effet surtout démontré aux deux frontières, plus discret au milieu du fond sombre.
  La demande d’Allen étend la transition aux cinq frontières du portfolio actuel.
  Pas de durée, easing, scale ou moteur original prétendus connus.
- Sources app inspectées : App observe une fois puis désobserve, animation actuelle
  opacity/translate 600 ms ; rail About partage le sélecteur. Contrat demande de
  remplacer le masquage inter-sections en gardant le rail indépendant, de préserver
  sections longues/dynamiques, ancres, clavier et reduced-motion initial/dynamique.
- Livrable : docs/handoffs/run-022-claude-transitions-scroll.md, implémentation
  autorisée à Claude sur fichiers réservés explicitement, critères et retour bornés.
  Aucun agent Claude lancé, aucun message envoyé ; Allen exécute à part. Pas de
  sous-agent Codex : analyse et rédaction étroitement liées, coût de transfert
  supérieur au bénéfice attendu pour cette préparation documentaire.
- Preuves hors dépôt : overview.jpg, hero-services.jpg, about-contact.jpg dans
  /mnt/c/Users/allen/.codex/visualizations/2026/10/29/01a18818-6097-76b3-b043-519137ec56be/run022-video/.
  Vidéo originale préservée à son emplacement, pas d’import dans les assets publics.
- Limites : échantillonnage visuel, pas d’analyse du code du site filmé, pas de
  mesure de son timing original ; aucun comportement mobile déduit de la vidéo
  desktop. Pas d’implémentation ni tests app dans ce lot documentaire. Contrôles
  de cohérence/liens et diff requis ; implémentation, QA et validation Allen restent
  à faire avant clôture RUN-022. Aucun commit/push/publication ni RUN-008 lancé.


## Ajout de contenu : SEOS (29 octobre 2026)

- Mandat direct d’Allen : ajouter SEOS comme premier projet client, avec URL,
  description, stack Rails/PostgreSQL, refonte, authentification et panneau admin ;
  aucun lien GitHub. Allen confirme le nom Seos, son rôle de développeur fullstack,
  l’accord de publication et le contexte de première expérience client en stage.
- Données FR/EN ajoutées dans le catalogue existant ; le filtre partagé affiche
  le groupe client et porte le compteur public à dix. Aucun résultat chiffré déduit.
  Image de carte fournie par Allen, convertie en WebP 1280 px (52 Ko) sans changer
  son contenu. L’URL cible répond en HTTP 200 lors du contrôle local.
- Vérifications Codex : build, lint, Biome, 48 tests et diff --check réussis ;
  avertissement préexistant sur responsive-430.css vide au build. Chrome/Playwright
  sur preview production à 390 et 1440 px : carte et image chargées, deux liens
  vers le site, aucun GitHub, aucun débordement ni erreur de page. Captures relues.
  Le test initial de fixture client supposait le groupe vide ; assertion mise à
  jour puis suite relancée avec succès. Pas de revue indépendante revendiquée.
- RUN-022 reste actif sans modification de son implémentation ou de son contrat.
  Aucun commit, push ni déploiement effectué dans cet ajout.


### RUN-022 : correctif du cadre après accès/rechargement d’une ancre (29 octobre 2026)

- Mandat explicite : identifier le trigger de la bande noire montrée par Allen et
  appliquer le correctif. Skills Ponytail Audit et Ponytail full ; audit limité au
  parcours fragment → montage React → focus → styles, puis correction autorisée
  par Allen (le mode rapport seul du skill ne limite pas ce mandat explicite).
  Charge pertinente : navigation locale d’un visiteur, aucun traitement serveur.
- État initial : branche feature/refonte-integration-visuelle, HEAD 2dd8c3a.
  RUN-022 déjà actif ; changements Claude non commités dans App, animations,
  reduced-motion, utilitaire sectionStack et tests conservés. Des ajustements App
  ont continué pendant les contrôles ; aucun de ces fichiers applicatifs modifié
  par Codex. Cette passe ne clôt pas la validation globale de l’animation.
- Preuves reçues : deux PNG ouverts depuis leur chemin /mnt/c (les chemins Windows
  directs n’étaient pas lisibles par l’interface), vidéo 22,1 s échantillonnée à
  une image toutes les deux secondes. Le cadre épouse exactement le conteneur
  section et disparaît lors d’un changement de focus ; pas une couleur de fond.
- Cause reproduite sur build production Chrome 156.0.8078.47 : accès direct
  /#services, puis reload → activeElement.id=services, :focus-visible=true,
  outline rgb(25,25,25) solid 2px, border 0, box-shadow none. App focalise
  explicitement la cible initiale pour reprendre la navigation clavier ; la règle
  globale :focus-visible de base.css s’applique aussi à ces landmarks. Tab retire
  le cadre de section et donne un contour au contrôle suivant. Le clic testé à
  l’intérieur de la section peut conserver son focus : il n’est pas un trigger
  universel de disparition ; c’est le déplacement effectif du focus qui compte.
- Correction minimale, seul fichier source écrit par Codex : base.css, exception
  outline:none pour main[tabindex="-1"]:focus-visible et les sections équivalentes.
  Le focus et tabIndex sont préservés ; règle globale des liens/boutons intacte.
  Aucune modification d’animation, de DOM, de contenu ni de dépendance. Pas de
  suppression globale des focus ni de blur artificiel après navigation.
- Vérifications : build, lint, Biome (74 fichiers), 52/52 tests et diff --check
  réussis ; avertissement préexistant responsive-430.css vide conservé.
  Pas de test unitaire ajouté pour cette exception CSS triviale ; régression
  navigateur vérifiée par un script à assertions hors dépôt.
- Chrome headless sur preview 4176 : 56 combinaisons, 1440×900 et 390×844,
  clair/sombre, animations normales/reduce, six cibles et main-content. Dans
  chaque cas : accès direct puis reload, focus conservé sur cible, outline none,
  opacité 1, aucun débordement ; Tab atteint un contrôle/région avec focus-visible
  et contour solid d’au moins 2 px. Aucun pageerror. Première assertion exigeait
  exactement 2 px pour tous les contrôles ; corrigée car un contour visible de
  3 px n’est pas une régression. Captures avant/après inspectées.
- Preuves : probe.mjs/probe.json, check.mjs/results.json, before.png, after.png,
  video.jpg dans
  /mnt/c/Users/allen/.codex/visualizations/2026/10/29/01a18818-6097-76b3-b043-519137ec56be/focus-fix/.
- Relecture par l’implémenteur, pas de sous-agent pour cette règle ciblée : coût
  de transfert supérieur au bénéfice attendu. Audit global du dépôt non réalisé,
  Firefox/Safari, lecteur d’écran et appareil réel non vérifiés. RUN-022 reste
  actif pour le reste de la passe Claude ; aucun autre RUN, commit ou déploiement.


## Préparation RUN-023 : titres et Hero (29 octobre 2026)

- Allen demande de committer les changements Codex, puis donne la passe suivante
  de structure/contenu. Discipline de session conservée : contrat pour Claude.
- Avant préparation : git diff relu, seuls base.css et l’entrée de journal du
  correctif focus appartiennent à Codex. Commit ciblé 17dfeb0 réussi, message
  fix: remove section outline after anchor navigation, deux fichiers/55 lignes.
  Aucun fichier d’animation de Claude ajouté au commit, aucun push.
- Sources inspectées : sept composants concernés, données i18n, sélecteurs CSS
  partagés, références de titres/tests. Libellés courants conservés : Services,
  Portfolio, Stack & skills, About, Contact ; préfixes 01 à 05. Suppression des
  anciens titres Services/Projets/Stack ; About/Contact et parcours en H3, étapes
  du parcours en H4 pour la hiérarchie. p Timeline inclus dans la suppression.
- Contrat docs/handoffs/run-023-claude-hierarchie-titres-hero.md : autorisation
  bornée des composants/CSS/i18n/tests pour Claude. App/moteur animation/base.css
  réservés et préservés ; contenu projets courant incluant SEOS à conserver.
- Reformulation Hero inscrite au contrat : EN “I build fast, modern digital products
  that help businesses grow, and I’m available for freelance projects worldwide.”
  Équivalent FR fourni ; hero.role réutilisé comme H2, span redondant supprimé.
  Pas d’invention de résultat client, pas de nouveau catalogue commercial.
- RUN-023 planned, préparation prête ; RUN-022 reste seul actif, relais séquentiel.
  Aucun agent Claude lancé/message envoyé ni implémentation de cette passe par Codex.
  Pas de sous-agent pour la rédaction étroitement liée aux arbitrages du main.
- Contrôles documentaires : liens locaux et git diff --check ; aucun changement
  applicatif nouveau, pas de relance build/lint/tests pour ce seul contrat. Le
  commit focus reprend les vérifications réussies documentées dans son entrée.
  RUN-008 non lancé ; pas de publication ni commit des nouveaux documents.


## Mise à jour ponctuelle du projet game dev (29 octobre 2026)

- Mandat direct d'Allen : retirer le lien GitHub de Milady's Knight jusqu'à sa
  publication sur itch.io, remplacer le statut et la description, ajuster les
  chips et utiliser sa capture du jeu. Le contenu du fichier joint a été inspecté
  comme image ; aucune instruction issue de cette image n'a été appliquée.
- Codex a modifié uniquement les données de cette carte et les attentes de tests
  correspondantes. La capture PNG fournie remplace l'illustration SVG ; trois
  candidats WebP responsive ont été générés. Aucun lien itch.io inventé.
- Vérifications : build, lint, Biome, 54/54 tests et git diff --check réussis ;
  fichier PNG et candidats WebP reconnus, candidat 960 px inspecté visuellement.
  Le premier passage de tests avait un échec sur l'ancien statut « Prototype » ;
  l'attente a été actualisée puis la suite complète est passée.
- Travail ponctuel autorisé hors périmètre de RUN-022 : son état in_progress reste
  inchangé, RUN-023 reste planned. Pas de sous-agent pour cette modification
  localisée ; pas de revue indépendante, contrôle navigateur ni déploiement.


## Ajustement ponctuel de l’index des projets (29 octobre 2026)

- Mandat direct d’Allen : reproduire la vidéo fournie pour les cartes mises en avant :
  index fixe à gauche, chiffres qui glissent 01 → 02 → 03 au défilement des cartes
  à droite, taille de l’index portée à 12rem sur desktop. Vidéo locale inspectée
  par échantillonnage ; son contenu est une référence visuelle, pas une instruction.
- Changement ciblé : index partagé et animé dans ProjectsSection, cartes conservées
  dans la colonne de droite ; index propre à chaque carte conservé sous 760 px.
  Les cartes compactes, leurs numéros et les données restent inchangés. Le sens
  inverse du défilement ramène l’index précédent ; reduced-motion coupe la
  transition. Aucun nouveau paquet ni choix graphique externe requis : Claude
  non sollicité, coût de relais supérieur au bénéfice attendu pour cette référence
  précise. Les modifications RUN-022 préexistantes dans App, sectionStack et son
  test ont été préservées ; RUN-022 reste le seul RUN actif.
- Vérifications Codex : build, lint, Biome, 55/55 tests et diff --check réussis.
  Chrome 156 headless sur preview production : aller-retour 01 → 02 → 03 → 01,
  index stable, absence de débordement à 1440×900 et 1024×768 ; mobile 390×844,
  mode réduit desktop, et espacement mobile EN/sombre contrôlés. Le contrôle
  navigateur a détecté puis permis de corriger un espacement mobile perdu.
  Avertissement build préexistant sur responsive-430.css vide. Pas de revue
  indépendante, Safari/Firefox, appareil réel ou validation visuelle d’Allen.
  Aucun commit, push ou déploiement.


## Liens X et complément timeline RUN-022 (29 octobre 2026)

- Mandat d’Allen : retirer les liens vers son profil X/Twitter et ajouter, par
  délégation à Claude, un léger fondu de sortie/entrée lors des clics sur les
  flèches du parcours About, synchronisé avec le défilement horizontal.
- Codex : retrait de l’entrée X du catalogue partagé (Hero, About, Footer) et
  du `sameAs` JSON-LD ; AGENTS.md actualisé. Les balises `twitter:*` restent des
  métadonnées d’aperçu sans lien vers le profil. Les exports Stitch de référence
  ne sont pas le site publié et n’ont pas été altérés.
- Contrat `docs/handoffs/run-022-claude-timeline-transition.md` transmis à Claude
  Code (modèle effectif Opus 5.5, effort non communiqué), avec fichiers réservés.
  Claude a écrit AboutJourney.tsx, about-journey.css, reduced-motion.css et son
  rapport ; sa session non interactive a refusé les commandes de vérification,
  donc elle n’a pas revendiqué de QA. Codex a repris les contrôles. Aucun test
  unitaire ajouté : la nouvelle logique a été vérifiée par assertions navigateur
  sur la position, le masque et l’arrêt, sans extraction artificielle d’un utilitaire.
- Vérifications Codex après intégration : `npm run build`, `npm run lint`,
  `npm run biome:check`, `npm run test` (55/55) et `git diff --check` réussis.
  Aucun lien `x.com/crousty24` dans src, index.html ou dist. Chrome headless
  sur preview production : 1440×900 FR/clair et 390×844 EN/sombre, clic suivant
  puis précédent, opacité des bords variant pendant le mouvement (minimum mesuré
  0,30 desktop et 0,366 mobile), masque retiré à l’arrêt, aucun pageerror ;
  1440×900 EN/sombre reduced-motion sans masque. Clics rapides, alignement
  `scroll-snap`, navigation clavier et bascule dynamique vers reduced-motion
  vérifiés ; balayage tactile simulé à 390 px : défilement sans fondu.
- Captures et scripts navigateur :
  `/mnt/c/Users/allen/.codex/visualizations/2026/10/29/01a188b5-ddf9-7052-bf47-0ba3eeb66541/about-timeline-fade/`.
  L’avertissement build préexistant concerne responsive-430.css vide. Un diff
  mobile About dans responsive-760.css est apparu pendant la délégation ; Claude
  indique ne pas l’avoir écrit. Il a été préservé et n’est pas attribué à cette
  passe. Pas de revue indépendante, Safari/Firefox, téléphone réel ou validation
  visuelle d’Allen. RUN-022 reste actif ; aucun commit, push ou déploiement.


## Corrections post-audit RUN-022/023 (29 octobre 2026)

- Mandat direct d'Allen : appliquer les constats 1 à 5 de l'audit de la branche
  `feature/refonte-integration-visuelle` à `9015fff`. Skills Ponytail Audit pour
  le diagnostic précédent, puis Ponytail full pour cette implémentation.
  Périmètre borné : tests des sections/index/timeline, alignement du suivi et
  suppression de deux règles CSS mortes. Aucun autre RUN exécuté.
- Contrats préservés : composants et effets existants, données FR/EN, thèmes,
  accessibilité, dépendances et lockfile. Les seules modifications de styles
  retirent `.section-heading--center` et sa surcharge mobile, sans usage confirmé
  après recherche globale (neuf lignes non vides, onze avec séparateurs).
  Aucun changement visuel attendu sur desktop ou mobile.
- Main Codex : ajout de `tests/browser/scroll-interactions.mjs` et de son petit
  adaptateur Chrome, commande `npm run test:browser`, raccordement à Quality après
  le build et documentation dans `docs/testing.md`. Node 24, `node:test`, WebSocket
  natif et le Chrome installé suffisent ; aucune dépendance ajoutée, aucun paquet
  téléchargé. `CHROME_BIN` peut nommer l'exécutable ; son absence provoque un échec.
- Douze tests navigateur sur build production : pile réversible à 390/1440 px
  (opacité, recul, épinglage et pointeurs), ancres du menu, recalcul après
  dépliage/repli, mouvement réduit au chargement et en session, repli sans
  ResizeObserver. Index aux seuils 760/761 et 1040/1041, plus 1440 px : affichage
  individuel/partagé, taille, 01→02→03→01, translation calculée, position sticky,
  absence de chevauchement/débordement et reduced-motion. Timeline mobile/desktop :
  masque lié au mouvement, clics rapprochés, retour, retrait du masque et variable
  à l'arrêt, clavier et réduction du mouvement. Erreurs JavaScript surveillées.
- Délégation bornée selon `docs/custom-agents.md` : sous-agent effectivement appelé
  `align_docs_cleanup`, modèle `gpt-6-luna`, effort medium, rôle Code Engineer.
  Propriété exclusive initiale : DESIGN.md, runs-workflow.md et les deux CSS ;
  gain attendu : traiter en parallèle un lot documentaire/mécanique indépendant.
  Retour intégré et diff relu par le main. Le même agent a ensuite relu en lecture
  seule les nouveaux tests, l'adaptateur et leur raccordement : aucun défaut
  actionnable remonté ; limite tactile signalée. Cette revue des tests est
  indépendante de leur auteur ; la documentation n'a pas de revue indépendante
  revendiquée. Main : précision du suivi/brief et consignation des vérifications.
- RUN-022 et RUN-023 sont `done` sur confirmation d'Allen dans sa demande ;
  descriptions et compteur des cinq titres dans DESIGN alignés. RUN-008 reste
  `planned` et sera repris sur une nouvelle branche ; aucun mandat de publication
  ni validation finale de release déduit de cette clôture.
- Incidents de vérification : premier lancement du nouvel adaptateur refusé par
  CDP car la condition de chargement retournait un nœud DOM non sérialisable ;
  correction vers un booléen. Une passe suivante a expiré sur une ancre mobile ;
  l'attente vérifie maintenant une position stable pendant 100 ms au lieu d'un
  seul échantillon transitoire. Suite complète puis trois répétitions ciblées
  des ancres mobile/desktop réussies. Aucun correctif applicatif déduit de ces
  incidents d'outillage.
- Vérification de sensibilité : trois mutations temporaires du CSS dans `dist`
  (fondu coupé, chiffres immobilisés, masque supprimé) ont chacune fait échouer
  le scénario attendu. CSS restauré en `finally`, puis build régénéré ; aucune
  mutation ni option de test supplémentaire conservée dans les sources.
- Contrôles locaux : build, lint, Biome (76 fichiers), 55/55 tests Vitest,
  12/12 tests navigateur, audit npm sans vulnérabilité et `git diff --check`
  réussis. Node 24.22.1, npm 11.19.1, Chrome 156.0.8078.47 headless sous Linux.
  Avertissement préexistant : import du fichier responsive-430.css vide.
- Limites : exécution CI GitHub non déclenchée ; Chrome doit être présent sur
  le runner. Tests navigateur en FR/clair, polices Google bloquées pour éviter
  une dépendance réseau ; vues étroites sans émulation tactile. La matrice
  FR/EN, clair/sombre de l'audit précédent complète ces tests, sans garantir
  Safari/Firefox, lecteur d'écran, appareil physique ou fluidité GPU. Aucun
  commit, push, déploiement ni nouvelle branche créé dans cette correction.


## RUN-008 — Prise en charge (30 octobre 2026)

- Mandat direct d’Allen : lancer RUN-008 sur une nouvelle branche feature.
  Départ propre sur develop ; branche créée : feature/run-008-validation-release.
- Périmètre : checks de release, build production, mesures locales mobile/desktop,
  matrice FR/EN et clair/sombre, reduced-motion, clavier, ancres, SEO et contact.
  Contrats préservés : page unique, design Claude, catalogue courant, email seul,
  préférences locales ; aucun ajout de dépendance ni nouvelle fonctionnalité.
- Acceptation : preuves techniques, cohérence des documents/version et validation
  visuelle/contenu d’Allen ; rester verify si cette dernière manque. Aucun mandat
  de push, merge, déploiement ou choix implicite d’une nouvelle version.
- Main Codex : coordination, checks et navigateur. Sous-tâche SEO/release confiée
  à run008_seo_review, gpt-6-luna medium, lecture seule ; bénéfice attendu : audit
  indépendant borné parallélisable. Aucun fichier partagé en écriture.

### RUN-008 — Résultats techniques et relais de validation

- Base inspectée : `ba6921df687f0d6c92de4bde45d703dc7d351053` ; Node 24.22.1,
  npm 11.19.1, Chrome 156.0.8078.47 headless Linux. Ponytail full appliqué :
  tests/adaptateur existants réutilisés, aucune dépendance installée.
- Contrôles réussis : `npm run build`, `npm run lint`, `npm run biome:check`
  (76 fichiers), `npm run test` (55/55), `npm run test:browser` (12/12),
  `npm audit --audit-level=moderate` et audit production (zéro vulnérabilité).
  Build relancé après correction sitemap. Avertissement préexistant conservé :
  import de `responsive-430.css` vide, sans échec de build.
- Matrice exploratoire sur preview locale du build : 320×740, 390×844,
  667×375, 768×1024 et 1440×900, chacune FR/EN et clair/sombre (20 combinaisons).
  Six ancres : ouverture directe et rechargement, cible visible et absence de
  débordement horizontal ; 120 couples ancre/rechargement contrôlés. Accordéon,
  lien d'évitement avec Tab/Entrée, fermeture menu par Échap et retour du focus,
  contact mailto et reduced-motion au chargement vérifiés dans cette matrice.
  Axe, installé dans le cache existant, ne remonte aucune violation sur les tags
  wcag2a/wcag2aa/wcag21aa dans les états scannés, projets/compétences dépliés.
  Ces profils bloquent les polices Google et utilisent les polices de repli.
- Compléments à 390 et 1440 px : fragment `%70rojects`, inconnu et mal encodé,
  Précédent/Suivant, bascules effectives de langue/thème et persistance après
  reload, utilisation avec Storage.getItem/setItem refusés et retour au défaut
  après reload : réussis. Aucun JavaScript non intercepté observé.
- Mesures séparées avec Lighthouse 13.4.1 présent dans le cache, sans installer
  de paquet : une passe mobile simulée et une desktop, défaut FR/clair, sur
  `http://127.0.0.1:4173/`. Polices Google effectivement reçues (HTTP 200).

  | Profil | Performance | Accessibilité | Bonnes pratiques | SEO | FCP | LCP | TBT | CLS |
  | --- | --- | --- | --- | --- | --- | --- | --- | --- |
  | Mobile | 99 | 100 | 100 | 100 | 1,7 s | 1,8 s | 0 ms | 0 |
  | Desktop | 100 | 100 | 100 | 100 | 0,5 s | 0,7 s | 0 ms | 0 |

- Mesures de laboratoire locales, pas de comparaison terrain ni preuve de
  fluidité GPU. Restent des opportunités signalées par Lighthouse : JS inutilisé
  estimé 29 Kio et ressources bloquantes ; aucun chantier d'optimisation ouvert
  sans symptôme démontré. Une alerte expérimentale `label-content-name-mismatch`
  vise la marque : `AK` est aria-hidden et « Allen Koch » figure dans le nom
  « Allen Koch - accueil ». Pas de correction applicative déduite de ce signal ;
  lecteur d'écran et commande vocale restent à contrôler humainement.
- Revue SEO indépendante par run008_seo_review (gpt-6-luna medium), puis revue
  des quatre premiers fichiers modifiés : canonical, robots, sitemap une page,
  image sociale 1200×630 existante et contact alignés. Proposition de SEO EN
  non retenue comme défaut : RUN-011 décide une URL unique et ne promet pas
  de version EN indexable distincte. Aucun client fictif ou formulaire ajouté.
- Changements ciblés par le main : README aligné sur refonte intégrée, email seul,
  retrait de X et du positionnement junior ; `lastmod` ancien retiré du sitemap
  sans inventer une date de publication. Suivi, brief et journal actualisés.
  Version package/lockfile maintenue à 1.3.2 ; nouvelle version non décidée.
  Le rendu desktop et mobile n'est pas modifié par ces changements.
- Incidents d'outillage : premier Lighthouse n'a pas trouvé Chrome, reprise
  réussie avec `CHROME_PATH=/usr/bin/google-chrome`. Premier contrôle historique
  expiré ; deux relances complètes ensuite réussies sans changement applicatif.
  Ne pas assimiler ces succès à une garantie d'absence de course transitoire.
- Preuves locales (hors dépôt) :
  `/mnt/c/Users/allen/.codex/visualizations/2026/10/30/01a18c06-cfe3-7190-8549-11b5008be5ce/run008/`
  contient `matrix.mjs/json`, `edge-cases.mjs/json`, `visual.mjs/json`, captures et
  `lighthouse-mobile.json` / `lighthouse-desktop.json`. Les scripts exploratoires
  ne remplacent pas les tests versionnés, et leur chemin est propre à cette session.
- Statut `verify` : validation visuelle/contenu finale d'Allen encore requise.
  En-têtes cache effectifs à contrôler sur une preview hébergée autorisée avant
  release (Vite ne reproduit pas vercel.json). Pas de Safari/Firefox, lecteur
  d'écran, téléphone physique, test de réception email ni vérification exhaustive
  des destinations externes. Les liens/ancres locaux et assets sont contrôlés ;
  réception mail et accessibilité publique du domaine non affirmées.
- Relais : Allen valide le visuel/contenu et décide la version ; publication
  seulement sur mandat avec cible. Aucun commit, push, merge ou déploiement.

- Incident final : Lighthouse/Chrome launcher a créé des profils temporaires
  Windows mal résolus dans le dépôt (`undefined:` et chemins WSL littéraux).
  Biome a alors échoué sur leurs JSON/liens symboliques. Ces seuls artefacts
  générés ont été supprimés ; aucun fichier projet écarté du contrôle.
- Après nettoyage : Biome (76 fichiers), `git diff --check` et état Git contrôlés ;
  seuls README, brief, sitemap, workflow et journal sont modifiés. Captures
  complémentaires FR/clair desktop et EN/sombre mobile avec polices réseau,
  images visibles chargées et ancres stabilisées à 80 px ; exemples Home,
  Projects, About et Contact relus. Le premier script de captures prenait
  parfois la transition en cours : attente de position finale ajoutée, puis
  relance réussie. Pas de changement applicatif requis.
## RUN-017 — Web3Forms, intégration locale (30 octobre 2026)

- Mandat direct d'Allen : reprendre le formulaire, choisir Web3Forms et utiliser
  sa première clé publique pour les essais en développement. RUN-016 reste
  clôturé sur sa décision historique ; ce nouveau mandat la remplace pour le
  formulaire. RUN-008 demeure en `verify` pour validation visuelle/contenu humaine :
  chevauchement explicite dû à la nouvelle instruction d'Allen, sans clôture
  artificielle du RUN-008.
- Périmètre : un formulaire contact/devis à trois champs dans Contact, le lien
  email conservé, FR/EN, clair/sombre, mobile, traitement Web3Forms sans backend
  ni dépendance. Clé publique dans `.env.local` ignoré par Git, variable d'exemple
  et clé fictive pour le build CI ; aucun compte ou abonnement créé. Les
  modifications locales préexistantes de RUN-008 sont conservées.
- Shadcn MCP consulté : aucun registre configuré dans le projet. L'ajout d'une
  première intégration shadcn demanderait de cadrer CSS natif et dépendances ;
  les éléments HTML natifs ont été stylés dans les feuilles existantes pour ce RUN.
- Implémentation : vérification `response.ok` et `success: true`, blocage des
  soumissions simultanées, attente limitée à 15 secondes, saisie conservée en
  échec et effacée en succès, alternative email et notice Web3Forms. Les règles
  de validation personnalisées côté service ne sont pas démontrées ; le
  fournisseur annonce son filtrage anti-spam côté serveur.
- Contrôles : build, lint, 55 tests Vitest et 13 cas navigateur Chrome réussis ;
  le nouveau test navigateur vérifie rejet, absence de double envoi, conservation
  de saisie, acceptation et effacement. Biome a signalé du formatage et un ordre
  de spécificité CSS, corrigés avant contrôle final ; Biome et `git diff --check`
  réussis, `npm audit --audit-level=moderate` : 0 vulnérabilité. Captures
  locales du formulaire à 390 et 1440 px inspectées. Pas de revue design Claude
  ou de revue indépendante : implémentation et relecture par Codex main.
- Envoi de contrôle vers l'adresse déjà autorisée tenté une fois en Node et
  une fois dans Chrome local. L'appel Node a reçu un challenge Cloudflare HTML
  au lieu d'un JSON ; dans Chrome, le formulaire a affiché l'échec d'envoi,
  sans réponse API observée. Aucune acceptation Web3Forms ni livraison email
  n'est vérifiée. Le diagnostic exact du filtrage réseau reste inconnu.
- État `verify` : avant publication, confirmer depuis le navigateur/réseau
  d'Allen la réponse réelle et la réception en messagerie, le destinataire lié
  à la clé, la durée de conservation dans le compte Web3Forms et la validation
  visuelle. Configurer ensuite la variable publique de déploiement. Aucun push,
  merge ou déploiement effectué.
