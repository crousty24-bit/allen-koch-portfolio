# Outils et preuves

Cette carte décrit les outils présents, pas une installation de capacités nouvelles.
Le dépôt utilise npm ; les commandes pnpm du boilerplate ne s'appliquent pas ici.

| Besoin | Outil/commande disponible dans le dépôt | Preuve attendue |
| --- | --- | --- |
| Rechercher et inspecter | `rg`, Git, lecture ciblée | Fichiers et état courant inspectés |
| Développement | `npm run dev` | Serveur local, sans annonce de publication |
| TypeScript + bundle production | `npm run build` | Sortie de commande et éventuelles erreurs |
| Lint TS/TSX | `npm run lint` | Résultat ESLint |
| Format/imports/règles Biome | `npm run biome:check` | Résultat sans réécriture |
| Tests présents | `npm run test` | Vitest ; portée réelle des tests précisée |
| Contrôle du build en navigateur | `npm run preview` | Parcours et conditions du navigateur consignés |
| Dépendances | `npm audit --audit-level=moderate` | Rapport complet, distingué de `--omit=dev` |
| Stats GitHub | `npm run stats:update` | Opération optionnelle avec secret ; ne pas lancer pour un contrôle documentaire |

Avant de finaliser un travail d'implémentation, exécuter build, lint, Biome et
tests ; pour une release, aussi l'audit complet. Pour ce lot documentaire de mise
en place, exécuter également ces quatre checks afin d'établir son état de départ.
Pour les corrections documentaires ultérieures : liens, cohérence et diff suffisent
si aucun code, outil ou contrat exécutable n'a changé ; consigner ce choix.

Un contrôle Markdown doit inclure les fichiers non suivis : `git diff` seul ne
montre pas leur contenu. Biome ne constitue pas une preuve de validation des liens
Markdown. Inspecter les nouveaux fichiers et vérifier leurs chemins explicitement.

## Capacités à vérifier lors d'une délégation

- Claude : utiliser l'interface effectivement disponible, avec mandat borné.
  La proposition de RUN-000 ne garantit pas l'accès ou l'authentification future.
- Navigateur : aucun script `test:e2e`, Playwright ou React Testing Library n'est
  déclaré ici. Employer l'outil disponible et consigner navigateur/viewport/états,
  sans inventer une commande ou ajouter une dépendance de test par défaut.
- Plugins GitHub/Vercel/design : vérifier connexion et cible avant emploi ; leur
  présence n'est pas une autorisation de publication.
- Skills : lire ceux qui servent la tâche, sans les considérer comme une extension du mandat.

## MCP Shadcn

Disponible dans la session Codex du 29 octobre 2026 : l’appel de lecture
`view_items_in_registries` sur `@shadcn/button` a répondu avec les détails du composant.
Cela ne prouve ni une installation dans le dépôt, ni sa disponibilité pour Claude
ou une autre session : vérifier l’accès avant usage et signaler toute indisponibilité.

- `search_items_in_registries` : rechercher les composants.
- `view_items_in_registries` et `get_item_examples_from_registries` : consulter
  les détails et exemples.
- `get_add_command_for_items` : obtenir une commande d’ajout, sans l’exécuter
  hors du mandat technique validé.

Certaines recherches nécessitent une configuration `components.json` ; ne pas
initialiser le projet pour un simple contrôle documentaire. Appliquer la règle
de [AGENTS.md](../AGENTS.md) et le cadrage CSS natif du [brief](../brief.md)
avant la première intégration.

## Tests et matrice navigateur

La [procédure de vérification](testing.md) décrit la suite Vitest versionnée, ses
limites, les tests de statistiques isolés et la matrice navigateur sur build
production. Elle documente aussi le cache des images et le contrôle de release.

## Mesures

Un contrôle UI documente mobile/desktop, thème/langue, clavier, réduction des
animations et éventuels incidents console/réseau. Une optimisation mobile précise
l'effet attendu sur desktop et vérifie séparément les deux. Ne pas annoncer de
gain, score Lighthouse ou conformité sans mesure correspondante.

La CI existante reste dans `.github/workflows/`. Les fichiers RUN pilotent le
travail des agents ; ils ne remplacent pas les workflows GitHub Actions.
