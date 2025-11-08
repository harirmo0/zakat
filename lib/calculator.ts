export type CalculationStatus =
  | "invalid_salary"
  | "invalid_expenses"
  | "invalid_nisab"
  | "no_savings"
  | "below_nisab"
  | "eligible";

export interface CalculatorInputs {
  salary: number;
  expenses: number;
  nisab: number;
}

export interface CalculatorResult {
  monthlySaving: number;
  annualSaving: number;
  zakatAmount: number;
  status: CalculationStatus;
}

const DECIMAL_PLACES = 2;

function isValidAmount(value: number): boolean {
  return Number.isFinite(value) && value >= 0 && value <= Number.MAX_SAFE_INTEGER;
}

export function sanitizeAmount(value: unknown): number | null {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }

  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

function roundToCents(amount: number): number {
  return Number.isFinite(amount)
    ? Number.parseFloat(amount.toFixed(DECIMAL_PLACES))
    : Number.NaN;
}

export function validateCalculatorInputs(payload: unknown): CalculatorInputs | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const { salary, expenses, nisab } = payload as Record<string, unknown>;

  const sanitizedSalary = sanitizeAmount(salary);
  const sanitizedExpenses = sanitizeAmount(expenses);
  const sanitizedNisab = sanitizeAmount(nisab);

  if (
    sanitizedSalary === null ||
    sanitizedExpenses === null ||
    sanitizedNisab === null ||
    !isValidAmount(sanitizedSalary) ||
    !isValidAmount(sanitizedExpenses) ||
    !isValidAmount(sanitizedNisab)
  ) {
    return null;
  }

  return {
    salary: roundToCents(sanitizedSalary),
    expenses: roundToCents(sanitizedExpenses),
    nisab: roundToCents(sanitizedNisab)
  };
}

export function calculateZakat({ salary, expenses, nisab }: CalculatorInputs): CalculatorResult {
  if (salary <= 0) {
    return {
      monthlySaving: 0,
      annualSaving: 0,
      zakatAmount: 0,
      status: "invalid_salary"
    };
  }

  if (expenses < 0) {
    return {
      monthlySaving: 0,
      annualSaving: 0,
      zakatAmount: 0,
      status: "invalid_expenses"
    };
  }

  if (nisab <= 0) {
    return {
      monthlySaving: 0,
      annualSaving: 0,
      zakatAmount: 0,
      status: "invalid_nisab"
    };
  }

  const monthlySaving = Math.max(salary - expenses, 0);
  const annualSaving = roundToCents(monthlySaving * 12);

  if (monthlySaving <= 0) {
    return {
      monthlySaving: roundToCents(monthlySaving),
      annualSaving,
      zakatAmount: 0,
      status: "no_savings"
    };
  }

  if (annualSaving < nisab) {
    return {
      monthlySaving: roundToCents(monthlySaving),
      annualSaving,
      zakatAmount: 0,
      status: "below_nisab"
    };
  }

  const zakatAmount = roundToCents(annualSaving * 0.025);

  return {
    monthlySaving: roundToCents(monthlySaving),
    annualSaving,
    zakatAmount,
    status: "eligible"
  };
}


