import { NextResponse } from "next/server";
import { appendContactSubmission } from "../../../lib/contact";
import { createRateLimiter } from "../../../lib/rate-limit";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const DEFAULT_ROLE = "subscriber";
const DEFAULT_REQUEST_TYPE = "data-update";
const DEFAULT_MESSAGE = "Please keep me updated of zakat with maroczakat reminder.";

const rateLimiter = createRateLimiter({ windowMs: WINDOW_MS, maxRequests: MAX_REQUESTS });

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getClientIp(headers: Headers): string {
  return (
    headers.get("cf-connecting-ip") ??
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headers.get("x-real-ip") ??
    "unknown"
  );
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const headers = request.headers;
  const ip = getClientIp(headers);
  const rate = rateLimiter.check(ip);

  if (!rate.allowed) {
    return NextResponse.json(
      {
        ok: false,
        error: { code: "rate_limited", message: "Too many reminder requests. Try again in a minute." }
      },
      {
        status: 429,
        headers: rate.retryAfter
          ? { "Retry-After": rate.retryAfter.toString(), "Cache-Control": "no-store" }
          : { "Cache-Control": "no-store" }
      }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: { code: "invalid_json", message: "Request body must be valid JSON." } },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const { email, name, locale = "en", consent } = (body ?? {}) as Record<string, unknown>;

  if (typeof email !== "string" || !isValidEmail(email.trim())) {
    return NextResponse.json(
      { ok: false, error: { code: "invalid_email", message: "A valid email address is required." } },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  if (!consent) {
    return NextResponse.json(
      { ok: false, error: { code: "consent_required", message: "Consent is required to subscribe." } },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    await appendContactSubmission({
      locale: typeof locale === "string" ? locale : "en",
      name: typeof name === "string" ? name : "",
      email: email.trim(),
      role: DEFAULT_ROLE,
      requestType: DEFAULT_REQUEST_TYPE,
      message: DEFAULT_MESSAGE,
      consent: true,
      ip,
      userAgent: headers.get("user-agent") ?? "unknown"
    });

    return NextResponse.json(
      {
        ok: true,
        meta: {
          rateLimit: {
            limit: MAX_REQUESTS,
            remaining: rate.remaining,
            windowMs: WINDOW_MS
          }
        }
      },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("/api/reminder error", error);
    return NextResponse.json(
      {
        ok: false,
        error: { code: "internal_error", message: "Unable to save the subscription. Please try again later." }
      },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}


