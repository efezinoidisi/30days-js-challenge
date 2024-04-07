"use strict";

const addItems = document.querySelector(".add-items");

const itemsList = document.querySelector(".plates");

let items = JSON.parse(localStorage.getItem("items")) ?? [];

const checkAllBtn = document.querySelector("#check-all");

const uncheckAllBtn = document.getElementById("uncheck-all");

const clearAllBtn = document.getElementById("clear-all");

function populateList(items = [], itemsList) {
  const html = items.map((item, index) => {
    return `
        <li>
          <input type="checkbox" data-index=${index} id="item-${index}" ${
      item.completed ? "checked" : ""
    } />
          <label for="item-${index}">${item.name}</label>
        </li>
      `;
  });
  itemsList.innerHTML = html.join("");
}

function updateLocalStorage(newValue) {
  localStorage.setItem("items", JSON.stringify(newValue));
}

function toggleCompleted(e) {
  if (!e.target.matches("input")) return;
  const index = e.target.dataset.index;
  items[index].completed = !items[index].completed;

  updateLocalStorage(items);

  populateList(items, itemsList);
}

function addItem(event) {
  event.preventDefault();

  const form = new FormData(this);
  const name = form.get("item");

  if (!name) return;

  const item = {
    name,
    completed: false,
  };

  items.push(item);
  populateList(items, itemsList);

  updateLocalStorage(items);

  this.reset();
}

function clearAllItems() {
  items = [];
  updateLocalStorage(items);
  populateList(items, itemsList);
}

function updateAllCheckboxes(value) {
  items.forEach((item) => {
    item.completed = value;
  });

  updateLocalStorage(items);

  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);

populateList(items, itemsList);

itemsList.addEventListener("click", toggleCompleted);

clearAllBtn.addEventListener("click", clearAllItems);

checkAllBtn.addEventListener("click", () => updateAllCheckboxes(true));

uncheckAllBtn.addEventListener("click", () => updateAllCheckboxes(false));
