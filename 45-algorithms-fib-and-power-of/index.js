/**
 * Exercise 1
 *
 * create a function {generateFibonacci} which will take a parameter
 * that represents a length of an array that needs to be generated
 *
 * The array must be a Fibonacci sequence:
 *
 * The next number is found by adding up the two numbers before it,
 * always starting with 0 and 1.
 *
 * Ex: generateFibonacci(5) // return [0, 1, 1, 2, 3];
 */

function generateFibonacci(arrayLength) {
  let arrayF = [];
  for (let i = 0; i < arrayLength; ++i) {
    arrayF.push(i < 2 ? i : arrayF[i - 1] + arrayF[i - 2]);
  }
  return arrayF;
}
/**
 * Exercise 2
 *
 * create a function {isPowerOf} which takes 2 arguments:
 *
 * number – a number
 * primeNumber – a number (a prime number)
 *
 * return a Boolean if your number is a power of primeNumber
 *
 * Ex: isPowerOf(27, 3) // return true;
 */

function isPowerOf(number, primeNumber) {
  let result = Math.pow(primeNumber, primeNumber);
  if (result === number) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
isPowerOf(27, 3);
