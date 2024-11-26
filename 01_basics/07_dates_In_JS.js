let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// let myCreatedDate = new Date(2024, 10, 26)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 10, 26, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-26")
let myCreatedDate = new Date("01-26-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // give values in milliseconds

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // to get values in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))

 