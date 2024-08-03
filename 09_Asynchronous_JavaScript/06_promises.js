// const promise = new Promise(function (resolve, reject) {
// Do an async task
// Database calls, cryptography
// Network calls
// });

// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task is completed");
//         resolve();
//     }, 1000);
// });

// promiseOne.then(function () {
//     console.log("Promise consumed");
// });

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task 2 is completed");
//         resolve();
//     }, 1000);
// }).then(function () {
//     console.log("Async 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username: "Ashish", email: "ashish@example.com" });
//     }, 1000);
// });

// promiseThree.then(function (user) {
//     console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         // let error = false;
//         if (!error) {
//             resolve({ username: "Ashish", password: "123" });
//         } else {
//             reject("ERROR: Something went wrong");
//         }
//     }, 1000);
// });

// promiseFour
//     .then((user) => {
//         console.log(user);
//         return user.username;
//     })
//     .then((username) => {
//         console.log(username);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("The promise is either resolved or rejected");
//     });

// error
// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// });

// console.log(username);
