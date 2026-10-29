# RUN-022 — Retour Claude : transition de la timeline About

```text
RUN et sous-tâche / auteur réel : RUN-022, complément « transition au clic des flèches de My Coding Journey » ; Claude (Claude Code, session non interactive).
Modèle et effort effectifs : Opus 5.5 (claude-opus-5-5), effort non communiqué ; mode Ponytail full actif. Aucune délégation.
Statut : blocked pour la vérification. Implémentation écrite, mais aucune commande de contrôle n'a pu être exécutée (section 4).
Faits vérifiés et décisions proposées : sections 1 et 2.
Travail effectué / fichiers modifiés : section 3.
Commandes et résultats / contrôles non exécutés : section 4.
Risques / inconnues / non-changements intentionnels : section 5.
Action ou décision encore requise : section 6.
Prochain responsable et point de reprise : Codex (exécuter les contrôles de la section 4, relire, intégrer), puis Allen (réglage visuel). Aucun commit, push ni déploiement.
```

Branche `feature/refonte-integration-visuelle`, HEAD `716a724`. Au départ, changements
Codex non commités dans AGENTS.md, docs/README.md, index.html, runs-workflow.md,
src/data/links/links.ts et le contrat : aucun n'a été touché.

## 1. Technique retenue

Un masque de bord (`mask-image`) sur la piste, actif seulement pendant un
déplacement déclenché par une flèche. Le masque est fixe par rapport à la boîte
de la piste. Les étapes qui sortent à gauche traversent donc le dégradé et
s'estompent ; celles qui entrent à droite le traversent dans l'autre sens et
apparaissent. Le bouton précédent inverse l'effet sans code supplémentaire.

- **Source de vérité : `scrollLeft`.** Une boucle `requestAnimationFrame` lit
  `scrollLeft` à chaque frame et en déduit la vitesse réelle (px/ms).
  L'opacité des bords (`--journey-edge`, en style inline) suit cette vitesse.
  Le fondu s'intensifie avec l'accélération du défilement doux natif, puis
  s'efface pendant la décélération. Aucun minuteur fixe.
- **Arrêt.** Quand `scrollLeft` n'a pas bougé pendant 100 ms, `snap` compris,
  la boucle s'arrête. Elle retire alors `data-moving` et la variable. La vitesse
  étant nulle depuis plusieurs frames, l'opacité est déjà revenue à environ 1 :
  le retrait du masque ne provoque pas de saut. À l'arrêt, aucun masque n'est
  appliqué et aucun texte ne reste estompé.
- **Clics rapprochés et retour inverse.** Une seule boucle à la fois. Un nouveau
  clic pendant la boucle relance seulement `scrollBy`, et la boucle continue de
  suivre la position. Rien n'est bloqué ni mis en file.
- **Focus et contenu.** Aucun nœud ajouté ni cloné. React ne gère ni l'attribut
  ni la variable : la classe `section--scroll-visible` posée par `App` est donc
  préservée. Le masque n'existe qu'en mouvement : il ne coupe pas le contour de
  focus de la piste (`outline-offset: 3px`), qu'il couperait s'il restait actif.
- **Hors clic.** Molette, doigt et clavier ne déclenchent pas la boucle :
  défilement natif inchangé, sans fondu.
- **Mouvement réduit.** `matchMedia` est relu à chaque clic, ce qui couvre la
  bascule dynamique : pas de boucle et défilement `instant`. En garde-fou,
  `reduced-motion.css` neutralise le masque si la préférence change pendant un
  mouvement.
- **Nettoyage.** `cancelAnimationFrame` au démontage, avec remise à zéro de
  l'identifiant pour le double montage StrictMode.

## 2. Réglages proposés (non validés visuellement)

| Paramètre | Valeur | Rôle |
| --- | --- | --- |
| Largeur du dégradé | `min(6rem, 25%)` de chaque côté | Environ un tiers d'étape (15–18 rem), moins de 25 % sur mobile |
| Opacité minimale aux bords | 0,30 | « Léger fondu » : le texte reste lisible au bord |
| Vitesse de fondu maximal | 1,5 px/ms (≈ 25 px/frame à 60 Hz) | En deçà, fondu proportionnel |
| Lissage | Moitié de l'écart par frame | Absorbe la gigue des frames |
| Détection d'arrêt | 100 ms sans variation de `scrollLeft` | Couvre la latence du démarrage et l'alignement `snap` |

