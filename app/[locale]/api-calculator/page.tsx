import type { Metadata } from "next";
import type { SupportedLocale } from "../../../types/home";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const BASE_URL = "https://maroczakat.com";
const SUPPORTED_LOCALES: SupportedLocale[] = ["ar", "fr", "en", "ru", "zh"];
const LOCALE_TO_LANG: Record<SupportedLocale, string> = {
  ar: "ar-MA",
  fr: "fr-FR",
  en: "en-US",
  ru: "ru-RU",
  zh: "zh-CN"
};
const LOCALE_KEYWORDS: Record<SupportedLocale, string[]> = {
  ar: ["واجهة API حاسبة الزكاة", "maroc zakat api", "تضمين حاسبة الزكاة", "zakat api", "nisab api"],
  fr: ["api maroc zakat", "api calculatrice zakat", "zakat maroc développeurs", "nisab api", "zakat integration"],
  en: ["maroc zakat api", "zakat calculator api", "morocco zakat developer", "nisab api", "zakat integration"],
  ru: ["maroc zakat api", "api калькулятор закята", "интеграция закята", "nisab api", "zakat api"],
  zh: ["maroc zakat api", "天课计算器 API", "摩洛哥天课接口", "nisab api", "zakat integration"]
};

interface Section {
  heading: string;
  body: string[];
}

interface ApiDocCopy {
  title: string;
  intro: string;
  endpoint: Section;
  rateLimit: Section;
  request: Section & { example: string };
  success: Section & { example: string };
  errors: Section;
  integration: Section;
}

