// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.
var num = 10;
console.log(num); // 10

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.
let fruit = "apple";
console.log(fruit); // apple

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.
const isLoggedIn = false;
console.log(isLoggedIn); // false

// Task 4: Create a variables of different data types (number, string, boolean, object, array) and log each variable's type using the `typeof` operator.
let score = 100;
let color = "white";
let isAvailable = true;
let myObj = {
    grade: "A"
};
let myArr = [1, 2, 3];

console.log(typeof score); // number
console.log(typeof color); // string
console.log(typeof isAvailable); // boolean
console.log(typeof myObj); // object
console.log(typeof myArr); // object

// Task 5: Declare a variable using `let`, assign it an intial value, reassign a new value, and log both values to the console.
let intialScore = 100;
console.log(intialScore); // 100
intialScore = 200;
console.log(intialScore); // 200

// Task 6: Try reassigning a variable declared with `const` and observe the error.
const finalScore = 100;
console.log(finalScore); // 100
finalScore = 105; // TypeError: Assignment to constant variable.
console.log(finalScore); 
