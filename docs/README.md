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
| [testing.md](testing.md) | Tests versionnés, matrice navigateur et cache des images |
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

État au 28 octobre 2026 : phase 1 clôturée (RUN-006 et RUN-013 `done`),
refonte visuelle implémentée et contrôlée sur le contenu existant. La baseline
historique de production reste 1.3.2 ; aucun déploiement n'est déclaré ici.
Le [suivi](../runs-workflow.md) et le [journal](../runs-journal.md) distinguent les
preuves de clôture des dettes et des travaux de phase 2.

| Document | Usage |
| --- | --- |
| [Audit daté](audit-2026-10-27.md) | Constats, priorités et limites des contrôles de RUN-000 |
| [Plan de refonte](refonte-plan.md) | Périmètre one-page, ancres, services, projets et formulaire |
| [Contrat contact/devis](contact-form-contract.md) | Décision email seul RUN-016 ; étude conservée pour le formulaire reporté |
| [Brief Claude](claude-design-brief.md) | Direction design et relais des RUN UI |
| [Contrat Claude RUN-022](handoffs/run-022-claude-transitions-scroll.md) | Passe visuelle 1 : transitions au scroll à partir de la vidéo d’Allen |
| [Contrat Claude RUN-007](handoffs/run-007-claude-coherence-visuelle.md) | Revue visuelle intégrée et image sociale ; relais manuel |
| [Proposition Claude](references/claude-design-proposal.md) | Contribution initiale non validée |
| [Références](references/README.md) | Sources techniques et conventions de ressources |
| [DESIGN.md](../DESIGN.md) | Baseline historique et direction de refonte fondée sur Stitch |
| [Maquettes Stitch](maquettes_references/README.md) | Quatre variantes importées et système monochrome à reproduire et adapter |

Mettre à jour le document propriétaire et lier depuis cet index, plutôt que
recopier des statuts, preuves ou décisions dans chaque fichier.

La synthèse validée et ses adaptations sont consignées dans DESIGN.md R8 à R19.
Les services et l'espace projets clients sont intégrés ; le formulaire reste reporté.
