"use strict";

const speed = document.querySelector(".speed");

const bar = speed.querySelector(".speed-bar");

const video = document.querySelector("video.flex");

function handleVideoPlaybackRate(event) {
  const y = event.pageY - this.offsetTop;

  const percent = y / this.offsetHeight;

  const min = 0.4;

  const max = 4;

  const height = `${Math.round(percent * 100)}%`;

  const playbackRate = percent * (max - min) + min;

  console.log(height);

  bar.style.height = height;

  bar.textContent = `${playbackRate.toFixed(2)}x`;

  video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", handleVideoPlaybackRate);
