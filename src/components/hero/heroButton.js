const button = document.querySelector(".button");

button.addEventListener("touchstart", () => {
  console.log("touchstart fired");
  navigator.vibrate?.(50);
});

console.log(button);
console.log("navigator.vibrate:", navigator.vibrate);

// poznámka pro mne:
// ?. = optional chaining (volitelné řetězení)
// navigator.vibrate?.(50) tedy znamená: „Zavolej vibraci(50ms) jen pokud existuje“
