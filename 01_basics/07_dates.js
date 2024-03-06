// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString()); // Wed Mar 06 2024
console.log(myDate.toISOString()); // 2024-03-06T08:27:51.275Z
console.log(myDate.toLocaleDateString()); // 3/6/2024
console.log(myDate.toLocaleString()); // 3/6/2024, 2:12:51 PM
console.log(myDate.toTimeString()); // 14:12:51 GMT+0545 (Nepal Time)
console.log(myDate.toUTCString()); // Wed, 06 Mar 2024 08:27:51 GMT

// typeof Date
console.log(typeof myDate); // object

// create your own date
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // converts into seconds

let newDate = new Date()
console.log(newDate.getMonth() + 1); // 3 since January counts as 0 we need to add 1 to make it easier to understand for end users as well

console.log(newDate.getDay()); // 6 - returns current day


newDate.toLocaleString('default', {
    weekday: "long"
})