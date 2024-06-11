// Arrays

// const myArr1 = [1, 2, 3, 4, 5];
// const myArr2 = [2, "Ashish", 4, true];
// const avengers = ["iron-man", "spider-man", "thor"];

// console.log(myArr1[0]);
// console.log(avengers[1]);

// const myArr3 = new Array(1, 2, 3, 4);
// console.log(myArr3[1]);

// Array methods

// const myArr = [1, 2, 3, 4, 5];
// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(0);
// myArr.shift();

// console.log(myArr);

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(10));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr);

// slice, splice
const myArr = [1, 2, 3, 4, 5];

console.log("A ", myArr);

const newArr1 = myArr.slice(1, 3);
// [1, 2, 3, 4, 5]
// 1, 2, 3
// 1

console.log(newArr1);

console.log("B ", myArr);

const newArr2 = myArr.splice(1, 3);
// [1, 2, 3, 4, 5]
// 2, 3, 4
// [1, 5]
console.log("C ", myArr);
console.log(newArr2);
