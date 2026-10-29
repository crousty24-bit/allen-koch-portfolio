# Plan de refonte : développeur IA freelance

## Objectif et décisions acquises

Passer d'un portfolio de présentation à un site qui aide un prospect à comprendre
ce qu'Allen peut construire, sur quelles preuves s'appuyer et comment le contacter.

Demandes d'Allen : refonte design, nouvelles sections, angle développeur IA freelance,
design confié à Claude, workflow et ressources pour les agents dans le dépôt.
Clientèles précisées : TPE/PME, startups, outils et workflows agents, réalisation
d'applications et de sites web modernes. Il n'y a pas de niche unique validée.

Cible globale : refonte visuelle **globale et totale** sur une page unique
avec ancres,
contact email actuel et formulaire contact/devis reporté, services/prestations, conservation des projets personnels,
espaces projets clients et game dev distincts et future section « Ils m'ont fait confiance ».
Les choix d'adaptation reviennent à Claude à partir des quatre
[références Stitch importées](maquettes_references/README.md) et de leur système
monochrome. La palette 1.3.2 n'est pas imposée ; Allen arbitre la direction finale.
Conserver React/Vite/TypeScript et les contrats utiles FR/EN, sombre/clair,
accessibilité et performance mobile. La solution d'envoi reste à décider avant
son implémentation ; aucun framework ou prestataire
n'est sélectionné par ce plan.

## RUN-005 — Proposition éditoriale FR/EN du 29 octobre 2026

Statut : base provisoire validée par Allen le 29 octobre pour la composition
visuelle, non publiée. Allen
précise le 29 octobre qu'il démarre son activité freelance et n'a pas encore créé
son entreprise. Les prestations sont provisoires et pourront évoluer ; la priorité
actuelle est le design, sans construire un catalogue commercial détaillé.
Cette situation est un contexte interne, pas une mention à afficher dans le site.

### Positionnement et introduction

| Élément | FR proposé | EN proposé |
| --- | --- | --- |
| Intitulé | Développeur fullstack & IA | Fullstack & AI developer |
| Promesse | Des sites et applications utiles, solides et évolutifs. | Useful, reliable websites and applications built to grow. |
| Introduction | Je développe des solutions web complètes, du frontend au backend, avec des outils modernes et une approche attentive à la qualité du code. | I build end-to-end web solutions, from frontend to backend, using modern tools and a focus on engineering quality. |
| CTA principal | Discuter de votre projet | Discuss your project |
| CTA secondaire | Voir les réalisations | View projects |

### Deux prestations provisoires

Fusion demandée par Allen : intégrations IA et workflows agents forment une seule
prestation. Le MVP reste un format de projet web ; aucune offre supplémentaire.
Pour le design, prévoir simplement un titre et un court paragraphe par prestation,
avec un CTA commun vers le contact. Aucun détail de tarif, délai, maintenance ou
livrables contractuels à fixer maintenant.

#### 1. Sites et applications web / Websites & applications

**FR** : Je développe des solutions complètes, d'interfaces intuitives à des
backends robustes. J'utilise des technologies modernes et des principes de
conception solides pour créer des applications web concrètes, rapides, stables
et capables d'évoluer avec vos besoins.

**EN**: I build end-to-end solutions, from intuitive frontend experiences to
robust backend systems. Using modern technologies and solid engineering
principles, I create real-world web applications that stay fast, stable and
scale with your needs.

#### 2. Développement assisté par l'IA & workflows agents / AI-assisted development & agent workflows

**FR** : J'utilise les outils IA et les workflows agents pour accélérer le
développement tout en maintenant des standards d'ingénierie solides, du
prototypage rapide aux systèmes structurés et évolutifs.

**EN**: I use AI tools and agent workflows to speed up development while
maintaining solid engineering standards, from rapid prototyping to scalable,
well-structured systems.

