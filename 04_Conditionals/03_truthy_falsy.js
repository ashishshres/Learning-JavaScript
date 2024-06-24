// const userEmail = "example@example.com";
// const userEmail = "";

// if (userEmail) {
//   console.log("got useremail");
// } else {
//   console.log("don't have user email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

// const userEmail = [];

// if (userEmail.length === 0) {
//   console.log("array is empty");
// }

// const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//   console.log("object is empty");
// }

// true
// console.log(false == 0);
// console.log(false == "");
// console.log(0 == "");

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;

console.log(val1);

// Ternary operator

// condition ? true : false;

const teaPrice = 25;
teaPrice >= 20 ? console.log("greater than 20") : console.log("less than 20");
