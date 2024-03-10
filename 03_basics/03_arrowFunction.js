// this keyword - refers to current context

const user = {
    username: "lopsang",
    age: 22,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage() // returns - lopsang, welcome to website
user.username = "sam"
user.welcomeMessage() // returns - sam, welcome to website

console.log(this); // returns empty object

function normalFunc() {
    let username = "lopsang"
    console.log(this.username); // returns undefined as this does not work inside function
}

normalFunc()

const arrowFunc = () => {
    let username = "lopsang"
    console.log(this); // // returns undefined same as normal function as this does not work inside function
}

normalFunc()


// basic arrow function - explicit return
const basicArrow = (num1, num2) => {
    return num1 + num2
} 

// implicit return
const implicitReturn = (num1, num2) => num1 + num2
const implicitReturnParentheses = (num1, num2) => (num1 + num2) // if parentheses, no need to mention return keyword


// function that returns object 
const returnObj = () => {username: "hitesh"} // wrong - returns undefined
const returnObject = () => ({ username: "lopsang" }) // right - returns { username: "lopsang" }