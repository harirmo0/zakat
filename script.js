const formatCurrency = (value) =>
  new Intl.NumberFormat("ar-MA", {
    style: "currency",
    currency: "MAD",
    maximumFractionDigits: 2,
  }).format(value);

const calculateZakat = () => {
  const salary = Number(document.getElementById("salary").value) || 0;
  const expenses = Number(document.getElementById("expenses").value) || 0;
  const nisab = Number(document.getElementById("nisab").value) || 0;

  const monthlySaving = Math.max(salary - expenses, 0);
  const annualSaving = monthlySaving * 12;
  const zakat = annualSaving >= nisab ? annualSaving * 0.025 : 0;

  const statusChip = document.getElementById("statusChip");
  const monthlySavingNode = document.getElementById("monthlySaving");
  const annualSavingNode = document.getElementById("annualSaving");
  const zakatNode = document.getElementById("zakatAmount");
  const recommendationNode = document.getElementById("recommendation");

  monthlySavingNode.textContent = formatCurrency(monthlySaving);
  annualSavingNode.textContent = formatCurrency(annualSaving);
  zakatNode.textContent = zakat > 0 ? formatCurrency(zakat) : "—";

  if (!salary) {
    statusChip.textContent = "أدخل بيانات صحيحة";
    recommendationNode.textContent = "يرجى إدخال الراتب الشهري على الأقل.";
    return;
  }

  if (!monthlySaving) {
    statusChip.textContent = "لا مدخرات";
    recommendationNode.textContent =
      "المصروف يساوي أو يفوق الدخل، لا تجب الزكاة ما لم يتحقق الادخار.";
    return;
  }

  if (annualSaving < nisab) {
    statusChip.textContent = "لم يبلغ النصاب";
    recommendationNode.textContent =
      "استمر في الادخار أو راجع مستوى المصروفات. الزكاة تكون حين يبلغ المدخر النصاب ويحفظ حولًا قمريًا.";
    return;
  }

  statusChip.textContent = "النصاب بلغ";
  recommendationNode.textContent =
    "أخرج ربع العشر (2.5%) عند تمام الحول الهجري. يمكن التعجيل في رمضان أو العشر من ذي الحجة إذا دعت الحاجة.";
};

document.addEventListener("DOMContentLoaded", () => {
  const calcBtn = document.getElementById("calculate");
  if (!calcBtn) return;

  calcBtn.addEventListener("click", calculateZakat);
  calculateZakat();
});


