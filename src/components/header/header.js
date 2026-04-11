const menuLinks = document.querySelectorAll(".navigation_menu a");
const menu = document.querySelector(".navigation_menu");
const button = document.querySelector(".menu_button");

function closeMenu() {
  menu.classList.remove("is-open"); // zavře menu - odstraní třídu .is-open
  button.setAttribute("aria-expanded", "false"); // nastaví button jako „zavřený stav“
  button.setAttribute("aria-label", "Open menu"); // změna popisku buttonu (řekne uživateli, že ho může otevřít)
}

function openMenu() {
  menu.classList.add("is-open");
  button.setAttribute("aria-expanded", "true");
  button.setAttribute("aria-label", "Close menu");
}

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

button.addEventListener("click", () => {
  const isOpen = button.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu(); // Ternární operátor místo if a else (podmínka ? co_když_platí : co_když_neplatí;)
});
// zavření menu odkudkoli na stránce
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !button.contains(e.target)) {
    closeMenu();
  }
});
