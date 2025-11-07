import type { HomeContent, SupportedLocale } from "../../types/home";

export async function getHomeContent(locale: SupportedLocale): Promise<HomeContent> {
  switch (locale) {
    case "fr":
      return (await import("./fr")).default;
    case "en":
      return (await import("./en")).default;
    case "ru":
      return (await import("./ru")).default;
    case "zh":
      return (await import("./zh")).default;
    case "ar":
    default:
      return (await import("./ar")).default;
  }
}

