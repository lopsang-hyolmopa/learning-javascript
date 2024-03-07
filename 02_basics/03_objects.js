// singleton - built only through constructor, not by object literals
// Object.create


// Object literals

const mySym = Symbol("uniqueKey")

const jsUser = {
    name: "lopsang",
    "userName": "lopeyman",
    [mySym] : "myKey", // to add symbol inside object, you need to add inside square notation
    age: 22,
    location: "bhaktapur",
    email: "lopsang@test.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}

// access value of objects
/*
    1. jsUser.name
    2. jsUser["email"] or jsUser["userName"] - using square notation
*/

console.log(jsUser.name);
console.log(jsUser["userName"]);
console.log(jsUser[mySym]);

// change or override new value in object
jsUser.name = "Lopsang Lama"

// freeze your object - cannot change value of object
// Object.freeze(jsUser)


// Add function in object
jsUser.greetingOne = function() {
    console.lof("Hello! JS user")
}
jsUser.greetingTwo = function() {
    console.lof(`Hello! JS user, ${this.name}`)
}

jsUser.greetingOne()
jsUser.greetingTwo()