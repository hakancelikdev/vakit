/**
 * French legal copy — translated from the English originals in legal/*.js.
 * The English version is binding; see `notice`.
 */
module.exports = {
  notice: "Cette page est une traduction fournie à titre indicatif ; en cas de divergence avec la version anglaise, c'est la version anglaise qui s'applique.",

  privacy: {
    meta: {
      title: "Vakit — Politique de confidentialité",
      description: "La politique de confidentialité de Vakit. Aucun compte requis, aucune coordonnée GPS collectée ; les données de khatm et les signets se synchronisent uniquement via ton propre compte Apple iCloud.",
    },
    title: "Politique de <em>confidentialité</em>",
    desc: "Dernière mise à jour : 18 octobre 2026 — Version 2.1.0\n\nVakit respecte ta vie privée. Aucun compte n'est nécessaire et nous ne collectons aucune information permettant de t'identifier personnellement (nom, e-mail, téléphone, photos, contacts). Les horaires de prière, la direction de la Qibla et les rappels sont calculés entièrement sur ton appareil. Ta progression de khatm, tes signets, tes objectifs et tes mosquées favorites restent sur ton appareil et se synchronisent uniquement dans ton propre compte Apple iCloud — ils ne sont jamais envoyés à nos serveurs. Ta liste de dhikr fait exception : elle est envoyée à nos serveurs avec les statistiques d'utilisation afin que nous puissions améliorer l'app (voir la section 1). Tout ce qui est envoyé à nos serveurs est rattaché à un code utilisateur permanent qui ne contient aucune information identifiante.",
    sections: [
      {
        t: "1. Données que nous collectons",
        b: "Données que nous NE collectons PAS :\n• Nom, e-mail, téléphone, photos, micro, caméra, contacts\n• Coordonnées GPS (latitude/longitude) – jamais envoyées à nos serveurs\n• Identifiants de compte (Vakit n'a pas de système de comptes)\n\nDonnées stockées sur ton appareil et synchronisées dans ton espace iCloud privé :\n• Enregistrements de dhikr, progression du khatm, objectifs d'adoration\n• Signets du Coran et des hadiths, historique de lecture\n• Compteurs de sourates terminées, état des sections de hadiths\n• Tes registres de prières manquées et de jeûnes à rattraper\n• Tes marques de jours d'exemption\n• Mosquées favorites\n• Préférences de l'app (langue, méthode de calcul, réglages des notifications, thème)\n\nDonnées envoyées à nos serveurs — rattachées à un code utilisateur permanent qui ne contient aucune information identifiante (un pseudonyme : ces données ne sont pas anonymes) :\n• Localisation régionale (pays, ville, district) – PAS les coordonnées GPS\n• Modèle de l'appareil, version d'iOS/macOS, version de l'app, version de watchOS\n• Préférences de l'app (langue, méthode de calcul, thème, école juridique, type de calendrier, le genre choisi pour le guide de la prière, les prières pour lesquelles tu souhaites recevoir des notifications, ainsi que tes préférences de lecture du Coran et des hadiths — taille du texte, traduction, récitateur, graphie). Ta position de lecture et ton historique n'en font PAS partie.\n• Statistiques d'utilisation des fonctionnalités (affichages d'écrans, utilisation des fonctionnalités). Elles montrent qu'une section a été utilisée — par exemple qu'un jour d'exemption a été marqué ou qu'une prière manquée a été saisie. Le registre lui-même (la liste de tes enregistrements) n'est pas envoyé. Ce qui est envoyé, c'est le fait que l'action a eu lieu, accompagné de quelques chiffres — par exemple la prière que tu as cochée, tes comptes d'adoration quotidiens, ce qu'il te reste à rattraper (qada), le numéro d'un verset ou d'un hadith que tu as enregistré ; comme toute statistique, ces données sont horodatées.\n• Le texte des recherches que tu effectues dans l'app (recherche dans le Coran, les hadiths, les dhikr, les noms d'Allah, les mosquées et les réglages) – collecté pour voir avec quels mots tu ne trouves pas ce que tu cherches et corriger la recherche ; 80 caractères au maximum sont conservés.\n• Ta liste de dhikr – nom, type, catégorie et compteurs des dhikr, y compris le texte arabe, la description et la source que tu saisis pour les dhikr que tu ajoutes toi-même. Elle est collectée pour voir quels dhikr sont utilisés et à quelle fréquence, afin d'améliorer la section dhikr.\n• Les noms que tu donnes à tes listes de lecture du Coran – pour voir comment les listes sont utilisées ; 80 caractères au maximum sont conservés.\n• Les enregistrements de dons – le montant et la devise, s'il s'agit d'un don ponctuel ou mensuel, les enregistrements de début, de modification et de renouvellement du soutien mensuel, et le numéro de transaction d'Apple. Les données de carte, l'IBAN ou toute autre donnée de paiement n'en font PAS partie.\n• Rapports de plantage (via Firebase Crashlytics, sans donnée personnelle)\n• Diagnostics Apple MetricKit – rapports de plantage, de blocage et de consommation excessive de batterie/CPU (adresses de code, informations sur l'appareil et la version ; aucune donnée personnelle). Ils sont envoyés au serveur de Vakit afin de trouver et corriger les bugs.\n\nComme ce code utilisateur se synchronise via le trousseau iCloud, les appareils associés au même identifiant Apple comptent comme un seul utilisateur, et le code est conservé si tu supprimes puis réinstalles l'app. Le code ne contient aucune donnée d'identité ; tes données ne sont jamais vendues ni utilisées à des fins publicitaires.",
      },
      {
        t: "2. Comment nous utilisons tes données",
        b: "• Calcul des horaires de prière – La localisation est traitée localement sur ton appareil et le calcul se fait hors ligne avec la bibliothèque Adhan.\n• Direction de la Qibla – La localisation et le cap de la boussole sont combinés sur l'appareil.\n• Nom du lieu – Pour afficher le nom de l'endroit où tu te trouves, tes coordonnées sont envoyées au service de noms de lieux d'Apple ; pas aux serveurs de Vakit.\n• Rappels d'adoration – Les notifications locales sont programmées sur l'appareil par iOS et macOS.\n• Annonces – Les annonces de jours bénis et de nouvelles versions sont diffusées via Firebase Cloud Messaging ; il n'y a aucun ciblage individuel.\n• Sermon du vendredi – Le sermon de la semaine est téléchargé depuis la page publique du Diyanet ; la requête ne contient aucune information identifiante.\n• Mosquées à proximité – Ta localisation est envoyée à Apple MapKit (recherche de mosquées, distance, itinéraire) ; pas aux serveurs de Vakit.\n• Données utilisateur (dhikr, khatm, signets) – Stockées localement avec Core Data et synchronisées dans ton espace Apple iCloud privé. Parmi elles, seule la liste de dhikr est également envoyée au serveur de Vakit (voir la section 1).\n• Développement et amélioration – Les statistiques d'utilisation (sans coordonnées GPS) servent à suivre les performances et à détecter les bugs.",
      },
      {
        t: "3. Synchronisation iCloud (CloudKit)",
        b: "Vakit synchronise tes enregistrements d'adoration (dhikr, khatm, signets, objectifs, mosquées favorites) entre tes appareils via CloudKit d'Apple. Ces données :\n• Résident uniquement dans la base de données privée de ton propre identifiant Apple.\n• Sont chiffrées sur l'infrastructure d'Apple ; ni nous, ni les employés d'Apple, ni des tiers ne peuvent y accéder.\n• Se synchronisent automatiquement entre iPhone, iPad, Mac et Apple Watch.\n• Restent uniquement sur ton appareil si tu désactives iCloud.\n• Sont supprimées de tous tes appareils lorsque tu utilises Réglages → « Supprimer le compte » ou que tu retires les données de Vakit d'iCloud.\n\nDétails : apple.com/legal/privacy",
      },
      {
        t: "4. Données sur Apple Watch et Mac",
        b: "Vakit comprend une app compagnon pour watchOS 9+. Sur la montre :\n• L'autorisation de localisation s'accorde séparément sur la montre ; si Vakit est installée sur l'iPhone, la position est reçue via WatchConnectivity, sinon le GPS de la montre est utilisé.\n• Le capteur de boussole est traité sur l'appareil pour la Qibla ; il n'est jamais envoyé à un serveur.\n• Nous ne lisons ni les données de santé (HealthKit), ni l'activité, ni la fréquence cardiaque.\n• Les notifications sont reprises de l'iPhone par la recopie des notifications d'iOS ; si la montre fonctionne seule, elle programme ses propres notifications locales.\n\nSur le Mac (macOS 13+) :\n• L'app Mac est la même que sur iPhone ; tes données restent stockées sur l'appareil et synchronisées dans ton propre espace iCloud privé.\n• Les Mac n'ont pas de boussole matérielle, il n'y a donc pas de boussole Qibla en direct ; la direction et la distance sont calculées à partir de ta position et affichées sous forme de texte.\n• Sur Mac, la position provient des services de localisation basés sur le Wi-Fi plutôt que du GPS, et n'est pas non plus envoyée à nos serveurs.\n• L'autorisation et les réglages des notifications sont propres à chaque appareil ; les modifier sur le Mac n'affecte pas ton iPhone.",
      },
      {
        t: "5. Services tiers",
        b: "Vakit utilise les services suivants à des fins limitées. Aucun n'est lié à ton identité personnelle :\n\n• Apple iCloud / CloudKit – Synchronisation des données utilisateur (dans ton espace iCloud privé).\n• Apple MapKit – Mosquées à proximité, carte et itinéraire (la position est envoyée à Apple).\n• Firebase Crashlytics (Google) – Rapports de plantage sans donnée d'identité (trace d'appels, modèle de l'appareil, version d'iOS/macOS).\n• Firebase Remote Config (Google) – Activation de fonctionnalités et déploiement progressif (ne lit aucune donnée de l'appareil).\n• Apple StoreKit 2 – Dons facultatifs (ponctuels et mensuels). Les données de paiement sont traitées par Apple ; Vakit ne voit jamais les données de carte.\n• Firebase Cloud Messaging (Google) + Apple Push Notification (APNs) – Annonces des jours bénis et des nouvelles versions. Les annonces sont diffusées par thème ; il n'y a aucun ciblage individuel.\n• Diyanet (dinhizmetleri.diyanet.gov.tr) – Texte et audio du sermon du vendredi.\n• Cloudflare – Les contenus téléchargeables (texte et traductions du Coran, tafsir, hadiths, pages du mushaf, audio des récitations et des traductions, sons de notification) proviennent du réseau de stockage et de diffusion de Cloudflare (R2/CDN), et les données envoyées au serveur de Vakit passent par la connexion chiffrée de Cloudflare (Tunnel). Ces requêtes font transiter ton adresse IP par l'infrastructure de Cloudflare ; elles ne contiennent aucune information identifiante.\n• Serveur de Vakit (Allemagne, Nuremberg) – Statistiques d'utilisation, ta liste de dhikr, le texte de tes recherches, les noms de tes listes de lecture, les enregistrements de dons et les diagnostics MetricKit, tous rattachés à un code utilisateur qui ne contient aucune information identifiante. Tes enregistrements de khatm, de signets, d'objectifs et de lecture n'y sont jamais envoyés.\n\nRemarque : Firebase Analytics n'est PAS utilisé ; l'identifiant publicitaire (IDFA) n'est pas collecté.\n\nPolitique de confidentialité de Google : policies.google.com/privacy",
      },
      {
        t: "6. Publicité",
        b: "Vakit n'affiche aucune publicité. La seule source de revenus de l'app, ce sont les dons facultatifs des utilisateurs.",
      },
      {
        t: "7. Dons (achats intégrés)",
        b: "Vakit est gratuite. Pour soutenir le développeur, tu peux faire des dons facultatifs, ponctuels ou mensuels, par paliers de 10 ₺ à 10 000 ₺, depuis l'écran « Faire vivre Vakit ». Ces transactions :\n• Sont traitées par Apple StoreKit 2 ; les données de paiement (carte, IBAN, Apple Pay) ne sont transmises qu'à Apple.\n• Vakit ne voit ni ne conserve jamais ta carte, ton IBAN ou ton moyen de paiement. Le montant, la devise et le type du don (ponctuel ou mensuel) ainsi que le numéro de transaction d'Apple sont enregistrés sur le serveur de Vakit, rattachés à ton code utilisateur (voir la section 1).\n• Le soutien mensuel est un abonnement à renouvellement automatique ; il se gère et s'annule à tout moment dans les réglages de ton compte App Store (il se renouvelle sauf annulation au moins 24 heures avant la fin de la période).\n• Les remboursements ne peuvent être demandés qu'auprès d'Apple (reportaproblem.apple.com).",
      },
      {
        t: "8. Durée de conservation",
        b: "• Données locales de l'appareil – Conservées jusqu'à ce que tu supprimes l'app.\n• Données iCloud – Conservées jusqu'à ce que tu retires les données de Vakit d'iCloud ou désactives ton identifiant Apple.\n• Données sur le serveur (statistiques d'utilisation, textes de recherche, liste de dhikr, noms des listes de lecture, enregistrements de dons, diagnostics MetricKit) – Elles ne sont pas supprimées automatiquement après une durée fixe ; elles sont conservées jusqu'à ce que tu demandes leur suppression. Réglages → Supprimer le compte dans l'app ne supprime que les données sur ton appareil et dans iCloud, pas celles du serveur. Pour faire supprimer tes données sur le serveur, écris à hakancelikdev@gmail.com ; ta demande est traitée sous 30 jours au plus tard.\n• Rapports de plantage (Crashlytics) – Conservés 90 jours, puis supprimés.\n• Fichiers journaux du serveur – Conservés dans une limite de taille ; une fois celle-ci atteinte, les plus anciens sont supprimés automatiquement.",
      },
      {
        t: "9. Tes droits (KVKK / RGPD)",
        b: "En vertu de la KVKK turque et du RGPD de l'UE, tu as le droit de :\n• Savoir quelles données sont collectées à ton sujet\n• T'opposer au traitement des données (retire les autorisations de localisation, de notifications ou de mouvement dans Réglages → Vakit sur iOS, ou dans Réglages Système → Vakit sur Mac)\n• Demander la suppression de tes données : Réglages → Supprimer le compte efface tout ce qui se trouve sur ton appareil et dans iCloud ; cela ne supprime pas les données sur notre serveur. Pour faire supprimer tes données sur notre serveur (y compris les statistiques d'utilisation), écris à hakancelikdev@gmail.com ; ta demande est traitée sous 30 jours au plus tard.\n• Portabilité des données\n• Déposer une plainte auprès de l'autorité KVKK\n\nAdresse tes demandes à hakancelikdev@gmail.com ; nous répondons sous 30 jours au plus tard.",
      },
      {
        t: "10. Confidentialité des enfants",
        b: "Vakit est proposée sur l'App Store avec la classification 4+, mais nous ne collectons pas sciemment de données personnelles auprès d'utilisateurs de moins de 13 ans. Si tu penses qu'un enfant de moins de 13 ans a fourni des données, écris à hakancelikdev@gmail.com et nous supprimerons immédiatement les données concernées.",
      },
      {
        t: "11. Sécurité",
        b: "Toutes les données locales restent sur ton appareil, protégées par le bac à sable d'iOS/macOS et le chiffrement de l'appareil. Les données iCloud sont chiffrées sur l'infrastructure d'Apple. Les données envoyées à notre serveur sont chiffrées pendant leur transfert via HTTPS/TLS et stockées sur un serveur inaccessible directement depuis Internet (il n'est joignable que par la connexion chiffrée de Cloudflare) ; elles ne contiennent aucune information d'identité. Vakit détecte aussi le jailbreak, les débogueurs et l'injection de code pour une protection supplémentaire lors des opérations sensibles.",
      },
      {
        t: "12. Modifications de la politique",
        b: "Cette politique peut être mise à jour à mesure que l'app évolue. En cas de modification importante, la date de « Dernière mise à jour » de cette page est actualisée et un avis est affiché dans l'app. Nous te recommandons de consulter cette politique régulièrement.",
      },
      {
        t: "13. Contact",
        b: "Pour toute question, demande ou remarque concernant la confidentialité : hakancelikdev@gmail.com\n\nResponsable du traitement : Hakan Çelik (Turquie)",
      },
    ],
  },

  terms: {
    meta: {
      title: "Vakit — Conditions d'utilisation",
      description: "Les conditions d'utilisation de Vakit. Utilisation gratuite, avec des dons facultatifs (achats intégrés) ; toutes les fonctionnalités essentielles sont gratuites.",
    },
    title: "Conditions d'<em>utilisation</em>",
    desc: "Dernière mise à jour : 18 octobre 2026 — Version 2.1.0\n\nEn téléchargeant, en installant ou en utilisant notre app, tu acceptes d'être lié par les présentes Conditions. Merci de les lire attentivement.",
    sections: [
      {
        t: "1. Acceptation des Conditions",
        b: "En accédant à Vakit et en l'utilisant, tu acceptes d'être lié par les termes et conditions du présent accord. Si tu n'es pas d'accord, merci de ne pas utiliser ce service.",
      },
      {
        t: "2. Description du service",
        b: "Vakit est une app gratuite qui propose des outils d'adoration tels que les horaires de prière, la direction de la Qibla, le Coran, les hadiths, un compteur de dhikr, des guides de la prière et des ablutions, le suivi du khatm et des adorations, le sermon du vendredi, les mosquées à proximité et un calendrier des jours religieux. Elle fonctionne sur iOS 16.4+ et macOS 13+, et comprend une app compagnon pour Apple Watch sous watchOS 9+.",
      },
      {
        t: "3. Utilisation gratuite et dons facultatifs",
        b: "Vakit est entièrement gratuite. Toutes les fonctionnalités (horaires de prière, boussole Qibla, Coran, hadiths, compteur de dhikr, guides des ablutions et de la prière, suivi du khatm, mosquées à proximité, widgets et activités en direct) sont accessibles à tous sans frais. Il n'y a ni mur payant ni offre premium. L'app n'affiche aucune publicité.\n\nL'écran « Faire vivre Vakit » propose uniquement des façons facultatives de soutenir le développeur ; aucune n'est requise. Des dons facultatifs de 10 ₺ à 10 000 ₺ sont possibles via les achats intégrés d'Apple (StoreKit 2). Les dons peuvent être ponctuels ou mensuels ; un don mensuel est un abonnement renouvelé automatiquement que tu peux annuler à tout moment dans les réglages de l'App Store (au moins 24 heures avant la fin de la période). Aucun don ne débloque de fonctionnalité, car rien n'est verrouillé dans Vakit. Les demandes de remboursement passent uniquement par Apple (reportaproblem.apple.com).\n\nLe soutien mensuel est un abonnement renouvelé automatiquement chaque mois via ton compte App Store, sauf si tu l'annules dans les réglages de l'App Store au moins 24 heures avant la fin de la période.",
      },
      {
        t: "4. Publicité",
        b: "Vakit n'affiche aucune publicité. La seule source de revenus de l'app, ce sont les dons facultatifs des utilisateurs.",
      },
      {
        t: "5. App compagnon pour Apple Watch",
        b: "Vakit comprend une app compagnon pour watchOS 9+ avec les horaires de prière, la boussole Qibla et des complications. L'utilisation de l'app Watch est soumise aux présentes Conditions. En raison des limites matérielles de l'Apple Watch (précision du GPS, déviation de la boussole, batterie), les résultats sur la montre peuvent différer de ceux de l'iPhone.",
      },
      {
        t: "6. Responsabilités de l'utilisateur",
        b: "Tu es responsable :\n• du choix d'une localisation et d'une méthode de calcul exactes\n• d'une utilisation de l'app conforme aux lois applicables et aux règles de l'App Store\n• de ne pas tenter de faire de la rétro-ingénierie sur l'app, de la cracker ou d'en faire un usage abusif\n• de la sécurité de ton appareil et de ton compte iCloud (tes données sont synchronisées entre tes appareils via Apple iCloud)",
      },
      {
        t: "7. Services tiers",
        b: "Vakit utilise les services tiers suivants et est soumise à leurs propres conditions :\n• Apple iCloud / CloudKit (synchronisation des données utilisateur)\n• Apple MapKit (mosquées à proximité, cartes)\n• Firebase Crashlytics, Remote Config et Cloud Messaging (Google)\n• Apple StoreKit 2 (dons)\n• Cloudflare (stockage et diffusion des contenus téléchargeables, connexion chiffrée au serveur de Vakit)\n• Diyanet (texte et audio du sermon du vendredi)\n• Bibliothèque Adhan (calcul des horaires de prière, open source)\n• SwiftAA (calculs astronomiques, open source)\n• GRDB.swift (base de données des contenus, open source)\n\nLes conditions et politiques de confidentialité de ces services appartiennent à leurs fournisseurs respectifs.",
      },
      {
        t: "8. Propriété intellectuelle",
        b: "Le code et le design de l'app appartiennent à Hakan Çelik ; tous droits réservés. Le code source de ce site web est ouvert sous licence GPL-3.0 (github.com/hakancelikdev/vakit).\n\nLes contenus tiers présents dans Vakit appartiennent à leurs propriétaires et sont utilisés avec respect :\n• Texte arabe du Coran : domaine public\n• Traductions du Coran, tafsir et traductions des hadiths : la mention de chaque texte (traducteur, auteur ou éditeur) est affichée à côté de lui dans l'app ; les droits appartiennent aux éditeurs concernés.\n• Enregistrements de récitations et d'adhan, polices, images et bibliothèques de code (Adhan, SwiftAA, GRDB.swift, Firebase) : chacun est soumis à la licence de son propriétaire.\n\nTu peux demander la liste complète des sources à hakancelikdev@gmail.com.\n\nL'app utilise les enregistrements d'adhan et de récitation uniquement à des fins d'adoration religieuse.",
      },
      {
        t: "9. Limitation de responsabilité",
        b: "L'app est fournie « en l'état ». Les calculs des horaires de prière et de la Qibla visent l'exactitude, mais :\n• Des écarts peuvent survenir selon la précision de la localisation, le signal GPS, l'étalonnage de la boussole et la méthode de calcul choisie.\n• Pour les décisions religieuses importantes, il est recommandé de vérifier auprès des autorités religieuses locales.\n• Les capteurs de l'Apple Watch (boussole magnétique, GPS) peuvent ajouter des écarts supplémentaires.\n• Une perte de données peut survenir en raison de problèmes de synchronisation iCloud, de pannes réseau ou de la perte de l'appareil ; sauvegarde tes données importantes.\n\nLe développeur ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation de l'app.",
      },
      {
        t: "10. Compte et suppression des données",
        b: "Vakit ne nécessite aucun compte. Supprimer l'app efface toutes les données locales. Pour supprimer les données synchronisées via iCloud : Réglages > Supprimer le compte, ou sur iOS Réglages > identifiant Apple > iCloud > Vakit > Supprimer les données (sur Mac : Réglages Système > Compte Apple > iCloud). Supprimer le compte n'efface pas les données sur notre serveur ; si tu souhaites que les données conservées sur notre serveur (y compris les statistiques d'utilisation) soient supprimées, écris à hakancelikdev@gmail.com ; ta demande est traitée sous 30 jours au plus tard.",
      },
      {
        t: "11. Modification des Conditions",
        b: "Les présentes Conditions peuvent être mises à jour à mesure que l'app évolue et pour tenir compte des exigences légales. En cas de modification importante, la date de « Dernière mise à jour » est actualisée et un avis est affiché dans l'app. Continuer à utiliser l'app vaut acceptation des Conditions mises à jour.",
      },
      {
        t: "12. Droit applicable et juridiction compétente",
        b: "Les présentes Conditions sont régies par le droit de la République de Turquie. Les litiges seront tranchés par les tribunaux turcs ; en matière de droits des consommateurs, les juridictions locales de la consommation sont compétentes. Si tu résides dans l'Union européenne, tes droits de consommateur locaux sont préservés.",
      },
      {
        t: "13. Contact",
        b: "Pour toute question concernant les présentes Conditions : hakancelikdev@gmail.com\n\nDéveloppeur : Hakan Çelik (Turquie)",
      },
    ],
  },

};