Ces valeurs sont des hypothèses de départ : je n'ai pas pu les régler sur le
mouvement réel (section 4).

## 3. Fichiers

- `src/components/AboutJourney/AboutJourney.tsx` : `motionRef`, `fadeWhileMoving`,
  appel dans `scrollTrack` hors mouvement réduit, annulation au démontage.
- `src/styles/globals/about-journey.css` : règle `.about-journey__list[data-moving]`.
- `src/styles/globals/reduced-motion.css` : `mask-image: none` sur la même règle.
- Ce rapport.
- Non touchés : `responsive-760.css` (inutile), `tests/about-journey.test.ts`
  (voir section 6), tous les fichiers hors liste.

## 4. Vérifications : bloquées par les permissions

La session n'avait pas d'interface d'approbation. Ont été refusées automatiquement :

- `npm run build`, puis la chaîne build/lint/biome/test ;
- `git diff --check` ;
- un `ls`/`grep` composé, qui servait à chercher un navigateur ou Playwright.

Seuls des `grep` simples et `node --version` (v24.22.1) ont fonctionné.

Non exécutés en conséquence :

- `npm run build`, `npm run lint`, `npm run biome:check`, `npm run test`,
  `git diff --check` ;
- tous les contrôles navigateur : suivant/précédent, clics rapides, extrémités,
  focus, desktop/mobile, thèmes, FR/EN, retour de l'opacité à 1 et du `snap`,
  mouvement réduit au chargement et en bascule, clavier et tactile ;
- captures et vidéo.

Relecture manuelle seulement : types DOM standard (`setAttribute`,
`style.setProperty`, `requestAnimationFrame`), aucune dépendance ajoutée, et
aucun export non composant (règle `react-refresh` respectée).

## 5. Risques et inconnues

- **Non prouvé en navigateur.** Le comportement décrit en section 1 est attendu,
  pas observé.
- **Démarrage du défilement doux.** Si un moteur le démarre plus de 100 ms après
  `scrollBy`, la boucle s'arrête avant le mouvement. Le défilement a quand même
  lieu, mais sans fondu. À vérifier dans Safari et Firefox.
- **Défilement utilisateur pendant la boucle.** Un geste au doigt ou à la molette
  pendant les ~500 ms d'un clic prolonge le fondu jusqu'à l'arrêt réel. C'est
  cohérent avec la règle « suit le défilement », sans gêne attendue.
- **Barre de défilement.** Elle est aussi atténuée aux bords pendant le mouvement.
- **Coût.** Une lecture de `scrollLeft` et une écriture de variable par frame,
  uniquement pendant un clic. Le masque n'est composé qu'en mouvement.
- **Non-changements.** Le fondu d'entrée `journeyFade`, le rail natif, le
  `snap`, les bornes, les douze étapes et les libellés sont inchangés.

## 6. Reprise pour Codex

1. Exécuter `npm run build`, `npm run lint`, `npm run biome:check`,
   `npm run test` et `git diff --check`. Corriger ou me renvoyer tout échec.
2. Contrôle navigateur (`vite preview`) :
   - Clic sur suivant : `data-moving` présent pendant le mouvement, puis absent
     et `--journey-edge` retiré environ 100 ms après l'arrêt. Le `scrollLeft`
     final doit correspondre au début d'une étape.
   - Même vérification pour le retour, les clics rapprochés et les deux extrémités.
   - Focus maintenu sur le bouton.
   - Avec `emulateMedia({ reducedMotion: 'reduce' })`, au chargement puis en
     bascule : pas d'attribut ni de fondu.
3. **Test unitaire.** La boucle reste dans le composant, sans test unitaire :
   le dépôt n'a pas d'environnement DOM, et un export non composant enfreint
   `react-refresh`. Si Codex en exige un, je propose d'extraire le calcul pur
   dans `src/utils/journeyFade.ts`, hors de ma liste : prochaine opacité à partir
   de la vitesse et de l'opacité précédente, et décision d'arrêt. Il serait
   couvert dans `tests/about-journey.test.ts`. Patch non écrit, en attente
   d'accord.
4. Allen : juger l'intensité (0,30 aux bords) et la largeur du dégradé (6 rem).
   Pour plus de discrétion : opacité minimale 0,5 ou dégradé de 4 rem.
