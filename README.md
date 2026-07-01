# Allen Koch - Portfolio Développeur

![Version](https://img.shields.io/badge/version-1.2.1-blue)
![Status](https://img.shields.io/badge/status-release%201.2.1-success)
![Stack](https://img.shields.io/badge/stack-React%20%7C%20Vite%20%7C%20TypeScript-2e5bff)
![License](https://img.shields.io/badge/license-private-lightgrey)

Portfolio développeur one-page d'Allen Koch, conçu pour présenter un profil fullstack junior, des projets sélectionnés, une stack technique et des liens de contact professionnels.

Version `1.2.1` est l'état stable de production actuel. Le projet reste limité
à de petites améliorations front/design, à des mises à jour ponctuelles de
données et à l'hygiène de release.

## Aperçu

Ce projet est un site statique moderne, responsive et orienté présentation professionnelle.

Objectifs principaux :

- présenter un profil de développeur fullstack junior ;
- mettre en avant des projets web et workflows IA ;
- documenter une stack Rails / React / TypeScript ;
- fournir des liens directs vers GitHub, LinkedIn, X et email professionnel ;
- garder une base de code simple, maintenable et prête à déployer.

Évolutions prévues après `1.2.1` :

- ajouter ou mettre à jour des projets ;
- mettre à jour la stack, la bio ou les liens ;
- ajuster des détails visuels mineurs sans changer le périmètre produit ;
- améliorer ponctuellement l'accessibilité, la performance ou le SEO.

Hors périmètre par défaut :

- backend ;
- base de données ;
- authentification ;
- routing applicatif complexe ;
- formulaire serveur ;
- refonte structurelle sans demande explicite.

## Stack

- React
- Vite
- TypeScript
- ESLint
- Biome
- CSS natif avec variables de design

Le projet ne contient pas :

- backend ;
- base de données ;
- authentification ;
- formulaire serveur ;
- routing applicatif complexe.

## Design

La direction visuelle est documentée dans [`DESIGN.md`](./DESIGN.md).

Principes retenus :

- thème sombre par défaut ;
- style premium, sobre et technique ;
- glassmorphism léger ;
- grille responsive ;
- animations CSS limitées à `transform` et `opacity` ;
- aucun ajout de dépendance UI externe.

## Structure

```txt
src/
  components/
    Navbar/
    Hero/
    ProjectsSection/
    ProjectCard/
    StackSection/
    AboutSection/
    ContactSection/
    Footer/
  data/
    links/
    projects/
    skills/
    stack/
  assets/
    images/
    icons/
  styles/
    globals/
```

## Scripts

```bash
npm run dev
```

Démarre le serveur de développement Vite.

```bash
npm run build
```

Compile TypeScript et génère le build de production.

```bash
npm run lint
```

Lance ESLint sur le projet.

```bash
npm run biome:check
```

Vérifie le formatage et les règles Biome sans réécriture.

```bash
npm run format
```

Formate le projet avec Biome.

## Installation

```bash
npm install
npm run dev
```

Le site est ensuite disponible sur l'URL locale indiquée par Vite.

## Vérifications avant push

Avant de pousser sur GitHub :

```bash
npm run build
npm run lint
npm run biome:check
npm run test
npm audit --audit-level=moderate
```

État validé pour release `1.2.1` :

- build production OK ;
- lint OK ;
- Biome OK ;
- tests OK ;
- audit npm sans vulnérabilité modérée ou supérieure ;
- aucune dépendance inutile ajoutée.

Commandes validées lors de l'audit final :

```bash
npm run build
npm run lint
npm run biome:check
npm run test
npm audit --audit-level=moderate
```

La release `1.2.1` durcit aussi le workflow GitHub Actions de mise à jour des
statistiques hero : la génération automatique reste planifiée, mais le push du
fichier généré est isolé dans une étape disposant seule de l'accès écriture.

## Notes de sécurité

Le site est statique et ne traite pas d'entrée utilisateur côté serveur. Les surfaces principales à surveiller sont :

- liens externes ;
- images et polices chargées depuis des domaines tiers ;
- absence de secrets dans le dépôt ;
- dépendances npm et chaîne de build.

Les liens externes ouverts dans un nouvel onglet utilisent `rel="noopener noreferrer"`.

## Licence

Projet personnel privé. Tous droits réservés.
