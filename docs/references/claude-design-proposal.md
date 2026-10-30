# Cadrage design : portfolio Allen Koch, développeur IA freelance

> Source : réponse de Claude Code 2.1.287, obtenue le 27 octobre 2026 à partir
> du besoin d'Allen et d'extraits locaux de contenu, tokens et composition App.
> Contribution textuelle sans outils ni accès au navigateur. Voir la relecture
> factuelle dans [le brief](../claude-design-brief.md) avant toute implémentation.

> Tout ce qui suit est une **proposition non validée**. Je n'ai vu aucune capture : les choix visuels restent à confirmer en navigateur. Codex se charge de l'audit, de l'intégration et des vérifications.

---

## 1. Direction proposée : « Atelier technique »

**Principe :** un site sobre de type éditorial, qui ressemble au carnet de bord d'un artisan du logiciel plutôt qu'à une vitrine « IA futuriste ».

**Pourquoi cette direction :**
- **TPE/PME :** elles cherchent d'abord de la clarté et de la confiance. Un ton calme rassure plus qu'un fond animé.
- **Startups :** elles lisent vite et veulent voir des offres nettes et des projets démontrables.
- **Équipes intéressées par les agents :** elles apprécient une rigueur visible. Le projet Code Quality Guardian en est déjà la signature : « changer moins, mais mieux ».
- **Positionnement :** l'IA y apparaît comme une **méthode de travail maîtrisée**, pas comme un effet visuel.

**Marqueurs visuels :** grille visible mais discrète, filets fins, étiquettes en mono (`statut`, `stack`, `rôle IA`), un seul accent de couleur, beaucoup d'air.

---

## 2. Hiérarchie des sections (one-page)

1. **Hero** : promesse, sous-titre, deux CTA (« Voir les offres », « Me contacter »).
2. **Offres** : trois cartes (nouvelle section).
3. **Méthode** : 4 étapes, avec la place de l'IA à chaque étape (nouvelle section).
4. **Projets** : 3 projets mis en avant, puis un « Laboratoire » repliable.
5. **Stack** : condensée en groupes, sans grille de logos.
6. **À propos** : parcours et reconversion, présentés honnêtement.
7. **Cadre d'intervention** : ce que je fais et ne fais pas, format, zone, langues (nouvelle section).
8. **Contact**.

Les ancres de navigation passent à : Offres, Méthode, Projets, À propos, Contact. La Stack sort de la navigation principale.

---

## 3. Trois offres

Les intitulés sont à valider. **Aucun tarif ni délai n'est affiché.**

| Offre | Pour qui | Contenu |
|---|---|---|
| **Sites & applications web** | TPE/PME, indépendants | Site vitrine ou application moderne, responsive, accessible, maintenable |
| **MVP & base technique** | Startups, porteurs de projet | Cadrage, premier produit utilisable, architecture propre et reprenable |
| **Outils & workflows agents** | Équipes tech, PME qui veulent automatiser | Intégration d'assistants IA, automatisation de tâches répétitives, cadrage de l'usage des agents de code |

Chaque carte suit la même structure : un titre, une phrase « pour qui », 3 livrables types et un lien vers le contact. Aucune carte ne présente d'engagement de résultat.

---

## 4. Structure des preuves et cas

**Règle stricte :** chaque projet porte un badge **« Projet personnel »**, ou **« Projet d'équipe »** s'il est collaboratif. SnipStack est hébergé sur `Naethr/…` : son statut est à confirmer. Aucun projet n'est présenté comme une mission client.

**Fiche type d'un projet mis en avant :**
- **Problème** : une phrase.
- **Ce qui a été construit** : 2 lignes.
- **Choix techniques** : 2 ou 3 puces.
- **Rôle de l'IA** : ce qui a été délégué et ce qui a été vérifié à la main.
- **Statut honnête** : MVP, En cours, Prototype ou Exploration.
- **Liens** : démo ou dépôt, seulement s'ils existent.

**Sélection proposée :** Diff Impact Analyzer, Code Quality Guardian et SnipStack. Ce sont les plus proches des offres.

**Laboratoire :** Questonaut, Mission Control, Sokwak AI, Kane, Portfolio AK et Milady's Knight, en liste compacte sans grande image.

**À vérifier :**
- La stack de Milady's Knight mentionne « GPT-6 Astra ». Il faut confirmer que l'outil existe et qu'il est correctement nommé, sinon le retirer.
- La méta de Contact (« Focus : Rails / React ») devra suivre le nouveau positionnement.
- Les stats du hero (« Contributions », « Projets ») ne doivent rester que si elles sont réelles et sourcées. Sinon, il vaut mieux les supprimer.

---

## 5. Système visuel

