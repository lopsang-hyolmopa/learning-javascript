const score = 400
// console.log(score);

// declare explicitly a variable is number
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString()); // converts to String data type

// console.log(balance.toFixed(2)); // shows only 2 numbers after decimal

const otherNumber = 123.8955
// console.log(otherNumber.toPrecision(4)); // 123.8 if toPrecision(3), then 124 since it rounds off the number after decimal

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN')); // 1,00,000 - returns number in indian number system

// ++++++++++++++++++ Maths ++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //absoulte value - changes only negative value to positive

console.log(Math.round(4.6)); // 5 - rounds of number

console.log(Math.ceil(4.2)); // 5 - returns upper value

console.log(Math.floor(4.9)); // 4 - returns lower value

console.log(Math.min(2, 3, 0, 1, 5)); // returns minimum value
console.log(Math.max(2, 3, 0, 1, 5)); // returns max value

console.log(Math.random()); // always returns number between 0 to 1
console.log((Math.random()*10) + 1); // always returns between 1 to 10
console.log(Math.floor(Math.random()*10) + 1); // always returns between 1 to 10 but not float number, only integer.

// If you want to get number between min and max

const min = 10
const max = 20

const formula = Math.floor(Math.random() * (max-min+1) + min)
console.log(formula);

