"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Swal from "sweetalert2";
import type { SupportedLocale } from "../../types/home";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const defaultRequestType = useMemo(
    () => copy.requestOptions[0]?.value ?? "data-update",
    [copy.requestOptions]
  );

  const [values, setValues] = useState({
    name: "",
    email: "",
    role: "",
    requestType: defaultRequestType,
    message: "",
    consent: false
  });

  useEffect(() => {
    setValues({
      name: "",
      email: "",
      role: "",
      requestType: defaultRequestType,
      message: "",
      consent: false
    });
    formRef.current?.reset();
  }, [defaultRequestType, locale]);

  const handleChange = (field: "name" | "email" | "role" | "requestType" | "message") =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { value } = event.target;
      setValues((prev) => ({ ...prev, [field]: value }));
    };

  const handleConsentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, consent: event.target.checked }));
  };

  const resetForm = () => {
    setValues({
      name: "",
      email: "",
      role: "",
      requestType: defaultRequestType,
      message: "",
      consent: false
    });
    formRef.current?.reset();
    setErrorMessage("");
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", window.location.pathname);
    }
  };

  const notify = async (type: "success" | "error", message: string) => {
    await Swal.fire({
      icon: type,
      title: message,
      confirmButtonColor: type === "success" ? "#145E57" : "#b91c1c"
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const trimmed = {
      name: values.name.trim(),
      email: values.email.trim(),
      role: values.role.trim(),
      requestType: values.requestType,
      message: values.message.trim()
    };

    if (!trimmed.name || !trimmed.email || !trimmed.message || !values.consent) {
      const message = !values.consent
        ? "Veuillez accepter la conservation des données pour continuer."
        : "Merci de renseigner tous les champs obligatoires.";
      setErrorMessage(message);
      await notify("error", message);
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          locale,
          ...trimmed,
          consent: values.consent
        })
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || data.ok === false) {
        throw new Error(data.message || "Nous ne pouvons pas enregistrer votre demande pour le moment.");
      }

      resetForm();
      await notify("success", copy.successMessage);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Nous ne pouvons pas enregistrer votre demande pour le moment.";
      setErrorMessage(message);
      console.error("Contact form submission failed", error);
      await notify("error", message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="card" ref={formRef} onSubmit={handleSubmit} noValidate>
      <label className="input">
        <span>{copy.fields.name}</span>
        <input name="name" type="text" value={values.name} onChange={handleChange("name")} required />
      </label>
      <label className="input">
        <span>{copy.fields.email}</span>
        <input name="email" type="email" value={values.email} onChange={handleChange("email")} required />
      </label>
      <label className="input">
        <span>{copy.fields.role}</span>
        <input
          name="role"
          type="text"
          placeholder="-"
          value={values.role}
          onChange={handleChange("role")}
        />
      </label>
      <label className="input">
        <span>{copy.fields.requestType}</span>
        <select
          name="requestType"
          value={values.requestType}
          onChange={handleChange("requestType")}
        >
          {copy.requestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="input">
        <span>{copy.fields.message}</span>
        <textarea
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          required
        />
      </label>
      <label className="input" style={{ alignItems: "flex-start", gap: "12px" }}>
        <input name="consent" type="checkbox" checked={values.consent} onChange={handleConsentChange} required />
        <span>
          <strong>{copy.fields.consentLabel}</strong>
          <br />
          <small>{copy.fields.consentDescription}</small>
        </span>
      </label>
      <button className="btn btn--primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "..." : copy.submitLabel}
      </button>
      {errorMessage && (
        <p className="hint" style={{ color: "#dc2626" }}>{errorMessage}</p>
      )}
    </form>
  );
}

