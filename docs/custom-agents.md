# Proposition de custom agents et politique de délégation

## Statut

Proposition du 27 octobre 2026, RUN-009 : quatre profils Codex et deux Claude,
propres au portfolio. Ce sont des spécialistes pour les sous-tâches ; le main
agent reste choisi par l'humain. Aucun profil natif n'est installé dans ce RUN.

Les neuf [fiches de rôles](README.md#fiches-de-rôles) décrivent les compétences
transversales, pas neuf agents à lancer. Les six profils ci-dessous en couvrent
plusieurs. Charger uniquement le profil et les références utiles à la tâche.

## Préférences de modèles demandées par Allen

| Niveau | Modèle préféré | Effort demandé | Sélection |
| --- | --- | --- | --- |
| Main Codex | Sol 6.1 ; alternative Sol 6 | Medium pour Sol 6.1 ; Medium/High pour Sol 6 | Humain |
| Sous-agent Codex | Luna 6 | Low à High selon la tâche | Main agent |
| Main Claude | Opus 5.5 | Medium à Xhigh | Humain |
| Sous-agent Claude | Sonnet 5.5 | Low à High selon la tâche | Main agent |

Ces libellés expriment une préférence, pas une disponibilité vérifiée. Vérifier
au lancement les identifiants exacts, l'accès aux modèles et les efforts réglables
par sous-agent. Dans cette session, `gpt-6-luna` est disponible ; cela ne garantit
pas sa disponibilité ailleurs. Aucun identifiant technique Sonnet/Opus n'est supposé.

Conserver le main choisi par l'humain. Si Luna/Sonnet manque ou ne suffit pas,
reprendre la partie nécessaire avec le main ou proposer une escalade motivée.
Signaler le repli, sans promotion implicite du sous-agent vers Sol/Opus ni
présentation d'un autre modèle comme Luna/Sonnet.

## Quatre custom agents Codex proposés

| Identifiant proposé | Périmètre | Livrable | Effort de départ |
| --- | --- | --- | --- |
| `portfolio-code-engineer` | Implémentation technique React/TypeScript, données, raccordement des composants, outillage et corrections ciblées | Diff minimal et contrôles pertinents | Medium ; Low pour changement mécanique |
| `portfolio-logic-qa` | Diagnostic de logique, flux d'état, stockage, contrats et régressions ; revue indépendante si confiée en lecture seule | Cause étayée, cas de test, constats ; correction si mandatée | Medium ; High pour états interdépendants |
| `portfolio-seo-auditor` | Métadonnées, sémantique, langues, indexabilité et cohérence du positionnement public | Audit ciblé ou correction SEO autorisée et vérifiée | Low pour inventaire ; Medium pour diagnostic |
| `portfolio-performance-engineer` | Chargement, assets, bundle, rendu et animations, à partir d'un symptôme ou d'une mesure | Référence mesurée, correction autorisée, comparaison et limites | Medium ; High pour profilage complexe |

Code Engineer implémente ; Logic/QA prouve les cas limites et diagnostique.
Sur une même anomalie, nommer l'implémenteur et le relecteur plutôt que produire
deux corrections. Une mission de revue reste en lecture seule ; si Logic/QA
corrige, son contrôle ultérieur ne constitue pas une revue indépendante.

SEO possède la découvrabilité et les métadonnées ; Performance possède les
mesures de chargement/rendu. Ne pas dupliquer un audit de performance sous couvert
de SEO. Les optimisations coordonnent tout changement graphique avec Claude et
distinguent les effets attendus et observés sur desktop/mobile.

## Deux custom agents Claude proposés

| Identifiant proposé | Périmètre | Livrable | Effort de départ |
| --- | --- | --- | --- |
| `portfolio-design-director` | Direction artistique, hiérarchie, composition, tokens, maquettes et états responsive accessibles | Proposition/spécifications, arbitrages et transfert vers le front | Medium ; High pour une direction complète |
| `portfolio-ui-engineer` | Traduction d'un design accepté en JSX/CSS, responsive, focus, états visuels et fidélité du rendu | Diff visuel sur fichiers réservés et preuves navigateur | Medium ; Low pour ajustement isolé |

Design Director conçoit ; UI Engineer code si le mandat inclut l'implémentation.
Ils utilisent Sonnet 5.5 par préférence en tant que sous-agents ; leur titre ne
justifie pas à lui seul un modèle Opus ou un nouveau main agent.

Codex Code Engineer possède le comportement technique ; Claude UI Engineer porte
l'intégration graphique confiée. Un composant mêlant les deux a un seul auteur
à la fois. App, i18n, tokens et composants partagés sont réservés ou modifiés en
séquence. Le main agent garde la responsabilité de l'intégration et des contrôles.

## Quand les main agents doivent déléguer

Les main agents Codex et Claude **doivent appeler des sous-agents dès que le gain
attendu justifie le coût total de délégation**, dans les permissions et le mandat
disponibles. Considérer contexte transféré + exécution du sous-agent + lecture du
retour + vérification/intégration + risque de reprise. Réduire le délai par du
parallélisme ne signifie pas nécessairement réduire les tokens.

Déléguer si le résultat est borné et vérifiable, le contexte limité et au moins
un bénéfice identifié : travail adapté au modèle moins coûteux, contrôle
indépendant utile, ou sous-tâche autonome parallélisable. Estimer qualitativement ;
ne pas inventer tarif, seuil de tokens ou gain chiffré.

Garder en direct une correction triviale, une décision produit ou une tâche dont
le transfert/contrôle coûterait plus que l'exécution. Éviter les recherches
dupliquées. Un sous-agent remonte ses besoins au main ; pas de délégation récursive
par défaut. L'absence d'un outil de sous-agent est signalée, pas simulée.

## Effort, contexte et escalade

- Low : inventaire, comparaison à critères explicites, contrôle borné ou correction mécanique.
- Medium : implémentation ciblée, diagnostic courant, test de régression ou proposition visuelle bornée.
- High : états complexes, performance ambiguë ou composition exigeante ; justifier par la difficulté.

Utiliser [handoff-contracts.md](handoff-contracts.md) : objectif, fichiers/preuves
ciblés, critères, droits d'écriture, modèle/effort et condition de fin. Préférer un
contexte autonome à l'historique entier lorsqu'il suffit. Retour court : résultat,
preuves, risques et prochain geste ; détails durables dans les fichiers propriétaires.

Si le retour est insuffisant, demander une correction ciblée ou reprendre la
partie difficile. Réévaluer le contexte et le risque avant d'augmenter l'effort ;
ne pas multiplier les appels identiques ou monter de gamme systématiquement.

Le journal consigne la sous-tâche, l'agent effectivement appelé, le modèle/effort
effectifs lorsqu'ils sont connus, le bénéfice attendu, le retour et sa vérification.
Laisser inconnues les métadonnées non accessibles. Un bénéfice estimé ne devient
pas une économie mesurée sans données de consommation.

## Configuration native ultérieure

Après choix des profils : vérifier les formats supportés par les outils installés
et les modèles, déclarer les agents dans la configuration du dépôt propre à chaque
fournisseur, puis tester découverte et mandat court. Cette étape n'est pas réalisée
par cette proposition ; aucun format de configuration supposé n'est créé ici.
