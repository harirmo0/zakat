import { google } from "googleapis";
import { createRateLimiter } from "./rate-limit";

export interface ContactSubmission {
  locale: string;
  name: string;
  email: string;
  role: string;
  requestType: string;
  message: string;
  ip: string;
  userAgent: string;
  consent: boolean;
}

const contactLimiter = createRateLimiter({ windowMs: 60_000, maxRequests: 1 });

const REQUIRED_ENV_VARS = [
  "GOOGLE_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET",
  "GOOGLE_REFRESH_TOKEN",
  "GOOGLE_SHEETS_SPREADSHEET_ID"
] as const;

type RequiredEnv = (typeof REQUIRED_ENV_VARS)[number];

function getEnv(name: RequiredEnv): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not set.`);
  }
  return value;
}

function createSheetsClient() {
  const client = new google.auth.OAuth2(
    getEnv("GOOGLE_CLIENT_ID"),
    getEnv("GOOGLE_CLIENT_SECRET")
  );

  client.setCredentials({ refresh_token: getEnv("GOOGLE_REFRESH_TOKEN") });

  return google.sheets({ version: "v4", auth: client });
}

let cachedRange: string | null = null;

async function resolveRange(sheetsClient: ReturnType<typeof createSheetsClient>, spreadsheetId: string) {
  if (process.env.GOOGLE_SHEETS_RANGE && process.env.GOOGLE_SHEETS_RANGE.trim()) {
    return process.env.GOOGLE_SHEETS_RANGE.trim();
  }

  if (cachedRange) {
    return cachedRange;
  }

  const metadata = await sheetsClient.spreadsheets.get({ spreadsheetId });
  const firstSheetTitle = metadata.data.sheets?.[0]?.properties?.title ?? "Sheet1";
  cachedRange = `${firstSheetTitle}!A:Z`;
  return cachedRange;
}

export function throttleIp(ip: string): boolean {
  const result = contactLimiter.check(ip);
  return result.allowed;
}

export async function appendContactSubmission(payload: ContactSubmission) {
  const sheets = createSheetsClient();
  const spreadsheetId = getEnv("GOOGLE_SHEETS_SPREADSHEET_ID");
  const range = await resolveRange(sheets, spreadsheetId);

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          payload.locale,
          payload.name,
          payload.email,
          payload.role,
          payload.requestType,
          payload.message,
          payload.consent ? "yes" : "no",
          payload.ip,
          payload.userAgent
        ]
      ]
    }
  });
}

export interface ReminderSubscriber {
  email: string;
  locale: string;
  name: string;
}

export const REMINDER_ROLE = "subscriber";
export const REMINDER_REQUEST_TYPE = "data-update";
export const REMINDER_MESSAGE = "Please keep me updated of zakat with maroczakat reminder.";

export async function listReminderSubscribers(): Promise<ReminderSubscriber[]> {
  const sheets = createSheetsClient();
  const spreadsheetId = getEnv("GOOGLE_SHEETS_SPREADSHEET_ID");
  const range = await resolveRange(sheets, spreadsheetId);

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range
  });

  const rows = response.data.values ?? [];
  const unique = new Map<string, ReminderSubscriber>();

  for (const row of rows) {
    const [
      _timestamp,
      locale = "en",
      name = "",
      email = "",
      role = "",
      requestType = "",
      message = "",
      consent = ""
    ] = row;

    if (!email) continue;
    if (role?.toLowerCase() !== REMINDER_ROLE) continue;
    if (requestType !== REMINDER_REQUEST_TYPE) continue;
    if (message !== REMINDER_MESSAGE) continue;
    if (consent?.toLowerCase() !== "yes") continue;

    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) continue;

    unique.set(normalizedEmail, {
      email: normalizedEmail,
      locale: typeof locale === "string" && locale ? locale : "en",
      name: typeof name === "string" ? name : ""
    });
  }

  return Array.from(unique.values());
}

