import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const LOCALES = ["ar", "fr", "en", "ru", "zh"];
const DEFAULT_LOCALE = "ar";
const LOCALE_COOKIE = "NEXT_LOCALE";

function getLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && LOCALES.includes(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const prioritized = acceptLanguage
    .split(",")
    .map((part: string) => part.trim().split(";")[0])
    .filter(Boolean);

  for (const lang of prioritized) {
    const base = lang.split("-")[0];
    if (LOCALES.includes(lang as any)) return lang;
    if (LOCALES.includes(base)) return base;
  }
  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes("/static/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathLocale = pathname.split("/")[1];
  if (LOCALES.includes(pathLocale)) {
    const response = NextResponse.next();
    response.cookies.set({
      name: LOCALE_COOKIE,
      value: pathLocale,
      path: "/",
      httpOnly: true,
      sameSite: "lax"
    });
    return response;
  }

  const detectedLocale = getLocale(request);
  const redirectUrl = new URL(`/${detectedLocale}${pathname}`, request.url);
  if (search) {
    redirectUrl.search = search;
  }
  const response = NextResponse.redirect(redirectUrl);
  response.cookies.set({
    name: LOCALE_COOKIE,
    value: detectedLocale,
    path: "/",
    httpOnly: true,
    sameSite: "lax"
  });
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"]
};

