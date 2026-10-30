# Références et ressources

Sources consultées le 27 octobre 2026. Les constats locaux et versions exactes
sont dans [l'audit](../audit-2026-10-27.md). Refaire les contrôles avant correction :
les avis de sécurité et versions disponibles évoluent.

| Ressource | Usage |
| --- | --- |
| [TypeScript : strict](https://www.typescriptlang.org/tsconfig/strict.html) | Portée des vérifications de typage strictes |
| [GitHub : déclenchement des workflows](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow) | Effet des pushes réalisés avec GITHUB_TOKEN sur les workflows push |
| [Avis Vite GHSA-9jrq-w75r-8gcw](https://github.com/vitejs/vite/security/advisories/GHSA-9jrq-w75r-8gcw) | Exemple d'alerte dont l'exploitation dépend d'un middleware spécifique, absent ici |
| [Avis Vitest GHSA-qxg6-89mg-rqv8](https://github.com/vitest-dev/vitest/security/advisories/GHSA-qxg6-89mg-rqv8) | Vulnérabilité de l'outillage de mock et versions corrigées |
| [Contribution de Claude Code](claude-design-proposal.md) | Proposition de design initiale, sans validation visuelle |

Les autres avis sont accessibles par leurs identifiants dans le rapport
`npm audit` ; ne pas limiter la correction aux deux exemples liés ici.

Pour ajouter une référence visuelle : indiquer l'URL ou le fichier, sa source,
la date, le principe utile et les droits de réutilisation connus. Une référence
n'est pas une autorisation de copier une interface ou des assets.
Pour une capture de validation : préciser viewport, thème, langue et état testé.
Ne pas déposer de secrets, données clients ou captures confidentielles dans `docs/`.

Aucune référence graphique externe n'a encore été sélectionnée par Allen.
