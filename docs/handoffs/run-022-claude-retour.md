# RUN-022 — Retour Claude : transitions de sections au scroll

```text
RUN et sous-tâche / auteur réel : RUN-022, passe visuelle 1 (transition entre sections au scroll), conception et implémentation ; Claude (Claude Code, extension VS Code).
Modèle et effort effectifs : Opus 5.5 (claude-opus-5-5), effort non communiqué par l'interface ; mode Ponytail lite demandé par Allen. Aucune délégation.
Statut : completed pour la sous-tâche (implémentation et rapport). RUN-022 reste actif : revue Codex et validation visuelle d'Allen requises.
Faits vérifiés et décisions proposées : sections 1 à 3.
Travail effectué / fichiers modifiés : section 4.
Commandes et résultats / contrôles non exécutés : sections 5 et 6.
Risques / inconnues / non-changements intentionnels : section 7.
Action ou décision encore requise : section 8.
Prochain responsable et point de reprise : Codex (revue, QA, intégration), puis Allen (fidélité de l'animation). Aucun commit, push ni déploiement.
```

Branche `feature/refonte-integration-visuelle`. Au départ, HEAD `5f08752` et seuls
des documents de Codex non commités. Pendant la session, trois commits d'autres
auteurs sont arrivés : `2dd8c3a` (SEOS), `17dfeb0` (contour de focus) et
`b28394d` (RUN-023). Les changements RUN-022 sont toujours non commités au-dessus
de `b28394d`. Voir l'incident de concurrence en section 7.

## 1. Lecture de la référence

La vidéo originale était accessible depuis WSL. J'ai extrait mes propres images
avec ffmpeg : 2,0 à 3,6 s (5 i/s), 8 à 22 s (0,6 i/s) et 25,5 à 28,7 s (2,5 i/s),
en plus des planches de Codex. Elle n'a pas été copiée dans le dépôt.

Constats, qui confirment l'analyse de Codex :

- La section sortante reste fixe pendant que la suivante monte devant elle sur
  un fond opaque. La sortante s'efface et, sur About→Contact, se réduit en largeur.
- Le fondu dépend de la position de défilement : à l'arrêt, rien ne bouge ;
  à la remontée, la sortante redescend et retrouve sa présence.
- Le panneau entrant ne s'anime pas en fondu : il arrive opaque. Les sections
  longues défilent normalement avant de s'épingler.
- Le site filmé arrondit ses panneaux et alterne fond clair et sombre. Je ne l'ai
  pas repris : pas de nouveau rayon, couleurs et fonds actuels conservés.

## 2. Implémentation retenue

Chaque section s'épingle une fois lue, puis la suivante la recouvre pendant
qu'elle s'efface et recule. L'effet est identique aux cinq frontières.

| Élément | Réglage |
| --- | --- |
| Épinglage | `position: sticky` natif sur les sections de `main`, exécuté par le navigateur (pas de translation JS par frame) |
| Point d'épinglage, section haute | Quand son bas atteint le bas de l'écran : tout son contenu a déjà été lu à opacité 1 |
| Point d'épinglage, section courte | Quand son haut atteint la ligne de couverture (80 px = `scroll-padding-top`) ; le Hero s'épingle à 0 |
| Progression `--section-cover` | 0 → 1 pendant que la section suivante monte jusqu'à la ligne de couverture (au plus `100vh − 80 px`) |
| Fondu | `opacity: 1 − cover` (linéaire, 0 quand la section est entièrement couverte) |
| Recul | `scale(1 − 0,05 × cover)`, origine au haut de la partie visible (le haut de la boîte ne descend jamais sous la ligne de section active du menu) |
| Recouvrement | Sections `z-index: 0` dans l'ordre du DOM, fond `var(--background)` ; la bande de surface de Stack est conservée |
| Section couverte (cover ≥ 0,95, opacité ≤ 5 %) | Remise dans le flux et désactivée au pointeur (`pointer-events: none`) : aucune couche invisible ne capte un clic, et les défilements d'ancre ou de focus visent la vraie boîte |
| Focus clavier | Une section qui contient un élément `:focus-visible` est remise dans le flux, opacité 1, sans transformation |
| Ancre ou historique vers la section en cours de transition | Désépinglée le temps que le navigateur calcule la destination, puis réépinglée à la frame suivante (clic sur un lien `#…` et `popstate`) |

