"use strict";

const inputs = Array.from(document.querySelectorAll(".controls input"));

function handleInputChange(e) {
  const unit = this.dataset.sizing ?? "";
  document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${unit}`)
}

inputs.forEach((input) => {
  input.addEventListener("change", handleInputChange);
});
