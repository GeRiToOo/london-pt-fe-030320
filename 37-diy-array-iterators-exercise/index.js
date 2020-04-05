/**
 * Exercise #1
 *
 * forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */
const forEach = (array, callback) => {
  for (const element of array) {
    callback(element, array.indexOf(element));
  }
};

/**
 * Exercise #2
 *
 * map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */

function map(array, callback) {
  newArray = [];

  for (let index = 0; index < array.length; index++) {
    const value = array[index];

    newArray.push(callback(value, index));
  }
  return newArray;
}

/**
 * Exercise #3
 *
 * filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */

function filter(array, callback) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    const value = array[index];

    if (Boolean(callback(value, index))) {
      newArray.push(value);
    }
  }
  return newArray;
}

/**
 * Exercise #4
 *
 * find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */

function find(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if (Boolean(callback(value, index))) {
      return value;
    }
  }
}

/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */

function findIndex(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if (Boolean(callback(value, index))) {
      return index;
    }
  }
}

/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index.
 *
 * The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

function every(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (!callback(array[index], index)) {
      return false;
    }
  }

  return true;
}

/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index.
 *  The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

function some(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if (Boolean(callback(value, index)) === true) {
      return true;
    }
  }
}

/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the cumulative value,
 * each element and the index.
 *
 * Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */

function reduce(array, callback, initialValue = 0) {
  let sum = initialValue;

  for (let i = 0; i < array.length; i++) {
    sum = callback(sum, array[i], i);
  }
  return sum;
}
