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
  (254 caractères), `message` obligatoire (5 000 caractères), plus la clé d'accès.
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
Si des abus apparaissent, activer et tester hCaptcha dans le compte ; la clé
publique seule ne bloque pas toute requête automatisée. Le honeypot Web3Forms
est actuellement déconseillé par sa [documentation](https://docs.web3forms.com/getting-started/customizations/spam-protection/spam-protection).

Le navigateur transmet les champs à Web3Forms pour notification par email.
Une courte notice FR/EN et un lien vers sa [politique de confidentialité](https://web3forms.com/privacy)
sont affichés près du bouton. Allen a retenu 30 jours de conservation **dans sa
messagerie** pour les demandes sans suite, sans suppression automatique autorisée.
Web3Forms indique une conservation des soumissions configurable de 7 jours à
3 ans selon son [offre](https://web3forms.com/pricing) ; le réglage effectif du
compte de test est inconnu. La visibilité de 30 jours dans le tableau de bord
gratuit n'est pas une suppression des données au bout de 30 jours. Vérifier et
fixer le paramètre de conservation avant publication ; ajuster alors la notice.

## Vérification et publication

- Tests locaux : rendu FR/EN, thèmes et écrans étroits, succès/rejet simulés,
  double soumission et conservation de saisie après rejet.
- Test réel autorisé vers `allen.kch24@gmail.com` : constater séparément
  l'acceptation par l'API et la réception en messagerie. Un succès API ne prouve
  pas la livraison de l'email.
- Le test direct depuis cet environnement a rencontré une page de vérification
  Cloudflare, et le test Chrome local a affiché l'échec d'envoi ; aucune réponse
  JSON d'acceptation ni réception effective n'est donc établie. À confirmer
  depuis le navigateur et le réseau d'Allen avant publication.
- Avant déploiement : confirmer destinataire de la clé, réglage de conservation,
  anti-spam effectif et coût/quotas du plan choisi ; ajouter la clé publique à
  l'environnement du site puis effectuer un envoi de contrôle reçu en messagerie.

Sources : [installation et clé publique](https://docs.web3forms.com/getting-started/installation),
[API](https://docs.web3forms.com/getting-started/api-reference),
[tarifs](https://web3forms.com/pricing), [confidentialité](https://web3forms.com/privacy).
