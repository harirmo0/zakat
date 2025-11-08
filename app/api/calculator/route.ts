import { NextResponse } from "next/server";
import { calculateZakat, validateCalculatorInputs } from "../../../lib/calculator";
import { createRateLimiter } from "../../../lib/rate-limit";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

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

function mapStatusToErrorMessage(status: "invalid_salary" | "invalid_expenses" | "invalid_nisab") {
  switch (status) {
    case "invalid_salary":
      return "salary must be greater than zero.";
    case "invalid_expenses":
      return "expenses cannot be negative.";
    case "invalid_nisab":
      return "nisab must be greater than zero.";
    default:
      return "invalid calculator input.";
  }
}

export async function POST(request: Request) {
  const ip = getClientIp(request.headers);
  const rate = rateLimiter.check(ip);

  if (!rate.allowed) {
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "rate_limited",
          message: "Rate limit exceeded. Try again in a minute."
        }
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
      {
        ok: false,
        error: { code: "invalid_json", message: "Request body must be valid JSON." }
      },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const inputs = validateCalculatorInputs(body);

  if (!inputs) {
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "invalid_input",
          message: "Provide salary, expenses, and nisab as non-negative numeric values."
        }
      },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    const calculation = calculateZakat(inputs);

    if (
      calculation.status === "invalid_salary" ||
      calculation.status === "invalid_expenses" ||
      calculation.status === "invalid_nisab"
    ) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: calculation.status,
            message: mapStatusToErrorMessage(calculation.status)
          }
        },
        { status: 400, headers: { "Cache-Control": "no-store" } }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        data: {
          currency: "MAD",
          inputs,
          result: calculation
        },
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
    console.error("/api/calculator error", error);
    return NextResponse.json(
      {
        ok: false,
        error: { code: "internal_error", message: "Failed to process calculation. Try again later." }
      },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      ok: false,
      error: {
        code: "method_not_allowed",
        message: "Use POST with JSON payload to perform a calculation."
      }
    },
    { status: 405, headers: { Allow: "POST", "Cache-Control": "no-store" } }
  );
}


