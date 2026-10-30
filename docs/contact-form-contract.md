# RUN-017 — Contact par Web3Forms

Le 30 octobre 2026, Allen a demandé la reprise du formulaire et choisi
Web3Forms. Il a fourni une première clé publique pour les essais en développement.
La décision RUN-016 du 29 octobre (lien email seul, formulaire reporté) est donc
supplantée pour ce RUN. Le lien `mailto:allen.kch24@gmail.com` reste visible comme
alternative. Aucun abonnement, compte supplémentaire ou déploiement n'est demandé.

## Mise en place

- Site statique React/Vite : le navigateur envoie `FormData` à
  `https://api.web3forms.com/submit`. La [documentation API](https://docs.web3forms.com/getting-started/api-reference)
  recommande l'appel côté navigateur et décrit la réponse JSON `success`.
- Clé **publique** : `VITE_WEB3FORMS_ACCESS_KEY` dans `.env.local` pour les essais.
  Ce fichier est ignoré par Git. Copier `.env.example` et renseigner une clé
  publique dans la configuration du déploiement seulement après validation.
  Sans clé, seul le lien email est affiché. Ne jamais mettre une clé privée dans
  une variable `VITE_` ni dans le bundle.
- Champs transmis : `name` facultatif (100 caractères), `email` obligatoire
  (254 caractères), `message` obligatoire (5 000 caractères), plus la clé d'accès
  publique et le jeton `h-captcha-response`.
  Pas de téléphone, budget, fichier, copie au visiteur ou catalogue de devis.
- Envoi unique pendant l'attente, limite de 15 secondes, succès seulement sur
  réponse HTTP réussie avec `success: true`. En cas de rejet, panne, réponse
  inattendue ou délai dépassé, la saisie est conservée et le lien email demeure.
  Le formulaire efface la saisie uniquement après acceptation par l'API.

## Validation, abus et données

Les attributs HTML contrôlent les champs dans le navigateur. L'[API Web3Forms](https://docs.web3forms.com/getting-started/api-reference)
accepte des champs arbitraires ; aucune règle personnalisée de longueur ou de
présence côté service n'est établie pour cette clé. Ne pas présenter ces contrôles
HTML comme une validation serveur garantie. Web3Forms annonce un [filtrage anti-spam côté serveur](https://docs.web3forms.com/getting-started/customizations/spam-protection).
Allen confirme avoir activé hCaptcha, Advanced Spam Filter et le niveau Strict
dans le compte le 30 octobre. Le composant React officiel hCaptcha utilise la
clé de site gratuite indiquée par Web3Forms ; le formulaire exige un jeton avant
l'appel API et le réinitialise après chaque tentative. Ces réglages du compte
sont rapportés par Allen, sans lecture indépendante du tableau de bord. Le
honeypot Web3Forms
est actuellement déconseillé par sa [documentation](https://docs.web3forms.com/getting-started/customizations/spam-protection/spam-protection).
Le formulaire ne construit ni HTML ni en-tête email à partir des saisies ; React
affiche ses messages fixes et ignore le texte renvoyé par l'API. Un test navigateur
avec une chaîne HTML et un message API hostiles confirme qu'ils ne sont pas
exécutés dans la page. Cela ne prouve pas comment Web3Forms échappe le contenu
dans l'email reçu : aucune règle d'injection configurable côté service n'a été
identifiée dans sa [référence API](https://docs.web3forms.com/getting-started/api-reference).

Le navigateur transmet les champs à Web3Forms pour notification par email.
Une courte notice FR/EN et des liens vers les politiques de
[Web3Forms](https://web3forms.com/privacy) et de [hCaptcha](https://www.hcaptcha.com/privacy)
sont affichés près du bouton. Allen a retenu 30 jours de conservation **dans sa
messagerie** pour les demandes sans suite, sans suppression automatique autorisée.
Web3Forms indique une conservation des soumissions configurable de 7 jours à
3 ans selon son [offre](https://web3forms.com/pricing). Allen confirme avoir
réglé ce formulaire sur **un an** dans Web3Forms le 30 octobre. La visibilité
de 30 jours dans le tableau de bord gratuit n'est pas une suppression des
données au bout de 30 jours. La notice publique indique un an ; une durée plus courte reste possible
si Allen le souhaite. La politique de 30 jours en messagerie est distincte.
La [politique Web3Forms](https://web3forms.com/privacy) annonce une conservation
maximale de trois ans, sauf durée plus courte configurée ou suppression anticipée.

## Vérification et publication

- Tests locaux : rendu FR/EN, thèmes et écrans étroits, succès/rejet simulés,
  double soumission et conservation de saisie après rejet.
- Test réel autorisé vers `allen.kch24@gmail.com` : constater séparément
  l'acceptation par l'API et la réception en messagerie. Un succès API ne prouve
  pas la livraison de l'email.
- Le test direct depuis cet environnement a rencontré une page de vérification
  Cloudflare, et le test Chrome local a affiché l'échec d'envoi ; aucune réponse
  JSON d'acceptation n'a été observée ici. Allen a ensuite confirmé un envoi et
  une réception réels depuis son environnement le 30 octobre 2026.
- Avant déploiement : confirmer destinataire de la clé et coût/quotas du plan
  choisi ; ajouter la clé publique à l'environnement du site. Un nouvel essai
  sur le déploiement vérifiera la présence du widget, l'envoi et la réception.
- Audit ciblé du 30 octobre : les sources publiques confirment la possibilité
  d'une durée plus courte et le filtrage serveur par défaut. Allen a confirmé
  les paramètres réels du compte ; hCaptcha est intégré au frontend. Les tests
  locaux simulent le jeton et l'API. Allen confirme ensuite un envoi réel avec
  hCaptcha activé, succès affiché et email reçu. Le rendu de l'email final n'a
  pas été audité pour les charges hostiles.

Sources : [installation et clé publique](https://docs.web3forms.com/getting-started/installation),
[API](https://docs.web3forms.com/getting-started/api-reference),
[tarifs](https://web3forms.com/pricing), [confidentialité](https://web3forms.com/privacy).
