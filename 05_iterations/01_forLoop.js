// For Loop

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element); 
}

// nested loop
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

// loop inside 
let myArray = ["Ironman", "Hulk", "Thor"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}

// break in loop
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        break
    }
    // console.log(`Value of index is ${index}`);
}

// continue in loop
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of index is ${index}`);
}