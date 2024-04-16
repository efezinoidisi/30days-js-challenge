"use strict";

const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();

  voicesDropdown.innerHTML = voices
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
}

function toggleSpeech(repeat = true) {
  speechSynthesis.cancel();
  if (repeat) {
    speechSynthesis.speak(msg);
  }
}

function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggleSpeech();
}

function handleOptionChange() {
  msg[this.name] = this.value;
  toggleSpeech();
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);

voicesDropdown.addEventListener("change", setVoice);

options.forEach((option) => {
  option.addEventListener("change", handleOptionChange);
});

speakButton.addEventListener("click", toggleSpeech);

stopButton.addEventListener("click", () => toggleSpeech(false));
