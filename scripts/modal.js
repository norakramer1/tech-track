// js/modal.js
export function initModal() {
  const modal = document.getElementById("intro-modal");
  const gotItButton = document.getElementById("got-it");

  if (!localStorage.getItem("modalShown")) {
    modal.style.display = "flex";
  }

  function closeModal() {
    modal.style.display = "none";
    localStorage.setItem("modalShown", "true");
  }
  gotItButton.addEventListener("click", closeModal);
}
