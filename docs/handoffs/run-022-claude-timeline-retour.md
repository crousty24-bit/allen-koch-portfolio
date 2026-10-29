# RUN-022 — Retour Claude : transition de la timeline About

```text
RUN et sous-tâche / auteur réel : RUN-022, complément « transition au clic des flèches de My Coding Journey ». Implémentation : une première session Claude (non interactive, sans vérification possible). Vérification, réglage et ce rapport : Claude (Claude Code, extension VS Code).
Modèle et effort effectifs : Opus 5.5 (claude-opus-5-5) dans les deux sessions, effort non communiqué ; mode Ponytail (full, puis lite). Aucune délégation.
Statut : completed pour le complément. Contrôles du dépôt et du navigateur exécutés (section 4). RUN-022 reste actif : revue Codex et validation visuelle d'Allen.
Faits vérifiés et décisions proposées : sections 1 et 2.
Travail effectué / fichiers modifiés : section 3.
Commandes et résultats / contrôles non exécutés : sections 4 et 5.
Risques / inconnues / non-changements intentionnels : section 6.
Action ou décision encore requise : section 7.
Prochain responsable et point de reprise : Codex (relecture, intégration, documentation), puis Allen (réglage visuel). Aucun commit, push ni déploiement depuis ce relais.
```

## Historique du relais

- **Première session.** Elle a écrit l'implémentation sur `716a724`, puis rendu
  un retour `blocked` : faute d'interface d'approbation, aucune commande de build,
  de test ni de navigateur n'a pu être exécutée.
- **Commit.** Allen a ensuite commité l'ensemble dans `bf7df77`, avec la
  suppression des liens X et l'ajustement mobile d'About faits par Codex.
- **Seconde session (celle-ci).** Partie de `bf7df77` avec un arbre propre, elle
  a vérifié le mécanisme sur le mouvement réel et modifié un seul réglage : la
  largeur de la zone de fondu.

## 1. Technique

Un masque de bord (`mask-image`) sur la piste, actif seulement pendant un
déplacement déclenché par une flèche. Le dégradé est fixe par rapport à la boîte
de la piste : les étapes qui sortent à gauche le traversent et s'estompent, celles
qui entrent à droite apparaissent. Le bouton précédent inverse l'effet sans code
supplémentaire.

- **Source de vérité : `scrollLeft`.** Une boucle `requestAnimationFrame` lit
  `scrollLeft` à chaque frame et en déduit la vitesse réelle (px/ms).
  L'opacité des bords (`--journey-edge`) suit cette vitesse : le fondu
  s'intensifie quand le défilement doux natif accélère et s'efface quand il
  ralentit. Aucun minuteur fixe.
- **Arrêt.** La boucle s'arrête après 100 ms sans variation de `scrollLeft`,
  alignement `snap` compris. Elle retire alors `data-moving` et la variable.
- **Clics rapprochés et retour inverse.** Une seule boucle à la fois. Un nouveau
  clic relance seulement `scrollBy`, et la boucle continue de suivre la position.
- **Contenu et focus.** Aucun nœud ajouté ni cloné. React ne gère pas l'attribut
  `data-moving` ni la variable : la classe du fondu d'entrée posée par `App` est
  préservée.
- **Hors clic.** Molette, clavier et doigt ne lancent pas la boucle : défilement
  natif inchangé.
- **Mouvement réduit.** `matchMedia` est relu à chaque clic : déplacement
  `instant`, sans boucle. `reduced-motion.css` retire aussi le masque si la
  préférence change en plein mouvement.

## 2. Réglages (mesurés sur le mouvement réel)

