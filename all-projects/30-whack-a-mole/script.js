"use strict";

const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");

const highestScoreElement = document.querySelector(".highest-score");

const previousHighestScore = parseInt(
  localStorage.getItem("whack-a-mole-score") ?? 0
);

let previousHole = null;

let isGameOver = false;

let score = 0;

highestScoreElement.textContent = previousHighestScore;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);

  const hole = holes[index];

  if (hole === previousHole) {
    return randomHole(holes);
  }

  previousHole = hole;
  return hole;
}

function molePopUp() {
  const time = randomTime(200, 1000);

  const hole = randomHole(holes);

  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");

    if (!isGameOver) {
      molePopUp();
    }
  }, time);
}

// record score after game ends;
function recordScore() {
  if (score <= previousHighestScore) return;

  localStorage.setItem("whack-a-mole-score", score);

  highestScoreElement.textContent = score;
}

function startGame() {
  score = 0;
  scoreBoard.textContent = score;
  isGameOver = false;
  molePopUp();
  setTimeout(() => {
    isGameOver = true;
    recordScore();
  }, 10000);
}

function bonk(event) {
  if (!event.isTrusted) return;
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
}

moles.forEach((mole) => {
  mole.addEventListener("click", bonk);
});