Ces textes adaptent les exemples commerciaux fournis par Allen. Ils décrivent
une approche de travail, sans annoncer de gain chiffré ni d'expérience client.
L'intégration de l'IA dans un produit peut être précisée plus tard dans cette
même prestation ; elle ne nécessite pas de carte ni d'étude de cas dédiée pour
poursuivre le travail de composition.

### Réalisations : inventaire et trois cas proposés

Source du catalogue : [données des projets](../src/data/projects/projects.ts).
Les statuts ci-dessous sont ceux déclarés dans ces données, pas le résultat d'un
audit des applications distantes. Aucun rôle individuel précis, accord client ou
résultat d'exploitation n'est établi par ces seules descriptions.

| Projet conservé | Statut déclaré | Éléments disponibles dans le dépôt |
| --- | --- | --- |
| Diff Impact Analyzer | MVP | Description FR/EN, image, liens dépôt et site |
| SnipStack | MVP | Description FR/EN, image, dépôt sous le compte Naethr ; contribution exacte à confirmer |
| Code Quality Guardian | MVP (deprecated) | Description FR/EN, image, liens dépôt et site |
| Questonaut | MVP | Description FR/EN, image, lien dépôt |
| Mission Control | Prototype | Description FR/EN, image, lien dépôt |
| Sokwak AI | MVP | Description FR/EN, illustration ; aucun dépôt ni site renseigné |
| Kane | Exploration | Description FR/EN, image ; aucun dépôt ni site renseigné |
| Portfolio AK | En cours | Description FR/EN, image, lien dépôt ; sources locales inspectables |
| Milady's Knight | Prototype | Description FR/EN, illustration, lien dépôt |

Sélection proposée : un exemple web et deux outils de développement. Tous restent
hors de l'espace clients tant qu'une mission réelle et son autorisation ne sont pas
établies. Pour une future étude de cas, confirmer le rôle exact avant publication ; les liens
renseignés sont des pistes de vérification, pas des preuves de disponibilité.

| Cas | Texte FR proposé | EN proposé | Preuve et limite |
| --- | --- | --- | --- |
| Portfolio AK | Portfolio bilingue avec thèmes clair et sombre, conçu sur une base React et TypeScript. | Bilingual portfolio with light and dark themes, built with React and TypeScript. | Sources locales, données FR/EN, composants et tests présents ; rôle d'Allen et périmètre de contribution des agents à préciser. Aucun résultat commercial déduit. |
| Diff Impact Analyzer | Outil local d'analyse des changements Git, conçu pour expliciter leur portée et leur risque. | Local Git change analysis tool designed to explain the scope and risk of changes. | Description et liens existants ; fonctionnement, rôle exact et exemple de rapport à vérifier avant d'en faire une étude de cas détaillée. |
| Code Quality Guardian | Consignes pour encadrer les agents de code : inspecter le dépôt, limiter les changements et documenter les vérifications. | Instructions for coding agents to inspect the repository, limit changes and document verification. | Description et liens existants ; exemple d'utilisation et contribution à confirmer. Statut corrigé par Allen : MVP (deprecated) ; aucun gain mesuré annoncé. |

### À propos et contact

**Présentation actuelle conservée intégralement en FR et EN** : reprendre
`copy.fr.about` et `copy.en.about` dans les [textes existants](../src/data/i18n/i18n.ts),
sans réécriture de l'introduction. La proposition de remplacement est retirée.

**My Coding Journey** : remplacer la timeline verticale par une timeline
horizontale, apparaissant en fondu, avec défilement horizontal animé pour accéder
à la suite. Conserver les étapes et textes existants. Prévoir défilement tactile
et clavier, absence de débordement global de page et accès à toutes les étapes.
En réduction des animations, supprimer fondu et défilement animé tout en gardant
le contenu accessible. Le déclenchement précis sera conçu par Claude ; aucun
défilement automatique n'est décidé. Réalisation prévue dans RUN-021, sans changer
le composant actuel pendant le cadrage de RUN-005.

