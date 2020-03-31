// install and  import "readline-sync" npm package before you do exercises

const readlineSync = require("readline-sync");

/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */


let name = readlineSync.question("What is your name? :");



//===== DO NOT TOUCH THIS BLOCK =====
console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");

//===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */

console.log("============= Step 1 ===================");
console.log(" ");
let symbols = ["+", "-", "*", "/"];
let selectedSymbol = readlineSync.question("Select symbol +, -, * and /: ");

while (!symbols.includes(selectedSymbol)) {
  console.log(" ");
  console.log("Incorrect symbol try again");
  console.log(" ");
  selectedSymbol = readlineSync.question("Select symbol +, -, * and /: ");
}

/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

console.log("  ");
console.log("============= Step 2 ===================");
console.log(" ");
let number1 = readlineSync.question("Chose one number: ");
let numBer1 = parseFloat(number1);
while (typeof numBer1 != `number`) {
  console.log(typeof number1);
  console.log(" ");
  number1 = readlineSync.question(
    "Your choice is not a number, please insert a number: "
  );
}


/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

console.log(" ");
console.log("============= Step 3 ===================");
console.log(" ");
let number2 = readlineSync.question("Chose second number: ");
let numBer2 = parseFloat(number2);
while (typeof numBer2 !== "number") {
  console.log(" ");
  number2 = readlineSync.question(
    "Your choice is not a number, please insert a number: "
  );
}

/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */


let result;

if ((selectedSymbol = "+")) {
  result = numBer1 + numBer2;
} else if ((selectedSymbol = "-")) {
  result = numBer1 - numBer2;
} else if ((selectedSymbol = "*")) {
  result = numBer1 * numBer2;
} else if ((selectedSymbol = "/")) {
  result = numBer1 / numBer2;
}


console.log(" ");
console.log("============= Step 4 ===================");

console.log("=====================");
console.log(`Here you go, the result is ${result}`);
console.log("=====================");


