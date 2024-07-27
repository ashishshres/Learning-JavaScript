// if
// if (condition) {

// }

// if (true) {

// }

// if (false) {

// }

// const isUserLoggedIn = true;
// if(isUserLoggedIn) {
//     console.log("user logged in");
// }

// <, >, <=, >=, ==, !=, ===, !==

// true
if (2 == "2") {
    console.log("true");
}

// not true
if (2 === "2") {
    console.log("true");
}

// true
if (2 != 3) {
    console.log("true");
}

// const temperature = 38;
const temperature = 30;

// true for temperature = 38
// false for temperature = 30
// if (temperature > 30) {
//     console.log("temperature is greater than 30");
// } else {
//     console.log("temperature is less than 30");
// }

// true
if (temperature === 30) {
    console.log("temperature is greater than 30");
} else {
    console.log("temperature is less than 30");
}

const score = 200;

if (score > 100) {
    // const power = "fly";
    var power = "fly";
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); // power is not defined
console.log(`User power: ${power}`); // var used
