"use strict";

const nav = document.querySelector("nav");

const navTop = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= navTop) {
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);
