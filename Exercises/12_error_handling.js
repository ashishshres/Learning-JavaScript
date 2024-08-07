// Task 1: Write a function that intentionally throws an error and use a `try-catch` block to handle the error and log an appropriate message to the console.
function throwError() {
    throw new Error("Something went wrong!");
}

try {
    throwError(); // Call the function that throws an error
} catch (error) {
    console.error("Caught an error:", error.message); // Log the error message
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a `try-catch` block to handle this error.
function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero!");
    }
    return numerator / denominator;
}

try {
    const result = divideNumbers(10, 0); // This will throw an error
    console.log("Result:", result);
} catch (error) {
    console.error("Caught an error:", error.message); // Log the error message
}

// Task 3: Write a script that includes a `try-catch` block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function riskyOperation() {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
        throw new Error("Something went wrong!");
    }
    return "Operation succeeded";
}

try {
    console.log("Try block: Attempting risky operation...");
    const result = riskyOperation();
    console.log("Try block: Result:", result);
} catch (error) {
    console.log("Catch block: Caught an error:", error.message);
} finally {
    console.log("Finally block: This will always execute.");
}

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it usin a `try-catch` block.
class CustomError extends Error {
    constructor(message) {
        super(message); // Call the parent class constructor with the error message
        this.name = "CustomError"; // Set the name property to the custom error class name
    }
}

function riskyFunction() {
    throw new CustomError("This is a custom error!");
}

try {
    riskyFunction();
} catch (error) {
    if (error instanceof CustomError) {
        console.log("Caught a CustomError:", error.message);
    } else {
        console.log("Caught an unexpected error:", error.message);
    }
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a `try-catch` block.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if (input.trim() === "") {
        // Check if the input is empty or consists only of whitespace
        throw new ValidationError("Input cannot be empty or whitespace!");
    }
    return "Input is valid.";
}

function processInput(userInput) {
    try {
        const result = validateInput(userInput);
        console.log(result); // Log success message if input is valid
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error("Validation error:", error.message); // Handle custom validation error
        } else {
            console.error("An unexpected error occurred:", error.message); // Handle other types of errors
        }
    }
}

processInput(""); // This will trigger the custom ValidationError
processInput("Valid input"); // This will show a success message

// Task 6: Create a promise that randomly resolves or rejects. Use `.catch()` to handle the rejection and log an appropriate message to the console.
const randomPromise = new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;

    setTimeout(() => {
        if (isSuccess) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }, 1000);
});

randomPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function handleRandom() {
    try {
        const response = await randomPromise;
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
handleRandom();

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using `.catch()`. Log an appropriate error message to the console.
// Make a fetch request to an invalid URL
fetch(`https://a.github.com/user/someaccount`)
    .then((res) => {
        // Check if the response is not okay (status code is not in the range 200-299)
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error("Fetch error:", err.message);
    });

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using `try-catch`. Log an appropriate error message.
async function handleError() {
    try {
        const response = await fetch(`https://a.github.com/user/someaccount`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
    } catch (error) {
        console.error(error.message);
    }
}

handleError();
