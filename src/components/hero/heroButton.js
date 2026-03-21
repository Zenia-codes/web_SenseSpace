const button = document.querySelector(".button");

button.addEventListener("touchstart", () => {
  if ("ontouchstart" in window) {
    button.addEventListener("touchstart", () => {
      navigator.vibrate?.(50);
    });
  }
});

console.log("navigator.vibrate:", navigator.vibrate);

// poznámka pro mne:
// ?. = optional chaining (volitelné řetězení)
// Znamená: „Zavolej vibraci(50ms) jen pokud existuje“
