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
