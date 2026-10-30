# Workflow agentique du portfolio

Le workflow est organisé en RUN bornés, avec un seul RUN actif et des sous-tâches
déléguées si elles sont utiles. Codex orchestre et intègre ; Claude porte le design.

## Prise en main

1. Lire [AGENTS.md](AGENTS.md) et [brief.md](brief.md).
2. Lire [runs-workflow.md](runs-workflow.md) pour le périmètre, les statuts et responsables.
3. Lire les dernières entrées de [runs-journal.md](runs-journal.md) pour les preuves et relais.
4. Appliquer [le cycle agentique](docs/agentic-workflow.md), puis le routage et le
   contrat de transfert si une délégation est nécessaire.

[docs/README.md](docs/README.md) indexe les règles, fiches de rôles et ressources
de refonte. Ce fichier est un point d'entrée, pas un second suivi de tâches.
La planification d'un RUN ne déclenche pas son exécution sans mandat correspondant.

Pour choisir un sous-agent, lire [la proposition et la politique de modèles](docs/custom-agents.md).
Les main agents délèguent dès que le bénéfice attendu dépasse le coût complet,
en conservant le choix humain du modèle principal.
