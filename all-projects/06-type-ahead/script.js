"use strict";
const form = document.querySelector(".search-form");
const query = document.querySelector(".search");

const suggestionsElement = document.querySelector(".suggestions");

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const store = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => store.push(...data))
  .catch((err) => {
    console.log(err);
  });

/**
 *
 * @param {number} x
 * @returns string
 */
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * 
 * @param {string} value 
 */
function displayResults(value) {
  const results = store.filter(
    (item) =>
      item.city.toLowerCase().includes(value) ||
      item.state.toLowerCase().includes(value)
  );

  const html = results.map((result) => {
    const regex = new RegExp(value, "gi");
    const city = result.city.replace(regex, `<span class="hl">${value}</span>`);
    const state = result.state.replace(
      regex,
      `<span class="hl">${value}</span>`
    );

    return `<li>
    <span>${city}, ${state}</span>
    <span>${numberWithCommas(result.population)}</span>
    </li>`;
  });

  suggestionsElement.innerHTML = html.join("");
}

query.addEventListener("keyup", (e) =>
  displayResults(e.target.value.toLowerCase())
);
