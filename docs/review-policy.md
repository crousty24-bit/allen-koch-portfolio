# Politique de revue

## Ordre de lecture

1. Mandat et critères du RUN.
2. Comportement, régressions et contrats de données/composants.
3. Accessibilité, responsive et cohérence des thèmes/langues.
4. Sécurité et confidentialité.
5. Pertinence des tests et preuves.
6. Simplicité, performance/SEO concernés et exactitude documentaire.

Signaler les refactorisations hors sujet, dépendances sans justification,
assertions masquant des erreurs, interactions inaccessibles, résultats inventés,
design non arbitré présenté comme accepté et modifications frontend non contrôlées
sur mobile et desktop. Une revue documentaire vérifie les liens, les commandes,
les affectations et l'absence de sources de vérité contradictoires.

## Indépendance et proportion

L'orchestrateur relit chaque résultat délégué. Une revue indépendante est utile
pour la refonte intégrée, une correction risquée ou une demande explicite. Si elle
n'a pas eu lieu, noter « relecture par l'implémenteur » et les limites ; ne pas
inventer un second avis ni bloquer une correction triviale par principe.

Chaque défaut doit avoir un scénario vérifiable et une correction proportionnée,
selon [handoff-contracts.md](handoff-contracts.md). Ne pas signaler un goût personnel
comme une régression, ni répéter les préférences de format déjà imposées par l'outil.

## Clôture

Le RUN peut être `done` quand ses critères sont satisfaits, les changements relus,
les contrôles requis exécutés et les sources de vérité à jour. Les échecs ou
contrôles non effectués sont explicites. Un échec directement lié au critère reste
ouvert ; une dette préexistante hors périmètre est reliée au RUN qui la possède.

Une validation humaine ou indépendante exigée par le RUN ne peut être remplacée
par l'affirmation de l'agent. Un build local réussi ne vaut pas validation de release
ni publication. Le rapport final mentionne les risques et les non-changements utiles.
