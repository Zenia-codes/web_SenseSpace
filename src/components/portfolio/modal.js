const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal_content");
const closeBtn = document.querySelector(".close_modal");

document.querySelectorAll(".project_card").forEach((card) => {
  card.addEventListener("click", () => {
    // vezme hodnotu z data-modal=""
    const modalId = card.dataset.modal;

    // najde modal podle ID
    const modal = document.getElementById(modalId);

    // zobrazí modal
    modal.classList.remove("hidden");

    // zakáže scroll stránky
    document.body.classList.add("modal_open");
  });
});

document.querySelectorAll(".close_modal").forEach((button) => {
  button.addEventListener("click", () => {
    // najde modal, ve kterém je tlačítko
    const modal = button.closest(".modal");

    // schová modal
    modal.classList.add("hidden");

    // vrátí scroll stránky
    document.body.classList.remove("modal_open");
  });
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    const modalContent = modal.querySelector(".modal_content");

    if (!modalContent.contains(e.target)) {
      modal.classList.add("hidden");
      document.body.classList.remove("modal_open");
    }
  });
});
