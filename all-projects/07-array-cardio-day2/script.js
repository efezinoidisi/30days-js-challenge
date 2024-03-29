"use strict";

// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const olderThan19 = people.some(({ year }) => {
  const date = new Date().getFullYear();

  return date - year >= 19;
});
console.log("is at least one person 19 or older?", olderThan19);
// Array.prototype.every() // is everyone 19 or older?
const isEveryone19OrOlder = people.every((year) => {
  const date = new Date().getFullYear();

  return date - year >= 19;
});

console.log("is everyone 19 or older?", isEveryone19OrOlder);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const id = 823423;
const commentWithId = comments.find((comment) => comment.id === id);

console.log("find the comment with the ID of 823423:", commentWithId);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const idx = comments.findIndex((comment) => comment.id === id);
comments.splice(idx, 1);
console.log(comments);
