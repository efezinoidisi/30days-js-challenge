"use strict";

const canvas = document.getElementById("draw");

const context = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
context.strokeStyle = "#BADA55";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = false;

function draw(e) {
  if (!isDrawing) return;

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (context.lineWidth >= 50 || context.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

canvas.addEventListener("touchstart", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("touchmove", draw);

canvas.addEventListener("touchend", () => (isDrawing = false));
