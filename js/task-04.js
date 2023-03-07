// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementBtnEl = document.querySelector('button[data-action="decrement"');
// console.log(decrementBtnEl);
const incrementBtnEl = document.querySelector('button[data-action="increment"');
// console.log(incrementBtnEl);
const counterValueEl = document.querySelector("#value");
// console.log(counterValueEl);

decrementBtnEl.addEventListener("click", onValueDecrement);
incrementBtnEl.addEventListener("click", onValueIncrement);

let counterValue = 0;

function onValueDecrement() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}
function onValueIncrement() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}