const COPY: Record<SupportedLocale, ApiDocCopy> = {
  ar: {
    title: "واجهة API لحاسبة الزكاة",
    intro:
      "استخدم هذه الواجهة لحساب الزكاة مباشرةً من تطبيقاتك. جميع القيم حالياً بالدرهم المغربي (MAD).",
    endpoint: {
      heading: "نقطة النهاية",
      body: [
        "المسار: POST /api/calculator",
        "التوثيق: غير مطلوب (واجهة عامة)",
        "نوع المحتوى: application/json"
      ]
    },
    rateLimit: {
      heading: "حد الطلبات",
      body: [
        `5 طلبات لكل عنوان IP خلال دقيقة واحدة (${RATE_LIMIT_WINDOW_MS / 1000} ثانية).`,
        "في حالة تجاوز الحد يتم إرجاع 429 مع ترويسة Retry-After بعدد الثواني المتبقية."
      ]
    },
    request: {
      heading: "نموذج الطلب",
      body: [
        "أرسل قيم الراتب والمصاريف والنصاب بالدرهم.",
        "جميع الحقول مطلوبة ويجب أن تكون أرقاماً موجبة أو صفر."
      ],
      example: `{
  "salary": 12000,
  "expenses": 6500,
  "nisab": 50000
}`
    },
    success: {
      heading: "استجابة ناجحة",
      body: [
        "يعرض الحقل data.result الحفظ الشهري والسنوي وقيمة الزكاة (2.5٪) وحالة الأهلية.",
        "يبين الحقل meta.rateLimit الحد المتاح والمتبقي في النافذة الحالية."
      ],
      example: `{
  "ok": true,
  "data": {
    "currency": "MAD",
    "inputs": { "salary": 12000, "expenses": 6500, "nisab": 50000 },
    "result": {
      "monthlySaving": 5500,
      "annualSaving": 66000,
      "zakatAmount": 1650,
      "status": "eligible"
    }
  },
  "meta": {
    "rateLimit": { "limit": 5, "remaining": 4, "windowMs": 60000 }
  }
}`
    },
    errors: {
      heading: "أكواد الأخطاء",
      body: [
        "400 invalid_json — تنسيق JSON غير صحيح.",
        "400 invalid_input — الحقول مفقودة أو ليست أرقاماً.",
        "400 invalid_salary / invalid_expenses / invalid_nisab — تحقق من شروط الأرقام.",
        "405 method_not_allowed — استخدم POST فقط.",
        "429 rate_limited — تجاوزت حد الطلبات. أعد المحاولة لاحقاً.",
        "500 internal_error — خطأ غير متوقع، راجع السجلات."
      ]
    },
    integration: {
      heading: "إرشادات الدمج",
      body: [
        "نفذ إعادة المحاولة مع Backoff عند الاستجابة 429 أو 500.",
        "سجل الحقول ok و error.code و meta.rateLimit لمراقبة الاستهلاك.",
        "إذا احتجت لدعم عملات أخرى أجرِ التحويل قبل الإرسال إلى الواجهة."
      ]
    }
  },
  fr: {
    title: "API Calculatrice de Zakat",
    intro:
      "Intégrez le calcul de la zakat dans vos services. Toutes les valeurs sont pour l’instant en dirham marocain (MAD).",
    endpoint: {
      heading: "Endpoint",
      body: [
        "Route : POST /api/calculator",
        "Authentification : aucune (public)",
        "Content-Type : application/json"
      ]
    },
    rateLimit: {
      heading: "Limitation de débit",
      body: [
        `5 requêtes par minute et par adresse IP (${RATE_LIMIT_WINDOW_MS / 1000} secondes).`,
        "Une réponse 429 inclut l’en-tête Retry-After indiquant le temps d’attente."
      ]
    },
    request: {
      heading: "Corps de requête",
      body: [
        "Envoyez le salaire, les dépenses et le nisab en MAD.",
        "Les trois champs sont obligatoires et doivent être numériques."
      ],
      example: `{
  "salary": 12000,
  "expenses": 6500,
  "nisab": 50000
}`
    },
    success: {
      heading: "Réponse réussie",
      body: [
        "data.result indique l’épargne mensuelle/annuelle, le montant de la zakat et le statut.",
        "meta.rateLimit retourne le plafond et le quota restant."
      ],
      example: `{
  "ok": true,
  "data": {
    "currency": "MAD",
    "inputs": { "salary": 12000, "expenses": 6500, "nisab": 50000 },
    "result": {
      "monthlySaving": 5500,
      "annualSaving": 66000,
      "zakatAmount": 1650,
      "status": "eligible"
    }
  },
  "meta": {
    "rateLimit": { "limit": 5, "remaining": 4, "windowMs": 60000 }
  }
}`
    },
    errors: {
      heading: "Codes d’erreur",
      body: [
        "400 invalid_json — JSON invalide.",
        "400 invalid_input — Champs manquants ou non numériques.",
        "400 invalid_salary / invalid_expenses / invalid_nisab — Vérifiez les contraintes.",
        "405 method_not_allowed — Seul POST est accepté.",
        "429 rate_limited — Quota dépassé, réessayez plus tard.",
        "500 internal_error — Problème interne, contrôler les logs."
      ]
    },
    integration: {
      heading: "Bonnes pratiques",
      body: [
        "Prévoir des retries avec backoff pour les codes 429 et 500.",
        "Tracer ok, error.code et meta.rateLimit côté client.",
        "Pour d’autres devises, convertissez en MAD avant l’appel."
      ]
    }
  },
  en: {
    title: "Zakat Calculator API",
    intro:
      "Use this endpoint to run zakat calculations from your own systems. All amounts are currently expressed in Moroccan Dirham (MAD).",
    endpoint: {
      heading: "Endpoint",
      body: [
        "Route: POST /api/calculator",
        "Authentication: none (public access)",
        "Content-Type: application/json"
      ]
    },
    rateLimit: {
      heading: "Rate Limiting",
      body: [
        `5 requests per IP every ${RATE_LIMIT_WINDOW_MS / 1000} seconds.`,
        "Exceeding the quota returns HTTP 429 with a Retry-After header."
      ]
    },
    request: {
      heading: "Request Payload",
      body: [
        "Send salary, expenses, and nisab amounts in MAD.",
        "All fields are required and must be numeric, non-negative values."
      ],
      example: `{
  "salary": 12000,
  "expenses": 6500,
  "nisab": 50000
}`
    },
    success: {
      heading: "Successful Response",
      body: [
        "data.result contains monthly/annual savings, zakat amount (2.5%), and eligibility status.",
        "meta.rateLimit echoes the allowed quota, remaining calls, and current window."
      ],
      example: `{
  "ok": true,
  "data": {
    "currency": "MAD",
    "inputs": { "salary": 12000, "expenses": 6500, "nisab": 50000 },
    "result": {
      "monthlySaving": 5500,
      "annualSaving": 66000,
      "zakatAmount": 1650,
      "status": "eligible"
    }
  },
  "meta": {
    "rateLimit": { "limit": 5, "remaining": 4, "windowMs": 60000 }
  }
}`
    },
    errors: {
      heading: "Error Codes",
      body: [
        "400 invalid_json — Body is not valid JSON.",
        "400 invalid_input — Missing or non-numeric fields.",
        "400 invalid_salary / invalid_expenses / invalid_nisab — Field-level validation failed.",
        "405 method_not_allowed — Only POST is supported.",
        "429 rate_limited — Too many requests within the window.",
        "500 internal_error — Unexpected failure; check logs."
      ]
    },
    integration: {
      heading: "Integration Notes",
      body: [
        "Implement retries with exponential backoff for 429/500 responses.",
        "Log ok, error.code, and meta.rateLimit to track consumption.",
        "Convert to MAD upstream if you operate with multiple currencies."
      ]
    }
  },
  ru: {
    title: "API калькулятора закята",
    intro:
      "Встраивайте расчёт закята в свои сервисы. Все значения пока выдаются в марокканских дирхамах (MAD).",
    endpoint: {
      heading: "Endpoint",
      body: [
        "Маршрут: POST /api/calculator",
        "Аутентификация: не требуется (публичный доступ)",
        "Content-Type: application/json"
      ]
    },
    rateLimit: {
      heading: "Лимит запросов",
      body: [
        `5 запросов на IP за ${RATE_LIMIT_WINDOW_MS / 1000} секунд.`,
        "При превышении лимита вернётся 429 и заголовок Retry-After со временем ожидания."
      ]
    },
    request: {
      heading: "Тело запроса",
      body: [
        "Передавайте salary, expenses и nisab в MAD.",
        "Все поля обязательны и должны быть числами без знака «минус»."
      ],
      example: `{
  "salary": 12000,
  "expenses": 6500,
  "nisab": 50000
}`
    },
    success: {
      heading: "Успешный ответ",
      body: [
        "В data.result находятся ежемесячные/годовые накопления, сумма закята и статус.",
        "meta.rateLimit сообщает общий лимит, остаток и длительность окна."
      ],
      example: `{
  "ok": true,
  "data": {
    "currency": "MAD",
    "inputs": { "salary": 12000, "expenses": 6500, "nisab": 50000 },
    "result": {
      "monthlySaving": 5500,
      "annualSaving": 66000,
      "zakatAmount": 1650,
      "status": "eligible"
    }
  },
  "meta": {
    "rateLimit": { "limit": 5, "remaining": 4, "windowMs": 60000 }
  }
}`
    },
    errors: {
      heading: "Коды ошибок",
      body: [
        "400 invalid_json — Некорректный JSON.",
        "400 invalid_input — Поля отсутствуют или заданы неверно.",
        "400 invalid_salary / invalid_expenses / invalid_nisab — Нарушены правила валидации.",
        "405 method_not_allowed — Поддерживается только POST.",
        "429 rate_limited — Превышен лимит запросов.",
        "500 internal_error — Неожиданная ошибка, проверьте логи."
      ]
    },
    integration: {
      heading: "Рекомендации по интеграции",
      body: [
        "Используйте повторы с backoff для ответов 429 и 500.",
        "Логируйте ok, error.code и meta.rateLimit для контроля использования.",
        "При работе с другими валютами выполните конвертацию в MAD перед запросом."
      ]
    }
  },
  zh: {
    title: "天课计算器 API",
    intro:
      "在系统中直接调用天课计算器。目前所有金额仅支持摩洛哥迪拉姆（MAD）。",
    endpoint: {
      heading: "接口信息",
      body: [
        "路径：POST /api/calculator",
        "认证：无需（公开接口）",
        "Content-Type：application/json"
      ]
    },
    rateLimit: {
      heading: "频率限制",
      body: [
        `每个 IP 每 ${RATE_LIMIT_WINDOW_MS / 1000} 秒最多 5 次请求。`,
        "超过限制将返回 429，并包含 Retry-After 告知等待时间。"
      ]
    },
    request: {
      heading: "请求体",
      body: [
        "提交 salary、expenses、nisab，单位为 MAD。",
        "所有字段必填，必须是非负数字。"
      ],
      example: `{
  "salary": 12000,
  "expenses": 6500,
  "nisab": 50000
}`
    },
    success: {
      heading: "成功响应",
      body: [
        "data.result 返回月度/年度结余、天课金额（2.5%）以及状态。",
        "meta.rateLimit 显示当前窗口的调用配额和剩余次数。"
      ],
      example: `{
  "ok": true,
  "data": {
    "currency": "MAD",
    "inputs": { "salary": 12000, "expenses": 6500, "nisab": 50000 },
    "result": {
      "monthlySaving": 5500,
      "annualSaving": 66000,
      "zakatAmount": 1650,
      "status": "eligible"
    }
  },
  "meta": {
    "rateLimit": { "limit": 5, "remaining": 4, "windowMs": 60000 }
  }
}`
    },
    errors: {
      heading: "错误码",
      body: [
        "400 invalid_json — JSON 格式错误。",
        "400 invalid_input — 缺少字段或格式不正确。",
        "400 invalid_salary / invalid_expenses / invalid_nisab — 字段校验失败。",
        "405 method_not_allowed — 仅支持 POST。",
        "429 rate_limited — 请求过于频繁。",
        "500 internal_error — 系统异常，请检查日志。"
      ]
    },
    integration: {
      heading: "集成建议",
      body: [
        "对 429 和 500 响应实现带退避的重试策略。",
        "记录 ok、error.code、meta.rateLimit 以监控调用情况。",
        "如需多币种支持，请在调用前转换为 MAD。"
      ]
    }
  }
};

