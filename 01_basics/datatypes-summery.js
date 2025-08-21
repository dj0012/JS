// # Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//for declare symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 24235675664323435n


// # Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "dj",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive),  Heap (Non-Primitive)

let myYoutubename = "djdotcom"

let anothername = myYoutubename
anothername = "dhananjay"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "dj@google.com"

console.log(userOne.email);
console.log(userTwo.email);

