# RUN-007 — Retour Claude : revue de cohérence visuelle (passe d'observation)

```text
RUN et sous-tâche / auteur réel : RUN-007, revue visuelle intégrée et image sociale ; Claude (Claude Code, extension VS Code).
Modèle et effort effectifs : Opus 5.5 (claude-opus-5-5), effort non communiqué par l'interface. Aucune délégation.
Statut : needs_input. Allen a demandé le 29 octobre 2026 une revue et un compte rendu sans code pour l'instant.
Faits vérifiés et décisions proposées : sections 2 à 4 ci-dessous.
Travail effectué / fichiers modifiés : ce rapport uniquement. Aucun CSS, asset, index.html ni fichier réservé modifié.
Commandes et résultats / contrôles non exécutés : section 5.
Risques / inconnues : section 6.
Action ou décision encore requise : arbitrages d'Allen en section 7, puis feu vert pour les corrections CSS et l'image sociale.
Prochain responsable et point de reprise : Allen (arbitrages) → Claude (corrections autorisées, image OG) → Codex (QA, intégration, clôture RUN-007).
```

Branche : `feature/refonte-integration-visuelle`, départ propre sur `65cad3d`
(`git status` vide avant la revue). RUN-007 reste `verify`.

## 1. Synthèse

La page intégrée tient la direction monochrome validée (R8) : palette, polices
(Schibsted Grotesk et IBM Plex Mono mesurées sur la page), rayon 0, filets,
alternance fond/surface, index `0N / Libellé`, bloc Contact inversé, mêmes
gouttières dans toutes les sections. Aucun débordement horizontal, aucune erreur
de page, sections visibles en fenêtre 1440×300. Aucune refonte n'est nécessaire.

Les écarts trouvés sont petits : une incohérence d'échelle de titre en tablette,
des espacements index→titre non homogènes, le bouton retour en haut qui masque
les signes +/− des accordéons, un ordre de lecture About sur mobile et des
libellés anglais dans la version française. L'image sociale est à refaire (défaut
déjà connu).

## 2. Défauts observés (constats de revue)

### D1 — P2 · Titre About plus grand que les autres titres de section en tablette

- Fichier : `src/styles/globals/about-profile.css:36-41`.
- Vérifié : à 768 px, `h2` About mesuré à 56 px, contre 38,4 px pour Services,
  Projets et Stack. Le bloc `.about-content h2 { font-size: 3.5rem; … }` redéfinit
  à taille fixe la règle commune de `section-headings.css:28-34`
  (`clamp(2.25rem, 5vw, 3.5rem)`), avec les mêmes graisse, approche et interligne.
- Impact : rupture de hiérarchie entre 761 et ~1120 px ; seul le titre About ne suit pas l'échelle.
- Correction minimale : supprimer le bloc dupliqué de `about-profile.css`. La
  règle `responsive-760.css:11-13` (2,25 rem) devient redondante avec le minimum
  du `clamp`, on peut la laisser ou la retirer. Desktop inchangé (56 px des deux côtés).
- Vérification : mesurer `h2` des cinq sections à 768, 1024 et 1440 px.

### D2 — P2 · Le bouton retour en haut masque les signes +/− des accordéons

- Fichier : `src/styles/globals/back-to-top.css:3-4` (`right: 1.25rem`).
- Vérifié : à 1440 px le bouton occupe x 1376–1420 alors que le contenu finit à
  1384 ; il recouvre le signe +/− de l'arbre de compétences et de l'accordéon
  About (captures `1440-fr-light-stack.png`, `1440-fr-light-about.png`), et
  pareil à 768 px. Sur mobile (gouttière 1,25 rem), il recouvre les 44 px de droite
  du contenu, donc parfois la fin d'une ligne de texte (`390-fr-light-services.png`).
- Impact : l'indicateur d'état de l'accordéon est caché pendant la lecture ;
  le bouton reste cliquable dessous mais ce n'est pas lisible.
