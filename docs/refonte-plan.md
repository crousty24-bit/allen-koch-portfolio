# Plan de refonte : développeur IA freelance

## Objectif et décisions acquises

Passer d'un portfolio de présentation à un site qui aide un prospect à comprendre
ce qu'Allen peut construire, sur quelles preuves s'appuyer et comment le contacter.

Demandes d'Allen : refonte design, nouvelles sections, angle développeur IA freelance,
design confié à Claude, workflow et ressources pour les agents dans le dépôt.
Clientèles précisées : TPE/PME, startups, outils et workflows agents, réalisation
d'applications et de sites web modernes. Il n'y a pas de niche unique validée.

Périmètre confirmé : refonte visuelle **globale et totale**, pages séparées,
formulaire contact/devis, services/prestations, conservation des projets personnels,
espace projets clients distinct et future section « Ils m'ont fait confiance ».
Les choix d'adaptation reviennent à Claude à partir des quatre
[références Stitch importées](maquettes_references/README.md) et de leur système
monochrome. La palette 1.3.2 n'est pas imposée ; Allen arbitre la direction finale.
Conserver React/Vite/TypeScript et les contrats utiles FR/EN, sombre/clair,
accessibilité et performance mobile. Le rendu multipage et la solution d'envoi
restent à décider avant leur implémentation ; aucun framework ou prestataire
n'est sélectionné par ce plan.

## Proposition de contenu à arbitrer

Promesse de travail, à réécrire avec les preuves disponibles : « Développeur IA
freelance — sites, applications et outils qui simplifient votre travail. »

Trois familles de services proposées couvrent les cibles sans offres redondantes :

| Famille proposée | Besoin du client | Éléments à documenter avant publication |
| --- | --- | --- |
| Sites et applications web | Présenter une activité, créer un outil ou lancer un MVP | Périmètre, livrables et exemples pertinents |
| Intégrations et automatisations IA | Relier des outils, assister une tâche, réduire une manipulation répétitive | Cas maîtrisés, données manipulées, limites et contrôle humain |
| Outils et workflows agents | Outiller le développement et encadrer les agents | Exemples reproductibles, règles de vérification, livrables |

Ces offres sont une proposition éditoriale, pas une attestation de services déjà
vendus. Claude propose une autre répartition (web / MVP / workflows) : choisir une
seule taxonomie après arbitrage, sans afficher six cartes de services redondantes.

## Arborescence proposée à cadrer

| Page proposée | Contenu principal |
| --- | --- |
| Accueil | Promesse, aperçus des prestations/réalisations, méthode et CTA |
| Services | Une ou plusieurs sections d'offres, besoins, livrables et demande de devis |
| Projets | Deux espaces clairement distingués : projets personnels et projets clients |
| À propos | Profil, expertise et parcours |
| Contact / devis | Formulaire et moyen de contact de secours |

Ce découpage est une proposition ; les pages séparées sont demandées, pas ces
URL précises. RUN-011 arrête l'arborescence, la stratégie de rendu/routage et le
traitement FR/EN. Les études de cas peuvent devenir des pages dédiées si leur
contenu le justifie. Prévoir titres/métadonnées propres, accès direct/rechargement,
404, retour navigateur, focus et navigation interpages ; traiter les anciennes
ancres connues et les chemins d'assets imbriqués.

## Design et mouvement

Claude reproduit et adapte le langage visuel Stitch : palette monochrome,
typographie, grille, composants et iconographie ; il précise les choix retenus
parmi les quatre variantes. La proposition précédente « Atelier technique » reste
une ressource non validée ; elle ne contraint pas cette refonte. Spécifier les
mouvements entre états/pages et leur variante reduced-motion,
sans imposer de dépendance d'animation. Vérifier mobile/desktop et sombre/clair.

## Services, projets et confiance

Les familles de services ci-dessus restent à arbitrer puis à intégrer en sections
clairement identifiables, avec CTA de contact/devis. La page Services proposée
n'empêche pas des aperçus sur l'accueil.

Conserver le catalogue personnel actuel, ses contenus et liens. Ajouter un espace
clients distinct : mission, rôle exact, livrables, statut, résultats vérifiables et
accord de publication des informations/assets. Aucun projet personnel ne devient
une mission client sans preuve. En absence de cas client publiable, masquer cet
espace public plutôt que fabriquer des références ; son rendu pourra être vérifié
avec données de test explicitement identifiées hors contenu de production.

« Ils m'ont fait confiance » est une extension future (RUN-018), distincte des
études de cas : références, logos ou témoignages réels avec accord. Prévoir son
emplacement dans les maquettes ; ne publier ni bloc vide, ni logos fictifs. Ce RUN
ne conditionne pas la première release de la refonte.

## Formulaire contact / devis

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
nouveau design. Prévoir une composition partagée (navigation, pied de page,
préférences) et des composants de pages. Les URL et le rendu, plutôt que l'ajout
prématuré d'un routeur ou d'un Context, guident RUN-011/012. Toute dépendance reste
à justifier et valider. Le traitement du formulaire n'autorise pas une plateforme
backend complète, une base de données ou une authentification par défaut.

Chaque passe couvre ses données FR/EN, états, métadonnées, assets et contrôles.
L'implémentation 1.3.2 reste la référence à préserver jusqu'à sa migration ; le
nouveau design n'est pas contraint de conserver ses effets ou sa palette.

## Exécution par RUN

Le suivi opérationnel est centralisé dans [runs-workflow.md](../runs-workflow.md).
RUN-006 couvre le design total ; RUN-011 à RUN-017 découpent architecture multipage,
navigation, système visuel, services, projets et formulaire. RUN-018 prévoit la
confiance future. RUN-007 assemble les passes et RUN-008 valide la release.
Responsables, dépendances et critères vivent dans ce suivi ; les preuves dans
[runs-journal.md](../runs-journal.md). Aucune implémentation ni release automatique.

## Arbitrages restant à faire

- Intitulé exact et promesse principale ; priorité relative entre les trois offres.
- Prestations réellement proposées, périmètre de support et modalités de livraison.
- Rôle exact dans les projets collaboratifs et preuves partageables.
- Zone d'intervention, langues de travail, disponibilité et canal de contact préféré.
- Conservation des statistiques GitHub et des effets WebGL, selon leur utilité.
- Arborescence finale, rendu/routage et URL FR/EN : le toggle actuel ne crée pas
  une version anglaise indexable.
- Solution de contact, destinataire, champs, conservation et vérification de réception.
- Cas clients, références et autorisations réellement disponibles.

Les informations professionnelles/légales à publier doivent être confirmées par
Allen avant la release. Le dépôt ne suffit pas à établir les obligations de son activité.

## Ordre des phases et références Stitch

Exécuter d'abord la phase 1 : conception/validation visuelle (RUN-006), puis
système visuel sur la baseline (RUN-013). Les contenus définitifs, pages/routage,
sections et fonctionnalités sont réalisés en phase 2 selon le tableau de suivi.
Les maquettes peuvent anticiper ces évolutions sans prétendre qu'elles fonctionnent.
Les décisions techniques ultérieures peuvent nécessiter une adaptation visuelle ciblée.
Les quatre [références Stitch importées](maquettes_references/README.md) sont le
modèle visuel à reproduire et à adapter en phase 1. La variante finale ou leur
synthèse reste à arbitrer par Allen avant l'implémentation.
