# Allen Koch - Portfolio Développeur

> Refonte locale intégrée : RUN-007, RUN-022 et RUN-023 clôturés. RUN-008
> vérifie le build de production et prépare la release sur
> `feature/run-008-validation-release`. Validation visuelle/contenu d’Allen
> encore requise ; baseline de production déclarée : 1.3.2. Aucune nouvelle
> release ni publication annoncée. Voir le [suivi](runs-workflow.md) et les
> [preuves et limites](runs-journal.md).

L’itération actuelle présente Allen comme développeur Fullstack & IA : services,
projets personnels, client autorisé et game dev, Stack, À propos et contact
sur une page avec ancres. FR/EN, thèmes clair/sombre et responsive sont conservés.
Le formulaire Web3Forms (RUN-017) est intégré localement avec une clé publique
de test ; Allen a confirmé l'envoi et la réception réels. Le lien email
reste disponible. La section
« Ils m’ont fait confiance » (RUN-018) reste future et exige des références autorisées.
Le [brief](brief.md) définit le périmètre courant ; les descriptions de maintenance
ci-dessous restent celles de la baseline historique 1.3.2.

Le suivi agentique sépare le [brief produit](brief.md), les
[RUN planifiés et leurs responsables](runs-workflow.md), le
[journal d'exécution](runs-journal.md) et les
[règles de délégation](docs/handoff-contracts.md). Un RUN actif au maximum ;
le design reste confié à Claude et l'intégration à Codex.

![Version](https://img.shields.io/badge/version-1.3.2-blue)
![Status](https://img.shields.io/badge/status-release%201.3.2-success)
![Stack](https://img.shields.io/badge/stack-React%20%7C%20Vite%20%7C%20TypeScript-2e5bff)
![License](https://img.shields.io/badge/license-private-lightgrey)

Portfolio développeur one-page d'Allen Koch, conçu pour présenter un profil fullstack et IA, des projets sélectionnés, une stack technique et des liens de contact professionnels.

Version `1.3.2` est l'état stable de production actuel. Le projet reste limité
à de petites améliorations front/design, à des mises à jour ponctuelles de
données et à l'hygiène de release.

## Aperçu

Ce projet est un site statique moderne, responsive et orienté présentation professionnelle.

Objectifs principaux :

- présenter un profil de développeur fullstack et IA ;
- mettre en avant des projets web et workflows IA ;
- documenter une stack Rails / React / TypeScript ;
- fournir des liens directs vers GitHub, LinkedIn et email professionnel ;
- garder une base de code simple, maintenable et prête à déployer.

Évolutions prévues après `1.3.2` :

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

La direction de refonte s'appuie sur les [quatre maquettes Stitch importées](./docs/maquettes_references/README.md)
et leur système monochrome, à reproduire et à adapter. [`DESIGN.md`](./DESIGN.md)
distingue cette cible de la baseline actuelle.

Principes de la version 1.3.2 actuellement livrée :

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
nvm install
nvm use
npm ci
npm run dev
```

Le projet utilise Node 24 et npm 11. Le fichier `.nvmrc`, les contraintes
`engines` et les workflows CI partagent cette même base. Le site est ensuite
disponible sur l'URL locale indiquée par Vite.

## Formulaire de contact

Copier `.env.example` vers `.env.local` et renseigner la clé **publique**
Web3Forms dans `VITE_WEB3FORMS_ACCESS_KEY`. Sans clé, la section Contact affiche
uniquement le lien email. En déploiement, définir cette variable dans
l'environnement de l'hébergeur après les [vérifications de réception et de
conservation](docs/contact-form-contract.md). Ne pas y placer de clé privée.

## Ajouter un projet

1. Ajouter l'image source sous `public/projects/` avec un nom unique.
2. Créer les variantes WebP nécessaires sous `public/projects/generated/`.
   Ne jamais remplacer un fichier déjà déployé : utiliser un nouveau nom pour
   respecter le cache annuel.
3. Ajouter le projet dans `src/data/projects/projects.ts` avec `description`,
   `imageAlt` et `status` en français et en anglais, puis renseigner les chemins
   de l'image source et du `srcset` WebP.
4. Vérifier les deux langues, les thèmes clair et sombre, puis les rendus mobile
   et desktop.
5. Exécuter les vérifications documentées ci-dessous avant le push.

## Vérifications avant push

Avant de pousser sur GitHub :

```bash
npm run build
npm run lint
npm run biome:check
npm run test
npm audit --audit-level=moderate
```

État validé pour release `1.3.2` :

- build production OK ;
- lint OK ;
- Biome OK ;
- tests OK ;
- audit des dépendances de production sans vulnérabilité modérée ou supérieure ;
- audit complet sans vulnérabilité modérée ou supérieure ;
- aucune dépendance inutile ajoutée.

Commandes validées lors de l'audit final :

```bash
npm run build
npm run lint
npm run biome:check
npm run test
npm audit --audit-level=moderate
```

La release `1.3.2` renforce l'accessibilité, la résilience du rendu décoratif,
la lisibilité mobile et les conventions de maintenance. Les tests associés
couvrent notamment le stockage local, l'ordre des projets et la timeline.

Le workflow GitHub Actions de mise à jour des statistiques hero conserve un
accès écriture limité à l'étape qui pousse le fichier généré.

## Notes de sécurité

Le site est statique et ne traite pas d'entrée utilisateur côté serveur. Les surfaces principales à surveiller sont :

- liens externes ;
- images et polices chargées depuis des domaines tiers ;
- absence de secrets dans le dépôt ;
- dépendances npm et chaîne de build.

Les liens externes ouverts dans un nouvel onglet utilisent `rel="noopener noreferrer"`.

## Licence

Projet personnel privé. Tous droits réservés.
