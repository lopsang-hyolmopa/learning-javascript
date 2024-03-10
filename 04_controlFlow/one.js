//

// <, >, <=, =>, ==, !=, ===, !==

const balance = 1000

// normal if condition
if (balance > 500) {
    console.log("Your balance is greater than 500");
}

// implicit method - don't forget to add ; (semi-colon) at the end of statement
if (balance > 500) console.log("Your balance is greater than 500");

// if-else conditions
if (balance < 500) {
    console.log("less than 500");
} else if(balance < 750) {
    console.log("less than 750");
} else if(balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

// multiple conditions
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (userLoggedIn && debitCard) { // both conditions should be true
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) { // any condition should be true
    console.log("User logged in");
}
