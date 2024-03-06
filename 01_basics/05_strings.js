const name = "lopsang"
const repoCount = 12

// console.log(name + repoCount + " Value"); // Outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation

// another way of assigning string value
const gameName = new String('PUBG')

console.log(gameName[0]); // 'P' since string is considered object. But make sure that it is not array.

console.log(gameName.length); // 4 - .length propery can be used

console.log(gameName.toLocaleLowerCase()) // pubg - can simply called string methods

const newGameName = gameName.substring(0, 2)
console.log(newGameName) // PU - ignores last number index and provide exactly before the index

const anotherGameName = gameName.slice(-4, 3)
console.log(anotherGameName); // PUB - slice method supports negative value as well.

const newString = "    lopsang  "
const noExtraSpaceString = newString.trim() // trim method ignores extra whitespaces and lines provided on the string
console.log(noExtraSpaceString); // lopsang

const url = "https://lopeyman.com/about%20us"
const readableUrl = url.replace('%20', '-')
console.log(readableUrl) // https://lopeyman.com/about-us