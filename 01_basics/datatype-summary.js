// Primitive (call by value)
// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 98765432165498n


// Reference / Non Primitive (call by reference)
// Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Ankit",
    age: 24,   
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (No-Primitive)

let myYoutubename = "ankitanghan.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi: "ankit@ysbl"
}

let userTwo = userOne

userTwo.email = "ankit@google.com"

console.log(userOne.email);
console.log(userTwo.email);

