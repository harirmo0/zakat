import sgMail, { type MailDataRequired } from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL;
const SENDGRID_FROM_NAME = process.env.SENDGRID_FROM_NAME ?? "Maroc Zakat";
const SENDGRID_REPLY_EMAIL = process.env.SENDGRID_REPLY_EMAIL;

let isConfigured = false;

function ensureConfigured() {
  if (isConfigured) {
    return;
  }

  if (!SENDGRID_API_KEY) {
    throw new Error("SENDGRID_API_KEY is not set.");
  }

  if (!SENDGRID_FROM_EMAIL) {
    throw new Error("SENDGRID_FROM_EMAIL is not set.");
  }

  sgMail.setApiKey(SENDGRID_API_KEY);
  isConfigured = true;
}

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  category?: string;
}

const MAX_BATCH_SIZE = 900; // SendGrid allows up to 1000 personalizations per request.

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

export async function sendEmail(options: SendEmailOptions) {
  ensureConfigured();

  const recipients = Array.isArray(options.to) ? options.to : [options.to];
  const batches = chunk(recipients, MAX_BATCH_SIZE);

  const payloads: MailDataRequired[] = batches.map((batch) => ({
    to: batch,
    from: {
      email: SENDGRID_FROM_EMAIL as string,
      name: SENDGRID_FROM_NAME
    },
    replyTo: SENDGRID_REPLY_EMAIL ? { email: SENDGRID_REPLY_EMAIL } : undefined,
    subject: options.subject,
    html: options.html,
    text: options.text,
    categories: options.category ? [options.category] : undefined
  }));

  await Promise.all(payloads.map((payload) => sgMail.sendMultiple(payload)));
}

export async function sendEmailSafe(options: SendEmailOptions) {
  try {
    await sendEmail(options);
    return { ok: true as const };
  } catch (error) {
    console.error("SendGrid sendEmail failed", error);
    return { ok: false as const, error };
  }
}


