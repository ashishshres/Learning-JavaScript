// if
// const isUserLoggedIn = true;

// if (isUserLoggedIn) {
//   console.log("user logged in!");
// }

// < > <= >= == != [value]
// === !== [value and type]

// if (2 == "2") {
//   console.log("executed");
// }

if (2 === "2") {
  console.log("executed");
}

// if (2 != 3) {
//   console.log("executed");
// }

// const temperature = 42;
// if (temperature < 40) {
//   console.log("temperature is less than 40");
// } else {
//   console.log("temperature is greater than 40");
// }

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

// const balance = 1000;

// implicit scope
// if (balance > 500) console.log("test");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 2000");
// }

const isUserLoggedIn = true;
const card = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// if (isUserLoggedIn && card && 2 == 3) {
//   console.log("allow to buy courses");
// }

if (loggedInFromGoogle || loggedInFromEmail || false) {
  console.log("user logged in");
}
