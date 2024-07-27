// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// {} // scope

// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(a); // not defined
// console.log(b); // not defined
// console.log(c); // 30

// var c = 100;

// if (true) {
//     let a = 10;
//     const b = 20;
//     // var c = 30;
//     c = 30;
// }

// console.log(c); // 30

let c = 100;

if (true) {
    let a = 10;
    const b = 20;
    let c = 30;
    console.log("INNER: ", c); // 30
}

console.log("OUTER:", c); // 100
