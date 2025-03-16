// js/modal.js
export function initModal() {
  const modal = document.getElementById("intro-modal");
  const closeButton = document.getElementById("close-modal");
  const gotItButton = document.getElementById("got-it");

  if (!localStorage.getItem("modalShown")) {
    modal.style.display = "flex";
  }

  function closeModal() {
    modal.style.display = "none";
    localStorage.setItem("modalShown", "true");
  }

  closeButton.addEventListener("click", closeModal);
  gotItButton.addEventListener("click", closeModal);
}
