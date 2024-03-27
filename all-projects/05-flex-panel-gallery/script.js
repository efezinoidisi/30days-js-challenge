"use strict";
const allPanels = Array.from(document.querySelectorAll(".panel"));

function toggleOpen() {
  this.classList.toggle("open");
}

allPanels.forEach((panel) => {
  panel.addEventListener("click", toggleOpen);
});
