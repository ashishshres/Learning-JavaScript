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

// sayMyName;
// sayMyName();

//num1 and num2 are parameters

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// values passed are arguments

// addTwoNumbers(); // NaN
// addTwoNumbers(3, 4); // 7
// addTwoNumbers(3, "4"); // 34
// addTwoNumbers(3, "a"); //3a
// addTwoNumbers(3, null); // 3

// const result = addTwoNumbers(2, 1);
// console.log("Result:", result); // undefined

// function addTwoNumbers(num1, num2) {
//   let result = num1 + num2;
//   return result;
//   console.log("Ashish"); // unreachable
// }

// const result = addTwoNumbers(2, 1);
// console.log("Result:", result);

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }

// const result = addTwoNumbers(2, 1);
// console.log("Result:", result);

function loginUserMessage(username) {
  //   if (username === undefined) {
  //     console.log("Please enter a username");
  //     return;
  //   }
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in!`;
}

// loginUserMessage("ashish");
// console.log(loginUserMessage("Ashish"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage()); // undefined

function loginUserMessage(username = "ashish") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in!`;
}

// console.log(loginUserMessage());

// function calculateCartPrice(price1) {
//   return price1;
// }

// console.log(calculateCartPrice(200));
// console.log(calculateCartPrice(200, 300));

// rest operator
// function calculateCartPrice(...prices) {
//   return prices;
// }

// console.log(calculateCartPrice(200, 300, 400));

// function calculateCartPrice(price1, price2, ...prices) {
//   return price1;
// }

// console.log(calculateCartPrice(200, 300, 400));

const user = {
  username: "ashish",
  price: 299,
};

function handleObj(anyObj) {
  console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObj(user);
// handleObj({
//   username: "ashre",
//   price: 199,
// });

const myArray = [100, 200, 300, 400];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myArray));
console.log([100, 200, 300, 400]);
