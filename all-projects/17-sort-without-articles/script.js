"use strict";

const bandsEl = document.getElementById("bands");

// remove articles from the begining of a string
function strip(str) {
  return str.replace(/^(a |the |an)/i, "").trim();
}

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const sortedBands = bands.toSorted((a, b) => {
  // my initial solution
  // const articles = ["an", "a", "the"];

  // const [aFirst, aSecond] = a.split(" ");

  // const [bfirst, bSecond] = b.split(" ");

  // let aVal = aFirst;
  // let bVal = bfirst;
  // if (articles.includes(aFirst.toLowerCase())) {
  //   aVal = aSecond;
  // }

  // if (articles.includes(bfirst.toLowerCase())) {
  //   bVal = bSecond;
  // }

  // return aVal > bVal ? 1 : -1;

  // wes bos solution
  return strip(a) > strip(b) ? 1 : -1;
});

const html = sortedBands
  .map((band) => {
    return `<li>${band}</li>`;
  })
  .join("");

bandsEl.innerHTML = html;