Côté JavaScript (`App.tsx`) :
- **Au redimensionnement** (`ResizeObserver` sur les sections, événement `resize`) :
  mesure des hauteurs puis écriture de `--section-pin-top`.
- **Au scroll** : un seul `requestAnimationFrame` par frame, qui calcule la
  progression à partir de `scrollY` et des valeurs en cache. Aucune lecture du
  DOM. `--section-cover` n'est écrite que si sa valeur change. Elle est
  enregistrée avec `@property` et non héritée, pour que son recalcul reste local.
- **Nettoyage** complet au démontage (listeners, observateur, classes, variables).

Conditions d'activation : mouvement autorisé au chargement, `ResizeObserver`
présent, `:has()` pris en charge. Sinon, la page reste normale et rien n'est masqué.

Changements d'état :
- **Reduced-motion activé en cours de session** : `reduced-motion.css` arrête
  l'épinglage, le fondu et le recul.
- **Ancien masquage de section supprimé** : `App` n'applique plus
  `section--scroll-fade` qu'au rail de la timeline, dont le fondu au premier
  passage ne change pas et ne se rejoue pas.

## 3. Écarts au contrat et propositions

- **Nouveau fichier `src/utils/sectionStack.ts`, hors liste réservée.**
  - Besoin : tester la géométrie (points d'épinglage, progression) sans
    navigateur. Le test est `tests/section-stack.test.ts`, 4 cas.
  - Pourquoi pas dans `App.tsx` : un export non composant y déclenche la règle
    `react-refresh/only-export-components`.
  - Modèle suivi : celui de `src/utils/storage.ts` et de son test.
  - Option pour Codex : refuser et réintégrer le code dans `App.tsx`, au prix de
    ce test.
- **Mobile.** Aucun ajustement CSS spécifique : le même mécanisme fonctionne à
  320, 390, 667×375 et 1440×300. `responsive-*.css` n'a pas été modifié par RUN-022.
- **Composants de section.** Non modifiés : aucun conteneur ajouté.
- **Contenu.** Le contrat mentionne neuf projets avec les clients masqués. Depuis
  `2dd8c3a` (mandat direct d'Allen), dix projets sont affichés, dont SEOS en
  client. J'ai conservé l'état commité.

## 4. Fichiers

- Modifiés :
  - `src/App.tsx` : sélecteur de l'observateur réduit au rail, nouvel effet d'empilement.
  - `src/styles/globals/animations.css` : `@property`, règles d'empilement, de
    couverture et de désépinglage.
  - `src/styles/globals/reduced-motion.css` : garde-fou de bascule en cours de session.
- Créés :
  - `src/utils/sectionStack.ts`, `tests/section-stack.test.ts` ;
  - ce rapport.
- Non touchés : `layout.css`, `responsive.css`, `responsive-1040.css`,
  `responsive-760.css`, les composants, les données, les dépendances, la
  configuration, les instructions, le journal et le workflow.

## 5. Vérifications

Arbre final (`b28394d` + RUN-022) : `npm run build`, `npm run lint`,
`npm run biome:check`, `npm run test` (9 fichiers, 54 tests) et `git diff --check`
réussis.

Navigateur : Google Chrome 156.0.8078.47 en headless, piloté par playwright-core
1.56.1 installé dans le scratchpad, sur builds de production servies par
`vite preview`.
- **Matrice principale** : instantané propre `17dfeb0` + fichiers RUN-022, qui
  isole RUN-022 des autres changements (section 7). 52 tests y passent (4 nouveaux).
- **Contre-vérification** sur l'arbre final `b28394d` + RUN-022 (lignes marquées ★).

| Contrôle | Résultat |
| --- | --- |
| Cinq frontières, 1440×900 clair et sombre, 390×844 sombre : descente, arrêt à mi-transition, remontée, accélération | Fondu et recouvrement continus, retour fidèle, ni saut ni écran vide (vidéos et planches) |
| Lisibilité à 1440×900, 768×1024, 390×844, 320×740, 667×375 et 1440×300, en FR clair et EN sombre | Au point exact d'épinglage : bas de section au bas de l'écran (±2 px), opacité 1, dernier élément visible et cliquable. Balayage tous les 24 px : seuls la zone sous l'en-tête en haut du Hero et quelques pixels de padding inférieur échappent à l'échantillonnage |
| Couches invisibles cliquables, sur les mêmes 12 combinaisons | 0 point touché sur une section d'opacité < 0,05 (environ 60 000 points) ★ |
| Débordement horizontal pendant tout le défilement | Aucun ★ |
| Ancres du menu depuis le haut, le milieu et le bas (1440×900, 390×844) | 36/36 : cible à 80 px (Hero à 0), au premier plan, opacité 1, menu actif juste ★ |
| Historique : Précédent ×4 puis Suivant ×4 | 8/8 à 80 px ★. La référence `2dd8c3a` atterrit à 64 px sur trois cibles |
| Accès direct et rechargement de `#projects`, `#stack`, `#about`, `#contact`, `#%70rojects` ; fragment inconnu ; `#%E0%A4%A` | Cible à 80 px avec focus ; fragments invalides sans erreur. Au premier chargement, `#projects` arrive à 79 px (1440) et 53 px (390), identique sur la référence |
| Fragment saisi dans la barre d'adresse (même document) vers une section dépassée | 80 px |
| Menu mobile à 390×844 et 667×375, puis retour en haut | Cibles à 80 px, menu refermé ; retour en haut à 0 |
| Tab puis Maj+Tab sur toute la page (1440×900, 390×844, 667×375) | 1 532 arrêts, 0 focus hors écran, recouvert ou atténué |
| Dépliage et repli des projets, passage FR→EN, redimensionnement 1440→900×700 | Points d'épinglage recalculés et exacts à chaque étape ★. Le bouton sort de l'écran au dépliage, comme sur la référence |
| Reduced-motion au chargement | Aucun empilement ; sections statiques à opacité 1 |
| Reduced-motion activé en cours de session | Sections en `relative`, opacité 1, sans transformation (après la transition globale de 1 ms) |
| Sans `ResizeObserver` | Aucun empilement ; page normale |
| Seuil de 0,95 (passage d'épinglé à remis dans le flux) | Images de différence identiques à celles d'un témoin hors seuil : bascule invisible |
| Console | Aucune erreur sur l'ensemble des parcours |

**Fluidité (contrôle 6).** Comparaison avec la référence `17dfeb0` sur le même
contenu. `5f08752` n'a pas SEOS : sa page Projets est plus courte de 950 px.

Parcours scripté identique : molette 20 px toutes les 16 ms sur toute la page,
puis remontée de la moitié, soit environ 1 240 frames (une vingtaine de
secondes). Mesures : intervalles entre frames par `requestAnimationFrame` dans
la page, et métriques CDP `Performance`. Médiane de 3 passes.

| Profil | Intervalle p50 / p95 (ms) | Frames > 33 ms | Recalcul de style (ms) | Layout (ms / nb) | Script (ms) |
| --- | --- | --- | --- | --- | --- |
| 1440×900 avant | 16,7 / 16,7 | 0 | 17,9 | 0,9 / 6 | 85,0 |
| 1440×900 après | 16,7 / 16,8 | 0 | 68,8 | 1,5 / 14 | 88,5 |
| 390×844, CPU ×4, avant | 16,7 / 16,7 | 0 | 40,0 | 3,8 / 11 | 339,9 |
| 390×844, CPU ×4, après | 16,7 / 16,7 | 0 | 237,1 | 6,4 / 15 | 389,1 |

Lecture des mesures :
- **Coût** : surtout le recalcul de style par frame de transition (environ
  0,5 ms par recalcul avec CPU ×4). Les layouts supplémentaires viennent des
  passages épinglé ⇄ remis dans le flux.
- **Variabilité** : sur des builds intermédiaires, une à deux frames au-delà de
  33 ms sont apparues en médiane après le changement, contre 0 avant. Cet écart
  est faible et variable.
- **Limites** : headless sans GPU, défilement non composé comme sur un appareil
  réel. Le dernier passage de mesure a partiellement chevauché le parcours
  clavier lancé en tâche de fond. Aucune promesse de 60 i/s n'en découle.

**Preuves hors dépôt** (scratchpad de session, temporaire : à copier si elles
doivent être conservées) :
`/tmp/claude-1000/-home-allen-mes-projets-portfolio-dev/df478e3f-7e5b-4f40-9e73-e52a2c54b360/scratchpad/run022/`

- `video/desktop-avant-apres.mp4` (1440×900 clair, référence à gauche) et
  `video/mobile-avant-apres.mp4` (390×844 sombre), environ 18 s chacune ;
  les quatre vidéos séparées sont dans le même dossier.
- `frames/` :
  - planches par frontière : `hs`, `sp`, `ps`, `sa`, `ac` ;
  - planches de l'arbre final : `int-sa-sheet.png`, `int-hs-m-sheet.png` ;
  - images de différence au seuil : `diffs.png` ;
  - extraits de la vidéo de référence : `hs.jpg`, `mid.jpg`, `ac.jpg`.
- Scripts `*.mjs` (`focus`, `anchors`, `history2`, `direct`, `qa`, `readable`,
  `pinpoint`, `perf`, `record`, `threshold`). Ils visent le port 4175 ou le port
  passé en argument.

## 6. Contrôles non exécutés

- Safari et Firefox, macOS ou iOS, appareil Android physique. Chrome headless
  seulement.
- Lecteur d'écran réel, zoom à 200 %.
- Défilement tactile réel : barre d'URL mobile, inertie, rebond iOS.
- Profilage GPU et trace DevTools détaillée (Paint, Composite).
- Validation visuelle humaine : elle revient à Allen.

## 7. Risques, inconnues et non-changements

- **Incident de concurrence.** Entre 17:33 et 17:35, une autre session a modifié
  l'arbre de travail partagé : sections, `i18n.ts`, CSS de titres, tests et
  `responsive-760/1040.css`. Elle a aussi reconstruit `dist/`, alors que le
  contrat RUN-023 demande d'attendre la fin du relais RUN-022. Ce travail a
  ensuite été commité (`b28394d`).
  - Mes fichiers n'ont pas été modifiés par cette session (diff relu).
  - Les mesures faites avant la reprise ont pu servir un `dist/` mixte. C'est
    pourquoi la matrice ci-dessus a été refaite sur l'instantané propre, puis
    contre-vérifiée sur l'arbre final.
- **Navigation par fragment vers la section en cours de transition.**
  - Clic et historique : corrigés et contrôlés.
  - Fragment saisi dans la barre d'adresse pendant cette fenêtre : la cible peut
    arriver décalée d'au plus la portion déjà couverte. Non observé dans les
    parcours, cas limite connu.
- **Moteurs testés.** `scrollIntoView` et les défilements de fragment sur un
  élément `sticky` visent sa position épinglée dans Chrome 156 (reproduit sur une
  page isolée). Les mécanismes de désépinglage traitent ce comportement. Firefox
  et Safari n'ont pas été vérifiés.
- **Mobile.** Avec la barre d'URL, le `top` d'épinglage est recalculé sur
  `resize` à partir de `innerHeight`. Un petit décalage reste possible pendant le
  repli de la barre sur iOS : à contrôler sur appareil.
- **Hauteurs.** `offsetHeight` arrondit : 1 à 2 px d'écart cumulé sur le point
  de départ de la transition, sans effet visible.
- **Navigateur sans `:has()`** (Firefox antérieur à 121 notamment) : pas
  d'animation, page normale.
- **Non-changements volontaires.**
  - Le contenu entrant ne s'anime pas en fondu (fidèle à la référence).
  - Pas de rayon, de flou, de parallaxe ni de `will-change` permanent.
  - Le fond global ne change pas.
  - Fondu au chargement (`.reveal`) et rail About inchangés.

## 8. Décisions pour Allen

1. Fidélité générale de la chorégraphie. À juger sur les deux vidéos avant/après,
   aux cinq frontières.
2. Intensité du recul : 5 % au recouvrement complet. Options : plus discret
   (2 à 3 %) ou fondu seul.
3. Courbe du fondu : linéaire jusqu'à 0. Option : fondu plus tôt, proche du Hero
   de la vidéo, qui pâlit vers 70 % de couverture.
4. Codex : accepter ou refuser le module `src/utils/sectionStack.ts` (section 3).

## 9. Ajustement après retour d'Allen : marge de lecture (29 octobre 2026)

**Demande d'Allen.** La transition démarre trop tôt entre Services/Projets,
Projets/Stack et Stack/About. Elle masque trop vite le bas des sections : CTA
« Discuter de votre projet », skill-tree déplié, timeline en fin d'About. Allen
demande une marge ou un délai.

**Changement.** Une section haute continue désormais de défiler jusqu'à ce que
son bas atteigne un quart d'écran au-dessus du bord inférieur. Ensuite seulement,
elle s'épingle et la suivante la recouvre.
- Mise en œuvre : paramètre `readingMargin` de `getSectionPins`, auquel `App`
  passe `innerHeight / 4`.
- Hero→Services : inchangé.
- About→Contact : la marge s'y applique aussi, puisque l'exemple de la timeline
  relève de cette frontière. Pour l'exclure, il faut un test d'index de plus.
- Sections courtes : inchangées (épinglage à la ligne de couverture).
- Fondu et recul : réglages inchangés.

**Contrepartie.** La phase de recouvrement est plus courte de cette marge
(1440×900 : 595 px de défilement au lieu de 820) ; elle commence plus tard,
quand le contenu a été lu.

| Bas du dernier contenu au début de la transition | Avant | Après |
| --- | --- | --- |
| 1440×900 Services / Projets / Stack / About | 788 / 755 / 767 / 782 px | 563 / 530 / 543 / 560 px |
| 390×844 Services / Projets / Stack / About | 677 / 644 / 657 / 657 px | 569 / 536 / 548 / 549 px |

**Fichiers.** `src/utils/sectionStack.ts`, `src/App.tsx` et
`tests/section-stack.test.ts` (nouveau cas : marge pour une section haute, sans
effet sur la première section ni sur une section courte).

**Contrôles.**
- Arbre local : build, lint, Biome, 55 tests et `git diff --check` réussis.
- Chrome 156 headless : ancres 40/40, historique 8/8, Tab/Maj+Tab sans échec
  (1 022 arrêts), reduced-motion, repli sans `ResizeObserver`, aucune couche
  invisible cliquable ni débordement sur les 12 combinaisons, recalcul exact
  après dépliage, langue et redimensionnement.
- Planches : dossier `margin/` du répertoire de preuves (section 5).
- Vidéos avant/après : non refaites.

**Concurrence.** Pendant ces contrôles, une autre session modifiait Projets
(`ProjectCard`, `ProjectsSection`, `projects.css`, `reduced-motion.css`,
`responsive-1040/760.css`). Ces fichiers n'ont pas été touchés par cet ajustement.
