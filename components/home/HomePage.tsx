import Script from "next/script";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { HomeContent, SupportedLocale } from "../../types/home";
import CalculatorSection from "./CalculatorSection";
import ReminderSignup from "./ReminderSignup";

const SKIP_LINK_LABEL: Record<SupportedLocale, string> = {
  ar: "تجاوز إلى المحتوى الرئيسي",
  fr: "Aller directement au contenu",
  en: "Skip to main content",
  ru: "Перейти к основному содержанию",
  zh: "跳至主要内容"
};

const CTA_LABELS: Record<SupportedLocale, { downloadNote: string }> = {
  ar: { downloadNote: "تنزيل الملف" },
  fr: { downloadNote: "Télécharger le fichier" },
  en: { downloadNote: "Download file" },
  ru: { downloadNote: "Скачать файл" },
  zh: { downloadNote: "下载文件" }
};

const COMPARISON_HEADERS: Record<
  SupportedLocale,
  { month: string; v2024: string; v2025: string; note: string }
> = {
  ar: {
    month: "الشهر",
    v2024: "نصاب 2024 (د.م)",
    v2025: "نصاب 2025 (د.م)",
    note: "ملاحظة"
  },
  fr: {
    month: "Mois",
    v2024: "Nisab 2024 (MAD)",
    v2025: "Nisab 2025 (MAD)",
    note: "Commentaire"
  },
  en: {
    month: "Month",
    v2024: "2024 Nisab (MAD)",
    v2025: "2025 Nisab (MAD)",
    note: "Insight"
  },
  ru: {
    month: "Месяц",
    v2024: "Нисаб 2024 (MAD)",
    v2025: "Нисаб 2025 (MAD)",
    note: "Комментарий"
  },
  zh: {
    month: "月份",
    v2024: "2024 尼萨布（MAD）",
    v2025: "2025 尼萨布（MAD）",
    note: "说明"
  }
};

const FX_LABELS: Record<
  SupportedLocale,
  {
    stepsTitle: string;
    tableTitle: string;
    currency: string;
    rate: string;
    nisab: string;
    zakat: string;
  }
> = {
  ar: {
    stepsTitle: "خطوات التحويل",
    tableTitle: "الجدول المرجعي السريع",
    currency: "العملة",
    rate: "سعر الصرف",
    nisab: "نصاب مكافئ",
    zakat: "زكاة 2.5%"
  },
  fr: {
    stepsTitle: "Étapes",
    tableTitle: "Tableau de référence",
    currency: "Devise",
    rate: "Taux",
    nisab: "Nisab équivalent",
    zakat: "Zakat 2,5 %"
  },
  en: {
    stepsTitle: "Steps",
    tableTitle: "Reference table",
    currency: "Currency",
    rate: "Rate",
    nisab: "Nisab equivalent",
    zakat: "Zakat 2.5%"
  },
  ru: {
    stepsTitle: "Шаги",
    tableTitle: "Справочная таблица",
    currency: "Валюта",
    rate: "Курс",
    nisab: "Эквивалент нисаба",
    zakat: "Zakat 2,5 %"
  },
  zh: {
    stepsTitle: "步骤",
    tableTitle: "参考表",
    currency: "货币",
    rate: "汇率",
    nisab: "对应尼萨布",
    zakat: "2.5% 天课"
  }
};

const TIMELINE_STYLE_PROPS = (entry: HomeContent["timeline"]["entries"][number]) =>
  entry.highlight && entry.highlightStyle
    ? {
        style: {
          background: entry.highlightStyle
        }
      }
    : {};

const BASE_URL = "https://maroczakat.com";
const SOCIAL_LINKS = [
  "https://x.com/maroc_zakat",
  "https://www.youtube.com/@maroc_zakat",
  "https://www.reddit.com/r/maroc_zakat",
  "https://www.facebook.com/maroc_zakat"
];

function buildStructuredData(content: HomeContent, locale: SupportedLocale) {
  const faqEntities = content.faq.items.slice(0, 6).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        url: `${BASE_URL}/${locale}`,
        inLanguage: locale,
        name: "maroc zakat",
        description: content.hero.description,
        sameAs: SOCIAL_LINKS
      },
      {
        "@type": "Organization",
        name: "maroc zakat",
        url: `${BASE_URL}/${locale}`,
        sameAs: SOCIAL_LINKS,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "hello@maroczakat.com",
            areaServed: "MA"
          }
        ]
      },
      {
        "@type": "FAQPage",
        mainEntity: faqEntities
      }
    ]
  };
}

