const contact = document.getElementById("contacts");
const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contact.classList.add("show");
});

console.log("contact script running");
