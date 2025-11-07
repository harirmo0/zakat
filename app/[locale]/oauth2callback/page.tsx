"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function OAuthCallbackPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") ?? "";
  const error = searchParams.get("error");

  return (
    <main className="section">
      <div className="section__header">
        <h1>OAuth Callback</h1>
        <p>
          {error
            ? "Google a renvoyé une erreur. Retourne au terminal et vérifie les détails."
            : "Copie le code ci-dessous et colle-le dans le terminal pour terminer la génération du refresh token."}
        </p>
      </div>
      <div className="card" style={{ maxWidth: 480 }}>
        {code ? (
          <>
            <h2>Code d’autorisation</h2>
            <code
              style={{
                display: "block",
                overflowWrap: "anywhere",
                background: "#0f172a",
                color: "#f8fafc",
                padding: "16px",
                borderRadius: "12px",
                fontSize: "0.85rem"
              }}
            >
              {code}
            </code>
            <p>Retourne au terminal, colle ce code lorsque le script te le demande, puis ferme cette page.</p>
          </>
        ) : (
          <p>Aucun code reçu. Revérifie la redirection OAuth et relance la procédure depuis le terminal.</p>
        )}
        <Link href="/" className="site-header__link" style={{ marginTop: 16 }}>
          Revenir à l’accueil
        </Link>
      </div>
    </main>
  );
}

