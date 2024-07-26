// const myArr = [0, 1, 2, 3, 4, 5, true, "ashish", function(){}];

const myArr1 = [0, 1, 2, 3, 4, 5];
const myArr2 = new Array(1, 2, 3);
// console.log(typeof myArr); // object
// JavaScript arrays are resizable

// console.log(myArr[0]); // 0
// console.log(myArr[1]); // 1
// console.log(myArr[2]); // 2
// console.log(myArr[3]); // 3
// console.log(myArr[4]); // 4
// console.log(myArr[5]); // 5
// console.log(myArr[6]); // undefined
// console.log(myArr[-1]); // undefined

/*
# Copy in JavaScript makes shallow copy.
- Shallow copy of an object is a copy who share the same references
- Deep copy of an object is a copy who do not share the same references
*/

const myFruits = ["apple", "banana", "cherry"];
console.log(myFruits.length); // 3

// Array methods
const newArr = [0, 1, 2, 3, 4, 5];

newArr.push(6); // [0, 1, 2, 3, 4, 5, 6]
console.log(newArr); // arrays are mutable
newArr.push(7); // [0, 1, 2, 3, 4, 5, 6, 7]
console.log(newArr);

newArr.pop(); // [0, 1, 2, 3, 4, 5, 6]
console.log(newArr);

newArr.unshift(8); // [8, 0, 1, 2, 3, 4, 5, 6]
console.log(newArr);

newArr.shift();
console.log(newArr); // [0, 1, 2, 3, 4, 5, 6]

const nextArr = [0, 1, 2, 3, 4, 5];
// console.log(nextArr.includes(5)); // true
// console.log(nextArr.includes(6)); // false
// console.log(nextArr.indexOf(5)); // 5
// console.log(nextArr.indexOf(6)); // -1 (not exists)

// const myArr3 = nextArr.join();
// console.log(nextArr);
// console.log(myArr3);
// console.log(typeof myArr3); // string

// slice
console.log("A ", myArr1);
const myn1 = myArr1.slice(1, 3);
console.log(myn1);
console.log("B", myArr1);

// splice
const myn2 = myArr1.splice(1, 3);
console.log(myn2);
console.log("C", myArr1);

/*
# `slice` do not manipulate the original array
# `splice` manipulate the original array
*/