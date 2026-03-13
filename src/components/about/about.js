const about = document.getElementById("about");
const aboutBtn = document.getElementById("aboutBtn");

aboutBtn.addEventListener("click", (e) => {
  e.preventDefault(); // zastaví scroll
  about.classList.add("show");
});

console.log("about script running");
