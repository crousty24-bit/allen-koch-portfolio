# Routage des tâches

L'orchestrateur choisit le minimum de compétences nécessaires. Une fiche de rôle
n'installe aucun outil et ne lance aucun agent. La disponibilité et les permissions
de la session déterminent les délégations possibles.

Avant de choisir un sous-agent, appliquer [custom-agents.md](custom-agents.md) :
six profils proposés, préférences de modèles/effort et arbitrage coûts/efficacité.
Le main délègue dès que cet arbitrage est favorable, avec résultat borné et
vérifiable. Les compétences ci-dessous peuvent être couvertes par un même profil.

| Travail | Responsable principal | Appui utile | Déclencheur |
| --- | --- | --- | --- |
| Portée, RUN, intégration et rapport | Codex / Orchestrator | Documentation | Chaque tâche non triviale |
| Direction visuelle, maquettes, responsive graphique | Claude / Design UI/UX | Frontend, Test/QA | Refonte ou changement visuel significatif |
| Composants, données, préférences et comportements | Frontend Engineer | Claude pour le visuel, Test/QA | Changement React/CSS/données |
| Régression, clavier, navigateurs et états | Test/QA | Frontend | Comportement critique ou contrôle de la refonte |
| Relecture de diff et contrats | Code Reviewer | Compétence concernée | Revue explicite ou risque justifiant une lecture indépendante |
| Dépendances, secrets et données externes | Security | Frontend, Production | Frontière de confiance modifiée ou alerte npm |
| Métadonnées, indexation et performance mesurée | SEO/Performance | Frontend, Claude | SEO demandé ou dégradation établie par mesure |
| Build, CI, cache et publication | Production/Deployment | Test/QA, Security | Modification de livraison ou publication demandée |
| Sources de vérité et ressources | Documentation | Orchestrator | Règles, décisions ou preuves à pérenniser |

## Parcours types

- Petit correctif : Frontend → contrôle ciblé → Orchestrator.
- Refonte : contenu validé → Claude → arbitrage Allen → Frontend → Test/QA → intégration/revue.
- Alerte npm : Security → correction ciblée → tests/audits → revue et journal.
- Performance : SEO/Performance établit la mesure → implémentation → comparaison.
- Documentation : Documentation → contrôle de liens/cohérence → Orchestrator.
- Publication demandée : Production → contrôles de release → action autorisée
  sur cible vérifiée → preuve de publication.

## Limites

Le design de la refonte est confié à Claude. Si Claude n'est pas accessible,
préparer un transfert et signaler l'absence d'exécution, sans simuler sa réponse.
Une tâche de code frontend ne délègue pas automatiquement tous les changements
à Claude ; le transfert précise qui peut écrire quels fichiers.

Aucun rôle backend/database du boilerplate n'est importé par défaut. Le formulaire
contact/devis demandé passe par RUN-016 pour le choix de traitement ; Frontend,
Security et Production couvrent cette frontière limitée. Une infrastructure plus
large demande une décision distincte.
Un spécialiste ne peut approuver une extension du mandat d'un autre.

Une autorisation déjà donnée dans la session reste valable pour son périmètre.
Demander un arbitrage seulement si une décision non résolue change le résultat,
le risque ou la portée ; ne pas imposer un comité d'agents aux petits changements.
