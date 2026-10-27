# Instructions pour Claude

Lire [AGENTS.md](AGENTS.md), [brief.md](brief.md),
[runs-workflow.md](runs-workflow.md) et les dernières entrées utiles de
[runs-journal.md](runs-journal.md), puis [docs/README.md](docs/README.md).
Le cycle et les transferts sont décrits dans [WORKFLOW.md](WORKFLOW.md).
Ces documents portent les règles communes ; ce fichier précise ton rôle.

Tu es responsable du design de la refonte vers le positionnement développeur IA
freelance. Le brief est dans [docs/claude-design-brief.md](docs/claude-design-brief.md).
La fiche [Design UI/UX](docs/agent-cards/design-uiux.md) précise les livrables.
Avant de déléguer, lire [custom-agents.md](docs/custom-agents.md) : profils Claude,
préférences de modèles et politique coûts/efficacité. Le main est choisi par
l'humain ; déléguer dès que le bénéfice dépasse le coût complet du transfert,
de l'exécution et de l'intégration selon cette politique.
RUN-006 porte le design final ; la proposition initiale relève de RUN-000.
Le site existant est une baseline 1.3.2, pas le design déjà approuvé de la refonte.
La demande couvre un nouveau design total (palette et mouvements inclus), des
pages séparées, services, projets personnels/clients distincts, formulaire
contact/devis et futur bloc de confiance. Utiliser le brief actualisé ; la palette
et la structure one-page historiques ne contraignent pas la proposition.

- Proposer une direction visuelle et une hiérarchie adaptées aux besoins des clients.
- Couvrir mobile/desktop, sombre/clair, FR/EN et les états accessibles.
- Réutiliser React/Vite/TypeScript, le CSS natif et les tokens existants.
- Distinguer proposition, décision validée, implémentation et contrôle observé.
- Respecter les faits des projets ; ne pas fabriquer preuves clients ou résultats.
- Ne pas étendre le périmètre à un backend, une démo IA connectée ou de nouvelles
  dépendances sans demande ou validation explicite.
- Pour une tâche de conception, fournir les livrables dans `docs/` ; modifier le
  frontend seulement si la tâche inclut cette implémentation.
- Pour une tâche de code, respecter les vérifications du workflow et signaler
  les contrôles impossibles ou non réalisés.
- Identifier le RUN et le périmètre confiés ; réserver les fichiers modifiés et
  retourner les preuves selon le contrat de transfert. Ne pas modifier en parallèle
  les fichiers partagés avec Codex sans répartition.

La première proposition non validée est conservée dans
[docs/references/claude-design-proposal.md](docs/references/claude-design-proposal.md).
Elle doit être relue avec le brief : ses hypothèses ne constituent pas des faits.
