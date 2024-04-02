"use strict";

const playButton = document.querySelector(".player__button.toggle");

const video = document.querySelector(".player__video.viewer");

const skipBtns = Array.from(document.querySelectorAll("[data-skip]"));

const sliders = Array.from(document.querySelectorAll(".player__slider"));

const progressBar = document.querySelector(".progress__filled");

const progress = document.querySelector(".progress");

const fullscreenBtn = document.querySelector(".fullscreen");

function togglePlay() {
  video[video.paused ? "play" : "pause"]();
}

function updatePlayButton() {
  const icon = !this.paused ? "&#9616;&#9616;" : "&#9658;";
  playButton.innerHTML = icon;
}

function skip() {
  video.currentTime += Number(this.dataset.skip);
}

function handleSliderUpdate(e) {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;

  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / this.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// toggle fullscreen
function handleFullscreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen().catch((err) => {
      alert("error enabling fullscreen");
    });
  } else {
    document.exitFullscreen();
  }
}

playButton.addEventListener("click", togglePlay);
video.addEventListener("play", updatePlayButton);

video.addEventListener("pause", updatePlayButton);

video.addEventListener("click", togglePlay);

skipBtns.forEach((btn) => {
  btn.addEventListener("click", skip);
});

sliders.forEach((slider) => {
  slider.addEventListener("change", handleSliderUpdate);
});

video.addEventListener("timeupdate", handleProgress);

progress.addEventListener("click", scrub);

// pause or play video when the spacebar is pressed
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    togglePlay();
  }
});

fullscreenBtn.addEventListener("click", handleFullscreen);