### Typographie
- **Texte :** Inter, que les tokens déclarent déjà.
- **Titres :** Plus Jakarta Sans, déjà déclarée. Codex doit vérifier comment elle est chargée. Sans ajout de dépendance, on se replie sur la pile système.
- **Étiquettes et méta :** `--font-mono`, la pile système actuelle.
- **Échelle fluide :**
  - H1 : `clamp(2.25rem, 5vw, 4rem)`
  - H2 : `clamp(1.75rem, 3.5vw, 2.5rem)`
  - Corps : 1rem à 1.0625rem
- **Lecture :** ligne de 68ch maximum, interligne de 1.6 pour le corps et de 1.1 pour les titres.

### Couleurs
- **Sombre :** on garde `--background #10131a` et les surfaces existantes.
- **Accent unique :** `--primary`. `--secondary` (violet) est réservé à un seul usage sémantique, par exemple le marqueur « IA » dans les fiches.
- **Chips :** les 5 `--chip-accent-*` sont remplacés par des chips neutres (contour `--outline`, texte `--text-muted`). Cela allège fortement le bruit visuel.
- **Clair :** légèrement plus chaud que l'actuel `#f4f7fb`, pour éviter l'effet « bleu SaaS ».
- **Contraste :** AA minimum sur tous les couples, en particulier `--text-soft` à 68 % d'opacité, qui est à mesurer dans les deux thèmes.

### Mise en page
- **Desktop :** grille de 12 colonnes dans `--container` 1280px. Le hero est asymétrique (texte sur 7 colonnes, bloc méta sur 5). Les offres sont sur 3 colonnes.
- **Tablette :** offres sur 2 colonnes plus 1, projets sur 2 colonnes.
- **Mobile :** une seule colonne, CTA pleine largeur et cibles tactiles d'au moins 44px. L'ordre reste celui du DOM, sans réordonnancement visuel.

### Motion
- **Transitions :** 150 à 220 ms, en `ease-out`, uniquement sur hover, focus, ouverture du menu et dépliage des projets.
- **Pas de parallaxe ni de scroll-jacking.**
- **`prefers-reduced-motion` :** aucune transition de déplacement, seules les opacités sont autorisées.

---

## 6. États à livrer (maquettes ou spécifications)

- **Navigation :** au repos, après défilement, menu mobile ouvert ou fermé, ancre active.
- **Boutons et liens :** repos, hover, `:focus-visible` (anneau de 2px bien visible dans les deux thèmes), actif, lien externe.
- **Carte projet :** avec démo et dépôt, dépôt seul, sans lien, sans image, image en erreur.
- **Laboratoire :** replié et déplié, focus conservé sur le bouton.
- **Combinaisons :** FR/EN × sombre/clair. Il faut tester les titres EN, souvent plus longs (le heading Stack EN l'est déjà nettement).
- **Préférences système :** `prefers-reduced-motion`, `forced-colors`, zoom à 200 %, largeur de 320px.
- **Page sans JavaScript ou avant hydratation :** le contenu doit rester visible.

---

## 7. Simplification des effets actuels

- **Particles (WebGL) :** à supprimer. Je propose de les remplacer par une grille ou un dégradé en CSS statique. Elles alourdissent le chargement, ne servent pas le message et sont déjà absentes sur mobile, ce qui crée deux expériences différentes. Si Allen tient à les garder, elles deviennent un simple bonus sur desktop, plus discret, jamais nécessaire.
- **Fondu au scroll (`section--scroll-fade`) :** à retirer, ou à limiter à une opacité appliquée **après** une détection fiable. En l'état, une section peut rester invisible si l'observer échoue ou si l'ancre cible une section pas encore « vue ». Codex doit le vérifier.
- **Chips multicolores :** à neutraliser (voir la section 5).
- **Visuels de projets générés ou abstraits** (Kane, Portfolio AK) : de vraies captures d'interface sont préférables, ou à défaut l'absence d'image dans le Laboratoire.

---

## 8. Limites et questions restantes

**Limites :**
- Je ne vois aucune capture : les rendus, contrastes et débordements doivent être validés en navigateur par Codex.
- Les textes cités sont des pistes, pas une rédaction finale.

**Questions pour Allen :**
1. Quel intitulé principal : « Développeur IA freelance », « Développeur web & workflows IA », ou autre ?
2. Quelle zone d'intervention : Alsace, France ou à distance ? Le français et l'anglais sont-ils tous deux proposés aux clients ?
3. SnipStack : est-ce un projet d'équipe, et quel rôle exact y a joué Allen ?
4. Faut-il afficher une disponibilité, et sous quelle forme (sans date inventée) ?
5. Quel canal de contact privilégier : e-mail direct, LinkedIn, prise de rendez-vous externe ?
6. Faut-il garder les stats du hero ? Si oui, quelle est leur source ?
7. Faut-il conserver Rails dans le positionnement, alors que les offres mettent en avant React/TypeScript ?
