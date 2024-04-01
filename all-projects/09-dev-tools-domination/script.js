"use strict";

const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("regular hello");

// Interpolated
console.log("Hello %s, welcome!", "John");

// Styled
console.log("%c This is a styled text", "color: purple;");

// warning!
console.warn("This is a warning text");

// Error :|
console.error("This is an error text");

// Info
console.info("This is an information text that contains no info :)");

// Testing

const paragraph = document.querySelector("p");

console.assert(
  paragraph.innerText.includes("BREAK"),
  'Text does not contain the word "BREAK"'
);
// clearing
console.clear();

// Viewing DOM Elements
console.log(paragraph);
console.dir(paragraph);

// Grouping together

dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd();
});
// counting

console.count("one");
console.count("one");
console.count("one");
console.count("two");
console.count("one");
console.count("one");
console.count("one");
console.count("one");

// timing

console.time("fetching data from github");
fetch("https://api.github.com/users/efezinoidisi")
  .then((res) => res.json())
  .then((data) => {
    console.timeEnd("fetching data from github");
    console.log(data);
  });

// table
console.table(dogs);
