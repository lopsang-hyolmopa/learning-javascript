// For of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps - only recevies unqiue values and add values by order
const map = new Map()
map.set('IN', "India")
map.set('NP', "Nepal")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) { // destructured key and value
    console.log(key, ': ', value);
}

// NOTE: does not work on object