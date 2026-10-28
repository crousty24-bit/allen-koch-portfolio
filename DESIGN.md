# Design Reference: Allen Koch Portfolio

Ce document a deux parties :

- **Partie R, refonte (RUN-006 / RUN-013)** : direction visuelle issue des
  [quatre variantes Stitch](docs/maquettes_references/README.md) et de leur
  [système monochrome](docs/maquettes_references/minimalist-developer-portfolio-templates/DESIGN.md).
  Document de travail de Claude, mis à jour à chaque itération.
- **Partie historique, baseline 1.3.2** (sections 1 à 18, en anglais) : état
  livré avant la refonte. Elle ne contraint pas la refonte, sauf les exigences
  de performance mobile et d'accessibilité qu'elle décrit.

Statuts employés dans la partie R : **proposé** (non validé par Allen),
**validé** (décision d'Allen datée), **implémenté** (présent dans le code),
**contrôlé** (vérifié par une mesure ou une observation nommée).

# Partie R : refonte visuelle

## R0. État et journal des itérations

| Date | Itération | Contenu | Statut |
| --- | --- | --- | --- |
| 2026-10-28 | It. 1, RUN-006 passe A | Analyse des 4 variantes, garde-fous, synthèse, tokens et correspondance avec le contenu actuel | proposé |
| 2026-10-28 | It. 2, arbitrage | Décisions d'Allen sur R8 ; analyse du site d'inspiration des maquettes (R10) | validé (R8), proposé (R10) |
| 2026-10-28 | It. 3, RUN-013 lot 1 | Fondations : tokens clair/sombre, clair par défaut, polices, boutons, focus ; retrait particules, `ogl`, orbes, trame, flou, ombres, couleurs chromatiques et mouvements au survol | implémenté, contrôlé (voir R11) |
| 2026-10-28 | It. 4, RUN-013 lot 2 | Cadre global : en-tête, menu mobile, index de section `0N / Libellé`, pied de page, retour en haut | implémenté, contrôlé (voir R12) |
| 2026-10-28 | It. 5, RUN-013 lot 3 | Hero : nom pleine largeur, rôle, promesse, CTA, liens texte, chiffres clés à filets | implémenté, contrôlé (voir R13) |
| 2026-10-28 | It. 6, RUN-013 lot 4 | Projets : 3 projets mis en avant à index collant, grille dépliée à 3 colonnes, bandeau CTA, en-têtes de section en grille | implémenté, contrôlé (voir R14) |
| 2026-10-28 | It. 7, RUN-013 lot 5 | Stack en rangées à tags, arbre de compétences en accordéon numéroté, fond de surface | implémenté, contrôlé (voir R15) |
| 2026-10-28 | It. 8, RUN-013 lot 6 | About : portrait N&B, texte et accordéon en colonne droite, parcours en liste numérotée à titre collant | implémenté, contrôlé (voir R16) |
| 2026-10-28 | It. 9, RUN-013 lot 7 | Contact en bloc inversé : grand titre, texte et email souligné | implémenté, contrôlé (voir R17) |
| 2026-10-28 | It. 10, RUN-013 lot 8 | Mouvement aligné sur R6, contrôle qualité navigateur, relais passe C vers Codex | implémenté, contrôlé (voir R18) |

Périmètre de la phase 1 fixé par Allen le 28 octobre 2026 : **refonte visuelle
seule**. Le contenu actuel (sections, textes, projets, stack, parcours) est
conservé tel quel et adapté au nouveau design. Aucune section ni aucun contenu
nouveau : services, méthode, projets clients, formulaire et bloc de confiance
attendent la phase 2. Les sections des maquettes sans équivalent actuel
servent uniquement de référence de style.

## R1. Garde-fous anti « vibecode slop »

Règles demandées par Allen le 28 octobre 2026 (**validé**). Elles priment sur
les maquettes Stitch lorsqu'elles les contredisent.

| Interdit | Application concrète dans ce projet |
| --- | --- |
| Icônes Lucide | Ni Lucide ni jeu équivalent importé (Material Symbols des exports Stitch inclus). Quelques SVG inline dessinés pour le site, trait 1,5 px, extrémités carrées. Liens sociaux en texte. |
| Emojis | Aucun emoji dans l'interface, les textes, les métadonnées ou les alt. |
| Liquid glass | Aucun `backdrop-filter`, panneau translucide ou flou. En-tête et panneaux opaques, séparés par des filets. |
| Tirets cadratins (—) | Aucun dans le texte affiché ni dans les métadonnées. Remplacer par `/`, `·`, `:` ou une virgule ; intervalles avec un trait d'union simple. |
| Polices Inter, Geist, Space Grotesk | Retirées, y compris Geist prévue par le système Stitch et Inter/Geist de la baseline. Voir R4. |
| Bento grids | Pas de mosaïque de tuiles inégales. Grilles à colonnes régulières, listes indexées, rangées. |
| Fenêtres de terminal | Pas de faux terminal, de chrome de fenêtre, de bloc de code décoratif. Extension de Claude : pas non plus d'habillage pseudo-système des variantes C/D (`SYS_SPEC //`, coordonnées GPS, horloge en direct, crochets `[01]`). |
| Violet, néon | Palette monochrome sans aucun accent chromatique, y compris les pastilles vertes « disponible » des variantes B/C/D. Pas de lueur. |
| Orbes radiaux | Aucun dégradé radial ni halo (`ambient`, `about-visual__glow`, `contact-panel__overlay` de la baseline supprimés). |
| Dot grids | Aucune trame de points ni quadrillage de fond (`hero__grid` de la baseline, quadrillage de la variante B). |
| Icônes étincelles | Aucun symbole ✦ / sparkle pour signifier l'IA. |
| Flèches animées | Aucune flèche qui glisse ou rebondit. Flèche statique ↗ tolérée pour un lien externe seulement. |
| Animations au survol | Aucun mouvement au survol : ni translation, ni zoom, ni rotation, ni transition de filtre. Le survol change un état (inversion de tons, soulignement) de façon instantanée. Interprétation à confirmer par Allen. |

Garde-fous complémentaires issus du système Stitch, conservés : rayon 0,
aucune ombre portée (l'ombre des images de la variante D est retirée), aucun
dégradé décoratif, aucune métrique, ville, date ou client inventé.

## R2. Analyse des quatre variantes Stitch

Les exports sont des écrans desktop en français, 1280 px CSS (captures 2560 px).
Leur contenu est fictif : métriques (« 12+ années », « 99,8 % », « 40+ »,
« < 45 ms », « +32 % conversion »), projets (Kontrol OS, Konsol Studio, Synapse
Labs), ville (Paris), date de fondation (2018), portrait et email. Rien de ce
contenu n'est repris.

| Variante | Caractère | À retenir | À écarter |
| --- | --- | --- | --- |
| A, Indépendant | Clair, éditorial, chaleureux, casse de phrase, aéré | Rythme vertical, alternance de fonds (`#F8F7F3` / `#ECEAE4`) par section, en-têtes de section `01 / LIBELLÉ` avec filet, projets en rangées image 7 col / texte 5 col, accordéon en rangées, portrait N&B, contact en deux colonnes, pied de page sobre | Libellés mono rendus en serif (police non chargée), métriques fictives, en-tête flouté |
| B, Immersive Premium | Version sombre de A, plus dense, tout en mono | Référence du thème sombre, rangée de chiffres clés sous le hero, cadres d'image à filet | Quadrillage de fond, pastilles vertes, stats inventées, surcharge de mono |
| C, Structured Modernist | Clair, structuré par des filets partout, pseudo-technique | Grilles à cellules bordées (stack, chiffres clés), cartes à filets égaux | Barre système, coordonnées, horloge, `SEC_01 //`, crochets, CTA en `[ ]` |
| D, Typographie expérimentale | Clair, échelle typographique extrême, italiques | Grand nom sur deux lignes, grands numéros gris, titres de projet avec italique | Ombres d'image, débordement du titre « CONSTRUISONS » sur le formulaire (défaut de la maquette), pseudo-technique |

**Recommandation (proposé)** : une synthèse, avec **A comme base** de
composition et de ton, **B comme référence du thème sombre**, les **cellules à
filets de C** pour les grilles d'information (chiffres clés, stack, parcours)
et l'**échelle de D** limitée au nom du hero. A parle le mieux aux TPE/PME
comme aux équipes techniques : calme, lisible, sans jargon visuel. C et D
apportent de la structure mais leur habillage pseudo-système tombe sous R1.

## R3. Tokens proposés

Palette Stitch reprise, avec deux corrections issues du calcul de contraste
WCAG (formule de luminance relative, calcul hors navigateur, 28 octobre 2026) :

- le gris secondaire clair `#73716D` donne 4,54:1 sur le fond mais **4,05:1 sur
  la surface `#ECEAE4`**, sous le seuil AA de 4,5:1 : remplacé par `#66645F`
  (5,51:1 sur fond, 4,91:1 sur surface) ;
- les filets Stitch (1,24:1 clair, 1,36:1 sombre) conviennent aux séparateurs
  décoratifs, pas aux bordures de champs et de contrôles qui exigent 3:1 :
  ajout d'un token de contour de contrôle.

| Token (nom actuel conservé) | Clair | Sombre | Usage |
| --- | --- | --- | --- |
| `--background` | `#F8F7F3` | `#171715` | Fond de page |
| `--surface` | `#ECEAE4` | `#232320` | Sections alternées, tags, panneaux |
| `--outline` | `#E2DFD7` | `#31302C` | Filets décoratifs uniquement |
| `--outline-strong` (nouveau) | `#85827A` (3,58 / 3,19:1) | `#76736C` (3,79 / 3,33:1) | Bordures de boutons secondaires, futurs champs |
| `--text` | `#191919` (16,4:1) | `#F5F2EB` (16,06:1) | Texte principal, boutons pleins |
| `--text-muted` | `#66645F` | `#A5A29A` (7,04 / 6,18:1) | Texte secondaire, légendes |
| Focus | `--text`, contour 2 px, décalage 3 px | idem | Tous les éléments interactifs |

Les ratios entre parenthèses portent sur fond puis surface. Ils restent à
contrôler dans le navigateur une fois implémentés. Tokens supprimés :
`--primary*`, `--secondary*`, `--tertiary`, `--chip-accent-*`, `--radius-*`
(remplacés par 0) et les variantes de surface inutilisées.

Grille : conteneur maximal 1440 px, marges 3,5 rem desktop et 1,25 rem mobile,
12 colonnes desktop, 6 tablette, 1 mobile. Points de rupture existants
conservés (1040, 760 et 430 px) pour limiter la reprise du CSS. Rythme
vertical : 7 rem entre sections desktop, 4 rem mobile.

## R4. Typographie proposée

Geist (système Stitch) et Inter (baseline) étant interdits, il faut un
remplaçant du même registre : grotesque neutre, chasse normale, italique
disponible (titres de la variante D), poids 400 à 600, chargé depuis Google
Fonts comme aujourd'hui (aucune dépendance npm).

| Rôle | Candidat recommandé | Alternative | Motif |
| --- | --- | --- | --- |
| Titres et texte | **Schibsted Grotesk** | Hanken Grotesk | Grotesque conçue pour un groupe de presse, cohérente avec le registre éditorial ; Hanken est la plus proche de Geist |
| Libellés, index, tags | **IBM Plex Mono** | Space Mono (police Stitch, autorisée) | Plex reste lisible en capitales à 11 et 12 px ; Space Mono est plus fidèle mais très large |

Échelle reprise de Stitch : nom du hero `clamp(3rem, 9vw, 8.5rem)`, interligne
0,95, approche −0,04 em, en capitales ; titres de section 3,5 rem (2,25 rem
mobile) ; corps 1 à 1,125 rem, interligne 1,6 ; libellés mono 0,75 rem en
capitales, approche 0,06 em. Le `clamp` à bornes en rem remplace la règle
« pas de taille indexée sur la largeur » de la baseline pour ce seul titre.
Chargement mobile allégé conservé : la mono n'est chargée qu'au-delà de 760 px,
repli `ui-monospace` en dessous.

## R5. Correspondance contenu actuel et composition

Ordre et ancres inchangés : `#home`, `#projects`, `#stack`, `#about`, `#contact`.
Chaque section reçoit un en-tête `0N / Eyebrow actuel` suivi d'un filet (A),
sans libellé de droite inventé. Fonds alternés : Hero fond, Projets fond,
Stack surface, About fond, Contact surface, pied de page fond.

| Section actuelle | Composition desktop proposée | Mobile (≤ 760 px) |
| --- | --- | --- |
| Navbar | A : opaque, filet bas, logo + nom à gauche, liens au centre en casse de phrase, sélecteur FR/EN à deux segments (actif inversé), bouton thème. Plus de flou. | Bouton menu à deux traits ; panneau plein écran opaque, liens en 1,5 rem, contrôles en bas ; Échap et focus conservés |
| Hero | Statut en mono capitales avec carré plein ; nom « Allen Koch » en très grand (premier segment du titre actuel, à découper dans `i18n`) ; « Développeur Web / Alsace, France » en sous-ligne grise ; titre et sous-titre actuels en colonne gauche ; CTA à droite (plein « Voir les projets », secondaire à filet « Me contacter ») ; liens sociaux en texte mono ; 3 chiffres clés réels (profil, contributions GitHub, nombre de projets) en cellules à filets (C) ; indicateur de défilement statique | Nom sur deux lignes à 3 rem ; CTA pleine largeur empilés ; chiffres clés en une colonne |
| Projets | En-tête « Portfolio », titre « Build & Learn » à gauche, texte à droite (A). 3 projets en rangées alternées image 7 col / texte 5 col : méta mono `01 / Statut`, titre, description, tags plats, liens texte GitHub et Voir ↗. Les 6 autres, après dépliage, en grille régulière à 2 colonnes. Bandeau « Une idée de projet ? » à filets avec bouton | Image puis texte ; grille dépliée en une colonne |
| Stack | Rangées à filets : catégorie en mono à gauche, technologies en tags à droite (R10), sans logos. Arbre de compétences en rangées d'accordéon (A) : numéro mono, libellé, signe +/− | Catégorie au-dessus de ses tags ; accordéon pleine largeur |
| About | A : portrait N&B 5 col avec légende formée des badges existants ; titre « Bonjour, moi c'est Allen. » en grand, paragraphes, liens sociaux texte. Accordéon en rangées. Parcours en liste ordonnée à filets : index, date, titre, description ; moitié visible puis dépliage | Portrait puis texte ; parcours sur une colonne |
| Contact | A, colonne gauche : titre « Parlons de votre projet. » en grand, texte, email en grand lien souligné. La colonne droite reste vide en phase 1 et accueillera le formulaire en phase 2 | Empilé ; email cassable sans débordement à 320 px |
| Footer | A : marque et copyright à gauche, liens sociaux texte à droite | Empilé, aligné à gauche |
| Retour en haut | Carré 44 px, contour de contrôle, flèche statique | Identique |

Éléments retirés de l'affichage, contenu préservé : particules WebGL (colorées,
incompatibles avec la palette), logos Simple Icons de la stack, icônes du
parcours, icônes des liens sociaux, effet machine à écrire du titre About.
Les données correspondantes restent dans `src/data/`.

## R6. Interactions et mouvement (proposé)

Budget de mouvement volontairement faible, conforme à R1.

| Élément | Comportement | `prefers-reduced-motion` |
| --- | --- | --- |
| Apparition des sections | Opacité 0 → 1 et translation 16 px, 600 ms, `cubic-bezier(0.16, 1, 0.3, 1)` (R10), une seule fois ; contenu visible si le script échoue | Aucune animation |
| Accordéons, dépliage projets et parcours | Hauteur via `grid-template-rows` 0fr → 1fr, 220 ms ; signe +/− remplacé sans rotation | Instantané |
| Survol | Inversion de tons ou soulignement, instantané | Identique |
| Focus clavier | Contour 2 px couleur du texte, instantané | Identique |
| Thème et langue | Changement instantané | Identique |
| Menu mobile | Apparition en opacité 160 ms | Instantané |
| Compteur des chiffres clés | Conservé (R8) | Valeur statique |

## R7. Fichiers concernés par RUN-013

À modifier : `tokens.css` (réécriture), `base.css`, `buttons.css`,
`navigation.css`, `hero.css`, `projects.css`, `stack.css`, `skills-tree.css`,
`about-*.css`, `contact-footer.css`, `back-to-top.css`, `section-headings.css`,
`animations.css`, `reduced-motion.css`, `responsive-*.css`, `desktop-fonts.css` ;
`index.html` (polices, `theme-color`) ; `App.tsx` (rendu des particules) ;
`Navbar`, `Hero`, `StackSection`, `AboutSection`, `AboutJourney` (retraits
d'icônes et d'effets, balisage du hero). Découpage du titre dans `i18n.ts`
sans changement de texte. Aucun composant ni dépendance ajouté ; la suppression
de la dépendance `ogl` est à valider séparément.

## R8. Décisions d'Allen (validé le 28 octobre 2026)

1. Synthèse retenue : A comme base, B pour le sombre, filets de C, nom à
   l'échelle de D.
2. Polices : Schibsted Grotesk et IBM Plex Mono. Space Mono reste possible pour
   quelques éléments ponctuels, à désigner au cas par cas.
3. Thème par défaut : clair. Le sombre reste disponible et mémorisé.
4. Captures de projets : en couleur, fidèles aux vrais projets.
5. Particules WebGL : supprimées, dépendance `ogl` comprise.
6. Compteur animé des chiffres clés : conservé (valeur statique en
   `prefers-reduced-motion`, comme aujourd'hui).
7. Survol : changement d'état instantané, sans aucun mouvement.

## R9. Limites de cette itération

Analyse faite sur les captures PNG découpées et sur les HTML exportés ; aucun
rendu React ni contrôle navigateur. Les contrastes sont calculés, pas mesurés
sur la page. Aucune maquette mobile, anglaise ou sombre n'existe hormis la
variante B (sombre, desktop) : ces états sont spécifiés ici, pas dessinés.

## R10. Site d'inspiration des maquettes : weihangli.dev

Allen indique que les maquettes Stitch s'inspirent de
`https://www.weihangli.dev/`. Analyse du 28 octobre 2026 : captures pleine page
à 1440 et 390 px après défilement (Chrome sans interface), CSS de production lu.
Polices du site : Figtree et Geist Mono (non reprises). Courbe d'animation
dominante `cubic-bezier(0.16, 1, 0.3, 1)`, durées de 200 à 700 ms. Coins arrondis
et pilules partout.

| Élément observé | Décision (proposé) |
| --- | --- |
| Nom en très grand sur toute la largeur du conteneur, graisse moyenne | **Repris** : nom du hero aligné sur la largeur du conteneur, graisse 500 au lieu de 400 (Stitch) pour plus de présence |
| Grille asymétrique : libellé mono à gauche, contenu à partir de la 7e colonne | **Repris** pour les textes d'introduction de section et l'About |
| Projets : grand numéro d'index (`01 / 04`) collant à gauche pendant que le visuel défile à droite | **Repris** pour les 3 projets mis en avant, en CSS `position: sticky`, desktop seulement ; numéro en ligne sur mobile |
| Compétences : catégorie en mono à gauche, tags à droite, filets entre les rangées | **Repris** pour la Stack ; remplace les 4 colonnes de R5, mieux adapté aux listes longues et au mobile |
| Sous-listes numérotées `01 02 03` en grand corps, séparées par des filets | **Repris** pour les enfants de l'arbre de compétences |
| Pied de page : colonnes à libellé mono et filet, nom géant en bas | **Repris** sans contenu nouveau : colonnes Navigation et Liens à partir des liens existants, nom géant ; les deux intitulés de colonne sont de courts libellés d'interface, à confirmer |
| Bloc contact inversé (texte clair sur fond sombre) dans une page claire | **À évaluer** au lot Contact comme point d'emphase final, à condition de rester lisible dans les deux thèmes |
| Coins arrondis, boutons pilules, pastille verte « disponible », bouton rond | **Écarté** : rayon 0 et monochromie du système validé (R1, R3) |
| Horloge locale, date du jour, sélecteur de 5 langues, copie de l'email | **Écarté** : contenu ou fonction nouveaux, et horloge exclue par R1 |
| Captures incrustées sur des photos d'ambiance | **Écarté** : demanderait de nouveaux assets ; captures réelles conservées telles quelles |

Le mouvement d'apparition reprend la courbe du site (déjà celle de la baseline),
ramenée à 600 ms. Aucun mouvement lié au survol n'est repris.

## R11. Contrôles du lot 1 (28 octobre 2026)

- `npm run build`, `npm run lint`, `npm test` (13/13) : réussis.
- `npm run biome:check` : échoue uniquement sur les exports HTML Stitch de
  `docs/maquettes_references/` (commit `585acc6`, antérieur au lot) ;
  `biome check src tests index.html` réussit.
- Navigateur (build de production, Chrome sans interface) : thème clair par
  défaut et sombre mémorisé rendus ; Schibsted Grotesk et IBM Plex Mono chargées
  (desktop) ; texte principal calculé `#191919` sur `#F8F7F3` ; aucun débordement
  horizontal à 320, 390, 768 et 1440 px.
- État transitoire assumé jusqu'aux lots suivants : mises en page 1.3.2
  conservées, logos de la stack en couleur, tags en pilule, portrait rond, fond
  légèrement bleuté de la section Stack en clair, dégradés neutralisés mais
  encore présents dans l'accordéon et le parcours.
- Couleurs chromatiques des sections remplacées mécaniquement par la couleur du
  texte à opacité égale (`color-mix`), ombres supprimées, `transform`/`filter`
  retirés des règles `:hover`. Ces règles seront réécrites aux lots 2 à 7.
- Non mesuré : contraste réel de chaque composant, zoom 200 %, performance.

# Partie historique : baseline 1.3.2

This part describes the final MVP implementation state of the portfolio.

## 1. Product State

The project is a static one-page React/Vite portfolio for Allen Koch, a junior
fullstack developer.

Current production status: release `1.3.2`.

The page includes the expected sections, responsive layout, local portrait/logo
assets, theme switching, language switching, project expansion/collapse, and a
back-to-top control. This is the stable design baseline.

Future design work should be limited by default to:

- restrained visual refinements
- accessibility and readability improvements
- small responsive fixes
- punctual content updates for projects, stack, bio, and links

Do not reopen broad MVP redesign work unless explicitly requested.

## 2. Current Structure

Implemented sections and global UI:

- fixed glass navbar
- hero
- projects
- stack / skills
- about
- contact
- footer
- dark/light theme toggle in the header
- FR/EN language toggle in the header
- back-to-top icon button in the bottom-right corner after scroll

The site remains static only:

- no routing
- no backend
- no database
- no authentication
- no complex form handling

## 3. Visual Direction

The design direction is a sober, modern developer portfolio:

- premium minimalism
- dark theme by default
- light theme available through the header toggle
- obsidian-like dark surfaces
- blue/cyan/violet accents
- careful glassmorphism
- restrained hover states and motion
- readable, professional portfolio content

Avoid:

- decorative over-engineering
- heavy neon effects
- excessive gradients
- cluttered hero copy
- adding new controls without a clear product reason

## 4. Theme System

Themes are implemented with CSS variables on `:root` and
`:root[data-theme="light"]`.

Dark theme remains the primary aesthetic:

- deep layered surfaces
- low-opacity white borders
- cyan/blue ambient lighting
- glass cards using backdrop blur

Light theme should preserve the same structure and hierarchy:

- soft neutral background
- white translucent panels
- darker text
- same blue/cyan/violet accent family
- no separate layout rules unless necessary

When changing styles, prefer updating shared tokens or existing component
classes over adding theme-specific one-offs.

Any design, color, or theme-style change made for the default dark theme must
be reflected coherently in light mode.

Any design change must also be checked and adapted for mobile and narrow
responsive layouts.

## 5. Color System

Primary dark tokens currently follow this family:

- background: `#10131a`
- lowest surface: `#0b0e14`
- text: `#e1e2eb`
- muted text: `#c4c5d9`
- primary blue: `#2e5bff`
- cyan accent: `#54d5ff`
- violet accent: `#6c04de`

Chip colors are intentionally shared between project cards and skill cards:

- blue: `#2f6bff`
- cyan: `#16e4ff`
- violet: `#b95cff`
- pink: `#ff3f7f`
- yellow: `#ffcc24`

Keep chips vivid but controlled. They should be visible, not neon.

## 6. Typography

Current font stack:

- headings / brand: Plus Jakarta Sans
- body: Inter
- labels / metadata / chips: Geist on desktop, system monospace on mobile

General rules:

- keep hero headings large but not crowded
- keep metadata short and scannable
- avoid long paragraphs in high-impact areas
- preserve readable line-height in body copy
- do not use viewport-width font scaling
- keep desktop typography faithful to this baseline; mobile may use lighter
  font-loading choices only when the performance benefit is intentional

## 7. Navbar

Current behavior:

- fixed at the top
- glass background with blur
- logo and name on the left
- main anchors in the center
- social links and toggles on the right at desktop widths
- compact controls on smaller screens

Header controls:

- theme toggle uses sun/moon icon states
- language toggle uses a globe icon plus `FR` / `EN`
- both controls must have accessible labels
- hover treatment should stay blue/cyan and restrained

Navbar anchors:

- Home
- Projets / Projects
- Stack
- About
- Contact

## 8. Hero

Current hero is the release `1.3.2` baseline.

Current content pattern:

- status pill
- large headline with highlighted phrase
- subtitle
- short note
- two CTA buttons

The hero should communicate quickly:

- Allen is a junior fullstack developer
- Rails / React / TypeScript are core tools
- he builds useful, maintainable web products
- AI workflows are a lever, not the whole positioning

## 9. Projects

Current behavior:

- first three projects shown by default
- icon toggle expands to all projects
- same toggle collapses back to the initial list
- project cards include image, status, title, description, stack chips, and links

Design rules:

- keep project cards image-first
- keep descriptions concise
- do not invent project URLs
- render disabled/empty links carefully
- preserve accessible image alt text in both languages

Project-card chips use the shared vivid palette from section 5 with no strong
neon glow.

## 10. Stack / Skills

Current structure:

- stack cards for technical categories
- interactive skills tree below the stack grid
- external icons from Simple Icons

Keep stack and skills dense but readable. The skills tree should stay scannable,
keyboard accessible, and clear on mobile without turning the section into a
marketing block.

## 11. About

Current structure:

- portrait card using local asset `src/assets/images/allen-portrait1.jpg`
- grayscale portrait by default, color on hover
- data-driven accordion below the main About layout
- data-driven journey timeline with its first half shown by default
- accessible timeline toggle expands or collapses the complete journey
- floating tags for location/status
- social links below copy

Design rules:

- floating tags must stay readable over the portrait
- preserve the 4:5 portrait format
- keep copy direct and professional
- avoid adding decorative elements unless they improve composition

## 12. Contact

Current structure:

- centered glass contact panel
- short text
- email CTA
- three metadata columns

The contact section should remain simple. Do not add a form unless explicitly
requested.

## 13. Footer

Current structure:

- no `AK` monogram in the footer
- left brand label
- centered social links
- right copyright text on desktop
- stacked centered layout on mobile

Keep the footer quiet and aligned. It should close the page without competing
with the contact CTA.

## 14. Interactions

Implemented interactions:

- navbar hover states
- CTA hover states
- card hover lift / image scale
- portrait grayscale-to-color hover
- project expand/collapse icon rotation
- dark/light theme toggle
- FR/EN language toggle
- back-to-top button appears after scroll

Future effects should be restrained. Add motion only when it improves
orientation, hierarchy, or perceived quality.

## 15. Mobile Performance Baseline

The mobile performance baseline intentionally differs from desktop in a few
bounded areas:

- WebGL particles are desktop-only and must not load on mobile.
- Expensive blur, backdrop-filter, glow, and non-essential animations are
  reduced at mobile widths.
- Mobile uses responsive WebP assets and may use lighter font loading.
- Desktop visual fidelity remains a separate requirement and must be checked
  when changing performance, typography, effects, or responsive rules.

Future mobile optimizations must state whether desktop rendering is expected
to remain unchanged. If unchanged, validate desktop and mobile separately.

## 16. Content And I18n

Copy is currently managed through `src/data/i18n/i18n.ts` and passed through
typed props.

Current languages:

- French
- English

Rules:

- keep French and English copy aligned in meaning
- keep hero copy short
- keep project and skill descriptions concise
- preserve TypeScript typing for translated content
- do not hard-code new display copy inside components when it belongs in i18n

## 17. Assets

Local assets:

- `src/assets/images/generated/ak-logo.webp`
- `src/assets/images/allen-portrait1.jpg`
- `src/assets/images/generated/allen-portrait-360.webp`
- `src/assets/images/generated/allen-portrait-640.webp`
- `src/assets/images/generated/allen-portrait-900.webp`
- `public/projects/kane.png`
- `public/projects/mission-control.png`
- `public/projects/portfolio-ak.png`
- `public/projects/questonaut.png`
- `public/projects/rubber-duck-ia.svg`
- `public/projects/generated/*.webp`

Project visuals are local assets in the release baseline. Keep future project
visuals local unless there is a clear reason to use a stable external asset.

Original PNG/JPG project and portrait assets act as source/fallback files.
Generated WebP files under `public/projects/generated/` are treated as
immutable deploy assets; create a new filename when replacing their content.

## 18. Implementation Constraints

The restrictions below describe baseline maintenance. The expanded redesign in
`brief.md` and `AGENTS.md` takes precedence for the one-page redesign and scoped
contact/quote form; anchor navigation and processing decisions belong to the
dedicated runs, not to an implicit backend expansion.

When implementing baseline maintenance changes:

- keep edits minimal and targeted
- preserve the existing React component structure
- prefer native CSS and existing tokens
- do not add dependencies unless explicitly validated
- preserve the existing one-page anchor navigation
- preserve baseline backend scope except for the decided form-processing integration
- keep semantic HTML and accessible labels
- preserve the mobile-performance baseline unless a change explicitly targets it
- verify desktop and mobile separately when a mobile optimization claims desktop
  rendering is unchanged
- run `npm run build`, `npm run lint`, and `npm run biome:check` before
  finalizing implementation work
- keep changes maintenance-oriented unless a broader redesign is explicitly
  requested

## R12. Lot 2 : cadre global (28 octobre 2026)

Implémenté :

- **En-tête** opaque de 4 rem, filet bas, monogramme texte « AK » en carré plein
  (le logo bleu/violet n'est plus affiché, le fichier reste dans `src/assets`),
  liens en corps de texte soulignés au survol, bouton de thème carré, sélecteur
  FR/EN à deux segments (langue active inversée, même bouton et même libellé
  accessible qu'avant). Disposition desktop conservée jusqu'à 761 px.
- **Menu mobile** (≤ 760 px) : panneau opaque sur toute la hauteur, liens en
  1,5 rem séparés par des filets, contrôles en bas, apparition en opacité 160 ms ;
  Échap et retour du focus inchangés.
- **Index de section** `01 / Portfolio`, `02 / Stack & skills`, `03 / About`,
  `04 / Contact` par compteur CSS sur `.eyebrow--section`, suivi d'un filet.
- **Pied de page** : marque, colonnes « Navigation » et « Liens » / « Links »
  (libellés validés par Allen le 28 octobre 2026), nom géant décoratif masqué
  aux technologies d'assistance, mention légale en mono. Liens de navigation
  partagés avec l'en-tête via `src/data/links/navigation.ts`.
- **Retour en haut** : carré de 44 px, contour de contrôle, inversion au survol,
  apparition en opacité seule.
- Icônes de l'en-tête et du retour en haut redessinées en extrémités carrées.

Contrôles : build, lint, tests (13/13) et `biome check` du code réussis. Captures
du build de production à 1440, 800, 768, 390 et 320 px, clair et sombre, FR et
EN, menu ouvert et focus clavier : aucun débordement horizontal, mesuré par
script. Le nom du pied de page occupe 94 à 99 % de la largeur utile de 320 à
1920 px. Deux défauts trouvés en contrôle et corrigés : grille du pied de page à
12 colonnes trop large sur mobile (débordement de 70 à 140 px), liens du menu
mobile centrés dans une colonne étroite.

Écarts transitoires : le hero garde un grand espace haut à 768 px (règle 1.3.2
prévue pour l'ancien en-tête sur deux lignes, traitée au lot 3) ; le Contact
reste centré jusqu'au lot 7. Le nom du pied de page utilise une taille indexée
sur la largeur, bornée en rem et décorative : non agrandi par le zoom texte.

## R13. Lot 3 : hero (28 octobre 2026)

Implémenté :

- Titre `h1` découpé sans changement de texte : « Allen Koch » en capitales sur
  toute la largeur du conteneur (même échelle que le nom du pied de page), puis
  le rôle « Développeur Web / Alsace, France » en gris. Clés `hero.name` et
  `hero.role` ajoutées à `i18n.ts` ; `hero.title` reste le titre du document.
- Grille 12 colonnes : promesse (`hero.heading`) et sous-titre sur les colonnes
  1 à 7, CTA plein et secondaire empilés sur les colonnes 9 à 12, liens GitHub,
  LinkedIn, X et Email en texte mono (icônes supprimées).
- Rangée de chiffres clés réels (profil, contributions GitHub, nombre de projets)
  en cellules séparées par des filets, compteur animé conservé ; indicateur de
  défilement statique carré en bout de rangée, masqué sur mobile où il doublait
  le CTA.
- Tablette (≤ 1040 px) : promesse pleine largeur, CTA côte à côte. Mobile
  (≤ 760 px) : une colonne, CTA pleine largeur, profil sur toute la largeur puis
  contributions et projets côte à côte.
- Supprimés : ancienne mise en page centrée sur la hauteur de l'écran, animation
  de rebond de l'indicateur (`scrollCue`), règles 1.3.2 du hero dans les trois
  fichiers responsive, marges latérales mobiles à 1,1 rem (remplacées par le
  token de gouttière).

Contrôles : build, lint, tests (13/13) et `biome check` du code réussis.
Captures production à 1440, 1024, 768, 390 et 320 px, clair et sombre, FR et
EN : aucun débordement horizontal mesuré ; nom à 94 % de la largeur utile à
1440 px et 96 à 99 % de 320 à 390 px. Hauteur du hero : 843 px à 1440, 942 px à
390. Non mesurés : zoom 200 % (le nom, dimensionné sur la largeur d'écran, ne
grandit pas avec le zoom texte), contraste par composant.

## R14. Lot 4 : projets (28 octobre 2026)

Écart à R5, décidé par Claude après R10 : les rangées alternées image/texte de
la variante A sont remplacées par la composition de weihangli.dev, plus lisible
avec un index collant. Les sources de 512 px des projets 4 à 9 imposent aussi une
grille dépliée à 3 colonnes plutôt que 2, pour ne pas agrandir les images.

Implémenté :

- **En-têtes de section en grille** (Projets et Stack) : index sur sa propre
  ligne, titre colonnes 1 à 7, texte d'introduction colonnes 9 à 12 ; titre puis
  texte pleine largeur en dessous de 1040 px.
- **3 projets mis en avant** : grand index `01` et total `/ 09` collants dans
  les colonnes 1 à 3 (CSS `position: sticky`, desktop et tablette), capture
  16:10 bordée d'un filet sur les colonnes 4 à 12, puis statut, titre et
  description à gauche, tags et liens à droite. Mobile : index en ligne,
  empilement simple.
- **Projets 4 à 9** après dépliage : grille régulière 3 colonnes (2 en tablette,
  1 en mobile), méta `04 / Statut`. Le bouton de dépliage affiche désormais son
  libellé existant avec un signe +/−, sans rotation.
- **Liens** : boutons « Voir » plein et « GitHub » à filet, flèche ↗ statique ;
  projet sans lien de démo : visuel non cliquable, sans bouton Voir ; aucun bouton
  si aucun lien. Tags en étiquettes mono à filet (`.chip` défini dans
  `buttons.css`), rendus en liste.
- **Bandeau CTA** « Une idée de projet ? » entre deux filets, bouton à droite.
- **Captures en couleur** (R8) : voile sombre et opacité réduite supprimés.
- **Nouveaux assets** : WebP 960 et 1280 px pour les trois projets mis en avant,
  générés depuis leurs PNG d'origine sous de nouveaux noms (18 à 38 Ko). Les
  tailles `sizes` dépendent maintenant de la variante dans `ProjectCard` ;
  `imageSizes` retiré des données.

Contrôles : build, lint, tests (13/13) et `biome check` du code réussis.
Captures production à 1440, 768, 390 et 320 px, clair et sombre, FR et EN,
replié et déplié. Fichiers servis mesurés : WebP 1280 à 984 px de large en
desktop, 960 en tablette, 384 en mobile (densité 1). Index collant mesuré à
96 px du haut pendant le défilement. Défauts trouvés et corrigés : débordement
de 20 px à 320 px (colonnes implicites créées par l'en-tête en grille), tags sans
style après le déplacement de la règle `.chip`. Non mesurés : densité 2, zoom
200 %, contraste par composant.

## R15. Lot 5 : stack et arbre de compétences (28 octobre 2026)

Implémenté :

- **Bande de surface** pleine largeur derrière la section Stack (alternance
  fond / surface de la variante A), sans élément supplémentaire.
- **Stack** en liste de définitions à filets : catégorie en mono à gauche
  (colonnes 1 à 3), technologies en tags à droite (colonnes 4 à 12) ; empilé sur
  mobile. Logos Simple Icons supprimés : plus aucune requête vers
  `cdn.simpleicons.org` (mesuré : 0 ressource). Les champs `icon` restent dans
  `stack.ts`, non affichés.
- **Arbre de compétences** en accordéon : racine en libellé mono, catégories
  numérotées `01 02 03` en 1,5 rem, sous-compétences numérotées et indentées,
  mots-clés en mono sous chaque sous-compétence, signe +/− sans rotation, filets
  entre rangées. Comportement inchangé : chaque nœud est un bouton avec
  `aria-expanded`, racine ouverte par défaut. Apparition du contenu en opacité
  220 ms (`skillsTreeReveal`), supprimée en `prefers-reduced-motion`.
- **Icônes de l'arbre supprimées**, dont `ai-workflow` qui dessinait une étoile
  à quatre branches (icône étincelle interdite par R1). Le type `SkillTreeIcon`
  et les champs `icon` restent dans `skills.ts`, non affichés.
- Filets des rangées en `--outline-strong` sur la surface, où `--outline`
  (1,24:1 sur fond) disparaissait presque.

Contrôles : build, lint, tests (13/13) et `biome check` du code réussis.
Captures production à 1440, 768, 390 et 320 px, clair et sombre, FR et EN,
arbre replié et entièrement déplié ; débordement mesuré nul ; ouverture au
clavier (Entrée) vérifiée par script. Ajustements après capture : double filet
sous une sous-compétence ouverte supprimé, retrait et taille du niveau 2 sur
mobile. Non mesurés : lecteur d'écran, zoom 200 %, contraste par composant.

## R16. Lot 6 : about, accordéon et parcours (28 octobre 2026)

Implémenté :

- **Portrait** 4:5 à angles droits, bordé d'un filet, noir et blanc fixe
  (colonnes 1 à 5). L'ancien passage en couleur au survol a été retiré au lot 1
  (R1) ; le cadre rond et le halo disparaissent.
- **Colonne de texte** (7 à 12) : index de section, titre 3,5 rem, badges
  existants en tags mono, paragraphes, liens sociaux texte, puis l'accordéon
  déplacé dans cette colonne (même contenu, même ordre de lecture).
- **Accordéon** en rangées à filets, signe +/− sans rotation, un seul élément
  ouvert à la fois comme avant ; apparition du panneau en opacité 220 ms.
- **Parcours** : l'arbre à branches gauche/droite avec icônes, nœuds et
  dégradés devient une liste ordonnée à filets (index mono, date si elle existe,
  titre, description). Titre « My Coding Journey » collant à gauche sur desktop
  (mesuré à 96 px du haut pendant le défilement), statique sous 1040 px. Bornes
  « Octobre 2025 » et « Aujourd'hui » conservées en libellés mono ; dépliage de
  la seconde moitié conservé, bouton à libellé et signe +/−.
- **Écart d'interaction assumé** : chaque étape du parcours n'est plus un bouton
  à ouvrir ; titre et description sont toujours visibles. Le contenu est
  identique, sa lecture ne demande plus de clic. Les libellés « Ouvrir » /
  « Fermer », devenus inutiles, sont retirés du composant.
- **Supprimés** : effet machine à écrire du titre About et son observateur,
  icônes du parcours (le champ `icon` reste dans `about.ts`, le test le vérifie),
  keyframes `aboutTypewriter*`, toutes les règles 1.3.2 du parcours dans
  `responsive-430/760/1040.css` et `reduced-motion.css` (sélecteurs exigés par le
  test conservés).

Contrôles : build, lint, tests (13/13) et `biome check` du code réussis.
Captures production à 1440, 768, 390 et 320 px, clair et sombre, FR et EN,
parcours replié et déplié ; débordement mesuré nul après correction (grilles à
12 colonnes passées à 1 colonne sur mobile) ; ouverture de l'accordéon au
clavier vérifiée par script. Non mesurés : lecteur d'écran, zoom 200 %.

## R17. Lot 7 : contact (28 octobre 2026)

Décision de Claude, issue de la piste « à évaluer » de R10 : bloc **inversé**
plutôt qu'une colonne droite laissée vide en attendant le formulaire. Sans
formulaire en phase 1, l'inversion donne une fin de page affirmée sans contenu
nouveau.

Implémenté :

- Bloc à angles droits dans le conteneur, fond `#191919` en thème clair, surface
  sombre `#232320` bordée d'un filet en thème sombre. Les tokens sont redéfinis
  localement dans `.contact-panel` : index de section, texte, filets et contour
  de focus s'inversent d'eux-mêmes (focus mesuré ivoire `rgb(245, 242, 235)`).
- Grille : index sur sa ligne, titre « Parlons de votre projet. » en 5 rem sur
  les colonnes 1 à 7, texte et email sur les colonnes 9 à 12. L'email, jusqu'ici
  dans un bouton plein, devient un grand lien souligné (même adresse, même
  `mailto:`), cassable sur les petits écrans.
- Phase 2 : le formulaire prendra les colonnes 9 à 12 ; le texte et l'email
  passeront sous le titre.
- Contrastes calculés : texte 15,73:1 et texte secondaire 6,89:1 sur `#191919` ;
  14,09:1 et 6,18:1 sur `#232320`. Le bloc sombre ne se distingue du fond sombre
  qu'à 1,14:1, d'où le filet.
- Supprimés : panneau centré, règles `.contact-panel` partagées de
  `section-headings.css` et dernier bloc transitoire de `projects.css`.

Contrôles : build, lint, tests (13/13) et `biome check` du code réussis.
Captures production à 1440, 768, 390 et 320 px, clair et sombre, FR et EN ;
débordement mesuré nul. Les captures pleine page superposent l'en-tête fixe et
le lien d'évitement au bloc : artefact de capture, absent des vues écran.
Non mesurés : lecteur d'écran, zoom 200 %.

## R18. Lot 8 : mouvement et contrôle qualité (28 octobre 2026)

Mouvement implémenté (R6) : apparition des sections au défilement ramenée de
1,5 s et 24 px à 600 ms et 16 px ; animation d'entrée `.reveal` à 600 ms,
décalage de 60 ms entre éléments ; courbe `--ease-out` (`cubic-bezier(0.16, 1,
0.3, 1)`) partout. Seules trois transitions subsistent dans le CSS : apparition
des sections, fondu du bouton retour en haut, croix du menu mobile. Aucune n'est
liée au survol.

Contrôles mesurés par script sur le build de production (Chrome sans interface,
densité 1, sauf mention) :

| Contrôle | Résultat |
| --- | --- |
| Contraste de chaque texte rendu, tout déplié, 1440 px | Clair : 256 textes, 0 sous le seuil AA. Sombre : 256 textes, 0 sous le seuil |
| Parcours clavier depuis le haut de page | 46 arrêts à 1440 px, 39 à 390 px ; contour de 2 px visible, élément dans le champ et jamais sous l'en-tête fixe, ordre conforme à la lecture |
| Zoom 200 % (1440 et 1280 px) et 400 % (1440 px), densité 2 | Aucun débordement horizontal |
| `prefers-reduced-motion` | Aucune section masquée, aucune animation d'entrée, compteur affiché à sa valeur finale |
| Build | CSS 27,1 Ko, soit 5,4 Ko gzip (42,0 et 8,7 Ko au début du lot 1) ; JS 229 Ko, soit 71,8 Ko gzip |
| Premier chargement | 11 requêtes et 405 Ko décodés à 1440 px ; 9 requêtes et 326 Ko à 390 px ; seules ressources externes : Google Fonts |

Constats non corrigés, signalés :

- Le hero contient deux liens « Voir les projets » (bouton et flèche) et chaque
  projet avec démo deux liens vers la même adresse (visuel et bouton « Voir ») :
  comportement hérité de 1.3.2, à arbitrer.
- A04 (sections invisibles en fenêtre très courte, RUN-003) n'est pas traité :
  le mécanisme d'apparition au défilement est conservé, seule sa durée change.
- `npm run biome:check` échoue toujours sur les exports HTML Stitch de `docs/`.

Non mesurés : navigateur réel avec interface, densité 2 en dehors du zoom,
réseau ralenti, Lighthouse, lecteur d'écran. Ces contrôles relèvent de la passe C
confiée à Codex (relais préparé dans `runs-workflow.md`, RUN-013).
