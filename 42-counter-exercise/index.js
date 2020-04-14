let step = 0;
let counter = 0;

/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */

function action(symboL) {
  let symbol = symboL;

  if (symbol === "+") {
    counter = Number(counter) + Number(step);
  } else if (symbol === "-") {
    counter = counter - step;
  }
  document.querySelector(".counter_value").innerText = counter;
}

action("-");
action("+");

/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */

let button = document.querySelector(".step_form button");
let input = document.querySelector("#step");

let form = document.querySelector(".step_form");

form.addEventListener("submit", event => {
  step = Number(input.value);
  input.value = 1;
  document.querySelector(".step_value").innerText = step;
});

/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
let decrement = document.querySelector("#decrement");

decrement.addEventListener("click", event => {
  action("-");
});

/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */

let increment = document.querySelector("#increment");

increment.addEventListener("click", event => {
  action("+");
});

/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
let intervalID;
let autoDecrement = document.querySelector("#auto_decrement");

autoDecrement.addEventListener("click", event => {
  clearInterval(intervalID);
  intervalID = setInterval(() => {
    action("-");
  }, 1000);
});

/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

let autoIncrement = document.querySelector("#auto_increment");

autoIncrement.onclick = event => {
  clearInterval(intervalID);
  intervalID = setInterval(() => {
    action("+");
  }, 1000);
};

/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */

let stopCounting = document.querySelector("#stop_auto");

stopCounting.addEventListener("click", event => {
  clearInterval(intervalID);
});
