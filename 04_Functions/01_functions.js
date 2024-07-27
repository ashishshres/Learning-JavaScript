// console.log("A");
// console.log("S");
// console.log("H");
// console.log("I");
// console.log("S");
// console.log("H");

function sayMyName() {
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
}

// sayMyName // reference
// sayMyName(); // function call

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(10, 20); // 30
// addTwoNumbers(); // NaN
// addTwoNumbers(10, null); // 10
// addTwoNumbers("10", 20); // 1020

// function function_name(parameters) {
//      do some task;
// };
// function_name(arguments);

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(10, 20);
// console.log("Result: ", result); // undefined

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
    console.log("Ashish"); // not printed
}

const result = addTwoNumbers(10, 20);
// console.log("Result: ", result); // 30

function loginUserMessage(username) {
    // if(username === undefined) {
    //     console.log("Please enter a username");
    //     return;
    // }
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("user321"));
// console.log(loginUserMessage());

function greetings(username = "Sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `Good Morning, ${username}!`;
}

// console.log(greetings());
// console.log(greetings("Ashish"));

// function calculateCartPrice(price) {
//     return price;
// }

// console.log(calculateCartPrice(100)); // 100

// rest operator
// function calculateCartPrice(...price) {
//     return price;
// }

// console.log(calculateCartPrice(100, 200, 300)); // [ 100, 200, 300 ]

// function calculateCartPrice(price1, price2, ...price) {
//     return price;
// }

// console.log(calculateCartPrice(100, 200, 300, 400, 500)); // [ 300, 400, 500 ]

const course = {
    coursename: "JavaScript",
    price: 199,
};

function handleObject(anyObject) {
    console.log(
        `Course name is ${anyObject.coursename} and price is ${anyObject.price}`
    );
}

// handleObject(course); // Course name is JavaScript and price is 199
// handleObject({
//     coursename: "JavaScript",
//     price: 199,
// });

const myArray = [100, 200, 300, 400];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myArray)); // 200
