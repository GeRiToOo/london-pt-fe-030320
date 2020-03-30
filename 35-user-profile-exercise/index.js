// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require("readline-sync");
const chalk = require("chalk");
const user = {};
/**
 * Exercise 1
 *
 * ask user for a first name and save response to {user.firstName}
 */
console.log(
  chalk.bgGreen.white(
    "============= Please insert your details ==================="
  )
);
console.log(" ");
let firstName = readlineSync.question(chalk.green("First name: "));
user.firstName = firstName;
console.log(" ");
/**
 * Exercise 2
 *
 * ask user for a last name and save response to {user.lastName}
 */

let lastName = readlineSync.question(chalk.green("Last name: "));
user.lastName = lastName;

console.log(" ");
console.log(
  chalk.bgGreen.white(
    `        ===============  Hello ${user.firstName} ${user.lastName}!  ===============        `
  )
);
console.log(" ");
/*
 * Exercise 3
 *
 * ask user for a age and save response to {user.age}
 */

let userAge = readlineSync.question(chalk.green("Age: "));
user.age = userAge;

/*
 * Exercise 4
 *
 * ask user for a email and save response to {user.email}
 */
console.log(" ");
let userEmail = readlineSync.question(chalk.green("Email: "));
user.email = userEmail;

/**
 * OPTIONAL:
 *
 * use "chalk" to print out user data with colours :)
 */
console.log(" ");
console.log(
  chalk.bgRed.white(
    "================= ! ! ! ! ! ! ! ! !  ======================="
  )
);
console.log(" ");
console.log(
  chalk.bold.red(
    `Here what we have, your full name is ${user.firstName} ${user.lastName}. 
    You are ${user.age} and if we need to contact with you we can send 
    a letter to ${user.email} `
  )
);
console.log(" ");
console.log(
  chalk.bgRed.white(
    "================= ! ! ! ! ! ! ! ! !  ======================="
  )
);
