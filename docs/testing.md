# Vérification du socle et des nouvelles sections

## Suite versionnée

Depuis RUN-020, `npm run test` exécute Vitest en environnement Node :

| Fichier | Contrat vérifié |
| --- | --- |
| `storage.test.ts` | Préférence valide, invalide, absente, lecture/écriture bloquée et écriture réussie |
| `about-journey.test.ts` | Jalons et règle de repli du parcours |
| `hero-stats.test.ts` | Statistiques dérivées du catalogue, libellés FR/EN |
| `projects.test.ts` | Données et liens éditoriaux sélectionnés |
| `globals-css.test.ts` | Invariants textuels du CSS et organisation responsive |
| `content-contracts.test.ts` | Identités, textes bilingues non vides, images et srcset existants, liens et cache |
| `render-contracts.test.ts` | Rendu React initial, ancres, IDs/ARIA, langues, variantes et liens des cartes |
| `update-hero-stats.test.ts` | Commande réelle copiée dans un dossier temporaire ; réseau simulé par préchargement Node |

Les tests de statistiques n'utilisent pas de jeton réel et ne contactent pas GitHub.
Chaque exécution utilise un dossier isolé, supprimé après le test. La fixture
remplace `fetch`, y compris pour les URL inattendues, et les échecs vérifient que
le fichier existant reste inchangé. Le script de production n'est pas modifié
pour rendre ces tests possibles.

Le rendu statique utilise React et `react-dom/server` déjà installés. Les types
DOM/JSX/Vite de `tsconfig.test.json` permettent de compiler les imports React ;
ils ne créent pas un navigateur. Ces tests n'exécutent ni effets, ni événements,
ni calcul de style. Les assertions de chaînes CSS ne valident pas le rendu visuel.

La CI Quality exécute cette suite avec lint, Biome, build et audit. Aucun nouveau
runner navigateur ou paquet n'est installé. Les scripts exploratoires locaux ne
sont pas des prérequis de la CI.

## Matrice navigateur sur le build de production

Exécuter `npm run build`, puis `npm run preview -- --host 127.0.0.1`.
Utiliser un profil de navigateur de test, sans données personnelles. Documenter
commit, navigateur/version, largeur × hauteur, langue, thème et mouvement réduit.
Les outils disponibles peuvent automatiser la matrice ; consigner leurs versions,
leurs scripts et leurs limites au journal. La procédure manuelle reste utilisable
sans dépendre d'un chemin de cache propre à une machine.

| Parcours | Attendu |
| --- | --- |
| Ouvrir directement `/#projects`, `/#stack`, `/#about`, `/#contact`, puis recharger | La cible est dans l'écran sous l'en-tête fixe, son contenu est visible |
| Ouvrir `/#%70rojects`, puis un fragment inconnu et un fragment mal encodé `/#%E0%A4%A` | La cible encodée est reconnue ; les fragments invalides ne font pas planter la page |
| Naviguer entre ancres, puis Précédent/Suivant | URL et position correspondent à la cible ; pas de seconde navigation ajoutée par l'application |
| Activer une ancre avec Entrée puis Tab | La navigation clavier se poursuit dans la section cible ; focus visible |
| Menu mobile à 390×844 et 667×375 | Navigation et réglages accessibles ; Échap ferme et rend le focus ; Tab/Maj+Tab ne restent pas dans un menu fermé |
| Basculer FR/EN et clair/sombre puis recharger | Réglages conservés ; avec stockage bloqué, réglages utilisables pendant la session et valeurs par défaut au rechargement |
| Projets, parcours, accordéon About, compétences | Dépliage/repli correct ; un seul panneau About ouvert ; plusieurs branches de compétences peuvent être ouvertes |
| Défiler à 1440×300/900, 390×844 et 667×375 | Sections visibles, sans débordement horizontal ; mêmes contrôles avec reduced-motion |
| Comparer les tags Projets/Stack/About avant/après un déplacement CSS | Dimensions, couleurs, polices et disposition conservées dans les deux thèmes et langues, desktop/mobile |

