# Brief design pour Claude

## État et portée

Phase 1 clôturée le 28 octobre 2026 : RUN-006 et RUN-013 `done`. Allen a retenu
la synthèse et les choix de DESIGN.md R8 ; les huit lots et leurs contrôles sont
documentés en R11 à R19 et dans le journal. Le brief initial ci-dessous conserve
la cible complète ; ses services, projets clients et formulaire relèvent de la
phase 2, sans remettre en attente la direction déjà validée.

## Relais de contenu RUN-005 — base provisoire validée

La [proposition éditoriale FR/EN](refonte-plan.md#run-005--proposition-éditoriale-fren-du-29-octobre-2026)
sert d'abord le design : deux prestations temporaires, « Sites et applications
web » et « Développement assisté par l'IA & workflows agents ». Allen demande
une présentation simple, à partir de ses exemples commerciaux ; les intégrations
IA et workflows ne doivent pas devenir deux cartes distinctes.

Prévoir un titre et un court paragraphe par prestation, avec CTA commun. Ne pas
ajouter de catalogue de livrables/conditions ni exiger une offre définitive pour
composer la page. Les textes pourront évoluer. Conserver les neuf projets et
DESIGN.md R8 ; aucune référence client fictive. Prévoir trois espaces : personnels,
clients, game dev ; Milady's Knight uniquement dans game dev. Statuts : Code
Quality Guardian « MVP (deprecated) », Sokwak AI « MVP ».
Conserver intégralement la présentation About FR/EN actuelle. Revoir My Coding
Journey en timeline horizontale avec apparition en fondu et défilement horizontal
animé pour afficher la suite ; prévoir clavier/tactile et reduced-motion. RUN-021
porte cette évolution UI ; aucun défilement automatique n'est décidé. L'entreprise n'est pas encore
créée : contexte interne, sans mention publique ajoutée. La rédaction adaptée
est validée comme base provisoire ; aucun RUN d'intégration n'est lancé par ce relais documentaire.

## Relais RUN-011 — architecture pour intégration

Le [contrat d'architecture](refonte-plan.md#run-011--architecture-des-sections-et-ancres)
fixe l'ordre Accueil, Services, Projets, Stack, À propos, Contact et leurs ancres.
Conserver la navigation partagée header/footer, les anciennes cibles et le texte
About. Services et son lien arrivent ensemble en RUN-014. Les espaces de projets
ne nécessitent pas d'onglets ou de contrôles supplémentaires. RUN-012 puis les
RUN UI intégreront ce contrat avec les critères clavier/mobile/FR/EN/thèmes du
plan ; le placement visuel précis reste confié à Claude. Aucun accès à Claude
ni implémentation UI n'est simulé par ce transfert documentaire.

## Relais RUN-012 — socle existant raccordé

CTA Hero : Contact principal, réalisations secondaire. Navigation FR localisée
(Accueil/À propos), section active soulignée, cibles d'ancres focalisables, menu
mobile fermé par les liens et la marque. Les nouvelles sections restent dans
leurs RUN : Services avec son lien en RUN-014, trois espaces Projets en RUN-015,
timeline About en RUN-021. Conserver ces comportements pendant l'intégration.
Aucun changement de palette, typographie ou présentation About dans RUN-012.

## Relais RUN-014 — Services intégré

Claude Sonnet 5.5 a spécifié deux lignes à filets : titre à gauche, paragraphe à
droite sur grille desktop, empilés sous 1040 px ; heading « Deux prestations » /
“Two services”, CTA commun Contact. Codex a intégré les textes validés, la section
et le lien partagé Services. La grille devient réellement une colonne sous
1040 px pour éviter le débordement à 320 px observé au contrôle. Pas de nouvelles
cartes, d'icônes, de dépendances ou de composants UI de base. Les contrôles et
limites sont dans le journal ; ce relais ne lance pas les espaces projets.

## Relais RUN-015 — espaces Projets intégrés

Composition spécifiée par Claude Sonnet 5.5, intégrée et testée par Codex : groupes
personnels, clients et game dev empilés. H3 de groupe en mono avec effectif, h4
pour les cartes ; cartes et bouton existants conservés. Trois personnels feature,
cinq autres dépliables ; Milady's Knight reste compact et visible indépendamment.
Le groupe clients est absent sans cas autorisé ; aucun faux client ajouté.
Les faits client (mission, rôle, livrables, résultat facultatif vérifié) ont été
contrôlés avec des fixtures hors production. Index global conservé, jeu en 09.

## Relais RUN-016 — contact email seul validé

Allen conserve le lien vers `allen.kch24@gmail.com` pour l'instant : pas de
formulaire ni de prestataire à intégrer. RUN-017 est reporté ; conserver Contact
et son CTA email actuels, sans formulaire factice. Demandes sans suite : durée
retenue de 30 jours, sans automatisation de messagerie. L'[étude contact](contact-form-contract.md)
est conservée pour une éventuelle reprise explicitement mandatée.
RUN-021 est intégré et contrôlé : rail horizontal, fondu à l’entrée dans l’écran,
bornes accessibles ; texte About conservé. RUN-007 reste planifié.

## Mission initiale

Concevoir la refonte visuelle globale et totale du portfolio Allen Koch vers une activité de développeur IA
freelance. Claude porte le design ; Codex porte l'audit, la cohérence technique et
les vérifications. Lire le [plan](refonte-plan.md) et l'[audit](audit-2026-10-27.md).
La conception finale relève de RUN-006 dans [le suivi](../runs-workflow.md) ;
appliquer le [contrat de transfert](handoff-contracts.md) pour le relais à Codex.

Clientèles confirmées par Allen : TPE/PME, startups et équipes ayant besoin
d'outils/workflows agents, mais aussi de sites et applications web modernes.
Éviter une vitrine qui ne parle qu'aux développeurs ou qui réduit toute l'offre
à « je code avec une IA ». Montrer le besoin, le livrable et des preuves réelles.

## Ressources et contraintes

- `src/data/` : textes, projets et liens existants ; leur présence n'établit pas
  une expérience client, un niveau d'expertise ni un résultat commercial.
- [DESIGN.md](../DESIGN.md) : baseline historique et renvoi à la direction
  Stitch ; les écarts relevés dans l'audit priment sur ses descriptions de la
  version 1.3.2 non conformes au code.
- [Quatre variantes Stitch importées](maquettes_references/README.md) et leur
  système monochrome : base de la synthèse retenue par Allen (DESIGN.md R8).
- `src/styles/globals/tokens.css` : couleurs et polices disponibles.
- [Première proposition](references/claude-design-proposal.md) : contribution
  de Claude Code obtenue le 27 octobre 2026, non validée, sans vue du navigateur.

React/Vite/TypeScript et CSS natif conservés. Cible one-page avec navigation par
ancres et formulaire contact/devis : consulter le plan actualisé. Les décisions
de RUN-011/016 viennent en phase 2 ; leurs inconnues restent explicites dans
les maquettes de phase 1.
Partir de la palette, typographie, grille et composition Stitch ; proposer les
adaptations nécessaires pour les sections, les états et le contenu réel. Animations
et transitions restent à spécifier. La baseline 1.3.2 et la proposition initiale
ne constituent pas la direction visuelle de cette refonte.
Pas de dépendance ou de prestataire choisi par la seule conception visuelle.
FR/EN, sombre/clair, clavier et réduction des animations doivent être couverts.
Pas de WebGL sur mobile. Les choix desktop peuvent évoluer dans la refonte, mais
doivent être présentés et vérifiés distinctement des choix mobile.

## Livrables du cadrage initial (phase 1 et cible de phase 2)

1. Une synthèse argumentée des quatre variantes Stitch : choix de composition,
   grille, densité, typographie, palette monochrome, projets, iconographie et
   adaptations nécessaires ; expliciter les écarts à la référence.
2. Une composition de la page unique et de sa navigation par ancres ;
   services/prestations, projets conservés en espaces personnels, clients et game dev.
   Prévoir l’emplacement futur « Ils m’ont fait confiance » sans contenu fictif.
3. Des maquettes ou spécifications desktop et mobile, sombre et clair, avec
   textes FR et contrôle de la longueur EN.
4. Les états menu mobile, boutons/liens/focus, projets repliés/dépliés, liens
   absents, images indisponibles, formulaire contact/devis (validation, envoi, succès,
   échec), navigation par ancres et réduction des animations.
5. La liste des composants/styles à réutiliser, modifier, ajouter ou supprimer.
6. Les arbitrages et points non vérifiés ; ne pas annoncer un contrôle navigateur
   ou de contraste si aucune mesure n'a été effectuée.

Les exports Stitch fournissent les références desktop, pas les variantes mobile,
FR/EN et états complets demandés ci-dessus. Allen arbitre la direction finale
avant son implémentation.

## Garde-fous éditoriaux et techniques

- Appliquer les garde-fous anti « vibecode slop » d'Allen (28 octobre 2026),
  détaillés dans [DESIGN.md, section R1](../DESIGN.md#r1-garde-fous-anti--vibecode-slop-) :
  pas d'icônes Lucide, d'emojis, de liquid glass, de tirets cadratins, de polices
  Inter/Geist/Space Grotesk, de bento grids, de fenêtres de terminal, de violet
  ou néon, d'orbes radiaux, de dot grids, d'icônes étincelles, de flèches animées
  ni d'animations au survol. Ils priment sur les maquettes Stitch.
- Phase 1 = refonte visuelle seule : contenu actuel conservé et adapté, aucune
  section ni contenu nouveau (décision d'Allen du 28 octobre 2026).
- Ne pas inventer de clients, témoignages, revenus, gains, délais ou tarifs.
- Qualifier personnel/collaboratif, prototype/MVP, rôle et preuve pour chaque cas.
- Préférer captures authentiques et légendées ; distinguer illustrations et interfaces réelles.
- Un titre principal utile aux prospects ; titres suivants structurés, CTA explicites.
- Préserver la lisibilité du contenu même en cas d'échec d'un effet décoratif.
- Cibles tactiles confortables, focus visible, contraste mesuré, zoom 200 % et
  absence de débordement à 320 px.
- Proposer une simplification avant de multiplier les animations et dépendances.

## Relecture de la première proposition

La piste historique « Atelier technique » vient de Claude. Ses options
web/MVP/workflows sont remplacées pour le contenu par les deux prestations
provisoires demandées par Allen dans RUN-005.
Ses remarques sur les faits doivent être recoupées avec le code : `contact.meta`
existe dans les données mais n'est pas rendu ; les statistiques GitHub ont déjà
une source générée ; le nom d'un outil dans un projet ne doit pas être supprimé
sur une supposition. Le besoin de contenu sans JavaScript serait un changement
de rendu à chiffrer, pas une exigence acquise de migration SSR.

Cette première proposition one-page reste non validée sur le plan visuel ; elle
doit être adaptée au cadrage actuel avec formulaire et références Stitch.

Le code ne fait pas d’hydratation actuellement : il effectue un rendu client.
Pour ce lot, séparer les choix graphiques de la décision éventuelle de prérendu.

## Ordre des phases et références Stitch

Exécuter d'abord la phase 1 : conception/validation visuelle (RUN-006), puis
système visuel sur la baseline (RUN-013). Les contenus définitifs, ancres et
fonctionnalités sont réalisés en phase 2 selon le tableau de suivi.
Les maquettes peuvent anticiper ces évolutions sans prétendre qu'elles fonctionnent.
Les décisions techniques ultérieures peuvent nécessiter une adaptation visuelle ciblée.
Les quatre [références Stitch importées](maquettes_references/README.md) sont le
modèle visuel à reproduire et à adapter. Documenter la variante ou la synthèse
retenue et ses adaptations ; ne pas traiter le HTML exporté comme du code React.
