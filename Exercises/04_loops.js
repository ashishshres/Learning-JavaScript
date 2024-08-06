// Task 1: Write a program to print numbers from 1 to 10 using a `for` loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a `for` loop.
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}

// Task 3: Writea ro ram to calculate the sum of numbers from 1 to 10 using a `while` loop.
let i = 1;
let sum = 0;
while (i <= 10) {
    sum = sum + i;
    i++;
}
console.log("Sum of 1 to 10 is", sum);

// Task 4: Write a program to print numbers from 10 to 1 using a `while` loop.
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// Task 5: Write a program to print numbers from 1 to 5 using a `do...while` loop.
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// Task 6: Write a program to calculate the factorial of a number using a `do...while` loop.
let num = 5;
let fact = 1;
let l = 1;
do {
    fact = fact * l;
    l++;
} while (l <= num);
console.log(`Factorial of ${num} is ${fact}`);

/* 
Task 7: Write a program to print a pattern using nested `for` loops.
    *
    **
    ***
    ****
    *****
*/
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the `continue` statement.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the `break` statement.
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}
