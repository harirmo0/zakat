import type { HomeContent } from "../../types/home";

export const homeContentFr: HomeContent = {
  locale: "fr",
  brandSection: {
    heading: "maroc zakat en bref",
    description:
      "Une plateforme unique pour suivre le nisab marocain, vérifier les sources et entrer en contact avec l’équipe. Suivez @maroc_zakat pour recevoir l’actualité.",
    pillars: [
      {
        title: "Infos vérifiées",
        detail:
          "Chaque mise à jour mentionne la date, la source et le canal de diffusion. Vous savez immédiatement d’où viennent les chiffres."
      },
      {
        title: "Canaux officiels",
        detail:
          "Nos profils sociaux partagent le nisab hebdomadaire, les correctifs de calculatrice et les appels à projets."
      },
      {
        title: "Co-création",
        detail:
          "La page contact centralise les demandes de données, de partenariats ou de traductions pour nourrir les prochaines versions."
      }
    ]
  },
  hero: {
    tag: "Selon le Conseil Supérieur des Oulémas · École malikite",
    title: "Maroc Zakat · Référence 2025 pour le calcul de la zakat",
    description:
      "Plateforme unique maroc zakat pour suivre le nisab 2025 au Maroc, comparer 2024/2025, disposer de calculateurs MAD et devises étrangères, et accéder aux ressources Algérie/Tunisie.",
    navItems: [
      { id: "overview-2025", label: "Actualités 2025" },
      { id: "maroc-zakat", label: "maroc zakat" },
      { id: "nisab-2024", label: "Rappel 2024" },
      { id: "regional-nisab", label: "Maghreb" },
      { id: "calculator", label: "Calculatrice" },
      { id: "usd-calculator", label: "Devises" },
      { id: "prayer-times", label: "Horaires prière" },
      { id: "zakat-sheet", label: "Tableur zakat" },
      { id: "faq", label: "FAQ" },
      { id: "sources", label: "Références" }
    ],
    primaryCta: { label: "Lancer la calculatrice", href: "#calculator" },
    secondaryCta: { label: "Parcourir le calendrier hégirien", href: "#timeline" },
    meta: [
      { value: "7 438 MAD", label: "Nisab argent · nov 2025" },
      { value: "2,5 %", label: "Taux légal" },
      { value: "354 jours", label: "Année lunaire" }
    ]
  },
  overview2025: {
    heading: "Points clés 2025 pour le Maroc",
    description:
      "Le Maroc maintient l’argent comme référence. En novembre 2025 le nisab atteint 7 438 MAD (595 g). Mise à jour mensuelle, taux de 2,5 % conservé, chiffres vérifiés auprès du ministère des Habous et de Bank Al-Maghrib.",
    stats: [
      {
        title: "Mise à jour hebdomadaire",
        paragraph:
          "Prix moyen de l’argent (début novembre 2025) : 12,51 MAD/g. Le seuil de 595 g équivaut donc à 7 438 MAD.",
        bullets: [
          "Actualisation chaque vendredi après la clôture",
          "Sources : bulletins du ministère des Habous + data Bank Al-Maghrib"
        ]
      },
      {
        title: "2,5 % sur l’épargne nette",
        paragraph:
          "Dès que l’épargne reste au-dessus du nisab pendant un an lunaire, la zakat correspond à 2,5 % du solde. Exemple : 12 000 MAD ⇒ 300 MAD.",
        bullets: [
          "Inclure salaires, primes, dons conservés",
          "Déduire charges essentielles et dettes immédiates"
        ]
      },
      {
        title: "Épargnants en devises",
        paragraph:
          "Convertissez vos montants en MAD le jour du versement selon le taux officiel puis appliquez 2,5 % ou utilisez l’outil ci-dessous.",
        bullets: [
          "Privilégier les taux officiels bancaire ou banque centrale",
          "Enregistrer la date et le taux pour la traçabilité"
        ]
      }
    ],
    note:
      "Message clé : l’argent garantit que les classes moyennes versent la zakat. Passer à l’or (≈ 101 000 MAD) réduirait drastiquement la portée sociale de maroc zakat."
  },
  comparison2024: {
    heading: "Différences 2024 vs 2025",
    description:
      "Fin 2024 l’argent valait 11,92 MAD/g. En 2025 il remonte à 12,51 MAD/g (+5 %). Toute zakat reportée de 2024 doit être recalculée avec la valeur 2025.",
    rows: [
      { month: "Janvier", value2024: "7 020", value2025: "7 312", note: "Demande industrielle accrue" },
      { month: "Avril", value2024: "7 065", value2025: "7 366", note: "Préparation des distributions de Ramadan" },
      { month: "Août", value2024: "7 118", value2025: "7 402", note: "Volatilité énergétique" },
      { month: "Novembre", value2024: "7 080", value2025: "7 438", note: "Référence actuelle" }
    ],
    footnote:
      "Si vos économies ont dépassé le nisab en 2024 mais que vous payez en 2025, appliquez la valeur la plus récente pour préserver les droits des bénéficiaires."
  },
  essentials: {
    heading: "Principes suivis",
    description: "Synthèse malikite adaptée au contexte marocain.",
    cards: [
      {
        title: "Nisab officiel",
        body: "595 g d’argent (≈ 7 438 MAD) pour assurer la diffusion de la zakat dans la classe moyenne.",
        badge: "Directive du Conseil"
      },
      {
        title: "Biens concernés",
        body:
          "La zakat touche l’épargne nette : cash, comptes bancaires, actifs liquides restés au-dessus du nisab pendant un an lunaire.",
        badge: "Fiqh malikite"
      },
      {
        title: "Priorité au calendrier hégirien",
        body:
          "Suivre l’année lunaire à partir du mois où le seuil a été atteint. L’anticipation (Ramadan, Dhoul-Hijja) reste licite avec traçabilité.",
        badge: "Facilitation moderne"
      }
    ]
  },
  regional: {
    heading: "Contexte maghrébin",
    description:
      "Pour les familles actives entre Maroc, Algérie et Tunisie, harmonisez vos calculs avec les bulletins nationaux.",
    cards: [
      {
        title: "Maroc",
        intro:
          "Nisab 2025 : 7 438 MAD. Vérifiez chaque mois les bulletins des Habous afin que maroc zakat reflète les derniers chiffres.",
        bullets: [
          "Mémo de référence : Muharram 1447 H",
          "Pas d’obligation déclarative mais recommandée",
          "Privilégier associations agréées ou virements traçables"
        ]
      },
      {
        title: "Algérie",
        intro:
          "Nisab 2025 : 705 000 DZD (décret oct. 2025). Utile pour les travailleurs transfrontaliers.",
        bullets: [
          "Utiliser le taux officiel pour les conversions DZD ⇔ MAD",
          "Déclaration numérique facultative pour les particuliers",
          "Informer les associations accréditées avant tout transfert international"
        ]
      },
      {
        title: "Tunisie",
        intro:
          "Nisab 2025 : 12 500 TND (Dār al-iftā, Dhoul-Qa’da 1446 H). Conversion en MAD uniquement lors du paiement.",
        bullets: [
          "Suivre les publications de la Banque Centrale",
          "Règles comptables spécifiques pour les entreprises",
          "Contrôles AML pour les remises étrangères"
        ]
      }
    ],
    note:
      "Astuce : fixez une date unique de zakat, convertissez toutes les devises en MAD et conservez le justificatif du taux."
  },
  scenarios: {
    heading: "Cas pratiques",
    description:
      "Salarié net 7 000 MAD/mois. Inspirez-vous de ces scénarios avant d’utiliser la calculatrice interactive.",
    cards: [
      {
        title: "Épargne 1 000 MAD/mois",
        subtitle: "Cas standard",
        items: [
          { label: "Solde après 12 mois", value: "12 000 MAD" },
          { label: "Nisab atteint ?", value: "Oui (supérieur à 7 438 MAD)" },
          { label: "Zakat due", value: "300 MAD" },
          { label: "Moment conseillé", value: "À l’anniversaire lunaire ou en Ramadan" }
        ],
        footer:
          "Choisissez une date hégirienne fixe (ex. 10 Ramadan) et vérifiez le solde avant le versement."
      },
      {
        title: "Épargne 500 MAD/mois",
        subtitle: "Surplus limité",
        items: [
          { label: "Solde après 12 mois", value: "6 000 MAD" },
          { label: "Nisab atteint ?", value: "Pas encore" },
          { label: "Zakat due", value: "Aucune avant le dépassement" },
          { label: "Étape suivante", value: "Augmenter l’épargne ou réduire les charges" }
        ],
        footer:
          "Suivez vos soldes mensuels pour déclencher la zakat dès que le seuil est franchi."
      }
    ]
  },
  calculator: {
    heading: "Calculatrice express",
    description:
      "Comparez votre surplus mensuel au nisab actuel pour estimer la zakat annuelle. Les résultats sont indicatifs.",
    salaryLabel: "Salaire mensuel (MAD)",
    expenseLabel: "Dépenses essentielles (MAD)",
    nisabLabel: "Nisab choisi",
    nisabOptions: [
      { value: 7438, label: "Nisab argent (recommandé au Maroc)" },
      { value: 101397, label: "Nisab or (approche prudente)" }
    ],
    submitLabel: "Calculer",
    statusMessages: {
      invalid: {
        chip: "Informations manquantes",
        recommendation: "Veuillez indiquer au minimum le salaire mensuel."
      },
      noSavings: {
        chip: "Pas d’épargne",
        recommendation: "Les charges sont égales ou supérieures aux revenus. Construisez un matelas avant la zakat."
      },
      belowNisab: {
        chip: "Sous le nisab",
        recommendation:
          "Continuez à suivre votre épargne. La zakat s’applique après un an complet au-dessus du seuil."
      },
      reachedNisab: {
        chip: "Nisab atteint",
        recommendation:
          "Mettez de côté 2,5 % à la date anniversaire. Le versement anticipé pendant Ramadan ou Dhoul-Hijja reste valide."
      }
    },
    monthlySavingLabel: "Épargne mensuelle estimée",
    annualSavingLabel: "Solde projeté sur 12 mois",
    zakatAmountLabel: "Zakat due (2,5 %)",
    recommendationLabel: "Recommandation",
    initialRecommendation: "Renseignez les champs puis lancez le calcul.",
    hint: "* Vérifiez toujours le solde réel le jour du versement et consultez un savant si besoin."
  },
  why25: {
    heading: "Pourquoi 2,5 % restent pertinents",
    description:
      "Le quart du dixième est ancré dans la Sunna et demeure pertinent face aux taux d’inflation actuels.",
    cards: [
      {
        title: "Fondement religieux",
        paragraph:
          "Le hadith « un quart de dixième sur l’argent » demeure la base. Toute richesse liquide assimilée à l’argent hérite de ce taux.",
        bullets: [
          "Applicable au Maroc, en Algérie et en Tunisie",
          "Versement anticipé possible en cas d’urgence sociale",
          "Capital productif sans revenus momentanément exempté"
        ]
      },
      {
        title: "Équilibre économique",
        paragraph:
          "Avec une inflation entre 2 et 3 % en Afrique du Nord, 2,5 % protège la consommation des ménages vulnérables sans épuiser l’épargne.",
        bullets: [
          "Inclure les comptes bancaires et liquidités dormantes",
          "Ajouter les dividendes distribués",
          "Documenter le calcul 2,5 % pour tout audit"
        ]
      }
    ]
  },
  usdCalculator: {
    heading: "Assistant devises (USD/EUR/GBP)",
    description:
      "Avant de verser en devise, convertissez en MAD, comparez au nisab, puis appliquez 2,5 %. Exemple basé sur novembre 2025.",
    steps: [
      "Saisir le montant en devise",
      "Multiplier par le taux officiel du jour",
      "Comparer au nisab marocain (7 438 MAD)",
      "Si dépassé ⇒ Zakat = montant MAD × 0,025"
    ],
    tip: "Exemple : 2 000 USD × 10,12 = 20 240 MAD ⇒ Zakat ≈ 506 MAD.",
    table: [
      { currency: "Dollar US", rate: "10,12 MAD", nisab: "735 $", zakat: "18,4 $ (≈ 186 MAD)" },
      { currency: "Euro", rate: "10,86 MAD", nisab: "685 €", zakat: "17,1 € (≈ 186 MAD)" },
      { currency: "Livre sterling", rate: "12,54 MAD", nisab: "593 £", zakat: "14,8 £ (≈ 186 MAD)" }
    ],
    caption:
      "Valeurs indicatives. Fixez toujours le taux réel du jour et archivez la preuve (relevé bancaire, capture d’écran…)."
  },
  timeline: {
    heading: "Agenda hégirien de la zakat",
    description:
      "Planifiez vos économies et paiements sur l’année hégirienne. Les mois mis en avant sont particulièrement recommandés au Maroc.",
    entries: [
      { title: "Muharram", description: "Versement anticipé pour les soldes proches de l’échéance.", note: "Anniversaire de référence" },
      { title: "Safar", description: "Soutien hivernal et aides aux familles fragiles." },
      { title: "Rabi‘ al-awwal", description: "Dons supplémentaires en hommage au Prophète ﷺ." },
      { title: "Rabi‘ ath-thani ⇢ Joumada", description: "Période froide : priorité à l’habillement et au désendettement." },
      { title: "Rajab", description: "Mois sacré, propice aux versements planifiés." },
      { title: "Cha‘ban", description: "Clôturer les comptes et préparer Ramadan." },
      {
        title: "Ramadan",
        description: "Période de générosité maximale : zakat, iftar, actions sociales.",
        highlight: true,
        highlightStyle: "background: linear-gradient(135deg, rgba(146, 235, 37, 0.85), rgba(56, 189, 248, 0.85));"
      },
      { title: "Chawwal", description: "Poursuivre les dons et régler les engagements restants." },
      { title: "Dhoul-Qa‘da", description: "Revoir vos soldes avant l’échéance de la zakat." },
      {
        title: "Dhoul-Hijja",
        description: "Les dix premiers jours multiplient les récompenses. Idéal pour zakat et grands dons.",
        highlight: true,
        highlightStyle: "background: linear-gradient(135deg, rgba(37, 235, 119, 0.85), rgba(56, 189, 248, 0.85));"
      }
    ]
  },
  prayerTimes: {
    heading: "Horaires officiels de prière",
    description:
      "Consultez en direct la plateforme du ministère des Habous pour aligner vos dons sur les plages de mérite.",
    iframeTitle: "Horaires des prières – Ministère marocain des Habous",
    ctaLabel: "Ouvrir le site des Habous"
  },
  zakatSheet: {
    heading: "Télécharger le tableur maroc zakat",
    description:
      "Fichier CSV léger pour suivre l’épargne mensuelle, détecter le franchissement du nisab et calculer les 2,5 %. Compatible Excel, Numbers, Google Sheets.",
    featureList: [
      "Colonnes préformatées : mois, net, charges, épargne, cumul, statut nisab",
      "Formules automatiques pour l’épargne et la zakat due",
      "Alerte lorsque le cumul dépasse 7 438 MAD"
    ],
    badges: ["Format CSV", "Mise à jour nov. 2025"],
    downloadLabel: "Télécharger maroc-zakat-suivi.csv",
    downloadHint:
      "Dans Google Sheets : Fichier → Importer → Créer un nouveau classeur, puis partager avec votre entourage.",
    reminder:
      "Pensez à mettre à jour les cellules “prix de l’argent” et “nisab” à chaque nouveau bulletin ou variation de taux de change."
  },
  family: {
    heading: "Verser la zakat aux proches",
    description: "Faire la différence entre la pension obligatoire et la zakat admissible.",
    cards: [
      {
        title: "Non autorisé",
        body: "Parents, grands-parents, enfants et petits-enfants pris en charge légalement."
      },
      {
        title: "Autorisé et recommandé",
        body: "Frères, sœurs, oncles, tantes et proches nécessiteux hors obligation alimentaire."
      },
      {
        title: "Préférer la discrétion",
        body: "Privilégier la discrétion sauf si la publicité encourage d’autres dons.",
        emphasis: "background: linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(40, 40, 40, 0.85)); color: #ffffff;"
      }
    ]
  },
  goldVsSilver: {
    heading: "Argent ou or ?",
    description: "Pourquoi la fatwa marocaine retient l’argent et quand envisager l’or.",
    goldList: [
      "Nisab or : 85 g (≈ 101 397 MAD)",
      "Orienté hauts revenus",
      "Exclut la majorité des salariés",
      "Option prudente en cas d’inflation forte"
    ],
    silverList: [
      "Nisab argent : 595 g (≈ 7 438 MAD)",
      "Couvre la classe moyenne",
      "Conforme à l’esprit de solidarité malikite",
      "Validé par le Conseil supérieur"
    ],
    conclusion:
      "Recommandation : l’argent par défaut. L’or uniquement avec avis savant et justification claire."
  },
  faq: {
    heading: "Questions fréquentes",
    description: "FAQ alimentée par les recherches Arabic/English. Soumettez vos besoins via la page collaboration.",
    items: [
      {
        question: "Comment calculer le nisab marocain 2025 ?",
        answer:
          "Additionnez l’épargne liquide, déduisez les dettes urgentes, et vérifiez si le solde dépasse 7 438 MAD pendant un an lunaire. Zakat = solde × 0,025."
      },
      {
        question: "Quid de l’Algérie et de la Tunisie ?",
        answer:
          "Algérie : 705 000 DZD ⇒ Zakat dès 17 625 DZD. Tunisie : 12 500 TND ⇒ 312,5 TND. Convertir en MAD pour une vision globale."
      },
      {
        question: "Pourquoi le taux 2,5 % ?",
        answer:
          "Il découle de la Sunna et d’un consensus historique. Économiquement, il équilibre redistribution et maintien du capital."
      },
      {
        question: "Peut-on automatiser la zakat ?",
        answer:
          "Oui. Ordres permanents bancaires, libellé « zakat », révision annuelle pour coller au nisab."
      },
      {
        question: "Applications recommandées ?",
        answer:
          "Zakat Maroc (officiel), Zakatify (multidevise), Mawkib (suivi d’impact). Vérifiez la personnalisation du nisab."
      },
      {
        question: "Associations fiables ?",
        answer:
          "Entraide Nationale, Association de soutien aux veuves, Banque Alimentaire. Demandez un reçu."
      },
      {
        question: "Où suivre le nisab chaque semaine ?",
        answer:
          "Sur habous.gov.ma, via la newsletter ou notre profil @maroc_zakat."
      },
      {
        question: "Meilleurs outils digitaux ?",
        answer:
          "CSV maroc zakat, Google Sheets, appli bancaire. Utiliser des alertes conditionnelles pour le nisab."
      }
    ]
  },
  sources: {
    heading: "Références",
    description: "Documents officiels et sources panmaghrébines.",
    links: [
      { label: "Fatwa sur la zakat des salaires", href: "https://agadir24.info/%D8%B2%D9%83%D8%A7%D8%A9-%D8%A7%D9%84%D8%A3%D8%AC%D9%88%D8%B1-%D8%A7%D9%84%D8%B4%D9%87%D8%B1%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D9%81%D8%AA%D9%88%D9%89-%D8%A7%D9%84%D9%85.html" },
      { label: "Avis malikite (IslamWeb)", href: "https://www.islamweb.net/ar/fatwa/246004/%D9%85%D8%B0%D9%87%D8%A8-%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%83%D9%8A%D8%A9-%D9%81%D9%8A-%D8%B2%D9%83%D8%A7%D8%A9-%D8%A7%D9%84%D8%B1%D8%A7%D8%AA%D8%A8" },
      { label: "Calendrier hégirien Maroc", href: "https://www.islamicfinder.org/world/morocco" },
      { label: "Zakat – synthèse", href: "https://fr.wikipedia.org/wiki/Zak%C3%A2t" },
      { label: "Fatwa complète Ministère Habous", href: "https://www.habous.gov.ma/%D8%A7%D9%84%D9%85%D8%AC%D9%84%D8%B3-%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A-%D8%A7%D9%84%D8%A7%D8%B9%D9%84%D9%89/21626-%D9%81%D8%AA%D9%88%D9%89-%D8%A7%D9%84%D9%85%D8%AC%D9%84%D8%B3-%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A-%D8%A7%D9%84%D8%A3%D8%B9%D9%84%D9%89-%D9%81%D9%8A-%D9%85%D9%88%D8%B6%D9%88%D8%B9-%D8%A7%D9%84%D8%B2%D9%83%D8%A7%D8%A9.html" }
    ]
  },
  footer: {
    summary: "Contenu préparé selon la jurisprudence malikite et les avis officiels marocains.",
    note: "Consultez un savant de confiance pour les cas spécifiques ou en cas de volatilité des métaux.",
    updated: "Dernière mise à jour : novembre 2025"
  }
};