export function HomePage({ content, locale }: { content: HomeContent; locale: SupportedLocale }) {
  const skipLabel = SKIP_LINK_LABEL[locale];
  const { downloadNote } = CTA_LABELS[locale];
  const comparisonHeaders = COMPARISON_HEADERS[locale];
  const fxLabels = FX_LABELS[locale];

  return (
    <>
      <Script id={`structured-data-${locale}`} type="application/ld+json">
        {JSON.stringify(buildStructuredData(content, locale))}
      </Script>
      <a className="skip-link" href="#mainContent">
        {skipLabel}
      </a>
      <header className="hero" role="banner">
        <div className="hero__content">
          <span className="hero__tag">{content.hero.tag}</span>
          <h1>{content.hero.title}</h1>
          <p>{content.hero.description}</p>
          <nav className="hero__nav" aria-label="maroc zakat sections">
            <ul>
              {content.hero.navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hero__actions">
            <a className="btn btn--primary" href={content.hero.primaryCta.href}>
              {content.hero.primaryCta.label}
            </a>
            <a className="btn btn--ghost" href={content.hero.secondaryCta.href}>
              {content.hero.secondaryCta.label}
            </a>
          </div>
          <div className="hero__meta">
            {content.hero.meta.map((item) => (
              <div key={item.label}>
                <span className="meta__value">{item.value}</span>
                <span className="meta__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main id="mainContent">
        {/* Brand section hidden temporarily */}

        <section className="section" id="overview-2025">
          <div className="section__header">
            <h2>{content.overview2025.heading}</h2>
            <p>{content.overview2025.description}</p>
          </div>
          <div className="stats-grid">
            {content.overview2025.stats.map((stat) => (
              <article className="stat-card" key={stat.title}>
                <h3>{stat.title}</h3>
                <p>{stat.paragraph}</p>
                <ul>
                  {stat.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="note note--accent">{content.overview2025.note}</div>
        </section>

        <section className="section section--alt" id="nisab-2024">
          <div className="section__header">
            <h2>{content.comparison2024.heading}</h2>
            <p>{content.comparison2024.description}</p>
          </div>
          <div className="table-wrapper">
            <table className="data-table" aria-label={content.comparison2024.heading}>
              <thead>
                <tr>
                  <th scope="col">{comparisonHeaders.month}</th>
                  <th scope="col">{comparisonHeaders.v2024}</th>
                  <th scope="col">{comparisonHeaders.v2025}</th>
                  <th scope="col">{comparisonHeaders.note}</th>
                </tr>
              </thead>
              <tbody>
                {content.comparison2024.rows.map((row) => (
                  <tr key={row.month}>
                    <td>{row.month}</td>
                    <td>{row.value2024}</td>
                    <td>{row.value2025}</td>
                    <td>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="section__footnote">{content.comparison2024.footnote}</p>
        </section>

        <section className="section" id="essentials">
          <div className="section__header">
            <h2>{content.essentials.heading}</h2>
            <p>{content.essentials.description}</p>
          </div>
          <div className="grid grid--3">
            {content.essentials.cards.map((card) => (
              <article className="card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                {card.badge && <span className="badge">{card.badge}</span>}
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="regional-nisab">
          <div className="section__header">
            <h2>{content.regional.heading}</h2>
            <p>{content.regional.description}</p>
          </div>
          <div className="grid grid--3">
            {content.regional.cards.map((card) => (
              <article className="region-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.intro}</p>
                <ul>
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="regional-tip">{content.regional.note}</div>
        </section>

        <section className="section" id="scenarios">
          <div className="section__header">
            <h2>{content.scenarios.heading}</h2>
            <p>{content.scenarios.description}</p>
          </div>
          <div className="grid grid--2">
            {content.scenarios.cards.map((scenario) => (
              <article className="card card--scenario" key={scenario.title}>
                <header>
                  <h3>{scenario.title}</h3>
                  <span>{scenario.subtitle}</span>
                </header>
                <dl>
                  {scenario.items.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
                <footer>
                  <p>{scenario.footer}</p>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <CalculatorSection content={content.calculator} locale={locale} />

        <section className="section" id="why-2-5">
          <div className="section__header">
            <h2>{content.why25.heading}</h2>
            <p>{content.why25.description}</p>
          </div>
          <div className="grid grid--2">
            {content.why25.cards.map((card) => (
              <article className="card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.paragraph}</p>
                <ul className="list">
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--alt" id="usd-calculator">
          <div className="section__header">
            <h2>{content.usdCalculator.heading}</h2>
            <p>{content.usdCalculator.description}</p>
          </div>
          <div className="grid grid--2 usd-grid">
            <article className="card">
              <h3>{fxLabels.stepsTitle}</h3>
              <ol className="list list--numbered">
                {content.usdCalculator.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="tip">{content.usdCalculator.tip}</p>
            </article>
            <article className="card">
              <h3>{fxLabels.tableTitle}</h3>
              <table className="data-table data-table--compact">
                <thead>
                  <tr>
                    <th scope="col">{fxLabels.currency}</th>
                    <th scope="col">{fxLabels.rate}</th>
                    <th scope="col">{fxLabels.nisab}</th>
                    <th scope="col">{fxLabels.zakat}</th>
                  </tr>
                </thead>
                <tbody>
                  {content.usdCalculator.table.map((row) => (
                    <tr key={row.currency}>
                      <td>{row.currency}</td>
                      <td>{row.rate}</td>
                      <td>{row.nisab}</td>
                      <td>{row.zakat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="table-caption">{content.usdCalculator.caption}</p>
            </article>
          </div>
        </section>

        <section className="section" id="timeline">
          <div className="section__header">
            <h2>{content.timeline.heading}</h2>
            <p>{content.timeline.description}</p>
          </div>
          <div className="timeline">
            {content.timeline.entries.map((entry) => (
              <article key={entry.title} {...TIMELINE_STYLE_PROPS(entry)}>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
                {entry.note && <span>{entry.note}</span>}
              </article>
            ))}
          </div>
        </section>

        {/* Prayer times section hidden temporarily */}

        <section className="section" id="zakat-sheet">
          <div className="section__header">
            <h2>{content.zakatSheet.heading}</h2>
            <p>{content.zakatSheet.description}</p>
          </div>
          <div className="download-card">
            <div className="download-card__body">
              <h3>{downloadNote}</h3>
              <ul className="list">
                {content.zakatSheet.featureList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="download-meta">
                {content.zakatSheet.badges.map((badge) => (
                  <span className="badge badge--secondary" key={badge}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="download-card__actions">
              <a className="btn btn--download" href="/zakat-calculator-2025.csv" download>
                {content.zakatSheet.downloadLabel}
              </a>
              <p>{content.zakatSheet.downloadHint}</p>
            </div>
          </div>
          <div className="note">{content.zakatSheet.reminder}</div>
        </section>

        <section className="section section--alt" id="family">
          <div className="section__header">
            <h2>{content.family.heading}</h2>
            <p>{content.family.description}</p>
          </div>
          <div className="grid grid--3">
            {content.family.cards.map((card) => (
              <article
                className="card"
                key={card.title}
                style={card.emphasis ? parseStyle(card.emphasis) : undefined}
              >
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="comparisons">
          <div className="section__header">
            <h2>{content.goldVsSilver.heading}</h2>
            <p>{content.goldVsSilver.description}</p>
          </div>
          <div className="comparison">
            <div>
              <h3>Gold</h3>
              <ul>
                {content.goldVsSilver.goldList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Silver</h3>
              <ul>
                {content.goldVsSilver.silverList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="note">{content.goldVsSilver.conclusion}</p>
        </section>

        <section className="section section--alt" id="reminder">
          <div className="section__header">
            <h2>{content.reminder.heading}</h2>
            <p>{content.reminder.description}</p>
          </div>
          <div className="reminder">
            <ReminderSignup copy={content.reminder} locale={locale} />
          </div>
        </section>

        <section className="section section--alt" id="faq">
          <div className="section__header">
            <h2>{content.faq.heading}</h2>
            <p>{content.faq.description}</p>
          </div>
          <div className="faq-grid">
            {content.faq.items.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section section--alt" id="sources">
          <div className="section__header">
            <h2>{content.sources.heading}</h2>
            <p>{content.sources.description}</p>
          </div>
          <ul className="links">
            {content.sources.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="footer__brand">
            <span className="footer__brand-logo" aria-hidden="true">
              <Image src="/logo-maroc-zakat.svg" alt="" width={44} height={44} />
            </span>
            <span className="footer__brand-wordmark" aria-hidden="true">
              <span>Maroc</span>
              <span>Zakat</span>
            </span>
          </div>
          <p>{content.footer.summary}</p>
          <p className="footer__note">{content.footer.note}</p>
          {content.footer.social ? (
            <div className="footer__social">
              <span className="footer__social-heading">{content.footer.social.heading}</span>
              <ul className="footer__social-links">
                {content.footer.social.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      aria-label={link.ariaLabel ?? link.label}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        {content.footer.copyright && <span className="footer__copyright">{content.footer.copyright}</span>}
        <span className="footer__signature">{content.footer.updated}</span>
      </footer>
    </>
  );
}

function parseStyle(styleString: string): CSSProperties {
  return styleString
    .split(";")
    .filter(Boolean)
    .reduce<CSSProperties>((acc, declaration) => {
      const [property, value] = declaration.split(":");
      if (property && value) {
        const camelCased = property
          .trim()
          .replace(/-([a-z])/g, (_, char) => char.toUpperCase());
        (acc as Record<string, string>)[camelCased] = value.trim();
      }
      return acc;
    }, {});
}

export default HomePage;

