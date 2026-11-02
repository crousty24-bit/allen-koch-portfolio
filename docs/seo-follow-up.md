# Suivi SEO après refonte — 2 novembre 2026

## Ciblage commercial différé par Allen

Le point 2 de l'audit est volontairement différé : la description actuelle
présente d'abord un portfolio et évoque des « solutions IA », tandis que les
services présentent sites/applications web et développement assisté par IA avec
workflows agents. Ne pas réécrire ce positionnement sans nouveau mandat.

Une prochaine révision pourra harmoniser description, Open Graph et Twitter avec
les prestations confirmées et évaluer la requête « développeur fullstack freelance
en Alsace ». Ce ciblage reste une hypothèse : aucun volume ou niveau de concurrence
n'a été mesuré. La traduction EN conserve le sens actuel, sans modifier l'offre.

## Contrôle du rendu et de l'indexation

RUN-026 conserve toutes les cartes publiées dans le DOM dès le premier rendu
React, avec la grille supplémentaire repliée via `hidden`. Les images restent
différées. La description suit FR/EN et la préférence locale ; canonical et
métadonnées de partage restent attachées à l'URL française unique.

L'anglais n'a pas d'URL indexable autonome. Aucun hreflang ni routage ajouté.
Le HTML HTTP reste une coquille React : aucun prérendu introduit par ce lot.

Après publication, dans l'inspection d'URL Search Console de
`https://allenkoch.dev/` :

1. Examiner la date de dernière exploration et la canonical choisie par Google.
2. Ouvrir la page explorée et son HTML : rechercher les dix titres de projets,
   leurs descriptions et liens, dont Sokwak AI, Questonaut et Kane.
3. Comparer au test en direct et à son HTML rendu. Un test en direct ne prouve
   pas que la version est déjà indexée.
4. Si l'index conserve l'ancienne version, demander une réindexation puis
   contrôler après une nouvelle exploration, sans promettre de délai.

Le test par défaut reste français : le sélecteur anglais n'est pas une deuxième
URL à inspecter. Sans accès Search Console, le rendu indexé reste inconnu.

Allen confirme le 2 novembre avoir accès à l'inspection d'URL. Aucun connecteur
Search Console n'est disponible dans cette session. Le code corrigé n'a pas
été publié dans ce lot.

## Preuves Search Console reçues le 2 novembre

- Captures fournies par Allen : URL sur Google, page indexée, HTTPS valide.
  Dernière exploration affichée : 28 octobre 2026 à 16:31:38, Googlebot pour
  smartphone ; exploration autorisée, récupération réussie, indexation autorisée.
- Canonical déclarée : `https://allenkoch.dev/` ; Google choisit l'URL inspectée.
  La capture ne montre pas la barre de l'URL inspectée, mais ces signaux sont
  cohérents avec l'accueil canonique.
- Test en direct du 2 novembre à 17:31:46 : page accessible et indexable par
  l'outil pour smartphone. Il ne prouve pas une mise à jour de l'index Google.
- Export Coverage nommé 2026-11-02 : données graphiques jusqu'au 23 octobre,
  une URL indexée et trois non indexées. Seule raison : « Page avec redirection ».
  Les trois URL sources ne figurent pas dans les CSV fournis : impossible de
  les identifier individuellement ou de les qualifier toutes de normales.
- L'inspection affiche « Erreur de traitement temporaire » pour les sitemaps.
  Contrôle HTTP du 2 novembre : `/sitemap.xml` répond 200, XML contenant seulement
  l'accueil canonique. Cause du message inconnue ; vérifier le rapport Sitemaps
  avant toute modification du fichier.
- La dernière exploration du 28 octobre précède la release du 30 octobre et
  les correctifs locaux RUN-026 du 2 novembre.

### HTML de la page testée fourni ensuite par Allen

Le fichier HTML rendu fourni le 2 novembre contient cinq cartes : Diff Impact
Analyzer, SnipStack, Code Quality Guardian, SEOS et Milady's Knight. Sokwak AI,
Portfolio AK, Questonaut, Mission Control et Kane n'y ont pas de carte ; Sokwak,
Questonaut, Mission Control et Kane sont également absents de tout le texte.
Cela confirme le défaut de découvrabilité avant correction sur la page testée.

Titre Fullstack & IA, canonical racine, description française et script JSON-LD
sont présents. Services, catégories de projets, Stack, About et Contact sont
rendus : le problème est le montage conditionnel des cartes supplémentaires,
pas une absence générale d'exécution React dans ce test.

Allen décrit cet export comme « page testée » : il est traité comme HTML du
test en direct, sans preuve qu'il correspond à la version conservée dans
l'index Google. Les dix cartes corrigées restent à contrôler après publication,
puis dans le HTML de la page explorée après une nouvelle exploration.

Références :
[contenu différé](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading),
[outils de diagnostic Google](https://developers.google.com/search/help/debug).