export function generateMetadata({ params }: { params: { locale: SupportedLocale } }): Metadata {
  const locale = SUPPORTED_LOCALES.includes(params.locale) ? params.locale : "en";
  const copy = COPY[locale];
  const keywords = LOCALE_KEYWORDS[locale] ?? LOCALE_KEYWORDS.en;
  const pageUrl = `${BASE_URL}/${locale}/api-calculator`;

  return {
    title: copy.title,
    description: copy.intro,
    keywords,
    alternates: {
      canonical: pageUrl,
      languages: SUPPORTED_LOCALES.reduce<Record<string, string>>((acc, loc) => {
        acc[LOCALE_TO_LANG[loc]] = `${BASE_URL}/${loc}/api-calculator`;
        return acc;
      }, {})
    },
    openGraph: {
      title: copy.title,
      description: copy.intro,
      url: pageUrl,
      siteName: "maroc zakat",
      type: "article",
      images: [
        {
          url: "https://maroczakat.com/logo-maroc-zakat.svg",
          width: 1200,
          height: 630,
          alt: `${copy.title} – maroc zakat`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.intro,
      site: "@maroc_zakat",
      creator: "@maroc_zakat",
      images: ["https://maroczakat.com/logo-maroc-zakat.svg"]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export default function CalculatorApiPage({ params }: { params: { locale: SupportedLocale } }) {
  const copy = COPY[params.locale] ?? COPY.en;

  return (
    <section className="section section--alt" id="calculator-api">
      <div className="section__header">
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
      </div>
      <article className="card">
        <h2>{copy.endpoint.heading}</h2>
        <ul>
          {copy.endpoint.body.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </article>
      <article className="card">
        <h2>{copy.rateLimit.heading}</h2>
        <ul>
          {copy.rateLimit.body.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </article>
      <article className="card">
        <h2>{copy.request.heading}</h2>
        <ul>
          {copy.request.body.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <pre>
          <code>{copy.request.example}</code>
        </pre>
      </article>
      <article className="card">
        <h2>{copy.success.heading}</h2>
        <ul>
          {copy.success.body.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <pre>
          <code>{copy.success.example}</code>
        </pre>
      </article>
      <article className="card">
        <h2>{copy.errors.heading}</h2>
        <ul>
          {copy.errors.body.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}


