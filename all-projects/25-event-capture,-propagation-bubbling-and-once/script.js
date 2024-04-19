"use strict";

const divs = Array.from(document.querySelectorAll("div"));

const btn = document.querySelector("button");

function logText(event) {
  console.log(this.classList.value);
  // event.stopPropagation();
}

divs.forEach((div) => {
  div.addEventListener("click", logText, {
    capture: false,
    once: true,
  });
});

btn.addEventListener(
  "click",
  () => {
    window.alert("hello!");
  },
  {
    once: true,
  }
);
