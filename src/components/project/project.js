const project = document.getElementById("project");
const projectBtn = document.getElementById("projectBtn");

projectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  project.classList.add("show");
});

console.log("project script running");
