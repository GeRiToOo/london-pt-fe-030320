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
user.firstName = readlineSync.question(chalk.green("First name: "));

console.log(" ");

/**
 * Exercise 2
 *
 * ask user for a last name and save response to {user.lastName}
 */

user.lastName = readlineSync.question(chalk.green("Last name: "));

console.log(" ");
console.log(
  chalk.bgGreen.white(
    `        ===============  Hello ${user.firstName} ${user.lastName}!  ===============        `
  )
);
console.log(" ");

console.log(`Hello ${user.firstName} ${user.lastName}!`);

/*
 * Exercise 3
 *
 * ask user for a age and save response to {user.age}
 */

user.age = readlineSync.questionInt(chalk.green("Age: "));

/*
 * Exercise 4
 *
 * ask user for a email and save response to {user.email}
 */

console.log(" ");
user.email = readlineSync.questionEMail(chalk.green("Email: "));

/**
 * OPTIONAL:
 *
 * use "chalk" to print out user data with colours :)
 */

console.log(
  `Here what we have, your full name is ${user.firstName} ${user.lastName}. 
    You are ${user.age} and if we need to contact with you we can send 
    a letter to ${user.email} `
);