- Correction : en desktop (gouttière 56 px), le bouton de 44 px tient dans la
  marge s'il est à 6 px du bord (`right: 0.375rem`, x 1390–1434). En tablette et
  mobile la gouttière est plus étroite que le bouton : le chevauchement y est
  inévitable sans le déplacer ailleurs. Options à arbitrer (A1, section 7).

### D3 — P3 · Espacement index → titre non homogène

- Mesures (1440 px, bord bas de l'index → haut du titre) : Services 24, Stack 24,
  Projets 46, Contact 32, About 14 px. En mobile : 24 partout sauf About 14 et Contact 32.
- Fichiers : `section-headings.css` (marge `.eyebrow` 0,85 rem, grille de
  `.section-heading--split`), `about-profile.css`, `contact-footer.css`.
- Correction : aligner sur 24 px (valeur majoritaire) ; Contact peut garder
  32 px dans son panneau. À vérifier pourquoi Projets prend 46 px alors que Stack,
  qui utilise le même en-tête partagé, en prend 24 (texte d'intro plus haut que
  le titre dans Projets, voir P2 ci-dessous).

### D4 — P3 · Texte d'introduction aligné différemment entre Projets et Stack

- Vérifié à 1440 px : dans Stack, l'intro (colonnes 9–12) est calée sur le bas du
  titre ; dans Projets elle commence au niveau du titre et descend plus bas.
  Même composant d'en-tête, deux rendus. Lien probable avec D3.
- Correction : un seul alignement (bas du titre, comme Stack) dans
  `section-headings.css`. À confirmer en lisant la règle avant correction.

### D5 — P2 · Libellés anglais dans la version française (contenu, fichiers réservés)

- Fichier : `src/data/i18n/i18n.ts` (lignes 8, 10, 40 et 86 du bloc FR) et
  `src/data/hero/heroStats.ts:22`.
- Vérifié en FR : index « About » et « Stack & skills », badges « Fullstack
  Developer » et « AI-assisted workflows », chiffre clé « PROFILE » avec la valeur
  « Fullstack Developer / AI Builder », alors que « PROJETS » est traduit.
- Impact : la version française mélange les langues dans les éléments les plus visibles.
- Correction : décision de contenu d'Allen (A3) puis patch Codex ; fichiers hors de mon périmètre d'écriture.

### D6 — P2 · Intitulé du métier différent selon l'endroit (contenu, fichiers réservés)

- Hero : « Développeur Web / Alsace, France ». Chiffre clé : « Fullstack
  Developer / AI Builder ». Pied de page : « Développeur Fullstack ». Titres
  HTML/OG et JSON-LD : « Développeur Fullstack & IA ».
- Impact : quatre formulations pour le même positionnement ; l'image sociale
  devra en choisir une.
- Correction : arbitrage A4, puis patch Codex dans `i18n.ts`/`heroStats.ts`.

### D7 — P1 · Image sociale obsolète (déjà vérifié par Codex)

- `public/og-image.png` : fond bleu/violet, halo, carré dégradé, mention
  « junior ». Contraire à R1 et au positionnement. Proposition en section 4.

## 3. Propositions esthétiques (non des défauts)

- **P-About mobile** : sous 1040 px la section About commence par un portrait
  de ~440 px (390 px de large) avant son index « 04 / About » ; c'est la seule
  section qui ne commence pas par son en-tête. Option CSS seule : faire passer
  `.about-content` avant `.about-visual` (`order: -1`), le portrait venant après
  le texte et avant le parcours. Option alternative : réduire le portrait mobile
  (par exemple 60 % de la largeur). À arbitrer (A2).
- **P-About tablette** : à 768 px le portrait occupe ~55 % de la largeur, aligné
  à gauche, avec un vide à droite. Se règle avec P-About mobile.
- **P-Timeline** : les étapes datées (05, « Janvier 2026 ») décalent leur titre
  vers le bas ; les titres du rail ne sont pas alignés. Réserver la ligne de date
  demande soit un emplacement vide côté TSX (Codex), soit une sous-grille CSS ;
  gain modeste, à faire seulement si Allen le remarque aussi.
- **P-Game dev** : le groupe ne contient qu'une carte dans une grille à trois
  colonnes, les deux tiers restent vides en desktop. Acceptable tant que le
  groupe est petit ; pas de correction proposée.
- **P-Bouton projets** : « Afficher tous les projets personnels » est centré alors
  que tout le reste de la page est aligné à gauche. Alignement à gauche proposé.
- **P-Navigation 768 px** : marque et liens se touchent presque (≈ 13 px en FR et
  EN). Lisible, mais serré ; un passage au menu mobile vers 860 px réglerait le
  cas, à arbitrer car il touche le point de rupture validé.

## 4. Image sociale proposée (non réalisée)

- Format 1200×630, thème clair par défaut du site : fond `#F8F7F3`, texte
  `#191919`, gris `#66645F`, filet `#E2DFD7`. Aucun dégradé, halo, rayon ni couleur.
- Composition : monogramme « AK » en carré plein en haut à gauche (comme
  l'en-tête) ; « ALLEN KOCH » en très grand, Schibsted Grotesk 500, capitales,
  sur la largeur utile (rappel du hero) ; sous un filet, le rôle choisi en A4 et
  « Alsace, France » en gris ; « allenkoch.dev » en IBM Plex Mono capitales en bas
  à droite. Texte minimal pour rester lisible en vignette (~400 px de large).
  Pas de « junior », pas de chiffre, pas de logo technologique.
- Fabrication sans dépendance : une page HTML source avec les polices Google
  Fonts déjà employées, rendue à 1200×630 par le Chrome local en mode sans
  interface. Source et PNG dans `public/` (`og-image-refonte.html`,
  `og-image-refonte.png`), comme le prévoit le contrat ; la source sera donc
  servie publiquement, sans risque mais à savoir (alternative : `scripts/`, hors
  périmètre actuel).
- `index.html` : remplacer ensemble `og:image`, `twitter:image` et `image` du
  JSON-LD par `https://allenkoch.dev/og-image-refonte.png`. L'ancien fichier
  reste en place jusqu'à décision de Codex/Allen.

## 5. Contrôles exécutés

Build de production (`npm run build`, réussi ; avertissement préexistant
`responsive-430.css` vide), preview Vite locale port 4180, Chrome 156 sans
interface piloté par le Playwright en cache npx (rien installé dans le projet).
Scripts et captures hors dépôt, dans le scratchpad de session :
`/tmp/claude-1000/-home-allen-mes-projets-portfolio-dev/f4d7cc56-ef35-47cf-a6a2-7409301c1c77/scratchpad/run007/`
(`capture.mjs`, `elements.mjs`, `bounds.mjs`, `results.json`, dossier `shots/`).
Ce dossier est temporaire : à copier si Codex doit le conserver.

| Combinaison | Résultat |
| --- | --- |
| 320×740, 390×844, 768×1024, 1440×900 × FR clair, EN sombre, FR sombre, EN clair, reduced-motion, pleine page | 16/16 sans débordement (`scrollWidth` = largeur), 0 `pageerror` ; seuls éléments hors cadre : étapes du rail de parcours, défilant dans leur conteneur |
| Mêmes largeurs, FR clair et EN sombre, animations normales, capture écran de chaque section | 48 captures inspectées en partie (voir constats) |
| Menu 667×375 FR clair | Menu ouvert, panneau défilant (`overflow-y: auto`, contenu 504 px pour 310 px visibles) |
| 1440×300 EN sombre, six sections | Opacité 1 partout |
| Captures d'éléments (parcours, pied de page, contact, en-tête 768/1040, projets) | Inspectées |

Non exécutés : `lint`, `biome:check`, `test`, `git diff --check` (aucun code
modifié ; à lancer après corrections) ; Safari/Firefox, téléphone réel, lecteur
d'écran, zoom 200 %, mesure de contraste par composant (R18 reste la dernière
mesure) ; parcours clavier complet (vérifié par Codex dans cette passe RUN-007).
Inspection visuelle par moi seul, pas de revue indépendante.

## 6. Risques et non-changements intentionnels

- D1 et D3 touchent des règles partagées : vérifier les cinq sections après correction.
- D2 : tout déplacement du bouton doit garder 44 px de cible et le focus visible.
- Aucun changement au contenu, aux six ancres, aux neuf projets, à la timeline ni
  au contact ; aucune nouvelle dépendance ni composant.

## 7. Arbitrages demandés à Allen

- **A1 (D2)** : retour en haut (a) placé dans la marge en desktop seulement
  (6 px du bord), tablette et mobile inchangés ; (b) laissé tel quel partout.
  Recommandation : (a), une ligne de CSS ; le chevauchement mobile est courant
  et le bouton n'apparaît qu'après défilement.
- **A2** : ordre About mobile (texte puis portrait) ou portrait réduit ?
  Recommandation : texte d'abord.
- **A3 (D5)** : traduire en FR les index et badges (« À propos », « Stack &
  compétences », « Profil », « Développeur fullstack », « Workflows assistés par
  IA ») ou garder ces libellés anglais volontairement ?
- **A4 (D6)** : un seul intitulé, par exemple « Développeur Fullstack & IA »
  (déjà celui des métadonnées), à reprendre dans hero, chiffre clé, pied de page
  et image sociale.
- **A5** : feu vert pour D1, D3, D4 (CSS seul) et l'image sociale de la section 4.

## 8. Suite du 29 octobre : propositions esthétiques et image sociale (implémenté)

Mandat d'Allen : Claude traite les quatre propositions esthétiques et D7 ;
D1 à D6 sont confiés à Codex, qui travaillait en parallèle sur la même branche.

| Point | Fichier | Changement | Contrôle observé |
| --- | --- | --- | --- |
| P-Navigation | `responsive-1040.css` (fin) | ≤ 1040 px : colonnes `auto 1fr auto`, liens à 0,875 rem, écart 0,75 rem | Marque → liens : 27 px à 761, 30 à 768 FR, 41 à 768 EN (13 px avant) |
| P-About mobile/tablette | `responsive-1040.css` | `.about-content { order: -1 }` : index et titre avant le portrait | Ajoutée aussi par Codex dans le même fichier : doublon retiré, une seule règle reste |
| P-Bouton projets | `projects.css:141` | `justify-content: flex-start` | Bouton à x = 56 (1440), 32 (768) ; pleine largeur inchangée sur mobile |
| P-Timeline | `about-journey.css` | Date placée sur la ligne du numéro, en haut à droite de l'étape | Titres des 12 étapes à 56 px du haut à toutes les largeurs ; « Juillet–août 2026 » tient à 1440 et 320 px |
| D7 | `public/og-image-refonte.png`, `public/og-image-refonte.html`, `index.html` | Nouvelle image 1200×630 monochrome ; `og:image`, `twitter:image` et JSON-LD `image` pointent vers `/og-image-refonte.png` | PNG 1200×630, 41 Ko, inspecté ; trois références vérifiées |

Image sociale : fond `#F8F7F3`, monogramme AK, « ALLEN KOCH » en Schibsted
Grotesk 500, filet, « Développeur Fullstack & IA / Alsace, France »,
« allenkoch.dev » en IBM Plex Mono. Intitulé repris des métadonnées existantes
(A4 non arbitré par Allen). Rendu par le Chrome local sans interface, sans dépendance.

**Écart à signaler** : `public/og-image-refonte.html` a été réécrit par un autre
agent juste après le rendu de Claude (mise en page différente, nom en haut, titre
de page avec un tiret cadratin, contraire à R1). Le PNG livré correspond à la
version Claude, plus à la source actuelle. Non annulé ; à arbitrer : garder ce
PNG et restaurer la source correspondante, ou régénérer le PNG depuis la nouvelle source.

Commandes après modifications : `npm run build`, `lint`, `biome:check` (72
fichiers), `test` (47/47) et `git diff --check` réussis, sur l'arbre combiné
avec les changements de Codex. Captures dans le scratchpad de session
(`run007/after/`), temporaires. Non contrôlé : P-About en dehors de 390, 768 et 1040 px
en capture ; pas de clavier ni de lecteur d'écran sur ces points (ordre visuel
seul modifié, l'ordre DOM et l'ordre Tab sont inchangés). Aucun commit.
