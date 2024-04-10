"use strict";

const timeItems = Array.from(document.querySelectorAll("[data-time]"));

const totalEl = document.getElementById("total");

const total = timeItems.reduce((sum, item) => {
  const [min, secs] = item.dataset.time.split(":").map(parseFloat);

  const time = min * 60 + secs;

  return sum + time;
}, 0);

let seconds = total;

const hours = Math.floor(total / 3600);

seconds %= 3600;

const minutes = Math.floor(seconds / 60);

seconds %= 60;

console.log(hours, minutes, seconds);
totalEl.textContent = `Total time = ${hours} hours ${minutes} minutes ${seconds} seconds`;
