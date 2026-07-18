import { t, changeLanguage } from "../../language.js";

const form = document.querySelector(".form");
const errorMessage = document.querySelector("#errorMessage");
const successMessage = document.querySelector("#successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //nejprve reset stareho stavu f.
  errorMessage.classList.add("hidden");
  successMessage.classList.add("hidden");
  errorMessage.textContent = "";
  successMessage.textContent = "";

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
    errorMessage.textContent = t("messages.validation.nameTooShort");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (customerName.length > 25) {
    errorMessage.textContent = t("messages.validation.nameTooLong");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
    errorMessage.textContent = t("messages.validation.emailInvalid");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!emailDomain.includes(".")) {
    errorMessage.textContent = t("messages.validation.emailMissingDot");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (message.length === 0) {
    errorMessage.textContent = t("messages.validation.messageRequired");
    errorMessage.classList.remove("hidden");
    return;
  }

  if (!consentCheckbox.checked) {
    errorMessage.textContent = t("messages.validation.consent");
    errorMessage.classList.remove("hidden");
    return;
  }

  successMessage.textContent = t("messages.submit.success");
  successMessage.classList.remove("hidden");
});
