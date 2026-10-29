# RUN-016 — Décision contact : lien email seul pour l'instant

Décision validée par Allen le 29 octobre 2026 : conserver le contact par email,
sans formulaire ni prestataire d'envoi pour l'itération actuelle. RUN-016 est
clôturé sur ce périmètre révisé ; RUN-017 est reporté, sans être annulé.

- Adresse confirmée : `allen.kch24@gmail.com`, déjà utilisée par le lien mailto.
- Allen autorise un futur message de contrôle du formulaire vers cette même
  adresse, lorsqu'un formulaire sera repris et configuré. Aucun envoi maintenant.
- Demandes n'aboutissant pas à une mission : conservation retenue de 30 jours
  dans la messagerie. Aucune suppression automatique ou intervention Gmail
  n'est configurée/autorisée par ce RUN. Cette décision ne fixe pas une durée
  pour les échanges liés à une mission ni pour les sauvegardes du fournisseur.
- Aucun fournisseur, compte, abonnement, clé ou endpoint choisi/créé.
- Conserver l'interface Contact actuelle : pas de champs désactivés, maquette
  faussement opérationnelle, statut d'envoi ou nouveau traitement de données.

La suite visuelle peut continuer avec RUN-021 (timeline About). Le formulaire
n'est pas un préalable à l'assemblage de l'itération avec contact email seul.
Sa reprise demandera un mandat et le choix réel du prestataire/configuration,
ainsi que la notice adaptée au traitement effectivement mis en place.

## Étude antérieure, non retenue pour l'itération actuelle

Les sections suivantes conservent la proposition étudiée, pas une décision ni
une autorisation d'intégration. Prix et capacités datés du 29 octobre 2026 devront
être revérifiés lors d'une éventuelle reprise.

## Option étudiée : traitement hébergé, site toujours statique

Utiliser Formspree pour un premier essai : endpoint de formulaire public, envoi
avec fetch natif, validation dans le service et notification vers la messagerie
d'Allen. Aucun SDK, serveur applicatif, BDD ou authentification ajouté au portfolio.
Le choix du fournisseur reste une proposition ; le site conserve son lien email.

| Option | Intérêt pour ce site | Limites et configuration à vérifier |
| --- | --- | --- |
| Formspree, recommandé pour l'essai | Endpoint direct, validation Workflow documentée sur tous les plans, réponses AJAX et filtrage de spam | Free : 50 soumissions/mois et archive accessible 30 jours, présenté pour tests/développement. Personal : 15 USD/mois en facturation mensuelle ou 120 USD/an. Aucun abonnement autorisé ; usage/plan de production à confirmer avant publication. |
| Endpoint minimal avec Resend | Validation et traitement maîtrisés dans une fonction serveur | Ajoute du code serveur, clé secrète, configuration d'expéditeur et anti-abus à maintenir. Offre Resend Free : limite 100 emails/jour ; coût complet et adéquation de l'hébergement non établis. Pas retenu par défaut pour ce premier formulaire. |

Prix et limites sont ceux publiés lors de la consultation, pas une estimation de
facture ni une garantie future. L'archive visible de 30 jours ne signifie pas que
toutes les copies techniques et les emails sont supprimés après 30 jours.

