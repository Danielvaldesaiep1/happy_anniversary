document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".pulse-image");
  let isScaledUp = false;

  function pulseEffect() {
    if (isScaledUp) {
      image.style.transform = "scale(1)";
    } else {
      image.style.transform = "scale(1.1)";
    }
    isScaledUp = !isScaledUp;
  }

  // Repite el efecto de pulso cada 500ms
  setInterval(pulseEffect, 3000);
});