| Élément | FR proposé | EN proposé |
| --- | --- | --- |
| Titre contact | Parlons de votre projet. | Let's talk about your project. |
| Texte contact | Décrivez votre besoin, votre contexte et ce que vous souhaitez obtenir. Nous pourrons préciser un premier périmètre et les prochaines étapes. | Describe your needs, context and intended outcome. We can then clarify an initial scope and the next steps. |
| Action formulaire future | Envoyer ma demande | Send my enquiry |
| Alternative email | Me contacter par email | Contact me by email |

L'adresse actuellement déclarée est `allen.kch24@gmail.com` dans les
[liens](../src/data/links/links.ts). Confirmer son utilisation professionnelle ;
elle n'est pas automatiquement le destinataire du futur formulaire.
Les CTA désignent des intentions : leurs ancres seront fixées en RUN-011/012,
le formulaire et ses états en RUN-016/017. Aucun envoi ni délai de réponse promis.
Le bilinguisme du site n'établit pas les langues d'intervention professionnelle.

### Suite de RUN-005

La structure à deux prestations, les corrections projets/About et les textes
FR/EN sont validés par Allen comme base provisoire pour le design. RUN-005 est
clôturé ; une offre commerciale définitive n'est pas requise pour cette étape.

Conserver les neuf projets et le texte de présentation About actuel intact ;
les textes de contact restent une base modifiable. Les trois cas ci-dessus sont des pistes ultérieures, sans nouvelle
étude de cas à exiger pour composer les sections. Rôles, preuves, disponibilité,
modalités d'intervention et références clients seront précisés lorsqu'ils devront
être publiés ; ne pas les inventer ni bloquer la préparation visuelle sur leur
absence. Le traitement réel du formulaire reste réservé à RUN-016/017.

## RUN-011 — Architecture des sections et ancres

Contrat d'intégration arrêté le 29 octobre 2026 après clôture de RUN-005.
Il décrit la cible ; l'interface actuelle n'est pas modifiée par ce cadrage.

### Ordre et navigation cible

| Ordre | Libellé FR / EN | Ancre stable | Contenu / responsable d'intégration |
| --- | --- | --- | --- |
| 1 | Accueil / Home | `#home` | Hero, promesse et CTA de RUN-005 ; socle RUN-012 |
| 2 | Services / Services | `#services` | Deux prestations provisoires, web/app puis IA/workflows ; RUN-014 |
| 3 | Projets / Projects | `#projects` | Espaces personnels, clients, game dev ; RUN-015 |
| 4 | Stack / Stack | `#stack` | Stack et compétences actuelles conservées ; raccordement RUN-012 |
| 5 | À propos / About | `#about` | Présentation actuelle inchangée ; parcours horizontal en RUN-021 |
| 6 | Contact / Contact | `#contact` | Email actuel conservé, futur formulaire en RUN-017 après décision RUN-016 |

Même ordre dans le DOM, la navigation desktop/mobile et le footer. Réutiliser
la liste partagée de navigation ; aucun nouveau menu, page ni routeur.
Les libellés changent avec la langue, les identifiants ne changent pas.
`#main-content` reste la cible du lien d'évitement, hors menu.

### Trois espaces de projets, sans multiplier les liens du menu

