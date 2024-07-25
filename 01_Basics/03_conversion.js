// let score1 = 33;
// console.log(typeof score1); // number

// let valueInNumber = Number(score1); // score convert into number
// console.log(typeof valueInNumber); // number

// let score2 = "10";
// console.log(typeof score2); // string
// console.log(typeof Number(score2)); // number

// let score3 = "123abc";
// let valueInNumber = Number(score3);
// console.log(typeof score3); // string
// console.log(typeof Number(score3)); // number
// console.log(valueInNumber); // NaN

// "33" => 33
// "33abc" => NaN
// true => 1 | false => 0

// let score4 = null;
// let valueInNumber = Number(score4);
// console.log(typeof score4); // object
// console.log(typeof Number(score4)); // number
// console.log(valueInNumber); // 0

// let score5 = undefined;
// let valueInNumber = Number(score5);
// console.log(typeof score5); // undefined
// console.log(typeof Number(score5)); // number
// console.log(valueInNumber); // NaN

// let score6 = true;
// let valueInNumber = Number(score6);
// console.log(typeof score6); // undefined
// console.log(typeof Number(score6)); // number
// console.log(valueInNumber); // NaN

// let isLoggedIn = 1; // true
// let isLoggedIn = 0; // false
// let isLoggedIn = ""; // false
// let isLoggedIn = "ashish"; // true

// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof booleanIsLoggedIn); // boolean
// console.log(booleanIsLoggedIn); // true

// 1 => true | 0 => false
// "" => false
// "ashish" => true

let someNumber = 10;
let stringNumber = String(someNumber);
console.log(stringNumber); // 10
console.log(typeof stringNumber); // string