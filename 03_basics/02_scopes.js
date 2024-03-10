// {} - scope of particular programm

let a = 300 // global scope

if (true) { // block scope
    let a = 10
    console.log("Block Scope: ", a);
}

console.log("Global Scope: ", a);


// nested scopes
function one() {
    const username = "lopsang"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

    two()
}

one() 

// function two (childre) has access for username as global value whereas function one (parent) does not have access for children values.


// ************** interesting *****************

console.log(addOne(5)) // 5
function addOne(num) {
    return num + 1
}

console.log(addTwo(5)) // returns error - hoisiting concept
const addTwo = function(num) {
    return num + 2
}