# Documentation et workflow agentique

## Sources de vérité

- [AGENTS.md](../AGENTS.md) : règles durables et contraintes.
- [brief.md](../brief.md) : produit, architecture et décisions.
- [runs-workflow.md](../runs-workflow.md) : tâches bornées, responsables, statuts et dépendances.
- [runs-journal.md](../runs-journal.md) : exécutions, contrôles et relais.
- [WORKFLOW.md](../WORKFLOW.md) : point d'entrée rapide.
- [CLAUDE.md](../CLAUDE.md) : instructions propres au responsable design.

## Processus et contrats

| Document | Usage |
| --- | --- |
| [agentic-workflow.md](agentic-workflow.md) | Cycle de prise en charge à clôture/reprise |
| [routing-rules.md](routing-rules.md) | Choix du minimum de rôles utiles |
| [custom-agents.md](custom-agents.md) | Six profils proposés, modèles/efforts et délégation selon coûts/efficacité |
| [handoff-contracts.md](handoff-contracts.md) | Transfert de tâche, résultat et constats de revue |
| [tooling.md](tooling.md) | Commandes présentes, preuves et capacités à vérifier |
| [review-policy.md](review-policy.md) | Relecture, indépendance et critères de clôture |
| [security-policy.md](security-policy.md) | Frontières de confiance et autorisations |
| [initialization.md](initialization.md) | Origine boilerplate et adaptations locales |

## Fiches de rôles

- [Orchestrator](agent-cards/orchestrator.md)
- [Design UI/UX — Claude](agent-cards/design-uiux.md)
- [Frontend Engineer](agent-cards/frontend-engineer.md)
- [Test/QA](agent-cards/test-qa.md)
- [Code Reviewer](agent-cards/code-reviewer.md)
- [Security](agent-cards/security.md)
- [SEO/Performance](agent-cards/seo-performance.md)
- [Production/Deployment](agent-cards/production-deployment.md)
- [Documentation](agent-cards/documentation.md)

Ces rôles sont des compétences, pas un comité obligatoire ni une preuve d'agent
disponible. Une délégation réelle nomme le destinataire et trace son retour.
Le portfolio statique n'a pas de rôle backend/database.

## Ressources de refonte

État documentaire au 27 octobre 2026 : préparation ; baseline déclarée 1.3.2,
refonte non implémentée. Les propositions ne valent pas validation visuelle.

| Document | Usage |
| --- | --- |
| [Audit daté](audit-2026-10-27.md) | Constats, priorités et limites des contrôles de RUN-000 |
| [Plan de refonte](refonte-plan.md) | Périmètre one-page, ancres, services, projets et formulaire |
| [Brief Claude](claude-design-brief.md) | Livrables et critères design de RUN-006 |
| [Proposition Claude](references/claude-design-proposal.md) | Contribution initiale non validée |
| [Références](references/README.md) | Sources techniques et conventions de ressources |
| [DESIGN.md](../DESIGN.md) | Baseline historique et direction de refonte fondée sur Stitch |
| [Maquettes Stitch](maquettes_references/README.md) | Quatre variantes importées et système monochrome à reproduire et adapter |

Mettre à jour le document propriétaire et lier depuis cet index, plutôt que
recopier des statuts, preuves ou décisions dans chaque fichier.

La variante finale et ses adaptations restent à arbitrer par Allen avant
l'implémentation visuelle.
