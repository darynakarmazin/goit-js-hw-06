// HTML містить список категорій ul#categories.
// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const listEl = document.querySelector("#categories");
const itemsEl = document.querySelectorAll("#categories > .item");
console.log(`Number of categories:  ${itemsEl.length}`);

const itemOfitemsEl = document.querySelector("#categories > .item");
const titleEl = itemOfitemsEl.firstElementChild;
const listIncludeitemsEl = document.querySelector(".item > ul");
const itemsIncludeEl = listIncludeitemsEl.children;

itemsEl.forEach((item) => {
  const titleEl = item.firstElementChild;
  const listIncludeitemsEl = item.querySelector(".item > ul");
  const itemsIncludeEl = listIncludeitemsEl.children;

  console.log(`Category: ${titleEl.textContent}
    Elements: ${itemsIncludeEl.length}`);
});
