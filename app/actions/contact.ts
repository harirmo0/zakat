"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { appendFile, access, mkdir, writeFile } from "node:fs/promises";
import { constants as fsConstants } from "node:fs";
import path from "node:path";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}

const CSV_DIR = path.join(process.cwd(), "data");
const CSV_PATH = path.join(CSV_DIR, "contact-submissions.csv");
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 1;

const rateLimitMap = new Map<string, number>();

function escapeCsvValue(value: string) {
  const needsQuotes = /[",\n]/.test(value);
  const escaped = value.replace(/"/g, '""');
  return needsQuotes ? `"${escaped}"` : escaped;
}

async function ensureCsvHeader() {
  try {
    await access(CSV_PATH, fsConstants.F_OK);
  } catch {
    await mkdir(CSV_DIR, { recursive: true });
    const header =
      "timestamp,locale,name,email,role,request_type,message,ip_address,user_agent\n";
    await writeFile(CSV_PATH, header, { encoding: "utf8" });
  }
}

function getClientIp(): string {
  const forwarded = headers().get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  const realIp = headers().get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const last = rateLimitMap.get(ip);
  if (last && now - last < RATE_LIMIT_WINDOW_MS) {
    return false;
  }
  rateLimitMap.set(ip, now);
  return true;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  const role = (formData.get("role") || "").toString().trim();
  const requestType = (formData.get("requestType") || "").toString().trim();
  const message = (formData.get("message") || "").toString().trim();
  const locale = (formData.get("locale") || "ar").toString();
  const consent = formData.get("consent") === "on";

  if (!consent) {
    return {
      status: "error",
      message: "Consent is required to submit the form."
    };
  }

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in the required fields."
    };
  }

  const ip = getClientIp();
  if (!rateLimit(ip)) {
    return {
      status: "error",
      message: "Please wait a moment before sending another request."
    };
  }

  await ensureCsvHeader();

  const timestamp = new Date().toISOString();
  const userAgent = headers().get("user-agent") ?? "unknown";
  const row = [
    timestamp,
    locale,
    name,
    email,
    role,
    requestType,
    message,
    ip,
    userAgent
  ]
    .map(escapeCsvValue)
    .join(",")
    .concat("\n");

  await appendFile(CSV_PATH, row, { encoding: "utf8" });
  revalidatePath(`/${locale}/contact`);

  return {
    status: "success",
    message: "Thank you! We have logged your request."
  };
}

