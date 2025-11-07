import type { HomeContent } from "../../types/home";

export const homeContentEn: HomeContent = {
  locale: "en",
  brandSection: {
    heading: "maroc zakat · our official footprint",
    description:
      "We centralise Moroccan zakat data under the maroc zakat name, publish verified updates, and grow trusted channels (@maroc_zakat on X, YouTube, Reddit, Facebook).",
    pillars: [
      {
        title: "Unified identity",
        detail:
          "Every asset carries the maroc zakat brand, release date, and reference links so auditors and partners trust the data."
      },
      {
        title: "Informational channels",
        detail:
          "Weekly nisab digests, calculator updates, and partnership announcements are syndicated across the new social profiles."
      },
      {
        title: "Collaboration hub",
        detail:
          "The contact page lets researchers, NGOs, and fintech teams request data changes, propose integrations, or launch joint pilots."
      }
    ]
  },
  hero: {
    tag: "Aligned with the High Council of Ulamā · Maliki fiqh",
    title: "maroc zakat · Nisab & calculators for 2025",
    description:
      "Under Maliki guidance and official Moroccan fatwas maroc zakat guide for calculating the 2.5% zakat rate in 2025. Track the Moroccan nisab, compare 2024 vs 2025 values, access regional insights for Algeria and Tunisia, and download multi-currency calculators.",
    navItems: [
      { id: "overview-2025", label: "2025 Updates" },
      { id: "maroc-zakat", label: "maroc zakat" },
      { id: "nisab-2024", label: "2024 Review" },
      { id: "regional-nisab", label: "Maghreb Countries" },
      { id: "calculator", label: "Zakat Calculator" },
      { id: "usd-calculator", label: "FX Helper" },
      { id: "prayer-times", label: "Prayer Times" },
      { id: "zakat-sheet", label: "Tracker Sheet" },
      { id: "faq", label: "FAQs" },
      { id: "sources", label: "Sources" }
    ],
    primaryCta: { label: "Launch calculator", href: "#calculator" },
    secondaryCta: { label: "View Hijri timeline", href: "#timeline" },
    meta: [
      { value: "MAD 7,438", label: "Silver nisab · Nov 2025" },
      { value: "2.5%", label: "Obligatory rate" },
      { value: "354 days", label: "Full lunar year" }
    ]
  },
  overview2025: {
    heading: "2025 Moroccan nisab highlights",
    description:
      "Silver remains the official benchmark in Morocco. As of November 2025 the nisab equals MAD 7,438 (595g of silver). We refresh the value monthly, keep the zakat rate at 2.5%, and cross-check figures with Bank Al-Maghrib and the Ministry of Awqaf.",
    stats: [
      {
        title: "Weekly Moroccan update",
        paragraph:
          "Average silver price during the first week of November 2025 stands at MAD 12.51 per gram, bringing the 595g nisab to MAD 7,438.",
        bullets: [
          "Updated every Friday evening after market close",
          "Primary sources: Ministry of Awqaf bulletins + Bank Al-Maghrib data"
        ]
      },
      {
        title: "2.5% due on eligible savings",
        paragraph:
          "Once your balance stays above the nisab for a lunar year, zakat equals 2.5% of the final amount. Example: MAD 12,000 savings ⇒ MAD 300 zakat.",
        bullets: [
          "Include salaries, bonuses, and gifts that remain saved",
          "Exclude necessary expenses and short-term liabilities"
        ]
      },
      {
        title: "Foreign-currency savers",
        paragraph:
          "Convert your balance into MAD on the payout day using the official exchange rate, then apply the 2.5% rate or the helper calculator below.",
        bullets: [
          "Use the central-bank or official banking rate",
          "Log the conversion time for transparent auditing"
        ]
      }
    ],
    note:
      "Key reminder: Silver is favoured so middle-income households do not miss zakat. Switching to gold (≈ MAD 101k) dramatically reduces coverage and contradicts maroc zakat’s social mission."
  },
  comparison2024: {
    heading: "How 2025 differs from 2024",
    description:
      "Silver softened late 2024 (MAD 11.92/g) but recovered to MAD 12.51/g by November 2025, lifting the nisab by roughly 5%. If you deferred payment from 2024 into 2025, recalculate using the latest value to stay compliant.",
    rows: [
      { month: "January", value2024: "7,020", value2025: "7,312", note: "Industrial demand uptick" },
      { month: "April", value2024: "7,065", value2025: "7,366", note: "Prep for Ramadan distribution" },
      { month: "August", value2024: "7,118", value2025: "7,402", note: "Energy-market swings" },
      { month: "November", value2024: "7,080", value2025: "7,438", note: "Current national reference" }
    ],
    footnote:
      "If your savings crossed the nisab during 2024 but you’re paying in 2025, adopt the latest figure to protect recipients’ rights."
  },
  essentials: {
    heading: "Core principles we follow",
    description: "A Maliki-focused summary tuned to Morocco’s economic realities.",
    cards: [
      {
        title: "Official nisab",
        body: "We rely on 595g of silver (≈ MAD 7,438) to keep zakat flowing across middle-income earners.",
        badge: "High Council directive"
      },
      {
        title: "What is zakatable",
        body:
          "Zakat targets net savings after essential needs. It covers idle cash, bank balances, and quick assets that stayed above the nisab for a lunar year.",
        badge: "Maliki jurisprudence"
      },
      {
        title: "Hijri calendar first",
        body:
          "Track the lunar year from the month the nisab was reached. You may pre-pay during blessed seasons but still document the original due date.",
        badge: "Modern facilitation"
      }
    ]
  },
  regional: {
    heading: "Maghreb context",
    description:
      "Families working across Morocco, Algeria, and Tunisia can align zakat planning with national bulletins and regulatory expectations.",
    cards: [
      {
        title: "Morocco",
        intro:
          "Nisab 2025: MAD 7,438. Review Awqaf bulletins monthly so maroc zakat entries reflect the latest guidance.",
        bullets: [
          "Reference memo: High Council (Muharram 1447 AH)",
          "Documentation is recommended though not mandatory",
          "Prefer licensed charities or traceable bank transfers"
        ]
      },
      {
        title: "Algeria",
        intro:
          "Nisab 2025: DZD 705,000 (Oct 2025 decree). Ideal for diaspora workers balancing portfolios in dinars and dirhams.",
        bullets: [
          "Use the official exchange rate for cross-border giving",
          "e-Declaration is optional for individuals",
          "Notify licensed charities before international transfers"
        ]
      },
      {
        title: "Tunisia",
        intro:
          "Nisab 2025: TND 12,500 (Dār al-Iftā, Dhu al-Qi'dah 1446 AH). Convert to dirhams only at payout.",
        bullets: [
          "Monitor Central Bank FX releases",
          "Corporate zakat has additional bookkeeping rules",
          "Anti-money-laundering controls apply to foreign remittances"
        ]
      }
    ],
    note:
      "Tip: fix a single zakat anniversary even if savings are in multiple currencies. Convert everything to MAD on that date, log the rate, and keep the receipt."
  },
  scenarios: {
    heading: "Two illustrative scenarios",
    description:
      "Salary earner netting MAD 7,000 per month. Use them as templates before plugging your own numbers into the calculator.",
    cards: [
      {
        title: "Saving MAD 1,000/month",
        subtitle: "Reference case",
        items: [
          { label: "Balance after 12 months", value: "MAD 12,000" },
          { label: "Nisab reached?", value: "Yes (above MAD 7,438)" },
          { label: "Zakat due", value: "MAD 300" },
          { label: "Recommended payout", value: "Upon lunar year (Muharram) or earlier in Ramadan" }
        ],
        footer:
          "Pick a fixed Hijri date (e.g., Ramadan 10). Re-check balances before paying to confirm the nisab still holds."
      },
      {
        title: "Saving MAD 500/month",
        subtitle: "Lower surplus",
        items: [
          { label: "Balance after 12 months", value: "MAD 6,000" },
          { label: "Nisab reached?", value: "Not yet" },
          { label: "Zakat due", value: "None until the nisab is reached" },
          { label: "Next step", value: "Increase savings or reduce expenses to cross the threshold" }
        ],
        footer:
          "Track balances monthly so you know exactly when the nisab is hit. No zakat before that point."
      }
    ]
  },
  calculator: {
    heading: "Quick zakat calculator",
    description:
      "Compare your monthly surplus with the current nisab to estimate annual zakat. This tool is indicative—double-check before you pay.",
    salaryLabel: "Monthly salary (MAD)",
    expenseLabel: "Essential spending (MAD)",
    nisabLabel: "Nisab selection",
    nisabOptions: [
      { value: 7438, label: "Silver benchmark (recommended for Morocco)" },
      { value: 101397, label: "Gold benchmark (precautionary)" }
    ],
    submitLabel: "Calculate zakat",
    statusMessages: {
      invalid: {
        chip: "Missing data",
        recommendation: "Please provide at least the monthly salary."
      },
      noSavings: {
        chip: "No savings",
        recommendation:
          "Your essentials match or exceed income. Build a cushion before zakat becomes due."
      },
      belowNisab: {
        chip: "Below nisab",
        recommendation:
          "Keep monitoring. Zakat applies once your cumulative savings stay above the nisab for a full lunar year."
      },
      reachedNisab: {
        chip: "Nisab reached",
        recommendation:
          "Set aside 2.5% on your zakat anniversary. Early payment in Ramadan or Dhul-Hijjah remains valid."
      }
    },
    monthlySavingLabel: "Estimated monthly savings",
    annualSavingLabel: "Projected 12-month balance",
    zakatAmountLabel: "Zakat due (2.5%)",
    recommendationLabel: "Recommendation",
    initialRecommendation: "Fill the fields and click calculate.",
    hint: "* Estimates only. Base your payment on the actual balance on zakat day and consult a scholar for special cases."
  },
  why25: {
    heading: "Why the 2.5% rate still works",
    description:
      "The 2.5% (one quarter of one tenth) rate dates back to Prophetic practice and retains economic logic in 2025.",
    cards: [
      {
        title: "Grounded in the Sunnah",
        paragraph:
          "The hadith “A quarter of a tenth is due on silver” anchors modern rulings. Any cash-equivalent asset that behaves like silver inherits the same rate.",
        bullets: [
          "Applicable across Morocco, Algeria, and Tunisia",
          "Permits early payout to address urgent needs",
          "Productive capital without returns is temporarily exempt"
        ]
      },
      {
        title: "Macro-friendly level",
        paragraph:
          "With inflation hovering around 2–3% in North Africa, 2.5% keeps a balance between protecting the needy and sustaining household savings.",
        bullets: [
          "Include bank deposits and dormant balances",
          "Count distributed investment profits in the zakatable pool",
          "Document your 2.5% calculation for audits"
        ]
      }
    ]
  },
  usdCalculator: {
    heading: "Foreign-currency helper",
    description:
      "Before paying in dollars, euros, or pounds, convert the amount to MAD, compare it to the nisab, and then apply the 2.5% rate.",
    steps: [
      "Capture the balance in your foreign currency.",
      "Multiply by the official exchange rate on payout day.",
      "Check if the MAD total exceeds the current nisab.",
      "If yes, zakat equals MAD total × 0.025."
    ],
    tip: "Example: USD 2,000 × 10.12 = MAD 20,240 ⇒ zakat ≈ MAD 506.",
    table: [
      { currency: "US Dollar", rate: "10.12 MAD", nisab: "USD 735", zakat: "USD 18.4 (≈ MAD 186)" },
      { currency: "Euro", rate: "10.86 MAD", nisab: "EUR 685", zakat: "EUR 17.1 (≈ MAD 186)" },
      { currency: "Pound Sterling", rate: "12.54 MAD", nisab: "GBP 593", zakat: "GBP 14.8 (≈ MAD 186)" }
    ],
    caption:
      "Indicative values only. Always lock the same-day rate and keep the proof (screenshot, bank receipt, or PDF quote)."
  },
  timeline: {
    heading: "Hijri productivity calendar",
    description:
      "Plan saving, paying, and volunteering across the Hijri year. Highlighted months are peak giving windows in Morocco.",
    entries: [
      { title: "Muharram", description: "Early payout for balances nearing the zakat anniversary.", note: "Reference case anniversary" },
      { title: "Safar", description: "Support winter-readiness campaigns and vulnerable households." },
      { title: "Rabi' al-Awwal", description: "Increase giving in honour of the Prophet ﷺ; audit your balances." },
      { title: "Rabi' al-Thani ⇢ Jumada", description: "Cold season: focus on clothing drives and micro-debt relief." },
      { title: "Rajab", description: "Sacred month—ideal for scheduled early zakat." },
      { title: "Sha'ban", description: "Close the ledger and get ready for Ramadan disbursements." },
      {
        title: "Ramadan",
        description: "Peak generosity. Prioritise zakat, iftar programs, and community solidarity.",
        highlight: true,
        highlightStyle: "background: linear-gradient(135deg, rgba(146, 235, 37, 0.85), rgba(56, 189, 248, 0.85));"
      },
      { title: "Shawwal", description: "Continue giving after Ramadan; settle missed commitments." },
      { title: "Dhul-Qa'dah", description: "Reconcile balances before the zakat anniversary arrives." },
      {
        title: "Dhul-Hijjah",
        description: "The first ten days magnify rewards. Ideal for zakat and major sadaqah.",
        highlight: true,
        highlightStyle: "background: linear-gradient(135deg, rgba(37, 235, 119, 0.85), rgba(56, 189, 248, 0.85));"
      }
    ]
  },
  prayerTimes: {
    heading: "Official Moroccan prayer times",
    description:
      "Pull live timings from the Ministry of Awqaf portal and align zakat or sadaqah transfers with spiritually blessed windows.",
    iframeTitle: "Prayer schedule from the Moroccan Ministry of Awqaf",
    ctaLabel: "Open the prayer calendar on habous.gov.ma"
  },
  zakatSheet: {
    heading: "Download the maroc zakat tracker",
    description:
      "A lightweight CSV to monitor monthly net savings, see when you cross the nisab, and compute the final 2.5% in Excel, Numbers, or Google Sheets.",
    featureList: [
      "Structured columns: Month · Net salary · Essentials · Savings · Cumulative balance · Nisab status",
      "Built-in formulas for monthly surplus and zakat owed",
      "Automatic alert once the cumulative balance hits MAD 7,438"
    ],
    badges: ["CSV format", "Last updated Nov 2025"],
    downloadLabel: "Download maroc-zakat-tracker.csv",
    downloadHint:
      "In Google Sheets choose File → Import and create a new sheet. Share it with family members or financial controllers.",
    reminder:
      "Keep the “silver price” and “nisab” cells fresh as new bulletins drop or if you manage FX savings."
  },
  family: {
    heading: "Giving to relatives",
    description: "Keep the Maliki distinction between obligatory support and zakat-compliant giving.",
    cards: [
      {
        title: "Not eligible",
        body: "Parents, grandparents, children, and grandchildren already covered by mandatory maintenance."
      },
      {
        title: "Encouraged",
        body: "Siblings, uncles, aunts, and wider kin who aren’t under your financial responsibility."
      },
      {
        title: "Prefer discretion",
        body: "Private giving protects dignity unless public disclosure motivates others to give.",
        emphasis: "background: linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(40, 40, 40, 0.85)); color: #ffffff;"
      }
    ]
  },
  goldVsSilver: {
    heading: "Silver vs gold",
    description: "Why maroc zakat relies on silver and when a gold-based calculation still makes sense.",
    goldList: [
      "Gold nisab: 85g (≈ MAD 101,397)",
      "Targets high-income portfolios",
      "Skips zakat for most employees",
      "Use as a personal hedge if inflation spikes"
    ],
    silverList: [
      "Silver nisab: 595g (≈ MAD 7,438)",
      "Covers middle-income earners",
      "Aligns with Maliki social objectives",
      "Endorsed by the High Council of Ulamā"
    ],
    conclusion:
      "Recommendation: default to silver for societal reach. Choose gold only with scholarly approval and clear justification."
  },
  faq: {
    heading: "Frequently asked questions",
    description:
      "We track trending keywords in Arabic and English. Submit new requests on the collaboration page.",
    items: [
      {
        question: "How do I calculate the Moroccan nisab for 2025?",
        answer:
          "Add up liquid savings, deduct urgent liabilities, and check if the balance exceeds MAD 7,438 for a lunar year. Multiply the final figure by 0.025."
      },
      {
        question: "What about Algeria and Tunisia?",
        answer:
          "Algeria: DZD 705,000 ⇒ zakat starts at DZD 17,625. Tunisia: TND 12,500 ⇒ zakat equals TND 312.5 when reached. Convert to MAD for unified planning."
      },
      {
        question: "Why is the rate fixed at 2.5%?",
        answer:
          "It’s rooted in the Sunnah and centuries of consensus. Economically it balances redistribution with capital preservation across North Africa."
      },
      {
        question: "Can I automate monthly zakat?",
        answer:
          "Yes. Set standing orders, label them “zakat”, and review once a year to align with the updated nisab."
      },
      {
        question: "Which apps should I try?",
        answer:
          "Zakat Maroc (official), Zakatify (multi-currency), and Mawkib (impact tracking). Ensure you can customise the nisab."
      },
      {
        question: "Trusted Moroccan charities?",
        answer:
          "Entraide Nationale, Association de Soutien aux Veuves, and Banque Alimentaire. Request receipts for compliance."
      },
      {
        question: "Where do I get weekly nisab updates?",
        answer:
          "Visit habous.gov.ma, subscribe to the newsletter, or follow @maroc_zakat for digest summaries."
      },
      {
        question: "Best digital tools for planning?",
        answer:
          "Combine the maroc zakat CSV, Google Sheets, and your banking app. Use conditional formatting to flag nisab thresholds."
      }
    ]
  },
  sources: {
    heading: "Source material",
    description: "We reference official Moroccan guidance and pan-Maghreb resources.",
    links: [
      { label: "High Council fatwa on wage zakat", href: "https://agadir24.info/%D8%B2%D9%83%D8%A7%D8%A9-%D8%A7%D9%84%D8%A3%D8%AC%D9%88%D8%B1-%D8%A7%D9%84%D8%B4%D9%87%D8%B1%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D9%81%D8%AA%D9%88%D9%89-%D8%A7%D9%84%D9%85.html" },
      { label: "Maliki view on salary zakat (IslamWeb)", href: "https://www.islamweb.net/ar/fatwa/246004/%D9%85%D8%B0%D9%87%D8%A8-%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%83%D9%8A%D8%A9-%D9%81%D9%8A-%D8%B2%D9%83%D8%A7%D8%A9-%D8%A7%D9%84%D8%B1%D8%A7%D8%AA%D8%A8" },
      { label: "Moroccan Hijri calendar", href: "https://www.islamicfinder.org/world/morocco" },
      { label: "Zakat overview (Wikipedia)", href: "https://en.wikipedia.org/wiki/Zakat" },
      { label: "Full Ministry fatwa on zakat", href: "https://www.habous.gov.ma/%D8%A7%D9%84%D9%85%D8%AC%D9%84%D8%B3-%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A-%D8%A7%D9%84%D8%A7%D8%B9%D9%84%D9%89/21626-%D9%81%D8%AA%D9%88%D9%89-%D8%A7%D9%84%D9%85%D8%AC%D9%84%D8%B3-%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A-%D8%A7%D9%84%D8%A3%D8%B9%D9%84%D9%89-%D9%81%D9%8A-%D9%85%D9%88%D8%B6%D9%88%D8%B9-%D8%A7%D9%84%D8%B2%D9%83%D8%A7%D8%A9.html" }
    ]
  },
  footer: {
    summary: "Prepared under Maliki guidance and official Moroccan fatwas.",
    note: "Always consult a trusted scholar for special cases or when metal prices shift abruptly.",
    updated: "Last updated: November 2025"
  }
};

