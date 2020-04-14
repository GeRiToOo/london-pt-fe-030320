const testArray = [5, 28, 19, 21, 4, 6];
const maxDiff = array => {
  for (let i = 0; i < array.length; i++) {
    let number;
    number = array[i] - array[i + 1];

    console.log(number);
  }
  //   return result;
};
console.log(maxDiff(testArray));
