import { NextResponse } from "next/server";
import { appendContactSubmission, throttleIp } from "../../../lib/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      locale = "",
      name = "",
      email = "",
      role = "",
      requestType = "",
      message = "",
      consent = false
    } = body ?? {};

    if (!name || !email || !message || !consent) {
      return NextResponse.json(
        {
          ok: false,
          message: consent
            ? "Please provide name, email, and message."
            : "We need your consent to process the request."
        },
        { status: 400 }
      );
    }

    const headers = request.headers;
    const ip =
      headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      headers.get("x-real-ip") ??
      "unknown";

    if (!throttleIp(ip)) {
      return NextResponse.json(
        { ok: false, message: "Please wait a moment before sending another request." },
        { status: 429 }
      );
    }

    await appendContactSubmission({
      locale,
      name,
      email,
      role,
      requestType,
      message,
      consent: Boolean(consent),
      ip,
      userAgent: headers.get("user-agent") ?? "unknown"
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("/api/contact error", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not save your request right now. Please verify your Google configuration and try again."
      },
      { status: 500 }
    );
  }
}

