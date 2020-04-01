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
  let index = readlineSync.keyInSelect(books, "Choose an option", {
    cancel: "Go back"
  });
  let userOption = parseFloat(index) + 1;

  switch (userOption) {
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
    case 0:
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
  let indexMovie = readlineSync.keyInSelect(movies, "Choose an option", {
    cancel: "Go back"
  });
  let userOptionMovie = parseFloat(indexMovie) + 1;
  switch (userOptionMovie) {
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

    case 0:
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
  let indexCountry = readlineSync.keyInSelect(countries, "Choose an option", {
    cancel: "Go back"
  });
  let userOptionCountry = parseFloat(indexCountry) + 1;

  switch (userOptionCountry) {
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

    case 0:
      console.log("");
      console.log("Go Back");
      mainMenu();
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
  let i = 0;
  for (let key of Object.entries(selectedItems)) {
    i = i + 1;
    console.log(`${i}. ${key}`);
  }
  console.log("4. Exit");

  let indexMenu = readlineSync.question("Choose an option: ");

  let userOptionMenu = parseFloat(indexMenu);

  switch (userOptionMenu) {
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
      console.log("");
      console.log(
        `Selected choices were  ${user.book} book , ${user.movie} movie and destination ${user.destination} . `
      );
      break;

    default:
      console.log(" = = = = = = = = ! ! ! ! ! ! ! = = = = = = = = ");

      console.log("Please select one of the following options: ");
      bookMenu();
      break;
  }
}
