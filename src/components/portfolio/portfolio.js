const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".project_card");

let currentSlide = 0;

function showSlide(index) {
  // deaktivovat všechny tečky
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  // zobrazit správný slide
  slides[index].classList.add("active-slide");

  // aktivovat správnou tečku
  dots[index].classList.add("active");
}

dots.addEventListener("click", () => {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
});
