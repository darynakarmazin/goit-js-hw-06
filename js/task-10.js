// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const unIputNumberEl = document.querySelector("#controls>input");
const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

// console.log(unputNumberEl);
// console.log(buttonCreateEl);
// console.log(buttonDestroyEl);

unIputNumberEl.addEventListener("input", createBoxes);
buttonCreateEl.addEventListener("click", addBoxes);
buttonDestroyEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.background = getRandomHexColor();
    elementsToAdd.push(divEl);
  }
  return elementsToAdd;
}

function addBoxes(event) {
  let boxesToAdd = createBoxes(unIputNumberEl.value);
  boxesEl.append(...boxesToAdd);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
