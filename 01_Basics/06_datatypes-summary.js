/*
# Primitives
They are of 7 types:
- String
- Number
- Boolean
- null
- undefined
- Symbol
- BigInt
*/

const score = 100;
// const score:number = 100; // in TypeScript

const scoreValue = 100.5;
const isLoggedIn = false;
const temperature = null;
// let userEmail; // undefined
// let userEmail = undefined;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false

const bigNumber = 74932749234923479743432434n;
console.log(typeof bigNumber); // bigint


console.log(typeof anotherId); // symbol
console.log(typeof temperature); // object

// JavaScript is a dynamically-typed language

/*
# Reference (Non-Primitives)
- Array
- Object
- Function
*/

// array
const fruits = ["apple", "banana", "cherry"];
console.log(typeof fruits); // object

// object
const user = {
    name: "ashish",
    isLoggedIn: false
};
console.log(typeof user); // object

// function
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction); // function

