# Contrats de transfert entre agents

## Demande

Pour une délégation effective, renseigner ce contrat dans le message au destinataire
ou dans une section identifiée du RUN pour un relais manuel. Un lien seul vers un
fichier n'est pas la preuve qu'un agent l'a reçu.

```text
RUN et sous-tâche :
Émetteur / destinataire / rôle :
Modèle et effort demandés / bénéfice attendu de la délégation :
Objectif et livrable :
Dans le périmètre / hors périmètre :
Fichiers et preuves utiles :
Fichiers réservés en écriture / partagés en lecture :
Contrats à préserver :
Dépendances / inconnues / risques :
Actions autorisées et autorisations déjà acquises :
Vérifications attendues :
Condition d'arrêt et agent qui reprend :
```

Pour une petite tâche, ces champs peuvent tenir en quelques phrases. Aucun dump
global du dépôt, secret ou donnée client dans le transfert. Si un destinataire
est un chat existant, son envoi suit l'autorisation de messagerie de la session ;
le workflow du dépôt ne l'accorde pas à lui seul.

## Retour

```text
RUN et sous-tâche / auteur réel :
Modèle et effort effectifs (ou inconnus) :
Statut : completed | needs_input | blocked | failed
Faits vérifiés et décisions proposées :
Travail effectué / fichiers modifiés (ou aucun) :
Commandes et résultats / contrôles non exécutés :
Risques / inconnues / non-changements intentionnels :
Action ou décision encore requise :
Prochain responsable et point de reprise :
```

L'orchestrateur vérifie le retour contre les critères, relit les fichiers et
consigne le résultat dans le journal. `completed` décrit la sous-tâche ; le statut
global du RUN dépend aussi de l'intégration, des tests et des arbitrages requis.

## Constat de revue

```text
Priorité : P0 | P1 | P2 | P3
Fichier et emplacement :
Comportement vérifié et scénario de défaillance :
Impact :
Correction minimale et vérification :
```

Une préférence visuelle non arbitrée est une proposition, pas un défaut prouvé.

## Exemple de relais prévu : RUN-006 → RUN-007

Claude remet le design, ses variantes et les décisions d'Allen. Le transfert
indique les composants et styles concernés, les états attendus, les assets et
leurs sources, les modifications autorisées et les contrôles manquants. Codex
confirme la réception et réserve les fichiers partagés avant intégration.
Ce scénario est prévu ; il ne décrit pas un relais déjà exécuté.
