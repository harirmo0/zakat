import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import SiteHeader from "../../components/layout/SiteHeader";
import type { SupportedLocale } from "../../types/home";
import { Analytics } from "@vercel/analytics/next"

const SUPPORTED_LOCALES: SupportedLocale[] = ["ar", "fr", "en", "ru", "zh"];

export default function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: SupportedLocale };
}) {
  const { locale } = params;
  if (!SUPPORTED_LOCALES.includes(locale)) {
    notFound();
  }

  return (
    <>
      <SiteHeader locale={locale} />
      {children}
    </>
  );
}

