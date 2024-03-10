const userEmail = "lopsang@test.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

/* 
    1. falsy values - false, 0, -0, BigInt 0n, "", null, undefined, Nan

    2. truthy values - "0", "false", " ", [], {}, function(){}
*/

// chek if array is empty
const newArr = []

if(newArr.length === 0) {
    console.log("array is empty");
}

// check if object is empty
const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10 // 5
val1 = null ?? 10 // 10
val1 = undefined ?? 15 // 15


// Terniary Operator

condition ? true : false

const age = 19
age >= 18 ? console.log("You can drive") : console.log("You cannot drive")