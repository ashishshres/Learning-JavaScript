// Immediately Invoked Function Expressions (IIFE)
// To remove problem of global scope pollution caused by global declarations or variable, we use IIFE

// function chai() {
//     console.log("DB CONNECTED");
// }

// chai(); // DB CONNECTED

// named IIFE
// (function chai() {
//     console.log("DB CONNECTED");
// })(); // DB CONNECTED

// (definition)(execution_call)

// (() => {
//     console.log("DB CONNECTED TWO"); // DB CONNECTED TWO
// })();

// unnamed IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`); // DB CONNECTED TWO ashish
})("ashish");
