const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".project_card");

let currentSlide = 0;

function showSlide(index) {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active-slide");
  dots[index].classList.add("active");
}

// dots.addEventListener("click", () => {
//   currentSlide++;

//   if (currentSlide >= slides.length) {
//     currentSlide = 0;
//   }

//   showSlide(currentSlide);
// });
