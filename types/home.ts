export type SupportedLocale = "ar" | "fr" | "en" | "ru" | "zh";

export interface NavItem {
  id: string;
  label: string;
}

export interface MetaItem {
  value: string;
  label: string;
}

export interface HeroContent {
  tag: string;
  title: string;
  description: string;
  navItems: NavItem[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  meta: MetaItem[];
}

export interface StatCardContent {
  title: string;
  paragraph: string;
  bullets: string[];
}

export interface ComparisonRow {
  month: string;
  value2024: string;
  value2025: string;
  note: string;
}

export interface SimpleCardContent {
  title: string;
  body: string;
  badge?: string;
  emphasis?: string;
}

export interface RegionCardContent {
  title: string;
  intro: string;
  bullets: string[];
}

export interface ScenarioCardContent {
  title: string;
  subtitle: string;
  items: { label: string; value: string }[];
  footer: string;
}

export interface CalculatorContent {
  heading: string;
  description: string;
  salaryLabel: string;
  expenseLabel: string;
  nisabLabel: string;
  nisabOptions: { value: number; label: string }[];
  submitLabel: string;
  statusMessages: {
    invalid: { chip: string; recommendation: string };
    noSavings: { chip: string; recommendation: string };
    belowNisab: { chip: string; recommendation: string };
    reachedNisab: { chip: string; recommendation: string };
  };
  monthlySavingLabel: string;
  annualSavingLabel: string;
  zakatAmountLabel: string;
  recommendationLabel: string;
  initialRecommendation: string;
  hint: string;
}

export interface WhySectionContent {
  heading: string;
  description: string;
  cards: {
    title: string;
    paragraph: string;
    bullets: string[];
  }[];
}

export interface UsdCalculatorContent {
  heading: string;
  description: string;
  steps: string[];
  tip: string;
  table: {
    currency: string;
    rate: string;
    nisab: string;
    zakat: string;
  }[];
  caption: string;
}

export interface TimelineEntry {
  title: string;
  description: string;
  note?: string;
  highlight?: boolean;
  highlightStyle?: string;
}

export interface PrayerSectionContent {
  heading: string;
  description: string;
  iframeTitle: string;
  ctaLabel: string;
}

export interface ZakatSheetContent {
  heading: string;
  description: string;
  featureList: string[];
  badges: string[];
  downloadLabel: string;
  downloadHint: string;
  reminder: string;
}

export interface GoldSilverContent {
  heading: string;
  description: string;
  goldList: string[];
  silverList: string[];
  conclusion: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SourcesContent {
  heading: string;
  description: string;
  links: { label: string; href: string }[];
}

export interface FooterContent {
  summary: string;
  note: string;
  updated: string;
}

export interface HomeContent {
  locale: SupportedLocale;
  brandSection?: {
    heading: string;
    description: string;
    pillars: { title: string; detail: string }[];
  };
  hero: HeroContent;
  overview2025: {
    heading: string;
    description: string;
    stats: StatCardContent[];
    note: string;
  };
  comparison2024: {
    heading: string;
    description: string;
    rows: ComparisonRow[];
    footnote: string;
  };
  essentials: {
    heading: string;
    description: string;
    cards: SimpleCardContent[];
  };
  regional: {
    heading: string;
    description: string;
    cards: RegionCardContent[];
    note: string;
  };
  scenarios: {
    heading: string;
    description: string;
    cards: ScenarioCardContent[];
  };
  calculator: CalculatorContent;
  why25: WhySectionContent;
  usdCalculator: UsdCalculatorContent;
  timeline: {
    heading: string;
    description: string;
    entries: TimelineEntry[];
  };
  prayerTimes: PrayerSectionContent;
  zakatSheet: ZakatSheetContent;
  family: {
    heading: string;
    description: string;
    cards: SimpleCardContent[];
  };
  goldVsSilver: GoldSilverContent;
  faq: {
    heading: string;
    description: string;
    items: FaqItem[];
  };
  sources: SourcesContent;
  footer: FooterContent;
}

