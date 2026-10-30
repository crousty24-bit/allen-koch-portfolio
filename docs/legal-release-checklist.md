# Registre et contrôle juridique — contact du portfolio

Document de préparation à la publication, à compléter avec les informations
réelles d'Allen et les preuves contractuelles. Ce registre décrit le flux connu ;
il ne confirme ni la conformité juridique ni l'acceptation d'un contrat.

## État connu du traitement

| Élément | État documenté |
| --- | --- |
| Responsable / éditeur | Allen Koch ; activité/entreprise en cours de création. Identité juridique exacte à confirmer. |
| Formulaire | Site statique ; envoi navigateur à Web3Forms. Champs : nom facultatif, email et message requis, clé publique et jeton hCaptcha. Pas de téléphone, pièce jointe ou copie automatique au visiteur. |
| Finalités | Répondre aux demandes générales et traiter les demandes de devis/projet ; filtrer les soumissions abusives et protéger le formulaire. |
| Bases à valider | Pour une demande de devis précontractuelle : mesures précontractuelles à la demande de la personne (RGPD 6(1)(b)), si les faits le permettent. Pour les messages généraux et le filtrage des soumissions : intérêt légitime (6(1)(f)), après avoir documenté l’intérêt et la mise en balance. Chargement facultatif hCaptcha et opérations associées : consentement (6(1)(a)), sans en faire une garantie de licéité des transferts. Ne pas présenter ces bases comme validées avant cette vérification. |
| Destinataires / prestataires | Web3Forms reçoit les données du formulaire et les transmet pour notification email ; hCaptcha fournit le contrôle anti-abus. La boîte destinataire est `allen.kch24@gmail.com`. Vercel est confirmé comme hébergeur par Allen ; la messagerie destinataire est Gmail. Les contrats applicables restent à vérifier. |
| Captcha et anti-spam | Allen rapporte hCaptcha activé, Advanced Spam Filter et niveau Strict dans Web3Forms. Un envoi réel avec hCaptcha a été confirmé par Allen ; Codex n'a pas accès aux tableaux de bord ni à la boîte mail. |
| Durées connues | Web3Forms : réglage du compte rapporté à un an, mais DPA PDF du dashboard = TTL physique de trois ans ; la possibilité de réduire l’effacement physique reste à clarifier. Boîte mail : 30 jours pour une demande sans suite, durée décidée par Allen, sans suppression automatique configurée. Durées des demandes donnant lieu à un projet, des journaux d'hébergement et des données hCaptcha : à établir selon contrats et besoins réels. |
| Alternative | Lien email `mailto:allen.kch24@gmail.com`, sans soumission via le formulaire Web3Forms. |

## À faire avant publication

- [ ] **Identité et mentions légales :** confirmer le nom légal de l'éditeur, son statut au jour de publication, l'adresse postale de contact requise et les coordonnées à publier. Le nom commercial ou « entreprise en cours de création » ne suffit pas à compléter ces champs. Confirmer aussi l'identité et les coordonnées de l'hébergeur du site. Ne pas publier de coordonnées supposées.
- [x] **Politique de confidentialité FR/EN implémentée localement :** contenu distinct des mentions légales, accessible via `#privacy` depuis le formulaire et le pied de page. Publication distante et validation du contenu contre les contrats encore requises. Décrire les champs et données captcha, les finalités et bases effectivement retenues, le caractère facultatif/obligatoire, les destinataires et prestataires, les durées connues et encore à fixer, les droits applicables, la façon de les exercer et le contact du responsable. La version locale décrit les lieux annoncés par les prestataires, sans attester l’acceptation ni l’efficacité de leurs garanties ; vérifier les mécanismes contractuels avant publication. Ne pas reprendre la FAQ Web3Forms comme référence de durée : utiliser sa politique actuelle et le réglage réellement confirmé.
- [ ] **Contrats et transferts :** obtenir et conserver une preuve que les conditions de traitement des données ont été examinées et acceptées lorsqu'elles s'appliquent : [DPA Web3Forms](https://web3forms.com/dpa), [conditions/DPA hCaptcha](https://www.hcaptcha.com/terms), conditions de l'hébergeur du site et du fournisseur de messagerie. Vérifier sous-traitants ultérieurs, lieux de traitement, mécanisme de transfert hors EEE et, si nécessaire, garanties supplémentaires/TIA. À ce jour, aucun accès aux tableaux de bord ni preuve d'acceptation n'est consigné ; ne pas indiquer que ces DPA sont signés ou acceptés.
- [ ] **Durées et suppression :** clarifier auprès du fournisseur la durée physique réelle (réglage annoncé un an / DPA trois ans) avant publication. Définir et appliquer une durée pour les demandes converties en projet et vérifier les durées des journaux chez les prestataires ; ne pas inventer de durée pour ces données. Mettre en place ou documenter la suppression manuelle à 30 jours des demandes sans suite dans la messagerie ; ce délai n'est pas une suppression Web3Forms.
- [ ] **Parcours et preuve :** vérifier que les liens vers mentions légales et politique sont visibles en FR/EN, proches du formulaire et utilisables au clavier/mobile. Vérifier la politique publiée contre la configuration réelle du formulaire, hCaptcha, Web3Forms, hébergement et messagerie. Garder une copie datée des contrats, réglages et textes publiés.

La politique publique de Web3Forms peut évoluer : [politique de confidentialité](https://web3forms.com/privacy). Pour le contrôle hCaptcha, consulter aussi sa [politique de confidentialité](https://www.hcaptcha.com/privacy). La présente liste n'établit pas les conditions commerciales ou transferts réellement applicables au compte d'Allen.

## Vérification du DPA téléchargé

- Allen confirme le 30 octobre avoir lu et téléchargé le DPA Web3Forms depuis
  son dashboard. Fichier local lu par Codex :
  `/mnt/c/Users/allen/Downloads/Web3Forms-DPA.pdf`, version 1.0, « Effective upon acceptance ».
- Section 8, point 17 : TTL **physique de trois ans**, visibilité dashboard selon
  le plan. Cette version ne confirme pas une suppression physique à un an.
  La politique en ligne évoque un maximum de trois ans avec durée inférieure
  possible ; obtenir confirmation écrite de la règle réellement applicable au compte.
- Section 10 : Inde et transferts hors EEE ; incorporation des CCT 2021/914
  par référence. Le module et les annexes applicables ainsi que les garanties
  de la chaîne restent à vérifier. Le téléchargement n’est pas une signature
  observée ; le texte prévoit aussi des modalités d’acceptation par usage.
- Coordonnées Vercel vérifiées dans sa politique et son DPA : 440 N Barranca
  Avenue #4133, Covina, CA 91723, United States. Téléphone hébergeur non
  trouvé dans ces sources officielles : à obtenir auprès du support, pas de
  numéro recopié d’un autre site.
- Allen fournira des coordonnées publiables ; aucun domicile/téléphone personnel
  recherché ni supposé. `publisher.address` et `publisher.phone` restent vides.
- Implémentation locale : `#legal-notice`, `#privacy`, notice de proximité et
  autorisation hCaptcha avant chargement, retrait par rechargement et email
  alternatif. L’interface ne résout pas les vérifications contractuelles.

Question concrète à Web3Forms (à envoyer par Allen) : « Mon dashboard indique un
an de conservation. Mon DPA version 1.0, section 8(17), annonce un TTL physique
de trois ans. Quelle durée effective s’applique à mes soumissions, aux journaux
et aux sauvegardes ? Puis-je imposer une suppression physique à un an et obtenir
la version du DPA/annexes de transfert qui le confirme ? »
