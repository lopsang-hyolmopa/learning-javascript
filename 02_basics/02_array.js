const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// Merge elements of two arrays with concat and spread operator

const allHeros = marvelHeros.concat(dcHeros) // returns new array with merged elements of both arrays
console.log(allHeros);


// spread operator
const allHerosWithSpread = [...marvelHeros, ...dcHeros]
console.log(allHerosWithSpread);

// flat method
const arrayWithinArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const useableArray = arrayWithinArray.flat(Infinity) // returns new array with all sub-array elements concantated within it
console.log(useableArray);

// Checks if the value is array or not
console.log(Array.isArray("lopsang")); // false 

// convert other datatypes value into array
console.log(Array.from("Lopsang"));
console.log(Array.from({name: "lopsang"})); // interesting one - returns empty array when not done with reference of key or value


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // creates a new array from a variable number of arguments
