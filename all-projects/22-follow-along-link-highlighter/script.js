"use strict";

const triggers = Array.from(document.querySelectorAll("a"));
const wrapper = document.querySelector(".wrapper");

const highlight = document.createElement("span");

highlight.classList.add("highlight");

document.body.append(highlight);

function highlightLink() {

  const linkCoords = this.getBoundingClientRect();

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((link) => {
  link.addEventListener("mouseenter", highlightLink);
});