| Paramètre | Valeur | Constat |
| --- | --- | --- |
| Largeur du dégradé, de chaque côté | `min(10rem, 25%)` (était `min(6rem, 25%)`) | À 6 rem, une étape traversait la zone en environ 30 ms à pleine vitesse : fondu presque imperceptible. À 10 rem, l'étape sortante ou entrante s'estompe sur environ deux tiers de sa largeur. À 25 %, le fondu débordait sur l'étape voisine. Sur mobile, le plafond de 25 % s'applique déjà (environ 90 px) : aucun changement |
| Opacité minimale aux bords | 0,30 | Atteinte au pic de vitesse sur desktop ; 0,31 à 0,37 sur les déplacements courts du mobile |
| Vitesse de fondu maximal | 1,5 px/ms | Le défilement doux de Chrome culmine au-delà sur desktop |
| Lissage | Moitié de l'écart par frame | Montée et retombée progressives, sans à-coup |
| Détection d'arrêt | 100 ms sans variation | Masque retiré de 100 à 120 ms après l'arrêt, avec une opacité des bords déjà revenue à 0,998–0,999 : aucun saut |

## 3. Fichiers

- Session précédente, déjà dans `bf7df77` :
  - `src/components/AboutJourney/AboutJourney.tsx` ;
  - `src/styles/globals/about-journey.css` ;
  - `src/styles/globals/reduced-motion.css`.
- Cette session, non commitée :
  - `src/styles/globals/about-journey.css` : `--journey-fade` passe de
    `min(6rem, 25%)` à `min(10rem, 25%)` ;
  - ce rapport, réécrit.
- Non touchés :
  - `responsive-760.css` : le diff de `bf7df77` sur ce fichier concerne la mise
    en page d'About, pas ce complément ;
  - `tests/about-journey.test.ts` : voir section 7 ;
  - tous les fichiers hors liste.

## 4. Vérifications

**Dépôt.** `npm run build`, `npm run lint`, `npm run biome:check`,
`npm run test` (9 fichiers, 55 tests) et `git diff --check` réussis.

**Navigateur.** Google Chrome 156.0.8078.47 en headless, piloté par
playwright-core 1.56.1 hors dépôt, sur la build de production servie par
`vite preview`. Traces image par image de `scrollLeft`, `data-moving` et
`--journey-edge`, avec clics réels de souris.

| Contrôle | 1440×900 clair FR | 1440×900 sombre EN | 768×1024 clair EN | 390×844 sombre EN / clair FR |
| --- | --- | --- | --- | --- |
| Suivant : fondu pendant le mouvement, retiré à l'arrêt | Mouvement 73→557 ms, masque retiré à 673 ms (bord à 0,999) | Identique | Identique | Mouvement 74→291 ms, masque retiré à 408 ms |
| Précédent (effet inversé) | Identique | Identique | Identique | Identique |
| Trois clics à 120 ms d'intervalle | Une seule boucle, rien de bloqué, `snap` final | Idem | — | Idem |
| Suivant puis précédent immédiatement | Retour sans blocage, `snap` final | Idem | — | Idem |
| Position finale alignée sur une étape ou une borne | Oui à chaque fois | Oui | Oui | Oui |
| Opacité revenue à 1 et masque `none` au repos | Oui | Oui | Oui | Oui |
| Focus sur le bouton cliqué après un mouvement | Oui, sauf à une borne (section 6) | Idem | Idem | Idem |
| Bornes : suivant jusqu'à la fin, puis précédent jusqu'au début | Bouton désactivé à chaque extrémité, `snap` exact | Idem | — | 8 clics vers la fin, 10 vers le début |
| Flèches du clavier sur la piste et molette | Défilement natif, aucune frame avec `data-moving` | Idem | — | Idem |
| Reduced-motion au chargement | Déplacement immédiat, ni masque ni boucle | — | — | — |
| Reduced-motion activé en plein mouvement | — | — | — | Masque retiré aussitôt ; clic suivant immédiat ; fondu rétabli après retour à la normale |
| Erreurs console | Aucune | Aucune | Aucune | Aucune |

**Preuves hors dépôt** (scratchpad de session, temporaire : à copier si
nécessaire) :
`/tmp/claude-1000/-home-allen-mes-projets-portfolio-dev/df478e3f-7e5b-4f40-9e73-e52a2c54b360/scratchpad/run022/timeline/`

