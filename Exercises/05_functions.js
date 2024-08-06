// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(num) {
    if (num % 2 == 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}
checkEvenOdd(2);

// Task 2: Write a function to calculate the square of a number and return the result.
function squareNum(num) {
    return num * num;
}
let num = 2;
let square = squareNum(num);
console.log(square);

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const maxTwo = function (num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is maximum`);
    } else {
        console.log(`${num2} is maximum`);
    }
};

maxTwo(10, 20);
maxTwo(45, 10);

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatTwo = function (str1, str2) {
    return str1 + str2;
};

let str1 = "ashish";
let str2 = "shrestha";
let concat = concatTwo(str1, str2);
console.log(concat);

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sumTwo = (num1, num2) => {
    return num1 + num2;
};
console.log(sumTwo(10, 20));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkChar = (str, char) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return true;
        }
    }
    return false;
};

// const findChar = checkChar("ashish@example.com", "@"); // true
const findChar = checkChar("ashish@example.com", "1"); // false
console.log(findChar);

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function product(num1, num2 = 10) {
    return num1 * num2;
}
console.log(product(10)); // 100
console.log(product(10, 20)); // 200

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default
function greet(name, age = 20) {
    return `Hello, your name is ${name} and age is ${age}`;
}

console.log(greet("ashish"));

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function callFuncMultiple(func, number) {
    for (let i = 0; i < number; i++) {
        func();
    }
}

function sayHello() {
    console.log("Hello");
}

callFuncMultiple(sayHello, 5);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function twoFuncs(func1, func2, value) {
    return func2(func1(value));
}

function addTwo(value) {
    return value + 2;
}

function multiplyTwo(value) {
    return value * 2;
}

const result = twoFuncs(addTwo, multiplyTwo, 10);
console.log(result);
