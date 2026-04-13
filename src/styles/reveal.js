const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2, // 20 % prvku ve viewportu
  }
);

// Napojení observeru na prvky
elements.forEach((el) => observer.observe(el));
