import "./globals.css";
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import { cookies } from "next/headers";

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
    default: "maroc zakat | نصاب الزكاة 2025 في المغرب",
    template: "%s | maroc zakat"
  },
  description:
    "مرجع maroc zakat الرسمي لحساب نصاب الزكاة 2025 بالمغرب والدول المغاربية مع حاسبات بالدرهم والدولار وروابط للتعاون.",
  openGraph: {
    title: "maroc zakat",
    description:
      "حاسبة الزكاة 2025، نصاب الزكاة بالمغرب، فروقات 2024، وروابط التعاون عبر منصة maroc zakat.",
    url: "https://maroczakat.com/",
    siteName: "maroc zakat",
    locale: "ar_MA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "maroc zakat",
    description:
      "منصة maroc zakat الرسمية لحساب نصاب الزكاة 2025 بالمغرب والدول المغاربية.",
    creator: "@maroc_zakat"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = cookies().get("NEXT_LOCALE")?.value ?? "ar";
  const { dir } = LOCALE_META[locale] ?? { dir: "rtl" };

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={tajawal.className}>{children}</body>
    </html>
  );
}

