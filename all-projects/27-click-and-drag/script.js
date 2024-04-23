"use strict";

const slider = document.querySelector(".items");

let isDown = false;

let startX = null;
let scrollLeft = null;

function handleStart(event) {
  isDown = true;
  slider.classList.add("active");

  // position of cursor in container
  startX = event.pageX - slider.offsetLeft;

  scrollLeft = slider.scrollLeft;
}

function handleStop() {
  isDown = false;
  slider.classList.remove("active");
}

function handleDrag(event) {
  if (!isDown) return;

  event.preventDefault();

  const x = event.pageX - slider.offsetLeft;

  const walk = (x - startX) * 3;

  slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener("mousedown", handleStart);

slider.addEventListener("mouseup", handleStop);

slider.addEventListener("mouseleave", handleStop);

slider.addEventListener("mousemove", handleDrag);
