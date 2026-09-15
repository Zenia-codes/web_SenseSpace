const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");
const closeBtn = document.querySelector(".modal__close");

const openModal = function (modal) {
  modal.classList.remove("hidden");
  document.body.classList.add("modal__open");
};

const closeModal = function (modal) {
  modal.classList.add("hidden");
  document.body.classList.remove("modal__open");
};

document.querySelectorAll(".project_card").forEach((card) => {
  card.addEventListener("click", () => {
    const modalId = card.dataset.modal;
    const modal = document.getElementById(modalId);

    openModal(modal);
  });
});

document.querySelectorAll(".modal__close").forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");

    closeModal(modal);
  });
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    const modalContent = modal.querySelector(".modal__content");

    if (!modalContent.contains(e.target)) {
      closeModal(modal);
    }
  });

  // shut down of modal by keydown on Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal(modal);
    }
  });
});
