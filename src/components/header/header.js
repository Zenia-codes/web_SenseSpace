const checkbox = document.querySelector(".menu_button_checkbox");
const menuLinks = document.querySelectorAll(".navigation_menu a");

// přidání posluchače na všechny odkazy v menu
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    checkbox.checked = false;
  });
});

console.log(menuLinks);
console.log(checkbox);
