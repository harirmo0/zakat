import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "../../components/home/HomePage";
import { getHomeContent } from "../../content/home";
import type { SupportedLocale } from "../../types/home";

const SUPPORTED_LOCALES: SupportedLocale[] = ["ar", "fr", "en", "ru", "zh"];
const LOCALE_TO_LANG: Record<SupportedLocale, string> = {
  ar: "ar-MA",
  fr: "fr-FR",
  en: "en-US",
  ru: "ru-RU",
  zh: "zh-CN"
};
const BASE_URL = "https://maroczakat.com";
const LOCALE_KEYWORDS: Record<SupportedLocale, string[]> = {
  ar: ["maroc zakat", "نصاب الزكاة المغرب", "حاسبة الزكاة المغرب", "zakat morocco", "nisab 2025"],
  fr: ["maroc zakat", "zakat maroc", "calculatrice zakat maroc", "nisab 2025", "zakat au maroc"],
  en: ["maroc zakat", "morocco zakat calculator", "zakat morocco", "nisab morocco 2025", "zakat calculator"],
  ru: ["maroc zakat", "закят марокко", "калькулятор закята", "нисаб марокко 2025", "zakat morocco"],
  zh: ["maroc zakat", "摩洛哥天课", "天课计算器", "摩洛哥尼萨布 2025", "zakat morocco"]
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: { locale: SupportedLocale };
}): Promise<Metadata> {
  const { locale } = params;

  if (!SUPPORTED_LOCALES.includes(locale)) {
    return {};
  }

  const content = await getHomeContent(locale);
  const lang = LOCALE_TO_LANG[locale];
  const keywords = LOCALE_KEYWORDS[locale] ?? LOCALE_KEYWORDS.en;
  const pageUrl = `${BASE_URL}/${locale}`;

  return {
    title: content.hero.title,
    description: content.hero.description,
    keywords,
    alternates: {
      canonical: pageUrl,
      languages: SUPPORTED_LOCALES.reduce<Record<string, string>>((acc, loc) => {
        acc[LOCALE_TO_LANG[loc]] = `${BASE_URL}/${loc}`;
        return acc;
      }, {})
    },
    openGraph: {
      title: content.hero.title,
      description: content.hero.description,
      url: pageUrl,
      siteName: "maroc zakat",
      locale: lang,
      type: "website",
      images: [
        {
          url: "https://maroczakat.com/logo-maroc-zakat.svg",
          width: 1200,
          height: 630,
          alt: `${content.hero.title} – maroc zakat`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: content.hero.title,
      description: content.hero.description,
      site: "@maroc_zakat",
      creator: "@maroc_zakat",
      images: ["https://maroczakat.com/logo-maroc-zakat.svg"]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export default async function LocaleHome({
  params
}: {
  params: { locale: SupportedLocale };
}) {
  const { locale } = params;

  if (!SUPPORTED_LOCALES.includes(locale)) {
    notFound();
  }

  const content = await getHomeContent(locale);
  return <HomePage content={content} locale={locale} />;
}

