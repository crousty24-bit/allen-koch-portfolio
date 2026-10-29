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
