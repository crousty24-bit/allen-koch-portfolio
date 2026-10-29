# Cycle de développement agentique

## Sources de vérité

Les instructions de la session et le mandat d'Allen priment. Les fichiers du dépôt
organisent le travail sans étendre les permissions de l'agent.

| Document | Contenu propriétaire |
| --- | --- |
| `AGENTS.md` | Règles durables et contraintes projet |
| `brief.md` | Produit, architecture, décisions acquises et inconnues |
| `runs-workflow.md` | Travail borné, dépendances, responsables et statuts |
| `runs-journal.md` | Exécutions, contrôles, échecs et relais observés |
| `docs/refonte-plan.md` | Proposition détaillée de refonte et arbitrages |
| `DESIGN.md` | Référence design, avec état validé/livré explicitement distingué |
| `docs/` | Processus réutilisable, rôles, contrats et ressources |

## 1. Prise en charge

Lire brief, workflow et dernières entrées du journal ; inspecter les instructions
applicables, Git et les fichiers concernés. Associer la demande à un RUN ou créer
un RUN borné. Préciser les comportements préservés, risques, preuves attendues,
inconnues et condition de fin. Ne pas démarrer tous les RUN planifiés.

## 2. Classification et affectation

- Local : une discipline, modification ciblée ; l'agent principal peut tout réaliser.
- Coordonné : disciplines distinctes dans un même RUN ; déléguer seulement les
  sous-tâches utiles et séparables.
- Spécialisé : sécurité, performance mesurée, contrat partagé ou publication ;
  affecter la partie risquée à la compétence concernée.

Appliquer [routing-rules.md](routing-rules.md). Un rôle n'atteste pas qu'un agent
distinct existe. Si l'agent principal assure plusieurs rôles, le dire ; ne pas
présenter sa propre relecture comme une revue indépendante.

Évaluer la délégation selon [custom-agents.md](custom-agents.md) : les main agents
doivent déléguer lorsqu'un bénéfice attendu justifie le coût complet. Le choix
humain du modèle principal reste inchangé ; les préférences de sous-agents et
d'effort sont définies dans cette politique, pas par le titre du rôle.

## 3. Délégation

Utiliser le [contrat de transfert](handoff-contracts.md) avec RUN, destinataire,
livrable, périmètre, fichiers réservés et vérifications. Fournir les seuls extraits
et références utiles. Vérifier la disponibilité du destinataire avant d'annoncer
la délégation. Le design reste affecté à Claude conformément à la demande d'Allen.

La parallélisation ne crée pas plusieurs RUN actifs. Deux agents n'écrivent pas
dans le même fichier en parallèle. L'orchestrateur conserve les fichiers partagés
(App, i18n, tokens, journal) ou attribue leur modification en séquence.

## 4. Réalisation et intégration

L'implémenteur inspecte les conventions et applique le plus petit changement
complet dans son périmètre. Une découverte hors périmètre revient à l'orchestrateur.
Celui-ci relit le retour, les fichiers et les preuves, résout les collisions puis
intègre ou demande une correction ciblée. Un retour `completed` ne clôt pas le RUN.

Pour tout nouveau composant UI de base, consulter le MCP Shadcn, rechercher un
composant adapté et réutiliser ceux déjà intégrés avant d’écrire du code spécifique,
selon [AGENTS.md](../AGENTS.md). Justifier les exceptions. Avant la première
intégration, cadrer et faire valider sa coexistence avec le CSS natif actuel
(tokens, cascade, styles globaux/resets, thèmes et responsive), ainsi que les
dépendances nécessaires. La règle ne déclenche aucune installation ni migration
générale ; la réalisation reste limitée au mandat du RUN.

Préserver les travaux en cours ; ne pas réinitialiser, écraser ou committer un
ensemble de modifications pour simplement faciliter un relais.

## 5. Vérification

Passer le RUN en `verify`. Exécuter les commandes applicables de
[tooling.md](tooling.md) et les critères propres au RUN. Si UI : contrôler les
combinaisons pertinentes mobile/desktop, FR/EN, sombre/clair, clavier et reduced-motion.
Une mesure locale n'est ni un résultat terrain ni une validation humaine.

Un échec requis est diagnostiqué, corrigé ou reste explicitement ouvert. Un test
sans rapport avec un lot documentaire ne bloque pas sa clôture si l'échec est
attribué à un RUN distinct, sans prétendre que le dépôt est prêt pour une release.

## 6. Revue, clôture et reprise

Appliquer [review-policy.md](review-policy.md). Mettre à jour les documents
propriétaires, puis statut du RUN et entrée du journal avec preuves, limites,
contributeurs réels et prochain responsable. Ne déclarer `done` qu'après ses
critères ; rester en `verify` si une validation requise manque.

En cas d'obstacle : noter l'état vérifié, la cause et la condition de reprise.
Continuer les travaux indépendants autorisés ; demander uniquement l'information
ou l'autorisation réellement manquante. Une nouvelle session relit ce relais
avant de reprendre, au lieu de réexécuter aveuglément les étapes déjà validées.
