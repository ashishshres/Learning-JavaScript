"use strict"; // treat all JS code as newer version

// alert(3 + 3); // does not work on nodejs

// let name = "Ashish";
// let age = 20;
// let isLoggedIn = false;

// number
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => value not assigned
// symbol => unique

// object

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

// Primitives
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.5;
const isLoggedIn = false;
const outsideTemp = null;

console.log(typeof outsideTemp); // object

let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(typeof anotherId); // symbol

console.log(id === anotherId); // false

const bigNumber = 32480380482038403280412340n;
console.log(typeof bigNumber); // bigint

// Reference (Non-primitive)
// Arrays, Objects, Functions

const heros = ["spiderman", "ironman", "thor"];

const myObj = {
    name: "Ashish",
    age: 20,
};

const myFunction = function () {
    console.log("hello world");
};
