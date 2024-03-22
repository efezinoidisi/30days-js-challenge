"use strict";
const allKeys = Array.from(document.querySelectorAll(".key"));

function playAudio(code) {
  const audio = document.querySelector(`audio[data-code="${code}"]`);
  if (!audio) {
    return;
  }
  const key = document.querySelector(`.key[data-code="${code}"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("active");
}

window.addEventListener("keydown", (e) => playAudio(e.code));

allKeys.forEach((key) => {
  key.addEventListener("transitionend", (e) => {
    if (e.propertyName === "scale") {
      key.classList.remove("active");
    }
  });

  const code = key.getAttribute("data-code");

  key.addEventListener("click", () => playAudio(code));
});
