// singleton object - built only through constructor, not by object literals
/*
    1. Object.create
    2. const tinderUser = new Object()
*/

// Assign value to empty object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// access keys & values insideobjects
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));

// check if the property is availabe in object or not
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// Nested objects inside object

const regularUser = {
    name: {
        fullName: {
            firstName: "lopsang",
            lastName: "lama"
        }
    },
    email: "lopsanglama@test.com"
}

// regularUser.name.fullName.firstName - access lastName

// merge elements of two or more objects
const obj1 = {1: "a", 2: "b"} 
const obj2 = {3: "a", 4: "b"} 
const obj3 = {5: "a", 6: "b"}

/* 
    1. assign method - returns new object where all elements of objects are merged
        code: const mergedObj =  Object.method({}, obj1, obj2, obj3)

    2. spread operator 
        code: const mergedObj = {...obj1, ...obj2, ...obj3}
*/

const mergedObj = {...obj1, ...obj2, ...obj3}


// Datafetching data generally provides array of object

const users = [
    {
        id: 1,
        name: "lopsang",
        email: "lopsang@test.com"
    },
    {
        id: 2,
        name: "jhon",
        email: "jhon@test.com"
    },
    {
        id: 3,
        name: "rajesh",
        email: "rajesh@test.com"
    }
]
