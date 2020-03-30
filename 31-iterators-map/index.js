// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */

let convertToPositive = array =>
  array.map(number => {
    if (number < 0) {
      return number * -1;
    } else {
      return number;
    }
    return array;
  });
/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */

let getAllNames = users => {
  const array = users.map(users => users.name);
  return array;
};

/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */

let greetAll = array => {
  let newArray = [];
  array.map(name => newArray.push(`Hi, ${name}!`));

  return newArray;
};

/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */

let multiplyAllNumbers = array => {
  // let newArray = array.map(function(number) {
  //   return number * 5;
  // });
  // return newArray;

  return array.map(param => {
    if (typeof param === "number") {
      return param * 5;
    }

    return param;
  });
};
