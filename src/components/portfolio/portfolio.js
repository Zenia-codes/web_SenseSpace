const dots = document.querySelectorAll(".slider_dot");
const slides = document.querySelectorAll(".project_card");

function showSlide(index) {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active-slide");
  });

  slides[index].classList.add("active-slide");
  dots[index].classList.add("active");
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      //   zjisti index
      //    zobraz správný slide
      if (entry.isIntersecting) {
        const index = [...slides].indexOf(entry.target);
        showSlide(index);
        console.log(index);
      }
    });
  },

  {
    threshold: 0.5, // 60 % prvku ve viewportu
  }
);

slides.forEach((el) => observer.observe(el)); // Napojení observeru na prvky

showSlide(0);

// observer napoj na .project_card
// sleduj entry.isIntersecting
// z elementu zjisti jeho index
// aktivuj správnou tečku
