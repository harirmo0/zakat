"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import type { SupportedLocale } from "../../types/home";
import { submitContactForm, type ContactFormState } from "../../app/actions/contact";

interface ContactCopy {
  fields: {
    name: string;
    email: string;
    role: string;
    requestType: string;
    message: string;
    consentLabel: string;
    consentDescription: string;
  };
  requestOptions: { value: string; label: string }[];
  submitLabel: string;
  successMessage: string;
}

export default function ContactForm({
  locale,
  copy
}: {
  locale: SupportedLocale;
  copy: ContactCopy;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<ContactFormState>({ status: "idle", message: "" });
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form
      className="card"
      ref={formRef}
      action={(formData: FormData) => {
        startTransition(async () => {
          const result = await submitContactForm(state, formData);
          setState(result);
        });
      }}
    >
      <input type="hidden" name="locale" value={locale} />
      <label className="input">
        <span>{copy.fields.name}</span>
        <input name="name" type="text" required />
      </label>
      <label className="input">
        <span>{copy.fields.email}</span>
        <input name="email" type="email" required />
      </label>
      <label className="input">
        <span>{copy.fields.role}</span>
        <input name="role" type="text" placeholder="-" />
      </label>
      <label className="input">
        <span>{copy.fields.requestType}</span>
        <select name="requestType" defaultValue="data-update">
          {copy.requestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="input">
        <span>{copy.fields.message}</span>
        <textarea name="message" rows={5} required />
      </label>
      <label className="input" style={{ alignItems: "flex-start", gap: "12px" }}>
        <input name="consent" type="checkbox" required />
        <span>
          <strong>{copy.fields.consentLabel}</strong>
          <br />
          <small>{copy.fields.consentDescription}</small>
        </span>
      </label>
      <button className="btn btn--primary" type="submit" disabled={pending}>
        {pending ? "..." : copy.submitLabel}
      </button>
      {state.status === "success" && (
        <p className="hint" style={{ color: "#16a34a" }}>
          {copy.successMessage}
        </p>
      )}
      {state.status === "error" && (
        <p className="hint" style={{ color: "#dc2626" }}>
          {state.message}
        </p>
      )}
    </form>
  );
}

