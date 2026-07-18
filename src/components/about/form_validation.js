import { t, changeLanguage } from "../../language.js";

const form = document.querySelector(".form");
const errorMessage = document.querySelector("#errorMessage");
const successMessage = document.querySelector("#successMessage");
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  //nejprve reset stareho stavu f.

  const customerName = document.querySelector("#customerName").value.trim();
  const email = document.querySelector("#email").value.trim();

  const message = document.querySelector("#message").value.trim();

  const quoteCheckbox = document.querySelector("#request-quote");
  const consentCheckbox = document.querySelector("#privacy-consent");

  const requestQuote = quoteCheckbox.checked;
  const privacyConsent = consentCheckbox.checked;

  const [emailName, emailDomain] = email.split("@");

  if (quoteCheckbox.checked) {
    console.log("Uživatel chce nezávaznou cenovou nabídku.");
  }

  if (customerName.length <= 4) {
    errorMessage.dataset.i18n = "messages.validation.nameTooShort";
    errorMessage.textContent = t("messages.validation.nameTooShort");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (customerName.length > 25) {
    errorMessage.dataset.i18n = "messages.validation.nameTooLong";
    errorMessage.textContent = t("messages.validation.nameTooLong");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
    errorMessage.dataset.i18n = "messages.validation.emailInvalid";
    errorMessage.textContent = t("messages.validation.emailInvalid");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!emailDomain.includes(".")) {
    errorMessage.dataset.i18n = "messages.validation.emailMissingDot";
    errorMessage.textContent = t("messages.validation.emailMissingDot");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (message.length === 0) {
    errorMessage.dataset.i18n = "messages.validation.messageRequired";
    errorMessage.textContent = t("messages.validation.messageRequired");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!consentCheckbox.checked) {
    errorMessage.dataset.i18n = "messages.validation.consent";
    errorMessage.textContent = t("messages.validation.consent");
    errorMessage.classList.remove("hidden");
    return;
  }

  const formData = new FormData(form);

  formData.append("access_key", "0c5f8f02-46c1-43bb-b8ee-02869c6c67ba");

  submitBtn.disabled = true;
  submitBtn.textContent = t("messages.sending");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    // console.log("Odesílám data:", Object.fromEntries(formData));

    const data = await response.json();

    if (response.ok) {
      successMessage.dataset.i18n = "messages.submit.success";
      successMessage.textContent = t("messages.submit.success");
      successMessage.classList.remove("hidden");

      form.reset();
    } else {
      errorMessage.textContent = data.message;
      errorMessage.classList.remove("hidden");
    }
  } catch (error) {
    errorMessage.dataset.i18n = "messages.submit.error";
    errorMessage.textContent = t("messages.submit.error");
    errorMessage.classList.remove("hidden");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Odeslat";
  }
});

function hideMessages() {
  errorMessage.classList.add("hidden");
  successMessage.classList.add("hidden");

  errorMessage.textContent = "";
  successMessage.textContent = "";

  delete errorMessage.dataset.i18n;
  delete successMessage.dataset.i18n;
}

form.addEventListener("input", hideMessages);
