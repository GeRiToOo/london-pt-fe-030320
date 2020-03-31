/**
 * Exercise 1
 *
 * Add Chalk(https://github.com/chalk/chalk) to your project
 */

const chalk = require("chalk");

/**
 * =============================================
 * READ CHALK DOCUMENTATION TO SEE HOW TO USE IT
 * =============================================
 */

/**
 * Exercise 2
 *
 *  create a function {renderBlueText} which will log
 * your text but make font colour blue
 *
 * Call this function and run "node index.js" in a terminal
 * to see the result
 */

function renderBlueText(string) {
  console.log(chalk.blue("Hello"));
}

/**
 * Exercise 3
 *
 * create a function {inversedColourText} which takes string as
 * an argument and log it with inversed background and foreground colors
 * Call this function and run "node index.js" in a terminal
 * to see the result
 */

function inversedColourText(string) {
  console.log(chalk.inverse("Hello"));
}
console.log(inversedColourText());

/**
 * Exercise 4
 *
 * create a function styledText that takes array of strings
 * and style each by adding red background colour and setting
 * font colour to white.

 */

let array = ["Hello"];
function styledText(array) {
  console.log(chalk.bgRed.white(array));
}
console.log(styledText());
