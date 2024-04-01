"use strict";

const checkBoxes = Array.from(document.querySelectorAll(".item input"));

let previous;

function handleCheck(event) {
  let inBetween = false;

  if (event.shiftKey && this.checked) {
    checkBoxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === previous) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  previous = this;
}

checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheck);
});
