// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require("readline-sync");
const chalk = require("chalk");

let selectedItems = {
  book: "",
  movie: "",
  nextTrip: ""
};

const movies = [
  "The Invisible Man",
  "Never Rarely Sometimes Always",
  "Gretel & Hansel",
  "No time to die",
  "Bloodshot",
  "Onward",
  "Sonic"
];

const books = [
  "My Dark Vanessa",
  "Uncanny Valley",
  "Weather",
  "The night watchman",
  "All adults here",
  "Dear Edward",
  "Grown ups"
];

const countries = [
  "Italy",
  "France",
  "Germany",
  "Spain",
  "Portugal",
  "Denmark",
  "Netherland"
];

const user = {};
/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

mainMenu();
function bookMenu() {
  console.log("");
  console.log("= = = = = = BOOK MENU = = = = = =");
  console.log("");
  console.log("1. My Dark Vanessa");
  console.log("2. Uncanny Valley");
  console.log("3. Weather");
  console.log("4. The night watchman");
  console.log("5. All adults here");
  console.log("6. Dear Edward");
  console.log("7. Grown ups");
  console.log("8. Go Back");
  console.log("");
  let userInput = readlineSync.question("Chose an option: ");
  let userBook = parseFloat(userInput);

  switch (userBook) {
    case 1:
      console.log("");
      console.log("You chose My Dark Vanessa book");
      user.book = "My Dark Vanessa";
      console.log(bookMenu());
      break;

    case 2:
      console.log("");
      console.log("You chose Uncanny Valley book");
      user.book = "Uncanny Valley";
      console.log(bookMenu());
      break;

    case 3:
      console.log("");
      console.log("You chose Weather book");
      user.book = "Weather";
      console.log(bookMenu());
      break;

    case 4:
      console.log("");
      console.log("You chose The night watchman book");
      user.book = "The night watchman";
      console.log(bookMenu());
      break;
    case 5:
      console.log("");
      console.log("You chose All adults here book");
      user.book = "All adults here";
      console.log(bookMenu());
      break;
    case 6:
      console.log("");
      console.log("You chose Dear Edward book");
      user.book = "Dear Edward";
      console.log(bookMenu());
      break;
    case 7:
      console.log("");
      console.log("You chose Grown ups book");
      user.book = "Grown ups";
      console.log(bookMenu());
      break;
    case 8:
      console.log("");
      console.log("Go Back");
      console.log(mainMenu());
      break;

    default:
      console.log(" = = = = = = = = ! ! ! ! ! ! ! = = = = = = = = ");

      console.log("Please select one of the following options:");
      bookMenu();
      break;
  }
}

/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */

function movieMenu() {
  console.log("");
  console.log("= = = = = = MOVIES MENU = = = = = =");
  console.log("");
  console.log("1. The Invisible Man");
  console.log("2. Never Rarely Sometimes Always");
  console.log("3. Gretel & Hansel");
  console.log("4. No time to die");
  console.log("5. Bloodshot");
  console.log("6. Onward");
  console.log("7. Sonic");
  console.log("8. Go Back");
  console.log("");
  let userInput = readlineSync.question("Chose an option: ");
  let userMovie = parseFloat(userInput);

  switch (userMovie) {
    case 1:
      console.log("");
      console.log("You choose The Invisible Man movie");
      user.movie = "The Invisible Man";
      console.log(movieMenu());
      break;

    case 2:
      console.log("");
      console.log("You choose Never Rarely Sometimes Always movie");
      user.movie = "Never Rarely Sometimes Always";
      console.log(movieMenu());
      break;

    case 3:
      console.log("");
      console.log("You choose Gretel & Hansel movie");
      user.movie = "Gretel & Hansel";
      console.log(movieMenu());
      break;

    case 4:
      console.log("");
      console.log("You choose No time to die movie");
      user.movie = "No time to die";
      console.log(movieMenu());
      break;

    case 5:
      console.log("");
      console.log("You choose Bloodshot movie");
      user.movie = "Bloodshot";
      console.log(movieMenu());
      break;

    case 6:
      console.log("");
      console.log("You choose Onward movie");
      user.movie = "Onward";
      console.log(movieMenu());
      break;

    case 7:
      console.log("");
      console.log("You choose Sonic movie");
      user.movie = "Sonic";
      console.log(movieMenu());
      break;

    case 8:
      console.log("");
      console.log("Go Back");
      console.log(mainMenu());
      break;

    default:
      console.log(" = = = = = = = = ! ! ! ! ! ! ! = = = = = = = = ");

      console.log("Please select one of the following options:");
      bookMenu();
      break;
  }
}

