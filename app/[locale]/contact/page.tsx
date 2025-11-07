import { notFound } from "next/navigation";
import ContactForm from "../../../components/contact/ContactForm";
import type { SupportedLocale } from "../../../types/home";

interface ContactCopy {
  title: string;
  intro: string;
  collaborationTitle: string;
  collaborationPoints: string[];
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

const COPY: Record<SupportedLocale, ContactCopy> = {
  ar: {
    title: "التواصل مع فريق maroc zakat",
    intro:
      "يسعدنا تلقي طلبات التحديث، التعاون مع الجمعيات، أو اقتراح أدوات جديدة لمنصة maroc zakat. نرد خلال 3 أيام عمل بحسب أولوية الطلب.",
    collaborationTitle: "مجالات التعاون المفتوحة",
    collaborationPoints: [
      "تحديث بيانات النصاب أو الأسعار المرجعية",
      "الربط مع حلول محاسبية أو منصات مانحين",
      "توفير دراسات وأبحاث حول الزكاة في المغرب",
      "إطلاق مبادرات مشتركة مع الجمعيات أو الشركات"
    ],
    fields: {
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      role: "الصفة / الجهة",
      requestType: "نوع الطلب",
      message: "التفاصيل أو رابط المستند",
      consentLabel: "أوافق على تخزين هذه البيانات لأغراض المتابعة",
      consentDescription:
        "نستعمل هذه المعلومات داخليًا فقط لمعالجة الطلب، ولن نشاركها مع أي طرف ثالث."
    },
    requestOptions: [
      { value: "data-update", label: "تحديث بيانات النصاب / الأسعار" },
      { value: "partnership", label: "شراكة أو تعاون" },
      { value: "feature-request", label: "ميزة جديدة / ترجمة" },
      { value: "issue", label: "مشكلة تقنية أو تقرير خطأ" },
      { value: "other", label: "أخرى" }
    ],
    submitLabel: "إرسال الطلب",
    successMessage: "تم تسجيل طلبك بنجاح، سنتواصل معك قريبًا."
  },
  fr: {
    title: "Contactez l’équipe maroc zakat",
    intro:
      "Partagez vos besoins de mise à jour, partenariats ou nouvelles idées pour la plateforme maroc zakat. Réponse sous 3 jours ouvrés.",
    collaborationTitle: "Nous recherchons notamment",
    collaborationPoints: [
      "Actualisation des valeurs de nisab ou données de marché",
      "Intégration avec des outils comptables ou plateformes de dons",
      "Études et analyses sur la zakat au Maroc",
      "Programmes conjoints avec ONG ou entreprises"
    ],
    fields: {
      name: "Nom complet",
      email: "Adresse e-mail",
      role: "Fonction / organisation",
      requestType: "Type de demande",
      message: "Détails ou lien de référence",
      consentLabel: "J’autorise maroc zakat à conserver ces informations",
      consentDescription:
        "Les données sont utilisées uniquement pour répondre à votre demande et ne sont jamais partagées."
    },
    requestOptions: [
      { value: "data-update", label: "Mise à jour de données" },
      { value: "partnership", label: "Partenariat / collaboration" },
      { value: "feature-request", label: "Nouvelle fonctionnalité / traduction" },
      { value: "issue", label: "Bug ou problème technique" },
      { value: "other", label: "Autre" }
    ],
    submitLabel: "Envoyer",
    successMessage: "Merci ! Votre demande a bien été enregistrée."
  },
  en: {
    title: "Contact the maroc zakat team",
    intro:
      "Send data updates, collaboration ideas, or feature requests. We respond within three working days based on priority.",
    collaborationTitle: "We are especially interested in",
    collaborationPoints: [
      "Nisab or pricing updates backed by verifiable sources",
      "Integrations with accounting, fintech, or donor platforms",
      "Academic or field research on zakat in Morocco",
      "Joint programmes with NGOs, banks, or community leaders"
    ],
    fields: {
      name: "Full name",
      email: "Email address",
      role: "Role / organisation",
      requestType: "Request type",
      message: "Details or reference link",
      consentLabel: "I agree to maroc zakat storing this information",
      consentDescription:
        "We use your submission to process the request only. Nothing is shared with third parties."
    },
    requestOptions: [
      { value: "data-update", label: "Data update" },
      { value: "partnership", label: "Partnership / collaboration" },
      { value: "feature-request", label: "Feature or translation request" },
      { value: "issue", label: "Issue / bug report" },
      { value: "other", label: "Other" }
    ],
    submitLabel: "Submit request",
    successMessage: "Thanks! Your request has been logged."
  },
  ru: {
    title: "Связаться с командой maroc zakat",
    intro:
      "Отправьте данные для обновления, идеи партнерства или новые функции. Ответ в течение трёх рабочих дней.",
    collaborationTitle: "Нам особенно интересны",
    collaborationPoints: [
      "Обновления по нисабу и ценам с подтверждёнными источниками",
      "Интеграции с бухгалтерскими системами, финтех и платформами доноров",
      "Исследования и аналитика по zakat в Марокко",
      "Совместные программы с НКО и бизнесом"
    ],
    fields: {
      name: "Полное имя",
      email: "E-mail",
      role: "Роль / организация",
      requestType: "Тип запроса",
      message: "Подробности или ссылка",
      consentLabel: "Согласен на хранение данных для обработки запроса",
      consentDescription:
        "Информация используется только для связи и не передаётся третьим лицам."
    },
    requestOptions: [
      { value: "data-update", label: "Обновление данных" },
      { value: "partnership", label: "Партнёрство / сотрудничество" },
      { value: "feature-request", label: "Новая функция / перевод" },
      { value: "issue", label: "Техническая проблема" },
      { value: "other", label: "Другое" }
    ],
    submitLabel: "Отправить",
    successMessage: "Спасибо! Запрос сохранён."
  },
  zh: {
    title: "联系 maroc zakat 团队",
    intro:
      "欢迎提交数据更新、合作建议或功能需求。我们将根据优先级在 3 个工作日内回复。",
    collaborationTitle: "我们期待合作的方向",
    collaborationPoints: [
      "提供权威的尼萨布或市场数据更新",
      "与会计、金融科技或公益平台对接",
      "与天课相关的研究、案例与调研",
      "与慈善机构、企业或学术团队的联合项目"
    ],
    fields: {
      name: "姓名",
      email: "电子邮箱",
      role: "职位 / 机构",
      requestType: "请求类型",
      message: "详细说明或相关链接",
      consentLabel: "同意 maroc zakat 使用上述资料与我联系",
      consentDescription: "信息仅用于处理本次请求，不会向第三方披露。"
    },
    requestOptions: [
      { value: "data-update", label: "数据更新" },
      { value: "partnership", label: "合作 / 联合项目" },
      { value: "feature-request", label: "功能 / 翻译需求" },
      { value: "issue", label: "问题反馈" },
      { value: "other", label: "其他" }
    ],
    submitLabel: "提交",
    successMessage: "感谢您的联系，我们已收到请求。"
  }
};

export default function ContactPage({
  params
}: {
  params: { locale: SupportedLocale };
}) {
  const copy = COPY[params.locale];
  if (!copy) {
    notFound();
  }

  return (
    <section className="section section--alt" id="contact">
      <div className="section__header">
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
      </div>
      <div className="grid grid--2">
        <div className="card">
          <h2>{copy.collaborationTitle}</h2>
          <ul className="list">
            {copy.collaborationPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <ContactForm locale={params.locale} copy={copy} />
      </div>
    </section>
  );
}

