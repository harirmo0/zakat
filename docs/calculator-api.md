# Zakat Calculator API

This service exposes the core zakat calculation logic as a public HTTP endpoint so external systems can integrate the calculator programmatically.

## Endpoint

- **URL:** `/api/calculator`
- **Method:** `POST`
- **Authentication:** None (public)
- **Content-Type:** `application/json`
- **Currency:** Fixed to Moroccan Dirham (`MAD`)

## Rate Limiting

- 5 requests per minute per originating IP address
- Exceeding the quota returns HTTP `429` with `Retry-After` header (seconds)

## Request Payload

```json
{
  "salary": 12000,
  "expenses": 6500,
  "nisab": 50000
}
```

| Field     | Type    | Rules                                                   |
|-----------|---------|---------------------------------------------------------|
| salary    | number  | Required. Must be greater than zero.                    |
| expenses  | number  | Required. Cannot be negative.                           |
| nisab     | number  | Required. Must be greater than zero.                    |

All values are interpreted as Moroccan Dirham (`MAD`). Decimal fractions are supported.

## Successful Response

```json
{
  "ok": true,
  "data": {
    "currency": "MAD",
    "inputs": {
      "salary": 12000,
      "expenses": 6500,
      "nisab": 50000
    },
    "result": {
      "monthlySaving": 5500,
      "annualSaving": 66000,
      "zakatAmount": 1650,
      "status": "eligible"
    }
  },
  "meta": {
    "rateLimit": {
      "limit": 5,
      "remaining": 4,
      "windowMs": 60000
    }
  }
}
```

### Status Codes

- `eligible` — Zakat is due; `zakatAmount` equals 2.5% of `annualSaving`.
- `below_nisab` — Savings did not reach nisab; zakat is not due.
- `no_savings` — Monthly savings were zero or negative.

## Error Responses

| HTTP | `error.code`         | Description / Mitigation                                                     |
|------|----------------------|------------------------------------------------------------------------------|
| 400  | `invalid_json`       | Malformed JSON payload. Ensure the request body is valid JSON.              |
| 400  | `invalid_input`      | Missing or non-numeric fields. Provide numeric `salary`, `expenses`, `nisab`.|
| 400  | `invalid_salary`     | `salary` must be greater than zero.                                         |
| 400  | `invalid_expenses`   | `expenses` cannot be negative.                                              |
| 400  | `invalid_nisab`      | `nisab` must be greater than zero.                                          |
| 405  | `method_not_allowed` | Only `POST` is supported.                                                   |
| 429  | `rate_limited`       | Request quota exceeded; retry after the provided number of seconds.        |
| 500  | `internal_error`     | Unexpected failure; retry later and monitor logs.                           |

All responses return `Cache-Control: no-store`.

## Integration Notes

- The service currently assumes all amounts are denominated in `MAD`. If you need multi-currency support, extend the request payload with a `currency` field and add conversion prior to calling the calculator.
- Include client-side retries with backoff for transient `429` or `500` responses.
- Consider logging the `ok`, `error.code`, and `meta.rateLimit` fields on the client to monitor consumption.
- For production usage, front a CDN or API gateway if you need stronger rate limiting, analytics, or IP reputation filtering.


