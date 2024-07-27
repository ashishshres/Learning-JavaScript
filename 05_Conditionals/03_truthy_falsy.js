// const userEmail = "a@ashish.com";
const userEmail = [];

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

/* 
# falsy values
- false, 0, -0, BigInt 0n, "", null, undefined, NaN

# truthy values
- "0", "false", " ", [], {}, function(){}
*/

const emptyArray = [];
if (emptyArray.length === 0) {
    console.log("Array is empty");
}

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

console.log(false == 0); // true
console.log(false == ""); // true
console.log(0 == ""); // true