/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

function destinationMenu() {
  console.log("");
  console.log("= = = = = = DESTINATION MENU = = = = = =");
  console.log("");
  console.log("1. Italy");
  console.log("2. France");
  console.log("3. Germany");
  console.log("4. Spain");
  console.log("5. Portugal");
  console.log("6. Denmark");
  console.log("7. Netherland");
  console.log("8. Go Back");
  console.log("");
  let userInput = readlineSync.question("Chose an option: ");
  let userDestination = parseFloat(userInput);

  switch (userDestination) {
    case 1:
      console.log("");
      console.log("You chose Italy as a destination");
      user.destination = "Italy";
      console.log(destinationMenu());
      break;

    case 2:
      console.log("");
      console.log("You chose France as a destination");
      user.destination = "France";
      console.log(destinationMenu());
      break;

    case 3:
      console.log("");
      console.log("You chose Germany as a destination");
      user.destination = "Germany";
      console.log(destinationMenu());
      break;

    case 4:
      console.log("");
      console.log("You chose Spain as a destination");
      user.destination = "Spain";
      console.log(destinationMenu());
      break;

    case 5:
      console.log("");
      console.log("You chose Portugal as a destination");
      user.destination = "Portugal";
      console.log(destinationMenu());
      break;

    case 6:
      console.log("");
      console.log("You chose Denmark as a destination");
      user.destination = "Denmark";
      console.log(destinationMenu());
      break;

    case 7:
      console.log("");
      console.log("You chose Netherland as a destination");
      user.destination = "Netherland";
      console.log(destinationMenu());
      break;

    case 8:
      console.log("");
      console.log("Go Back");
      console.log(mainMenu());
      break;

    default:
      console.log(" = = = = = = = = ! ! ! ! ! ! ! = = = = = = = = ");

      console.log("Please select one of the following options:");
      bookMenu();
      break;
  }
}

/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */

function mainMenu() {
  console.log("");
  console.log("= = = = = = MAIN MENU = = = = = =");
  console.log("");
  console.log("1. BOOKS");
  console.log("2. MOVIES");
  console.log("3. NEXT DESTINATION");
  console.log("4. EXIT");
  console.log("");

  let userInput = readlineSync.question("Chose an option: ");
  console.log("");
  let userOption = parseFloat(userInput);

  switch (userOption) {
    case 1:
      console.log("");
      console.log(bookMenu());
      break;
    case 2:
      console.log("");
      console.log(movieMenu());
      break;
    case 3:
      console.log("");
      console.log(destinationMenu());
      break;
    case 4:
      exit();
      function exit() {
        let input = readlineSync.question(
          "You choose EXIT. Are you sure? Y/N "
        );
        console.log("");
        if (input.toLowerCase() === "n") {
          console.log(mainMenu());
        } else if (input.toLowerCase() === "y") {
        } else {
          console.log("");
          console.log("Please insert valid answer!");
          console.log(exit());
        }
      }
      console.log("");
      console.log(
        `Selected choices were  ${user.book} book , ${user.movie} movie and destination ${user.destination} . `
      );
      console.log("");

      break;

    default:
      console.log(" = = = = = = = = ! ! ! ! ! ! ! = = = = = = = = ");

      console.log("Please select one of the following options: ");
      bookMenu();
      break;
  }
}
