"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import type { SupportedLocale } from "../../types/home";

const LOCALES: SupportedLocale[] = ["ar", "fr", "en", "ru", "zh"];

const LABELS: Record<
  SupportedLocale,
  {
    home: string;
    calculator: string;
    contact: string;
    localeName: string;
    localeSwitcher: string;
  }
> = {
  ar: {
    home: "الرئيسية",
    calculator: "حاسبة الزكاة",
    contact: "اتصل بنا",
    localeName: "العربية",
    localeSwitcher: "اللغة"
  },
  fr: {
    home: "Accueil",
    calculator: "Calculatrice",
    contact: "Contact",
    localeName: "Français",
    localeSwitcher: "Langue"
  },
  en: {
    home: "Home",
    calculator: "Calculator",
    contact: "Contact",
    localeName: "English",
    localeSwitcher: "Language"
  },
  ru: {
    home: "Главная",
    calculator: "Калькулятор",
    contact: "Контакты",
    localeName: "Русский",
    localeSwitcher: "Язык"
  },
  zh: {
    home: "首页",
    calculator: "天课计算器",
    contact: "联系",
    localeName: "中文",
    localeSwitcher: "语言"
  }
};

const LOCALE_DISPLAY: Record<SupportedLocale, string> = {
  ar: "العربية",
  fr: "Français",
  en: "English",
  ru: "Русский",
  zh: "中文"
};

const LOCALE_FLAGS: Record<SupportedLocale, { flag: string; title: string; code: string }> = {
  ar: { flag: "🇲🇦", title: "العربية", code: "AR" },
  fr: { flag: "🇫🇷", title: "Français", code: "FR" },
  en: { flag: "🇬🇧", title: "English", code: "EN" },
  ru: { flag: "🇷🇺", title: "Русский", code: "RU" },
  zh: { flag: "🇨🇳", title: "中文", code: "ZH" }
};

export default function SiteHeader({ locale }: { locale: SupportedLocale }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const labels = LABELS[locale];
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      if (typeof window === "undefined") return;
      setCurrentHash(window.location.hash ?? "");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const basePath = useMemo(() => {
    if (!pathname) return "/";
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length <= 1) return "/";
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }, [pathname]);

  const queryString = searchParams.toString();

  const localeHref = (targetLocale: SupportedLocale) => {
    const path = basePath === "/" ? "" : basePath;
    const url = `/${targetLocale}${path}`;
    if (!queryString) return url || "/";
    return `${url}?${queryString}`;
  };

  const homeActive = basePath === "/" && currentHash !== "#calculator";
  const navItems = [
    {
      href: `/${locale}${queryString ? `?${queryString}` : ""}`,
      label: labels.home,
      isActive: homeActive
    },
    {
      href: `/${locale}${queryString ? `?${queryString}` : ""}#calculator`,
      label: labels.calculator,
      isActive: basePath === "/" && currentHash === "#calculator"
    },
    {
      href: `/${locale}/contact${queryString ? `?${queryString}` : ""}`,
      label: labels.contact,
      isActive: basePath.startsWith("/contact")
    }
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" href={`/${locale}`} aria-label="maroc zakat home">
          <span className="site-header__brand-logo" aria-hidden="true">
            <Image src="/logo-maroc-zakat.svg" alt="" width={36} height={36} priority />
          </span>
          <span className="site-header__brand-wordmark">
            <span className="site-header__brand-line">Maroc</span>
            <span className="site-header__brand-line">Zakat</span>
          </span>
        </Link>
        <nav className="site-header__nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`site-header__link ${item.isActive ? "site-header__link--active" : ""}`}
              aria-current={item.isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-header__locale" aria-label={labels.localeSwitcher} role="group">
          <span className="site-header__locale-label">{labels.localeSwitcher}</span>
          <ul className="site-header__locale-list">
            {LOCALES.map((loc) => {
              const isActive = loc === locale;
              return (
                <li key={loc}>
                  <LocaleFlag
                    href={localeHref(loc)}
                    isActive={isActive}
                    ariaLabel={LOCALE_DISPLAY[loc]}
                    title={LOCALE_FLAGS[loc].title}
                    flag={LOCALE_FLAGS[loc].flag}
                    code={LOCALE_FLAGS[loc].code}
                    hash={currentHash}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}

function LocaleFlag({
  href,
  isActive,
  ariaLabel,
  title,
  flag,
  code,
  hash
}: {
  href: string;
  isActive: boolean;
  ariaLabel: string;
  title: string;
  flag: string;
  code: string;
  hash: string;
}) {
  return (
    <Link
      className={`site-header__flag ${isActive ? "site-header__flag--active" : ""}`}
      href={`${href}${hash ?? ""}`}
      aria-label={ariaLabel}
      title={title}
      aria-current={isActive ? "true" : undefined}
    >
      <span aria-hidden="true" className="site-header__flag-icon">
        {flag}
      </span>
      <span className="site-header__flag-code" aria-hidden="true">
        {code}
      </span>
    </Link>
  );
}

