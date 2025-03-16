// Our bundler automatically creates styling when imported in the main JS file!
import "../styles/style.scss";
import { initModal } from "./modal.js";
import { displayPaintings } from "./getObjectIds.js";

document.addEventListener("DOMContentLoaded", () => {
  initModal();
});

displayPaintings();
