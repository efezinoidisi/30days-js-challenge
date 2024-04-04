"use strict";

const sliderImages = Array.from(document.querySelectorAll(".slide-in"));

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(event) {
  sliderImages.forEach((slideImg) => {
    const slideInAt = window.scrollY + window.innerHeight - slideImg.height / 2; // halfway through the image

    const imgBottom = slideImg.offsetTop + slideImg.height; // bottom of image

    const isHalfShown = slideInAt > slideImg.offsetTop;

    const isNotPastImageBottom = window.scrollY < imgBottom;

    if (isHalfShown && isNotPastImageBottom) {
      slideImg.classList.add("active");
    } else {
      slideImg.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
