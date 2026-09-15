document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("touchstart", () => {
    console.log("touchstart fired");
    navigator.vibrate?.(50); // call vibrate (50ms) if it exists
  });
  console.log(button);
});

console.log("navigator.vibrate:", navigator.vibrate);
