const programmingLanguage = ["js", "rb", "py", "java", "cpp"];

// normal callback function
programmingLanguage.forEach(function (item) {
  // console.log(item);
});

// callback arrow function
programmingLanguage.forEach((item) => {
  // console.log(item);
});

// passing function refernce
function printMe(item) {
  // console.log(item);
}

programmingLanguage.forEach(printMe);

// we get each value, index and whole array
programmingLanguage.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

// for each in object
const programmingLang = [
  {
    name: "javascript",
    filename: "js",
  },
  {
    name: "java",
    filename: "java",
  },
  {
    name: "python",
    filename: "py",
  },
];

programmingLang.forEach((item) => {
//   console.log(item.name);
});

// forEach does not return value
const values = programmingLang.forEach( (item) => {
    // console.log(item);
    return item // forEach does not return value
})

// console.log(values); // undefined - does not return value


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]