// for-in provides keys while for-of provides values

// for-in in object

const languageShortcut = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in languageShortcut) {
//   console.log(`The fullform of ${key} is ${languageShortcut[key]}`);
}


// for-in in array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}
