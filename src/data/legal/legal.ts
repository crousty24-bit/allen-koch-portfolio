import type { Language } from '../i18n/i18n'

export const legalPaths = {
  legal: '/mentions-legales',
  privacy: '/confidentialite',
} as const

export type LegalPage = keyof typeof legalPaths

// Public coordinates must be confirmed by Allen before release.
export const publisher = {
  email: 'allen.kch24@gmail.com',
  address: '',
  phone: '',
  host: 'Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, United States',
}

type LegalText = {
  legalTitle: string
  privacyTitle: string
  updated: string
  publisher: string
  status: string
  host: string
  sections: { title: string; paragraphs: string[] }[]
  sources: string
}

export const legalCopy: Record<Language, LegalText> = {
  fr: {
    legalTitle: 'Mentions légales',
    privacyTitle: 'Confidentialité et cookies',
    updated: 'Mise à jour : 30 octobre 2026.',
    publisher:
      'Éditeur, directeur de publication et responsable du traitement : Allen Koch.',
    status:
      'Portfolio de présentation et de prise de contact. Entreprise en cours de création ; aucun numéro d’immatriculation n’est annoncé à ce stade. Aucune commande ni aucun paiement n’est effectué sur ce site.',
    host: 'Hébergement',
    sources: 'Informations des prestataires et autorité de contrôle',
    sections: [
      {
        title: 'Contact : données, finalités et bases légales',
        paragraphs: [
          'Le formulaire recueille votre nom (facultatif), votre adresse email et votre message (obligatoires pour recevoir une réponse). Le nom est limité à 100 caractères, l’email à 254 et le message à 5 000 dans le navigateur. Ne communiquez pas de données sensibles ni de documents confidentiels.',
          'Vos données servent à examiner votre demande et à vous répondre. Une demande de devis ou de projet relève des mesures précontractuelles prises à votre demande (article 6.1.b du RGPD). Le filtrage des soumissions repose sur l’intérêt légitime de protéger la messagerie contre les abus (article 6.1.f). Les autres échanges reposent sur l’intérêt légitime d’Allen Koch à répondre aux personnes qui le contactent (article 6.1.f). Vos coordonnées ne sont pas utilisées pour une newsletter ou de la prospection non demandée.',
          'Le formulaire transmet les données à Web3Forms (Web3Creative), qui les traite et les adresse à la messagerie Gmail d’Allen Koch. Le service reçoit aussi des données techniques, notamment l’adresse IP et les métadonnées de requête. Le filtre antispam avancé peut transmettre l’IP et l’email à ses prestataires de sécurité, notamment CleanTalk et Akismet, selon le traitement appliqué par Web3Forms. En contactant directement l’adresse email, vous utilisez votre messagerie et Gmail sans passer par le formulaire Web3Forms ni par hCaptcha.',
        ],
      },
      {
        title: 'Durées de conservation',
        paragraphs: [
          'Les soumissions de ce formulaire sont conservées un an par Web3Forms, puis automatiquement supprimées à l’échéance de cette durée. Les demandes sans suite sont supprimées de la messagerie d’Allen Koch après 30 jours ; cette suppression est manuelle. Ces deux durées sont distinctes et ne signifient pas que toutes les copies et sauvegardes des prestataires disparaissent au même moment.',
          'Si la demande devient un projet, les échanges nécessaires sont conservés pendant la relation, puis selon les obligations légales et les délais de prescription applicables. Les prestataires appliquent leurs propres règles aux journaux techniques et sauvegardes ; leurs politiques sont accessibles ci-dessous.',
        ],
      },
      {
        title: 'hCaptcha et votre choix',
        paragraphs: [
          'Le contrôle antispam hCaptcha est fourni par Intuition Machines, Inc. Il n’est chargé qu’après votre autorisation dans le formulaire. Il analyse notamment l’adresse IP, les caractéristiques du navigateur et de l’appareil ainsi que les interactions nécessaires à la détection des robots. Des cookies et données techniques peuvent être utilisés par ce service. Le chargement facultatif et les opérations associées reposent sur votre consentement (article 6.1.a du RGPD).',
          'L’autorisation de charger hCaptcha est facultative et reste limitée à la page ouverte. Vous pouvez refuser et écrire directement par email. Le bouton de retrait recharge la page pour arrêter le service ; il efface la saisie du formulaire. Le retrait ne supprime pas les données déjà transmises aux prestataires et n’affecte pas les traitements antérieurs. Le rechargement ne supprime pas les cookies déjà déposés : ils peuvent être effacés dans les réglages du navigateur. Aucun choix hCaptcha n’est conservé dans votre stockage local.',
        ],
      },
      {
        title: 'Stockage local, polices et hébergement',
        paragraphs: [
          'Le site mémorise uniquement les préférences d’interface « theme » et « language » dans le stockage local de votre navigateur. Elles restent enregistrées jusqu’à leur effacement via les réglages du navigateur. Elles servent à retrouver votre thème et votre langue, sans publicité ni suivi d’audience ajouté par le site.',
          'Les polices sont hébergées avec le site : leur chargement ne crée aucune connexion à Google Fonts. Vercel, l’hébergeur, traite les informations techniques nécessaires à la fourniture et à la sécurité du site, sur le fondement de l’intérêt légitime à fournir un site fonctionnel et sécurisé (article 6.1.f). Les liens vers GitHub, LinkedIn et les projets ne chargent pas leurs services dans la page ; ils vous conduisent vers ces sites lorsque vous les ouvrez.',
        ],
      },
      {
        title: 'Traitements hors de l’Espace économique européen',
        paragraphs: [
          'Web3Creative opère depuis l’Inde ; son infrastructure et ses sous-traitants peuvent traiter des données hors de l’EEE. hCaptcha est exploité depuis les États-Unis. Gmail peut également impliquer des traitements internationaux. Les pays et garanties dépendent des services et de leurs conditions applicables.',
          'Le contrat de traitement Web3Forms prévoit des clauses contractuelles types pour les transferts concernés. Les documents des fournisseurs décrivent leurs garanties ; vous pouvez demander à Allen Koch des informations sur les garanties applicables et une copie de celles-ci à l’adresse indiquée ci-dessous.',
        ],
      },
      {
        title: 'Vos droits et votre contact',
        paragraphs: [
          'Pour exercer vos droits, écrivez à allen.kch24@gmail.com. Selon les conditions du RGPD, vous pouvez demander l’accès, la rectification, l’effacement ou la limitation du traitement ; vous pouvez vous opposer aux traitements fondés sur l’intérêt légitime et demander la portabilité des données lorsque ce droit s’applique. Vous pouvez retirer votre consentement lorsqu’un traitement repose sur celui-ci.',
          'Une réponse vous sera apportée en principe sous un mois ; une prolongation motivée peut s’appliquer aux demandes complexes. Vous pouvez également adresser une réclamation à la Commission nationale de l’informatique et des libertés (CNIL).',
        ],
      },
    ],
  },
  en: {
    legalTitle: 'Legal notice',
    privacyTitle: 'Privacy and cookies',
    updated: 'Updated: 30 October 2026.',
    publisher:
      'Publisher, publication director and data controller: Allen Koch.',
    status:
      'Portfolio for presenting work and receiving enquiries. Business registration is in progress; no registration number is claimed at this stage. No orders or payments are processed on this website.',
    host: 'Hosting',
    sources: 'Provider information and supervisory authority',
    sections: [
      {
        title: 'Contact: data, purposes and legal bases',
        paragraphs: [
          'The form collects your name (optional), email address and message (required to receive a reply). Browser limits are 100 characters for your name, 254 for your email and 5,000 for your message. Do not include sensitive data or confidential documents.',
          'Your data is used to review and reply to your enquiry. Quote and project enquiries rely on steps taken at your request before entering a contract (GDPR Article 6(1)(b)). Submission filtering relies on the legitimate interest in protecting the mailbox against abuse (Article 6(1)(f)). Other correspondence relies on Allen Koch’s legitimate interest in replying to people who contact him (Article 6(1)(f)). Your contact details are not used for a newsletter or unsolicited marketing.',
          'The form sends your data to Web3Forms (Web3Creative), which processes it and forwards it to Allen Koch’s Gmail mailbox. The service also receives technical data including your IP address and request metadata. Advanced spam filtering may share your IP and email with its security providers, including CleanTalk and Akismet, depending on Web3Forms’ processing. Direct email uses your email provider and Gmail without going through the Web3Forms form or hCaptcha.',
        ],
      },
      {
        title: 'Retention periods',
        paragraphs: [
          'Web3Forms retains submissions from this form for one year, then automatically deletes them when that period expires. Enquiries that do not lead to a project are manually deleted from Allen Koch’s mailbox after 30 days. These are separate periods; they do not mean all provider copies and backups are deleted at the same time.',
          'If an enquiry becomes a project, necessary correspondence is kept for the relationship, then under applicable legal obligations and limitation periods. Providers apply their own rules to technical logs and backups; their policies are linked below.',
        ],
      },
      {
        title: 'hCaptcha and your choice',
        paragraphs: [
          'The hCaptcha anti-spam check is provided by Intuition Machines, Inc. It loads only after you allow it in the form. It analyses data including your IP address, browser and device characteristics and interactions used to detect bots. This service may use cookies and technical data. Optional loading and related operations rely on your consent (GDPR Article 6(1)(a)).',
          'Allowing hCaptcha is optional and only applies to the open page. You can decline and email directly instead. Withdrawing reloads the page to stop the service and clears your draft. Withdrawal does not delete data already sent to providers or affect earlier processing. Reloading does not delete existing cookies: you can clear them through your browser settings. No hCaptcha choice is saved in local storage.',
        ],
      },
      {
        title: 'Local storage, fonts and hosting',
        paragraphs: [
          'The website saves only the “theme” and “language” interface preferences in your browser’s local storage until you clear them through your browser settings. They restore your chosen appearance and language; the website adds no advertising or audience tracking.',
          'Fonts are hosted with the website: loading them does not connect to Google Fonts. Vercel, the host, processes technical information needed to deliver and secure the website, based on the legitimate interest in providing a functional and secure website (Article 6(1)(f)). GitHub, LinkedIn and project links do not embed those services; opening a link takes you to the relevant website.',
        ],
      },
      {
        title: 'Processing outside the European Economic Area',
        paragraphs: [
          'Web3Creative operates from India; its infrastructure and sub-processors may process data outside the EEA. hCaptcha operates from the United States. Gmail may also involve international processing. Locations and safeguards depend on each service and its applicable terms.',
          'Web3Forms’ data processing agreement provides for standard contractual clauses for relevant transfers. Provider documents describe their safeguards; you may ask Allen Koch for information and a copy of the applicable safeguards using the contact below.',
        ],
      },
      {
        title: 'Your rights and contact',
        paragraphs: [
          'To exercise your rights, email allen.kch24@gmail.com. Subject to GDPR conditions, you may request access, rectification, erasure or restriction, object to processing based on legitimate interests and request portability where applicable. You may withdraw consent where processing relies on it.',
          'Requests are normally answered within one month; a justified extension may apply to complex requests. You may also complain to the French data protection authority, the Commission nationale de l’informatique et des libertés (CNIL).',
        ],
      },
    ],
  },
}

export const privacySources = [
  { label: 'Web3Forms', href: 'https://web3forms.com/privacy' },
  { label: 'Web3Forms DPA', href: 'https://web3forms.com/dpa' },
  { label: 'hCaptcha', href: 'https://www.hcaptcha.com/privacy' },
  { label: 'hCaptcha DPA', href: 'https://www.hcaptcha.com/terms' },
  { label: 'Vercel', href: 'https://vercel.com/legal/privacy-notice' },
  { label: 'Vercel — contact', href: 'https://vercel.com/contact' },
  { label: 'Google', href: 'https://policies.google.com/privacy' },
  { label: 'CNIL', href: 'https://www.cnil.fr/fr/plaintes' },
]
