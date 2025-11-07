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

  return {
    title: content.hero.title,
    description: content.hero.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: SUPPORTED_LOCALES.reduce<Record<string, string>>((acc, loc) => {
        acc[LOCALE_TO_LANG[loc]] = `${BASE_URL}/${loc}`;
        return acc;
      }, {})
    },
    openGraph: {
      title: content.hero.title,
      description: content.hero.description,
      url: `${BASE_URL}/${locale}`,
      siteName: "maroc zakat",
      locale: lang,
      type: "website"
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

