// array

const myArr = [0, 1, 2, 3, 4, 5]
const otherArr = new Array(200, 300, 550, 670)
const myHeros = ["Captain America", "Ironman", "Hulk"]

// Array methods

myArr.push(6) // add the element to the array
console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]

myArr.pop() // removes the last element of the array

myArr.unshift(9) // add the element to the first index of the array

myArr.shift() // removes the first element of the array

myArr.includes(9) // checks if the element is available on the array or not. If not returns false (boolean value)

myArr.indexOf(3) // provides index of the element in the array

const newArr = myArr.join() // merges all elements of both arrays and returns the value in string

// slice, splice (Interview question)

/* slice vs splice

slice() extracts elements into a new array without modifying the original while splice() changes the contents of the original array

*/

myArr.slice(1, 3) // [1, 2] - returns new array with element from index 1 to 2 but excluded 3

myArr.splice(1, 3) // [1, 2, 3] - returns array with element from index 1 to 3 but also remove elements from the original array 


 