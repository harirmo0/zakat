import type { HomeContent, SupportedLocale } from "../../types/home";
import { homeContentAr } from "./ar";
import { homeContentEn } from "./en";
import { homeContentFr } from "./fr";
import { homeContentRu } from "./ru";
import { homeContentZh } from "./zh";

const homeContentMap: Record<SupportedLocale, HomeContent> = {
  ar: homeContentAr,
  en: homeContentEn,
  fr: homeContentFr,
  ru: homeContentRu,
  zh: homeContentZh
};

export function getHomeContent(locale: SupportedLocale): HomeContent {
  return homeContentMap[locale] ?? homeContentAr;
}

