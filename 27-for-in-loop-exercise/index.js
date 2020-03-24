/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */

const obj = {
    firstName: "Alex",
    lastName: "Smith",
    age: 25
};
 

 function logProperties(){
    for (const property in obj) {
        console.log(`Property name: ${[property]}`);
      }
 }
/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */
function getAllValues(obj) {
  let  newArray = [];
    for (let property in obj) {
      
        newArray.push(obj[property], );
      
      } 
return newArray;
}
/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */

 function getAllValuesAsString() {
   
    let  newArray = [];
    for (let property in obj) {
        newArray.push(obj[property], );
      } 
      return newArray[0]+" "+ newArray[1]+" "+newArray[2];
   
 }
/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * 'PROPERTY: VALUE'
 */

 function propertyValueString() {
    for (const prop in obj) {
        console.log(`${prop}: ${obj[prop]}`);
      }

 }