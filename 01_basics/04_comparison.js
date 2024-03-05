// Comparisons operators (>, <, >=, <= ) convert any data types (except undefined) to number

// console.log("2" > 1); // true
// console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true since comparisons operators convert null to number i.e. 0 (zero)


// However, comparisons operators conversion does not work for undefined
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false 


// === string check (check data types and value)

console.log("2" == 2); // true
console.log("2" === 2); // false