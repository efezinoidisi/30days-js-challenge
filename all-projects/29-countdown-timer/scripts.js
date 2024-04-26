"use strict";

let intervalId;

const displayTimer = document.querySelector(".display__time-left");

const displayEndTimeEl = document.querySelector(".display__end-time");

const buttons = document.querySelectorAll("[data-time]");

const form = document.customForm;

const stopTimerBtn = document.querySelector(".stop-timer-btn");

// add zero to time if less than 10
function trailingZero(time) {
  return time < 10 ? "0" : "";
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);

  const remainderSeconds = seconds % 60;

  const display = `${minutes}:${trailingZero(
    remainderSeconds
  )}${remainderSeconds}`;

  displayTimer.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);

  const hour = end.getHours();

  const minutes = end.getMinutes();

  displayEndTimeEl.textContent = `Be back at ${
    hour > 12 ? hour - 12 : hour
  }:${trailingZero(minutes)}${minutes}`;
}

function stopTimer() {
  if (intervalId) {
    clearInterval(intervalId);
  }
}

function timer(seconds) {
  stopTimer(); // stop previous timer if any

  const now = Date.now();

  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  intervalId = setInterval(() => {
    const timeLeft = Math.round((then - Date.now()) / 1000);

    if (timeLeft < 0) {
      stopTimer();
      return;
    }

    displayTimeLeft(timeLeft);
  }, 1000);
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const minutes = this.minutes.value;

  timer(minutes * 60);

  this.reset();
}

buttons.forEach((button) => {
  button.addEventListener("click", startTimer);
});

form.addEventListener("submit", handleFormSubmit);

stopTimerBtn.addEventListener("click", stopTimer);
