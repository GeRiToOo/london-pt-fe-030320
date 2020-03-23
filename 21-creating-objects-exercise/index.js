/**
 * Exercise 1
 *
 * create an object "user", which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */

 const user = {
     firstName: "Gergana",
     lastName: "Rangelova",
     age:30
 }



/**
 * Exercise 2
 *
 * create an object "allTypes" with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */
const allTypes = {
    string: "string",
    number: 6,
    array: ["hey", "bay", "zmay"],
    object: {
        name:"gergana",
        surname:"rangelova"
    },
    displayInfo : function(){ 
        console.log("Hello"); 
    } ,
    boolean: false

};
console.log(allTypes);

/**
 * Exercise 3
 *
 * create a function "createMovieObject" which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */




 function createMovieObject(name, rating, ticketPrice){

    const myFavoriteMovie = {name, rating, ticketPrice}; 

    return myFavoriteMovie;


 }
 