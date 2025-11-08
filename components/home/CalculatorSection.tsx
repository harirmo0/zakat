"use client";

import { useMemo, useState } from "react";
import { calculateZakat } from "../../lib/calculator";
import type { CalculatorContent, SupportedLocale } from "../../types/home";

const LOCALE_TO_INTL: Record<SupportedLocale, string> = {
  ar: "ar-MA",
  fr: "fr-MA",
  en: "en-US",
  ru: "ru-RU",
  zh: "zh-CN"
};

function getFormatter(locale: SupportedLocale) {
  const intlLocale = LOCALE_TO_INTL[locale] ?? "en-US";
  return new Intl.NumberFormat(intlLocale, {
    style: "currency",
    currency: "MAD",
    maximumFractionDigits: 2
  });
}

interface CalculatorSectionProps {
  content: CalculatorContent;
  locale: SupportedLocale;
}

export function CalculatorSection({ content, locale }: CalculatorSectionProps) {
  const [salary, setSalary] = useState<number>(7000);
  const [expenses, setExpenses] = useState<number>(6000);
  const [nisab, setNisab] = useState<number>(content.nisabOptions[0]?.value ?? 0);
  const formatter = useMemo(() => getFormatter(locale), [locale]);

  const result = useMemo(
    () => calculateZakat({ salary, expenses, nisab }),
    [salary, expenses, nisab]
  );

  const { monthlySaving, annualSaving, zakatAmount, status } = result;

  let statusChip = content.statusMessages.invalid.chip;
  let recommendation = content.statusMessages.invalid.recommendation;

  if (status === "invalid_salary" || status === "invalid_expenses" || status === "invalid_nisab") {
    statusChip = content.statusMessages.invalid.chip;
    recommendation = content.statusMessages.invalid.recommendation;
  } else if (status === "no_savings") {
    statusChip = content.statusMessages.noSavings.chip;
    recommendation = content.statusMessages.noSavings.recommendation;
  } else if (status === "below_nisab") {
    statusChip = content.statusMessages.belowNisab.chip;
    recommendation = content.statusMessages.belowNisab.recommendation;
  } else {
    statusChip = content.statusMessages.reachedNisab.chip;
    recommendation = content.statusMessages.reachedNisab.recommendation;
  }

  return (
    <section className="section section--alt" id="calculator">
      <div className="section__header">
        <h2>{content.heading}</h2>
        <p>{content.description}</p>
      </div>
      <div className="calculator">
        <form
          className="calculator__form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label className="input">
            <span>{content.salaryLabel}</span>
            <input
              type="number"
              min={0}
              step={100}
              value={salary}
              onChange={(event) => setSalary(Number(event.target.value))}
            />
          </label>
          <label className="input">
            <span>{content.expenseLabel}</span>
            <input
              type="number"
              min={0}
              step={100}
              value={expenses}
              onChange={(event) => setExpenses(Number(event.target.value))}
            />
          </label>
          <label className="input">
            <span>{content.nisabLabel}</span>
            <select
              value={nisab}
              onChange={(event) => setNisab(Number(event.target.value))}
            >
              {content.nisabOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className="btn btn--primary">
            {content.submitLabel}
          </button>
        </form>
        <div className="calculator__results" id="results">
          <div className="result__chip">{statusChip}</div>
          <dl>
            <div>
              <dt>{content.monthlySavingLabel}</dt>
              <dd>{formatter.format(monthlySaving)}</dd>
            </div>
            <div>
              <dt>{content.annualSavingLabel}</dt>
              <dd>{formatter.format(annualSaving)}</dd>
            </div>
            <div>
              <dt>{content.zakatAmountLabel}</dt>
              <dd>{zakatAmount > 0 ? formatter.format(zakatAmount) : "—"}</dd>
            </div>
            <div>
              <dt>{content.recommendationLabel}</dt>
              <dd>
                {status === "invalid_salary" || status === "invalid_expenses" || status === "invalid_nisab"
                  ? content.initialRecommendation
                  : recommendation}
              </dd>
            </div>
          </dl>
          <p className="hint">{content.hint}</p>
        </div>
      </div>
    </section>
  );
}

export default CalculatorSection;