- `video/timeline-desktop-clair.mp4` et `video/timeline-mobile-sombre.mp4`
  (environ 10 s chacune, recadrées sur la timeline, réglage final) :
  suivant ×2, précédent, trois clics rapides, suivant puis précédent.
- `video/*-motion-strip.png` : images successives tirées de ces vidéos.
- `w-desktop.png` et `w-mobile.png` : comparaison des largeurs 6 rem, 10 rem et
  25 %, figée au pic de vitesse.
- `desktop-sheet.png` et `mobile-sheet.png` : repos puis mouvement, prises avec
  l'ancien réglage de 6 rem.
- Scripts `journey.mjs`, `journey2.mjs`, `touch.mjs`, `jshots.mjs`,
  `jwidth.mjs`, `jrecord.mjs`. Ils visent le port 4175.

## 5. Contrôles non exécutés

- **Tactile.** `Input.synthesizeScrollGesture` (CDP) ne fait pas défiler la piste
  dans Chrome headless, dans un sens comme dans l'autre : test non concluant.
  Par construction, la boucle ne démarre que depuis le `onClick` des flèches, et
  aucun fondu n'est attendu au doigt. À confirmer sur appareil.
- **Moteurs.** Safari, Firefox et appareil mobile réel non testés.
- **Lecteur d'écran** non testé.
- **Captures en reduced-motion.** Le reduced-motion au chargement a été contrôlé
  par trace seulement, à 1440×900.

## 6. Risques, inconnues et non-changements

- **Perte de focus aux bornes, antérieure à ce complément.**
  - Le comportement : quand un clic atteint le début ou la fin, le bouton cliqué
    devient `disabled` et le focus retombe sur `body`. Il existait avant
    l'animation, qui ne le provoque pas.
  - Le risque : un utilisateur au clavier perd sa position.
  - Correction proposée, non appliquée parce qu'elle change le comportement de
    focus : avant de désactiver le bouton focalisé, déplacer le focus sur
    l'autre flèche. Environ 6 lignes dans `AboutJourney.tsx`.
- **Démarrage du défilement doux.** Si un moteur le démarre plus de 100 ms après
  `scrollBy`, la boucle s'arrête avant le mouvement : défilement sans fondu,
  sans autre effet. Dans Chrome, le mouvement commence en 40 à 75 ms.
- **Geste pendant la boucle.** Un geste au doigt ou à la molette pendant un
  mouvement déclenché par clic prolonge le fondu jusqu'à l'arrêt réel. C'est
  cohérent avec « suit le défilement ».
- **Barre de défilement et coût.** La barre est aussi atténuée aux bords
  pendant le mouvement. Le coût se limite à une lecture de `scrollLeft` et une
  écriture de variable par frame, pendant un clic seulement.
- **Non-changements.** Fondu d'entrée `journeyFade`, rail natif, `snap`, bornes,
  douze étapes, libellés FR/EN, thèmes et rendu mobile.

## 7. Décisions ouvertes

1. **Allen : intensité.** Juger sur les vidéos : largeur 10 rem, bords à 0,30
   au pic. Pour plus de discrétion : 0,5 ; pour plus de présence : 0,2.
2. **Allen ou Codex : focus aux bornes.** Appliquer ou non la correction de la
   section 6.
3. **Codex : test unitaire.**
   - La logique de boucle reste dans le composant. Le dépôt n'a pas
     d'environnement DOM, et exporter une fonction non composante depuis
     `AboutJourney.tsx` enfreindrait `react-refresh/only-export-components`.
   - La preuve est donc la trace navigateur reproductible (`journey.mjs`).
   - Pour un test dans la suite : extraire le calcul pur (prochaine opacité à
     partir de la vitesse, décision d'arrêt) dans `src/utils/journeyFade.ts`,
     hors liste, et le couvrir dans `tests/about-journey.test.ts`. Patch non
     écrit, en attente d'accord.
