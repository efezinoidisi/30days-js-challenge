"use strict";

const hero = document.querySelector(".hero");

const input = document.querySelector("input");

let shadowColor = "rgba(255, 0, 255, 0.6)";

const text = document.querySelector("h1");

const walk = 100;

function shadow(event) {
  const { offsetWidth: width, offsetHeight: height } = hero;

  let { offsetX: x, offsetY: y } = event;

  if (this !== event.target) {
    x += event.target.offsetLeft;
    y += event.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);

  const yWalk = Math.round((x / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 ${shadowColor}`;
}

function hexToRgb(hex) {
  // remove the # sign
  const withoutHash = hex.replace(/^#/, "");

  // convert from hexadecimal to decimal
  const r = parseInt(withoutHash.substring(0, 2), 16);

  const g = parseInt(withoutHash.substring(2, 4), 16);

  const b = parseInt(withoutHash.substring(4, 6), 16);

  return `rgba(${r},${g},${b},0.6)`;
}

function handleTextShadowColorChange(e) {
  const unit = this.dataset.sizing ?? "";

  shadowColor = hexToRgb(this.value);
}

hero.addEventListener("mousemove", shadow);

input.addEventListener("change", handleTextShadowColorChange);
