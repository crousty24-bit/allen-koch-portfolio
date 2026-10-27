# Origine et adaptation du workflow

## Source consultée

- Date : 27 octobre 2026, à la demande d'Allen.
- Dépôt : `/home/allen/mes_projets/my-boilerplates/react-node-boilerplate`.
- Révision inspectée : `b58765736c6c63ad0e50d33ac27f88c662d60e45`.
- Source laissée en lecture seule ; aucun outil applicatif du boilerplate installé.

Structure reprise : `brief.md`, `runs-workflow.md`, `runs-journal.md`, index docs,
cycle agentique, routage, contrats de transfert, politiques de revue/sécurité,
carte des outils et fiches de rôles.

## Adaptations au portfolio

- npm et scripts réellement présents remplacent les commandes du workspace pnpm.
- Contrats préservés : données/composants, thèmes, langues, responsive, assets et SEO.
- Pas de documents `api-contract.md`/`database.md`, rôle backend/database, Prisma,
  migration, fournisseur backend ou commande de test inexistant.
- Le design reste confié à Claude, l'intégration et la vérification à Codex.
- Les règles d'approbation tiennent compte du mandat déjà accordé par Allen.
- Les ressources de refonte existantes sont conservées et reliées aux RUN.
- `WORKFLOW.md` devient un point d'entrée ; le cycle détaillé vit dans docs et
  les statuts uniquement dans `runs-workflow.md`.

## Maintenance

Une évolution du boilerplate ne s'importe pas automatiquement. Comparer le besoin,
préserver les décisions locales et adapter uniquement les documents pertinents.
Ne pas écraser le brief, le journal ou les ressources de design par leurs modèles.
Une évolution d'architecture décidée ultérieurement doit d'abord être documentée
dans le brief et le RUN concerné, puis répercutée dans les politiques applicables.