Vérifier aussi la console et les images chargées. Les cas de stockage bloqué et
d'observateur absent peuvent être simulés dans un profil isolé par l'outil de test ;
ne pas modifier les préférences du profil personnel pour ces contrôles.
Un contrôle Chrome local ne remplace pas Safari/Firefox, un lecteur d'écran ou un
appareil physique. La liste ci-dessus ne prétend pas qu'ils ont été vérifiés.

## Cache des images

`vercel.json` conserve le cache long immutable pour `/assets/*`, dont Vite change
les noms à chaque modification du contenu. Les URL stables
`/projects/generated/*` sont révalidées avec `public, no-cache` : cela permet une
réponse 304 si l'image n'a pas changé, sans imposer un téléchargement complet.

Un nouvel en-tête ne purge pas les images déjà fraîches dans un ancien cache.
Lors du remplacement d'une image précédemment publiée avec le cache long,
changer également son URL (nom de fichier et références `srcset`). Aucun asset
n'est remplacé dans RUN-020. Les en-têtes effectifs de l'hébergement doivent être
contrôlés sur une preview autorisée avant la release ; Vite preview ne reproduit
pas les règles Vercel.

## Extension avec les prochains RUN

Tester les contrats introduits au moment de leur implémentation : absence de cas
client publiable en RUN-015 ; validation, succès réel, erreur réseau, double envoi
et conservation de saisie en RUN-017, selon le traitement choisi en RUN-016.
Pas de nouvelles abstractions uniquement pour tester, de snapshots HTML complets,
ou de pourcentage de couverture arbitraire. Une automatisation navigateur en CI
reste une décision d'outillage distincte, avec mandat et dépendances explicites.


## Contrat RUN-011 pour les prochaines intégrations

La [matrice de navigation](refonte-plan.md#critères-de-navigation-à-vérifier-lors-de-lintégration)
précise les cibles, le clavier, le menu mobile, l'historique et les tailles à
contrôler en RUN-012 puis lors de l'ajout des sections. Le
[contrat d'architecture](refonte-plan.md#run-011--architecture-des-sections-et-ancres)
fixe l'ordre et le séquencement : `#services` ne devient un lien public qu'avec
sa section en RUN-014. Vérifier les neuf projets répartis sans doublon en RUN-015
et le texte de présentation About inchangé lors de RUN-021. Ces scénarios sont
à exécuter sur l'UI intégrée ; ce cadrage ne constitue pas leur résultat.


RUN-012 étend les assertions de rendu existantes : cibles d'ancres focalisables,
CTA Hero contact principal/projets secondaire et position active initiale unique.
Le comportement au scroll, au clavier et dans l'historique est vérifié dans le
navigateur, avec stabilisation des défilements doux avant l'action suivante.
Les scénarios initiaux utilisent une nouvelle navigation, les préférences ne sont
initialisées qu'une fois par contexte de test pour permettre le contrôle du reload.
Les résultats datés et scripts externes sont référencés au journal ; la suite Node
ne simule pas les effets React ni les événements du navigateur.


RUN-014 ajoute Services aux contrats de contenu/rendu : deux prestations et un
CTA Contact par langue, ordre des sections identique à la navigation. Contrôler
la grille à 320 px et le menu à six entrées, y compris en paysage et à 768 px ;
les résultats datés et captures sont au journal. Le contenu reste une base
provisoire pour le design, sans dépendre d'un formulaire opérationnel.


RUN-015 vérifie les huit projets personnels et le jeu séparé, la hiérarchie
h2/h3/h4 et l'absence totale du groupe client vide. Les fixtures de rendu client
sont temporaires dans les tests, retirées dans finally : sans accord rien n'est
affiché, avec accord mission/rôle/livrables sont présents, résultat omis s'il manque.
En navigateur, vérifier personnels 3→8→3, total DOM 4→9→4 et jeu toujours unique.
Le compteur Hero reste neuf. Les captures client sont des fixtures hors production.
