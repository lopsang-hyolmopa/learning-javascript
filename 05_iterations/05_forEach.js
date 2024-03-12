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
  console.log(item.name);
});
