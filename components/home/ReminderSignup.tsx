"use client";

import { useState } from "react";
import type { ReminderContent, SupportedLocale } from "../../types/home";

interface ReminderSignupProps {
  copy: ReminderContent;
  locale: SupportedLocale;
}

type StatusState =
  | { state: "idle" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export function ReminderSignup({ copy, locale }: ReminderSignupProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<StatusState>({ state: "idle" });

  const resetForm = () => {
    setEmail("");
    setName("");
    setConsent(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const trimmedEmail = email.trim();
    const trimmedName = name.trim();

    if (!trimmedEmail || !consent) {
      setStatus({ state: "error", message: copy.errorMessage });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus({ state: "idle" });

      const response = await fetch("/api/reminder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          email: trimmedEmail,
          name: trimmedName || undefined,
          consent
        })
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: { message?: string } } | null;
        throw new Error(data?.error?.message ?? copy.errorMessage);
      }

      resetForm();
      setStatus({ state: "success", message: copy.successMessage });
    } catch (error) {
      const message = error instanceof Error ? error.message : copy.errorMessage;
      setStatus({ state: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="reminder__form" onSubmit={handleSubmit} noValidate>
      {copy.badgeLabel ? <span className="reminder__badge">{copy.badgeLabel}</span> : null}
      <div className="reminder__fields">
        <label className="input">
          <span>{copy.emailLabel}</span>
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        {copy.nameLabel ? (
          <label className="input">
            <span>{copy.nameLabel}</span>
            <input
              type="text"
              autoComplete="given-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="-"
            />
          </label>
        ) : null}
      </div>
      <label className="reminder__consent">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
        />
        <span>{copy.consentLabel}</span>
      </label>
      <div className="reminder__actions">
        <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
          {isSubmitting ? `${copy.submitLabel}…` : copy.submitLabel}
        </button>
        {copy.hint ? <p className="reminder__hint">{copy.hint}</p> : null}
      </div>
      <p
        className={`reminder__status reminder__status--${status.state}`}
        aria-live="polite"
        role="status"
      >
        {status.state === "idle" ? "\u00A0" : status.message}
      </p>
    </form>
  );
}

export default ReminderSignup;


