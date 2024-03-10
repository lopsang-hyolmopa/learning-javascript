// Immediately Invoked Function Expressions (IIFE)

/* 
    sometime, there is problem with the pollution of global scope. that's why we need to immediately invoked function expression to remove that pollution of global variables

    syntax - ()()
        1. first parentheses includes whole function
        2. seconf parentheses is used to invoke function

    If there are two or more iife, we need to make sure to separate them by ; (semi-colon)
*/

(function myFunc() { // named IIFE
    console.log(`DB Conneted!`);
})();

// pass arguments in IIFE
( (name) => { // unamed IIFE with arrow function
    console.log(`Hello ${name}`);
})("lopsang")