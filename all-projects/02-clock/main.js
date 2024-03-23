"use strict";

const hourHand = document.querySelector(".hour-hand"); // clock hour hand
const minuteHand = document.querySelector(".min-hand"); // clock minutes hand
const secondsHand = document.querySelector(".second-hand"); // clock seconds hand;

function setDate() {
  const date = new Date();

  // seconds to degree calc
  const seconds = date.getSeconds();
  const secondsdegree = (seconds / 60) * 360 + 90;
  secondsHand.style.rotate = `${secondsdegree}deg`;

  // minutes to degree calculations
  const minutes = date.getMinutes();
  const minutesDeg = (minutes / 60) * 360 + 90;
  minuteHand.style.rotate = `${minutesDeg}deg`;

  // hour to degree calc
  const hours = date.getHours();
  const hourDeg = (hours / 12) * 360 + 90;
  hourHand.style.rotate = `${hourDeg}deg`;
}

// update the clock every second
setInterval(setDate, 1000);
