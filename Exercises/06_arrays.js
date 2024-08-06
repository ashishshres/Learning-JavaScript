// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1); // [ 1, 2, 3, 4, 5 ]

// Task 2: Access the first and last elements of the array and log them to the console.
const arr2 = [1, 2, 3, 4, 5];
console.log("first element", arr2[0]); // 1
console.log("last element", arr2[4]); // 5
// console.log("last element", arr2[arr2.length - 1]); // 5

// Task 3: Use the `push` method to add a new number to the end of the array and log the updated array.
const arr3 = [1, 2, 3];
arr3.push(4);
console.log(arr3); // [ 1, 2, 3, 4 ]

// Task 4: Use the `pop` method to remove the last element from the array and log the updated array.
const arr4 = [1, 2, 3];
arr4.pop();
console.log(arr4); // [ 1, 2 ]

// Task 5: Use the `shift` method to remove the first element from the array and log the updated array.
const arr5 = [1, 2, 3];
arr5.shift();
console.log(arr5); // [ 2, 3 ]

// Task 6: Use the `shift` method to remove the first element from the array and log the updated array.
const arr6 = [1, 2, 3];
arr6.unshift(4);
console.log(arr6); // [ 4, 1, 2, 3 ]

// Task 7: Use the `map` method to create a new array where each number is doubled and log the new array.
const arr7 = [1, 2, 3];
const newArr1 = arr7.map((elem) => elem * 2);
console.log(newArr1); // [ 2, 4, 6 ]

// Task 8: Use the `filter` method to create a new array with only even numbers and log the new array.
const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr2 = arr8.filter((elem) => elem % 2 == 0);
console.log(newArr2); // [ 2, 4, 6, 8, 10 ]

// Task 9: Use the `reduce` method to calculate the sum of all numbers in the array and log the new array.
const arr9 = [1, 2, 3, 4, 5];
const newArr3 = arr9.reduce((acc, elem) => acc + elem, 0);
console.log(newArr3); // [ 2, 4, 6, 8, 10 ]

// Task 10: Use a `for` loop to iterate over the array and log each element to the console.
const arr10 = [3, 21, 1, 15, 32];
for (let i = 0; i < arr10.length; i++) {
    console.log(arr10[i]);
}

// Task 11: Use a `forEach` loop to iterate over the array and log each element to the console.
const arr11 = [3, 21, 1, 15, 32];
arr11.forEach((elem) => console.log(elem));

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [
    [1, 2],
    [3, 4],
];
console.log(matrix); // [ [ 1, 2 ], [ 3, 4 ] ]

// Task 13: Access and log a specific element from the two-dimensional array.
const myElem = matrix[0][1]; // 2
console.log(myElem);
