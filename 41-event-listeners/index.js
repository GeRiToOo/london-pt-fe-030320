// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */

function clickTheButton() {
  const btn = document.querySelector(".click button");
  btn.addEventListener("click", event => {
    console.log("message");
  });
}

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */

function hoverOver() {
  const a = document.querySelector(".mouseover a");
  a.addEventListener("mouseover", event => {
    console.log("message");
  });
}

/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */
function handleLeave() {
  const a = document.querySelector(".mouseover a");
  a.addEventListener(`mouseout`, event => {
    console.log("message");
  });
}

/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */

function focusOnMe() {
  const input = document.querySelector(".input input");
  input.addEventListener(`focus`, event => {
    console.log("message");
  });
}

/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */

function clickElsewhere() {
  const input = document.querySelector(".input input");
  input.addEventListener(`blur`, event => {
    console.log("message");
  });
}

/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */

function pressAKey() {
  const input = document.querySelector(".input input");

  input.addEventListener(`keydown`, event => {
    console.log("message");
  });
}
/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
function releaseAKey() {
  const input = document.querySelector(".input input");
  input.addEventListener(`keyup`, event => {
    console.log("message");
  });
}
/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
function inputToUpperCase() {
  const input = document.querySelector(".input input");

  input.onkeyup = function() {
    this.value = this.value.toUpperCase();
  };
}

/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */
function handleSelectChange() {
  const input = document.querySelector("#items");

  input.addEventListener(`change`, event => {
    console.log(input.value);
  });
}
/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */
const result = {
  firstName: "",
  lastName: ""
};
function submitFormHandler() {
  const form = document.querySelector("form");
  const formInputs = form.querySelectorAll("input");

  form.addEventListener("submit", () => {
    result.firstName = formInputs[0].value;
    result.lastName = formInputs[1].value;
  });
  console.log(result);
}

/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */

function handleScroll() {
  window.addEventListener("scroll", event => {
    console.log("Scrolling");
  });
}
