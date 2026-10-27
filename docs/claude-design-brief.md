# Brief design pour Claude

## Mission

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
- `DESIGN.md` : baseline historique ; les écarts relevés dans l'audit priment
  sur ses descriptions non conformes au code.
- `src/styles/globals/tokens.css` : couleurs et polices disponibles.
- [Première proposition](references/claude-design-proposal.md) : contribution
  de Claude Code obtenue le 27 octobre 2026, non validée, sans vue du navigateur.

React/Vite/TypeScript et CSS natif conservés. Cible multipage avec formulaire
contact/devis : consulter le plan actualisé et les décisions de RUN-011/016.
Palette, typographie, animations et transitions sont à repenser intégralement ;
la baseline et la proposition initiale ne constituent pas une direction imposée.
Pas de dépendance ou de prestataire choisi par la seule conception visuelle.
FR/EN, sombre/clair, clavier et réduction des animations doivent être couverts.
Pas de WebGL sur mobile. Les choix desktop peuvent évoluer dans la refonte, mais
doivent être présentés et vérifiés distinctement des choix mobile.

## Livrables demandés pour la prochaine étape

1. Une nouvelle direction visuelle argumentée : grille, densité, typographie, couleurs,
   traitement des projets, iconographie et rôle des effets.
2. Une composition des pages et de leur navigation selon l’arborescence retenue ;
   services/prestations, projets personnels conservés et espace clients distinct.
   Prévoir l’emplacement futur « Ils m’ont fait confiance » sans contenu fictif.
3. Des maquettes ou spécifications desktop et mobile, sombre et clair, avec
   textes FR et contrôle de la longueur EN.
4. Les états menu mobile, boutons/liens/focus, projets repliés/dépliés, liens
   absents, images indisponibles, formulaire contact/devis (validation, envoi, succès,
   échec), navigation/404 et réduction des animations.
5. La liste des composants/styles à réutiliser, modifier, ajouter ou supprimer.
6. Les arbitrages et points non vérifiés ; ne pas annoncer un contrôle navigateur
   ou de contraste si aucune mesure n'a été effectuée.

La première proposition textuelle remplit une partie du cadrage, pas ces livrables
visuels ni leur validation. Allen arbitre la direction avant son implémentation.

## Garde-fous éditoriaux et techniques

- Ne pas inventer de clients, témoignages, revenus, gains, délais ou tarifs.
- Qualifier personnel/collaboratif, prototype/MVP, rôle et preuve pour chaque cas.
- Préférer captures authentiques et légendées ; distinguer illustrations et interfaces réelles.
- Un titre principal utile aux prospects ; titres suivants structurés, CTA explicites.
- Préserver la lisibilité du contenu même en cas d'échec d'un effet décoratif.
- Cibles tactiles confortables, focus visible, contraste mesuré, zoom 200 % et
  absence de débordement à 320 px.
- Proposer une simplification avant de multiplier les animations et dépendances.

## Relecture de la première proposition

La piste « Atelier technique » vient de Claude et reste à valider. Ses options
web/MVP/workflows et le parcours du plan sont deux variantes à arbitrer.
Ses remarques sur les faits doivent être recoupées avec le code : `contact.meta`
existe dans les données mais n'est pas rendu ; les statistiques GitHub ont déjà
une source générée ; le nom d'un outil dans un projet ne doit pas être supprimé
sur une supposition. Le besoin de contenu sans JavaScript serait un changement
de rendu à chiffrer, pas une exigence acquise de migration SSR.

Cette première proposition était fondée sur la cible one-page antérieure ; elle
ne remplace pas le nouveau cadrage multipage avec formulaire.

Le code ne fait pas d’hydratation actuellement : il effectue un rendu client.
Pour ce lot, séparer les choix graphiques de la décision éventuelle de prérendu.
