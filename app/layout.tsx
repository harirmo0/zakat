import "./globals.css";
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap"
});

const LOCALE_META: Record<
  string,
  {
    dir: "ltr" | "rtl";
  }
> = {
  ar: { dir: "rtl" },
  fr: { dir: "ltr" },
  en: { dir: "ltr" },
  ru: { dir: "ltr" },
  zh: { dir: "ltr" }
};

export const metadata: Metadata = {
  metadataBase: new URL("https://maroczakat.com"),
  title: {
    default: "maroc zakat | حساب الزكاة2025 في المغرب",
    template: "%s | maroc zakat"
  },
  description:
    "مرجع maroc zakat الرسمي لحساب حساب الزكاة2025 بالمغرب والدول المغاربية مع حاسبات بالدرهم والدولار وروابط للتعاون.",
  keywords: [
    "maroc zakat",
    "zakat maroc",
    "نصاب الزكاة",
    "zakat calculator morocco",
    "nisab 2025",
    "zakat calculator api"
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg"
  },
  openGraph: {
    title: "maroc zakat",
    description:
      "حاسبة الزكاة 2025، حساب الزكاةبالمغرب، فروقات 2024، وروابط التعاون عبر منصة maroc zakat.",
    url: "https://maroczakat.com/",
    siteName: "maroc zakat",
    locale: "ar_MA",
    type: "website",
    images: [
      {
        url: "https://maroczakat.com/logo-maroc-zakat.svg",
        width: 1200,
        height: 630,
        alt: "maroc zakat – Calculatrice zakat Maroc 2025"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "maroc zakat",
    description:
      "منصة maroc zakat الرسمية لحساب حساب الزكاة2025 بالمغرب والدول المغاربية.",
    creator: "@maroc_zakat",
    site: "@maroc_zakat",
    images: ["https://maroczakat.com/logo-maroc-zakat.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet" : -1,
      "max-image-preview" : "large",
      "max-video-preview" : -1
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = cookies().get("NEXT_LOCALE")?.value ?? "ar";
  const { dir } = LOCALE_META[locale] ?? { dir: "rtl" };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "maroc zakat",
    alternateName: ["Maroc Zakat"],
    url: "https://maroczakat.com/",
    logo: "https://maroczakat.com/logo-maroc-zakat.svg",
    sameAs: [
      "https://x.com/maroc_zakat",
      "https://www.instagram.com/maroczakat/",
      "https://www.youtube.com/@maroc_zakat"
    ]
  };

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={tajawal.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}

