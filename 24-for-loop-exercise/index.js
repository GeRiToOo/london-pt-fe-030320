const myName = "Gergana"; // SET YOUR NAME

const visitors = ["Alex", "Mike", "Sam", "Monica", "Lily"]; // Add at least 5 names

/**
 * Exercise 1
 *
 * create a function {greetVisitors} and inside it write for loop which
 * will greet all people from "visitors" for each person you should
 * console.log "Hi {name}, my name is {myName}!"
 */

// ========================
const numbers = [2, 123, 13, 1, 6, 84, 23, 12, 45]; // DON'T TOUCH THIS LINE :)



function greetVisitors() {
    for (let i = 0; i < visitors.length; i++) {
      console.log("Hi " + visitors[i] + ", my name is" + myName);
    }
  }

/**
 * Exercise 2
 * Create a function {getElementIndex} that uses a for loop to find the index of a
 * given item in {numbers}.
 * If the item is not present, return a string "Item not found"
 */

// ========================
function getElementIndex(number){
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] === number){
      return index;
    } 
  }

  return "Item not found";  
}


/**
 * Exercise 3
 * Create a function {total} that will return sum of all numbers
 * from {numbers} array
 */

// ========================

const numbersForIndexes = [6, 2, 16, 23, 84, 21, 9, 3]; // DON'T TOUCH THIS LINE :)

function total(){
// re-write to "for"
return [2, 123, 13, 1, 6, 84, 23, 12, 45].reduce((a, b) => a + b); // WRONG
  
}

/**
 * Exercise 4
 * Create a function {addIndex} that takes {numbersForIndexes} array,
 * and returns a new array which includes each number + it's index
 */


function addIndex(){
  let newArray = [];

  for (let i = 0; i < numbersForIndexes.length; i++) {
    newAdded = i + numbersForIndexes[i];
    newArray.push(newAdded);
  }

  return newArray;
}
 


const forLowestNumber = [5, 234, 96, 34, -34, 0, 23]; // DON'T TOUCH THIS LINE :)
/**
 * Exercise 5
 *  create function {lowestNumber} which will return the lowest integer
 * from {forLowestNumber}
 */

 function lowestNumber(smallestNumber) {
// re-write with "for"

for(let i = 0; i > forLowestNumber.length; i++){
  
    if (forLowestNumber[i] < smallestNumber){
      smallestNumber = forLowestNumber[i];
      return  smallestNumber;
    } 
  
}
  // return Math.min(...forLowestNumber);

 };
