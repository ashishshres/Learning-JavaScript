// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
// let num = 10;
// let num = -10;
let num = 0;
if (num > 0) {
    console.log(`${num} is positive`);
} else if (num < 0) {
    console.log(`${num} is negative`);
} else {
    console.log(`${num} is zero`);
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
const age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote");
}

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
const num1 = 10;
const num2 = 5;
const num3 = 20;
if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is largest`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is largest`);
} else {
    console.log(`${num3} is largest`);
}

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
const day = 4;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'E', 'F') based on a score and log the grade to the console.
const total = 600;
const score = 100;
const percent = (score / total) * 100;

if (percent >= 80) {
    console.log("Grade: A");
} else if (percent >= 60) {
    console.log("Grade: B");
} else if (percent >= 40) {
    console.log("Grade: C");
} else if (percent >= 30) {
    console.log("Grade: D");
} else {
    console.log("Grade: Failed");
}

// Task 6: Write a program that uses ternary operator to check if a number is even or odd and log the result to the console.
const givenNum = 2;
givenNum % 2 === 0 ? console.log("Even") : console.log("Odd");

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
const year = 2024;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(`${year} is leap year`);
} else {
    console.log(`${year} is not leap year`);
}
