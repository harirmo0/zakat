import { NextResponse } from "next/server";
import { listReminderSubscribers } from "../../../../lib/contact";
import { sendEmailSafe } from "../../../../lib/sendgrid";

const CRON_SECRET = process.env.REMINDER_CRON_SECRET;

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function hasAccess(headers: Headers) {
  if (!CRON_SECRET) {
    return true;
  }

  const authorization = headers.get("authorization");
  return authorization === `Bearer ${CRON_SECRET}`;
}

async function handler(request: Request) {
  if (!hasAccess(request.headers)) {
    return NextResponse.json(
      { ok: false, error: { code: "unauthorized", message: "Invalid or missing cron secret." } },
      { status: 401, headers: { "Cache-Control": "no-store" } }
    );
  }

  const subscribers = await listReminderSubscribers();

  if (subscribers.length === 0) {
    return NextResponse.json(
      { ok: true, sent: 0, message: "No reminder subscribers found." },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  }

  const now = new Date();
  const subject = `Maroc Zakat reminder – ${new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric"
  }).format(now)}`;

  const overview = [
    "Fresh nisab numbers (gold & silver) updated weekly.",
    "Calculator adjustments based on the latest inflation data.",
    "Practical tips for automating monthly zakat and sharing with family."
  ];

  const textBody = [
    "Salam,",
    "",
    "Here is your Maroc Zakat reminder:",
    ...overview.map((item) => `• ${item}`),
    "",
    "Visit https://maroczakat.com for the updated calculator and nisab tracker.",
    "",
    "Unsubscribe using the link in any email if you no longer wish to receive reminders."
  ].join("\n");

  const htmlBody = `
    <p>Salam,</p>
    <p>Here is your <strong>Maroc Zakat</strong> reminder:</p>
    <ul>
      ${overview.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <p>
      <a href="https://maroczakat.com" target="_blank" rel="noopener noreferrer">
        Visit maroczakat.com
      </a>
      for the latest calculator, nisab tracker, and resource updates.
    </p>
    <p style="font-size: 0.85rem; color: #64748b;">
      You can unsubscribe at any time using the link included in each reminder email.
    </p>
  `;

  const sendResult = await sendEmailSafe({
    to: subscribers.map((subscriber) => subscriber.email),
    subject,
    html: htmlBody,
    text: textBody,
    category: "reminder-monthly"
  });

  if (!sendResult.ok) {
    return NextResponse.json(
      { ok: false, error: { code: "send_failed", message: "Failed to deliver reminder emails." } },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }

  return NextResponse.json(
    {
      ok: true,
      sent: subscribers.length,
      meta: { executedAt: now.toISOString() }
    },
    { status: 200, headers: { "Cache-Control": "no-store" } }
  );
}

export const GET = handler;
export const POST = handler;


