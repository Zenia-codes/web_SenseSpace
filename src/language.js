import cs from "./translations/cs.json";
import en from "./translations/en.json";

const translations = {
  cs,
  en,
};

// Funkce pro čtení vnořených hodnot (např. hero.slogan)
function getTranslation(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

function changeLanguage(lang) {
  const translation = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;

    if (!translation[key]) {
      console.warn(`Missing translation: ${key}`);
    }

    el.innerHTML = getTranslation(translation, key) || key;
  });

  document.documentElement.lang = lang;

  localStorage.setItem("language", lang);
}

// tlačítka CZ / EN
document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    changeLanguage(button.dataset.lang);
  });
});

// načtení uloženého jazyka po otevření stránky
const savedLanguage = localStorage.getItem("language") || "en";

changeLanguage(savedLanguage);
