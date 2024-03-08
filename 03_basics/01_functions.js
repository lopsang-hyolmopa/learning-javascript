function helloWorld() {
    console.log("Hello World");
}

helloWorld // function referance
helloWorld() // function execution

// function addTwoNumber(number1, number2) { // number1, number2 are parameters since metioned on function declaration
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
    return number1 + number2
    console.log(number1 + number2); // does not excute after return
}

const result = addTwoNumber(3, 5) // 3, 5 are arguments since called on function

console.log("Result: ", result);


function loginUserMessage(userName = "user") { // can set default value on parameter
    return `${userName} just logged in!`
}

console.log(loginUserMessage("lopsang")) // lopsang just logged in!

console.log(loginUserMessage()) // if passed empty - returns undefined just logged in!


// Rest operator - takes any numbers of arguments
function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(100, 200, 500, 2000)); // returns array with arguments as elements


// passing object to the function
const user = {
    userName: "lopsang",
    age: 22
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and his age is ${anyObject.age}`);
}

// handleObject(user)

// direct pass object to function
handleObject({
    userName: "sam",
    age: "33"
})

// pass array into function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

// direct pass array into function
console.log(returnSecondValue([2, 4, 6, 8, 10]));