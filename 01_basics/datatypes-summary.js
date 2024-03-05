// JS is dynamically typed language because we don't assign type of variable during variable declaration.


// Primitive - call by value (When value is copied, you don't get the refrence of memory but the copy of the value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // Number
const scoreValue = 100.3 // Number

const isLoggedIn = false // Boolean
const outsideTemp = null // null
let userEmail // undefined

const id = Symbol('123') // symbol
const anotherId = Symbol('123') // symbol

console.log(id === anotherId); // false

const bigNumber = 234920384028508238502835n // BigInt



// Reference  (Non primitive) - (value whose reference is allocated in the memory)

// Array, Objects, Functions

const heros = ["Captain America", "IronMan", "Hulk"] // Array

let myObj = {
    name: "lopsang",
    age: 22,
} // Object

const myFunction = function() {
    console.log("Hello World");
} // Function

console.log(typeof id); // typeof returns types of data

// The typeof Operator
/*

1. Number - number
2. String - string
3. Boolean - boolean
4. BigInt - bigint
5. null - object
6. udefined - undefined
7. Symbol - symbol
8. Array - object
9. Object - object
10. Function - function

*/