Sources officielles consultées : [offres Formspree](https://formspree.io/plans/),
[limites de compte](https://help.formspree.io/articles/account-management/account-limits),
[Workflow et validation](https://help.formspree.io/articles/building-your-form/getting-started-with-workflow/),
[exemple fetch natif](https://formspree.io/blog/formspree-ajax/),
[offres Resend](https://resend.com/pricing).
La documentation ancienne des projets Formspree distingue CLI/dashboard, tandis
que Workflow documente maintenant des règles dans l'interface sur tous les plans :
la configuration réellement disponible doit être contrôlée dans le compte choisi.

## Champs minimaux proposés

Un seul formulaire sert au contact et aux demandes de devis. Les prestations
restant provisoires, ne pas ajouter de catalogue de choix ni de logique de devis.

| Champ transmis | Libellé FR / EN | Règle proposée |
| --- | --- | --- |
| name | Nom (facultatif) / Name (optional) | Texte, 100 caractères maximum |
| email | Email / Email | Obligatoire, adresse valide, 254 caractères maximum |
| message | Votre message / Your message | Obligatoire, non vide, 5 000 caractères maximum |

Pas de téléphone, société, budget, délai, pièce jointe, abonnement marketing ou
copie automatique au visiteur pour cette première version. Les besoins de devis
peuvent être décrits dans le message. La langue sert à l'interface FR/EN, sans
champ métier supplémentaire requis.

Configurer les règles requises/type/longueur dans Workflow, en plus des contrôles
HTML et React. Vérifier par requêtes directes à l'endpoint que les données
manquantes/invalides sont refusées. Ne pas confondre contrôle navigateur et
validation du traitement ; ne pas annoncer de liste blanche stricte des champs
supplémentaires si le prestataire ne la garantit pas.

## Destinataire, données et conservation

Adresse confirmée par Allen : allen.kch24@gmail.com. Le futur test du formulaire
vers cette même adresse est autorisé ; il n'est pas exécuté tant que le formulaire
est reporté. Aucune lecture de messagerie n'est demandée.

Flux proposé : navigateur → Formspree → messagerie d'Allen. Ne transmettre que
les trois champs métier ; le service reçoit aussi les informations techniques de
la requête. Sa politique et la configuration réelle doivent préciser ce qui est
conservé, où et pour combien de temps. Formspree annonce un hébergement AWS aux
États-Unis dans sa [page sécurité](https://formspree.io/security/).

La conservation dans le service, ses éventuelles sauvegardes et les emails reçus
sont distincts. Allen fixe à 30 jours la conservation en messagerie des demandes
sans suite. La mise en œuvre de cette politique reste à sa charge ; aucune
suppression automatique n'est configurée. Les durées du prestataire futur seront
à vérifier lors de sa sélection.
La notice FR/EN de RUN-017 indiquera la finalité de réponse, le prestataire choisi,
les destinataires, les durées confirmées et le contact pour les demandes relatives
aux données. Aucun engagement de conformité juridique n'est déduit de ces documents.

## Configuration et anti-abus

- Configuration frontend : VITE_CONTACT_FORM_ENDPOINT, URL HTTPS du formulaire
  choisi. C'est une adresse publique, pas une clé secrète. Aucune clé d'administration,
  de messagerie ou d'envoi privé dans une variable VITE_ ou dans le bundle.
- Configurer et vérifier destinataire, notification, règles Workflow et quota dans
  le compte. Un endpoint non configuré ne donne pas un formulaire opérationnel :
  garder le contact email, sans faux succès ni envoi vers une adresse par défaut.
- Activer le filtrage Formshield et les restrictions de domaine disponibles ;
  autoriser explicitement les domaines de test nécessaires, sans laisser une
  liste de prévisualisations arbitraires en production.
- Choisir un réglage reCAPTCHA compatible avec l'envoi AJAX. Le
  [guide officiel Vercel/Formspree](https://vercel.com/kb/guide/deploying-react-forms-using-formspree-with-vercel)
  décrit soit la désactivation du challenge par défaut, soit une clé reCAPTCHA
  propre. Ne pas promettre un captcha invisible sans configuration : le mode
  minimal proposé repose sur filtrage + domaines, sans script captcha ajouté par
  défaut. Son fonctionnement et ses limites restent à vérifier sur le compte.
- Destinataire et sujet de notification sont fixes côté service ; l'email visiteur
  sert à la réponse, sans saisie libre d'en-têtes, destinataire ou copie à un tiers.

## Contrat d'interface pour RUN-017

- Labels et erreurs FR/EN accessibles, focus utile, thème clair/sombre et responsive.
  Claude conçoit l'interface ; consultation shadcn et cadrage CSS avant les nouveaux
  composants de base, selon AGENTS.md. Aucune dépendance décidée ici.
- Envoi POST à l'endpoint configuré, Accept application/json, avec fetch natif et
  FormData ; bouton désactivé pendant l'attente pour éviter les doubles clics.
- Succès seulement après réponse HTTP réussie et JSON conforme au format accepté
  observé sur l'endpoint de contrôle. Ne pas traiter une page HTML/challenge comme
  une confirmation. Le schéma de réponse réel reste à relever à la configuration.
- Message utilisateur : « Votre demande a été transmise. » / “Your enquiry has
  been submitted.” Cela ne promet pas la livraison finale de l'email.
- Données invalides : erreurs associées aux champs. Quota dépassé, service arrêté,
  réseau indisponible ou réponse inattendue : message d'échec et alternative email.
  Conserver la saisie en cas d'échec ; la réinitialiser seulement après acceptation.
- Prévoir une limite d'attente, sans renvoi automatique : une réponse absente ne
  prouve pas que le traitement n'a pas accepté la première requête.

## Vérifications à reprendre si le formulaire est relancé

La décision email seul clôture RUN-016. Une reprise du formulaire nécessitera un
cadrage complémentaire : fournisseur/plan, endpoint, validation, anti-abus et données.
Les réponses success/erreurs doivent être confrontées à la documentation et à la
configuration réelle. Aucune configuration réelle ni réponse fournisseur observée
pour l'instant ; ce document ne les présente pas comme vérifiées.

RUN-017 testera le rendu et les interactions avec réponses simulées : acceptation,
rejet de validation, quota, panne réseau, attente, double clic et conservation de
saisie. Une soumission réelle devra ensuite arriver dans une boîte de contrôle
explicitement autorisée ; noter acceptation du service et réception constatée
séparément. Aucun message à un tiers ni compte/abonnement créé sans mandat.

Pour une éventuelle reprise : choisir fournisseur/coût et confirmer les champs,
puis configurer l'endpoint. L'adresse de réception/test et les 30 jours pour les
demandes sans suite sont déjà validés ; ne pas redemander ces arbitrages sauf
changement du périmètre. Aucun secret dans le chat.
