// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promiseOne resolved");
//     }, 2000);
// });

// promiseOne.then((res) => {
//     console.log(res); // promise resolved
// });

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using `.catch()`.
// const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("promiseTwo rejected");
//     }, 2000);
// });

// promiseTwo
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error); // promise rejected
//     });

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
// const fetchData = (message, delay) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(message);
//         }, delay);
//     });
// };

// Chain the promises
// fetchData("Fetching data...", 1000)
//     .then((message) => {
//         console.log(message); // Logs: Fetching data...
//         return fetchData("Data fetched successfully!", 1000);
//     })
//     .then((message) => {
//         console.log(message); // Logs: Data fetched successfully!
//         return fetchData("Processing data...", 1000);
//     })
//     .then((message) => {
//         console.log(message); // Logs: Processing data...
//         return fetchData("Data processed and ready to use!", 1000);
//     })
//     .then((message) => {
//         console.log(message); // Logs: Data processed and ready to use!
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });

// Task 4: Write an `async` function that waits for a promise to resolve and then logs the resolved value.
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promiseThree resolved");
    }, 2000);
});

async function waitPromise() {
    const promise = await promiseThree;
    console.log(promise);
}

// waitPromise();

// Task 5: Write an `async` function that handles a rejected promise using try-catch and logs the error message.
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promiseFour rejected");
    }, 2000);
});

async function handleRejection() {
    try {
        const promise = await promiseFour;
        console.log(promise);
    } catch (error) {
        console.log(error);
    }
}

handleRejection();

// Task 6: Use the `fetch` API to get data from a public API and log the response data to the console using promises.
// fetch(`https://api.github.com/users/ashishshres`)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Task 7: Use the `fetch` API to get data from a public API and log the response data to the console using async/await.
async function getData() {
    const response = await fetch(`https://api.github.com/users/ashishshres`);
    const data = await response.json();
    console.log(data);
}
getData();

// Task 8: Use `Promise.all` to wait for multiple promises to resolve and then log all their values.
// Create multiple promises
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Result from promise1");
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Result from promise2");
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Result from promise3");
    }, 1500);
});

// Use Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        // Log all resolved values
        console.log(results);
    })
    .catch((error) => {
        // Handle any errors if one of the promises is rejected
        console.error("An error occurred:", error);
    });

// Task 9: Use `Promise.race` to log the value of the first promise that resolves among multiple promises.
// Create multiple promises with different resolution times
const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Result from promiseA");
    }, 2000); // Resolves after 2 seconds
});

const promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Result from promiseB");
    }, 1000); // Resolves after 1 second
});

const promiseC = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Result from promiseC");
    }, 1500); // Resolves after 1.5 seconds
});

// Use Promise.race to get the first promise that resolves
Promise.race([promiseA, promiseB, promise3])
    .then((result) => {
        // Log the result of the first resolved promise
        console.log(result);
    })
    .catch((error) => {
        // Handle any errors if a promise is rejected
        console.error("An error occurred:", error);
    });
