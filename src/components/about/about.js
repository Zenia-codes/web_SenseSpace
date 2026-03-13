const about = document.getElementById("about");
const aboutBtn = document.getElementById("aboutBtn");
const hero = document.getElementById("hero");

hero.addEventListener("click", () => {
  about.classList.remove("show");
});

aboutBtn.addEventListener("click", (e) => {
  e.preventDefault(); // zastaví scroll
  about.classList.add("show");
});

console.log("about script running");
