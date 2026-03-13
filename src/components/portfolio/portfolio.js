const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolioBtn");

portfolioBtn.addEventListener("click", (e) => {
  e.preventDefault();
  portfolio.classList.add("show");
});

console.log("portfolio script running");