Conserver une seule entrée Projets. À l'intérieur : projets personnels (huit
projets actuels hors Milady's Knight), clients (uniquement des cas réels autorisés),
puis game dev (Milady's Knight). Masquer l'espace clients tant qu'il n'a pas de
contenu publiable ; ne pas afficher de bloc vide ou de référence fictive.

Prévoir des sous-titres sémantiques et des espaces accessibles sans nouveau contrôle
global. Pas d'onglets, filtre, nouvelle ancre publique de catégorie ni page de cas
imposés. RUN-015 adaptera les possibilités d'afficher davantage de projets sans
perdre les neuf projets, leurs liens et leurs assets. La composition visuelle
précise appartient à Claude. Le parcours About garde ses étapes et textes ; son
interaction horizontale relève de RUN-021, sans entrée supplémentaire du menu.

### Liens et CTA

- Marque et entrée Accueil : `#home` ; lien d'évitement : `#main-content`.
- Hero : CTA principal « Discuter de votre projet » / “Discuss your project”
  vers `#contact`, secondaire « Voir les réalisations » / “View projects” vers
  `#projects`. Le lien de défilement du Hero reste dirigé vers `#projects`.
- Services : un CTA commun vers `#contact`, sans choix de prestation prérempli
  ni donnée de formulaire tant que RUN-016 n'a pas défini le contrat.
- Bandeau Projets : lien vers `#contact` ; liens externes des cartes conservés.
- Email : lien mailto existant ; le formulaire ne remplace pas cette alternative.
- Retour en haut : comportement actuel conservé, sans nouvelle entrée d'historique.

Les anciennes ancres `#home`, `#projects`, `#stack`, `#about`, `#contact` et
`#main-content` sont conservées sur leurs éléments, sans alias ni redirection.
Les identifiants utilisés par ARIA et les contrôles existants ne sont pas renommés
incidemment ; toute évolution d'AboutJourney devra mettre à jour ses relations.

### Séquencement sans section vide

RUN-012 raccorde le socle existant et prépare la navigation partagée. RUN-014
ajoute Services et active son lien dans le même lot : aucun lien vers `#services`
ni section vide publiée en attendant son contenu. Même règle pour les futurs
espaces et formulaires : afficher uniquement le contenu réellement disponible.
RUN-015 crée les espaces Projets ; RUN-021 réalise la timeline, indépendamment du
traitement de contact. Ces RUN restent planifiés, sans exécution automatique.

### Langues et SEO

Constat local : `index.html` déclare `lang="fr"`, une canonical à la racine et
les métadonnées sociales FR ; le sitemap ne liste que la racine. App change
`documentElement.lang` et le titre selon la préférence locale. Le toggle ne crée
aucune URL EN distincte dans le code inspecté.

Décision de ce cadrage : garder une seule URL et les mêmes fragments FR/EN,
sans `/en`, paramètre de langue, `hreflang` ni URL de fragment dans le sitemap.
Ne pas promettre d'indexation EN séparée. Conserver le contrat SEO existant ;
RUN-007/008 vérifieront la cohérence des titres/métadonnées avec les contenus
intégrés et l'actualité du sitemap (date existante : 2026-07-01), sans inventer
de date de publication. Une stratégie d'indexation EN distincte nécessiterait
un mandat ultérieur ; elle ne bloque pas le travail visuel actuel.

Un seul h1 dans le Hero, sections principales en h2, catégories de projets en h3 ;
adapter la hiérarchie des titres internes au contexte sans changer leurs textes.
La hiérarchie du parcours sera contrôlée lors de RUN-021.

### Critères de navigation à vérifier lors de l'intégration

- Chaque lien interne rendu a une cible unique présente. Header fixe : cible et
  titre visibles, avec décalage CSS approprié si nécessaire.
- Accès direct et rechargement sur chaque fragment connu, précédent/suivant,
  fragment encodé, inconnu ou mal formé : préserver le correctif de RUN-020,
  sans erreur ni réécriture inutile de l'historique.
- Activation clavier : cible visible et poursuite du parcours dans la section,
  sans piéger le focus ni le déplacer lors du simple défilement à la molette.
  Le lien d'évitement atteint le contenu principal ; fermeture du menu mobile
  compatible avec la navigation vers la cible et Échap.
- Une éventuelle indication de section active reste cohérente au défilement et
  après accès direct ; utiliser `aria-current="location"` sur le lien actif,
  sans afficher plusieurs liens actifs dans la même navigation.
- Révélation des sections compatible avec les nouvelles sections, le clavier,
  reduced-motion et l'absence d'IntersectionObserver ; aucune section masquée.
- FR/EN et clair/sombre : liens identiques, préférences conservées. Contrôles
  sur build production : 1440×900, 1440×300, 390×844 et 667×375, avec/sans
  reduced-motion ; pas de débordement horizontal global.

Tests statiques de contenu/rendu à adapter quand les cibles sont intégrées ; ils
ne remplacent pas les effets et interactions en navigateur. Réutiliser la
[procédure existante](testing.md), sans dépendance de tests ajoutée par ce cadrage.

## Design et mouvement

Claude reproduit et adapte le langage visuel Stitch : palette monochrome,
typographie, grille, composants et iconographie ; il précise les choix retenus
parmi les quatre variantes. La proposition précédente « Atelier technique » reste
une ressource non validée ; elle ne contraint pas cette refonte. Spécifier les
mouvements entre sections/états et leur variante reduced-motion,
sans imposer de dépendance d'animation. Vérifier mobile/desktop et sombre/clair.

## Services, projets et confiance

Les deux prestations provisoires ci-dessus servent la composition des sections,
avec un CTA commun vers le contact. Leur formulation pourra évoluer après le
travail visuel, sans imposer un catalogue commercial détaillé à ce stade.

Conserver les neuf projets, leurs contenus et liens, dans trois espaces :
projets personnels, projets clients et projets game dev. Placer Milady's Knight
uniquement dans game dev, sans dupliquer sa carte parmi les projets personnels.
Les huit autres projets du catalogue restent dans l'espace personnel ; aucune
mission client n'est déduite. Prévoir FR/EN : « Projets personnels » / “Personal
projects”, « Projets clients » / “Client projects”, « Projets game dev » / “Game
development projects”. L'implémentation de ces espaces relève de RUN-015.
Le modèle client inclut nom, mission, rôle exact, livrables, statut, résultat
facultatif vérifié et accord de publication des informations/assets. Aucun projet personnel ne devient
une mission client sans preuve. En absence de cas client publiable, masquer cet
espace public plutôt que fabriquer des références ; son rendu pourra être vérifié
avec données de test explicitement identifiées hors contenu de production.

« Ils m'ont fait confiance » est une extension future (RUN-018), distincte des
études de cas : références, logos ou témoignages réels avec accord. Prévoir son
emplacement dans les maquettes ; ne publier ni bloc vide, ni logos fictifs. Ce RUN
ne conditionne pas la première release de la refonte.

## Formulaire contact / devis

Décision ultérieure d'Allen (RUN-016, 29 octobre) : conserver le lien email seul
pour l'instant, vers allen.kch24@gmail.com. Formulaire reporté, non annulé ; les
paragraphes ci-dessous conservent le cadrage d'une évolution future. Les demandes
sans suite seront conservées 30 jours en messagerie, sans suppression automatique
configurée. Le contact email ne bloque pas l'assemblage de l'itération actuelle.


La [décision RUN-016 et son étude antérieure](contact-form-contract.md) distinguent
le contact email retenu du formulaire reporté ; aucun fournisseur n'est choisi.

RUN-016 choisit le traitement (service externe ou endpoint minimal), le destinataire,
les champs nécessaires et leur conservation. Nom/contact, type de demande,
prestation et message sont des pistes ; budget et délai restent optionnels si retenus.
Aucun fournisseur, coût ou engagement de réponse n'est inventé.

RUN-017 inclut l'envoi réel : labels et validation accessible côté interface et
validation à la frontière du service/endpoint, états en cours/succès/échec, prévention
des doubles soumissions, protection anti-abus proportionnée et secret hors du bundle.
Conserver la saisie en cas d'échec et prévoir une alternative de contact. Confirmer
le succès seulement après acceptation par le traitement, sans promettre la livraison
finale du mail. Définir une vérification de réception autorisée vers une boîte de
contrôle ; aucun email à un tiers sans mandat. Vérifier la solution choisie et les
informations de confidentialité avant publication ; aucun avis juridique implicite.

## Architecture cible à décider puis implémenter

Réutiliser les composants, données typées et tokens quand ils conviennent au
nouveau design. Prévoir une composition de page unique (navigation, pied de page,
préférences) et des composants de sections. Les ancres et les parcours clavier
guident RUN-011/012, sans ajout de routeur. Toute dépendance reste
à justifier et valider. Le traitement du formulaire n'autorise pas une plateforme
backend complète, une base de données ou une authentification par défaut.

Chaque passe couvre ses données FR/EN, états, métadonnées, assets et contrôles.
L'implémentation 1.3.2 reste la référence à préserver jusqu'à sa migration ; le
nouveau design n'est pas contraint de conserver ses effets ou sa palette.

## Exécution par RUN

Le suivi opérationnel est centralisé dans [runs-workflow.md](../runs-workflow.md).
RUN-006 couvre le design total ; RUN-011 à RUN-017 découpent navigation par ancres,
système visuel, services, projets et formulaire. RUN-018 prévoit la
confiance future. RUN-007 assemble les passes et RUN-008 valide la release.
Responsables, dépendances et critères vivent dans ce suivi ; les preuves dans
[runs-journal.md](../runs-journal.md). Aucune implémentation ni release automatique.

## Arbitrages restant à faire

- Ajustements futurs de l'intitulé et de la promesse ; deux prestations provisoires retenues.
- Précisions commerciales ultérieures : périmètre de support et modalités de livraison.
- Rôle exact dans les projets collaboratifs et preuves partageables.
- Zone d'intervention, langues de travail, disponibilité et canal de contact préféré.
- Statistiques conservées et WebGL supprimé : décisions déjà acquises dans DESIGN.md R8.
- Ordre et ancres arrêtés dans RUN-011 ; conserver une seule URL FR/EN, sans
  indexation EN distincte promise pour cette refonte.
- Solution de contact, destinataire, champs, conservation et vérification de réception.
- Cas clients, références et autorisations réellement disponibles.

Les informations professionnelles/légales à publier doivent être confirmées par
Allen avant la release. Le dépôt ne suffit pas à établir les obligations de son activité.

## Ordre des phases et références Stitch

La phase 1 est clôturée : conception/validation visuelle (RUN-006), puis
système visuel sur la baseline (RUN-013). Les contenus définitifs, ancres et
fonctionnalités sont réalisés en phase 2 selon le tableau de suivi.
Les maquettes peuvent anticiper ces évolutions sans prétendre qu'elles fonctionnent.
Les décisions techniques ultérieures peuvent nécessiter une adaptation visuelle ciblée.
Les quatre [références Stitch importées](maquettes_references/README.md) sont le
modèle visuel de la synthèse validée par Allen dans DESIGN.md R8 et implémentée
en phase 1 ; les nouveaux contenus suivent ce système.


## RUN-015 — Contrat des données projets intégré

Chaque projet porte une catégorie explicite `personal`, `client` ou `game-dev`.
Les neuf contenus, liens, assets et statuts précédents sont conservés. Les huit
personnels gardent leur ordre ; Milady's Knight apparaît seulement dans game dev.
Trois personnels sont affichés en grand, les cinq autres via le bouton existant.
Le jeu reste visible dans sa propre grille compacte. Les indices suivent l'ordre
global (jeu 09), le compteur Hero inclut tous les projets publiables (neuf).

Pour un projet client, le type impose un bloc `client` : `name`, `mission`,
`role`, `deliverables`, `publicationApproved`, et `results` facultatif. Mission,
rôle, livrables et résultat sont FR/EN. Ne renseigner un résultat que s'il est
vérifié, et ne passer l'accord à vrai qu'avec autorisation couvrant les textes,
liens et images. Le filtre partagé protège section, carte et compteur contre
l'affichage d'un cas non approuvé. Il ne rend pas confidentielles des données
qui seraient présentes dans le bundle : ne jamais stocker d'informations client
non autorisées dans les sources frontend. Aucun client n'est ajouté actuellement.

Les cas approuvés/non approuvés, sans/avec résultat, sont vérifiés par fixtures
dans les tests, sans prop de production dédiée au test. Les fixtures visuelles
sont rendues hors dépôt, dans des documents navigateur isolés avec le CSS livré.
Le groupe clients est entièrement absent du DOM tant qu'il est vide.
