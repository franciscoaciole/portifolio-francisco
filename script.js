// Efeito de digitação
document.addEventListener("DOMContentLoaded", () => {
  const text = "Portfólio";
  const typingElement = document.querySelector(".typing");

  if (typingElement) {
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
      if (!isDeleting && index <= text.length) {
        typingElement.textContent = text.substring(0, index++);
      } else if (isDeleting && index >= 0) {
        typingElement.textContent = text.substring(0, index--);
      }

      if (index === text.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
      }

      if (index < 0) {
        isDeleting = false;
        index = 0;
      }

      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
  }

  // Atualiza o ano automático no rodapé
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
