import type { MetadataRoute } from "next";

const BASE_URL = "https://maroczakat.com";
const LOCALES = ["ar", "fr", "en", "ru", "zh"];
const STATIC_ROUTES = ["", "/contact", "/api-calculator"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  return LOCALES.flatMap((locale) =>
    STATIC_ROUTES.map((route) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.6
    }))
  );
}

