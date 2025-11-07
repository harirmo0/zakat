#!/usr/bin/env node

const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("node:process");
const { google } = require("googleapis");

const REQUIRED_VARS = ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET"];

for (const name of REQUIRED_VARS) {
  if (!process.env[name]) {
    console.error(`Missing required environment variable: ${name}`);
    process.exit(1);
  }
}

const redirectUri = process.env.GOOGLE_REDIRECT_URI || "http://localhost:3000/oauth2callback";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  redirectUri
);

const scopes = ["https://www.googleapis.com/auth/spreadsheets"];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: scopes
});

console.log("\n1. Ouvre cette URL dans ton navigateur (connexion Google requise):\n");
console.log(authUrl);
console.log("\n2. Autorise l'application, copie le code affiché après la redirection.");

const rl = readline.createInterface({ input, output });

(async () => {
  const code = await rl.question("\nColle le code et appuie sur Entrée : ");
  rl.close();

  try {
    const { tokens } = await oauth2Client.getToken(code.trim());
    if (!tokens.refresh_token) {
      console.error("Aucun refresh token retourné. Assure-toi d'avoir sélectionné 'consent' lors de l'autorisation.");
      process.exit(1);
    }

    console.log("\n----\nRefresh token :\n");
    console.log(tokens.refresh_token);
    console.log("\nCopie-le dans GOOGLE_REFRESH_TOKEN (en local + Vercel).\n");
  } catch (error) {
    console.error("Impossible de récupérer le refresh token:", error.message);
    process.exit(1);
  }
})();

