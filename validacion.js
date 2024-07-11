document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("passwordForm");
  const passwordInput = document.getElementById("passwordInput");
  const message = document.getElementById("message");

  // Contraseña preestablecida
  const predefinedPassword = "150716";

  form.addEventListener("submit", (event) => {
    // Previene el comportamiento por defecto del formulario
    event.preventDefault();

    // Obtiene el valor ingresado
    const enteredPassword = passwordInput.value;

    // Verifica si la contraseña ingresada coincide con la preestablecida
    if (enteredPassword === predefinedPassword) {
      message.textContent = "¡Contraseña correcta!";
      message.style.color = "green";

      //Redireccion
      setTimeout(() => {
        window.location.href =
          "https://www.youtube.com/watch?v=yIr_1CasXkM&t=853s";
      }, 2000);
    } else {
      message.textContent = "Contraseña incorrecta. Inténtalo de nuevo.";
      message.style.color = "red";
    }
  });
});
