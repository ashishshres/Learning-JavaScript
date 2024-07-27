const chai = () => {
    let username = "ashish";
    console.log(this); // {} empty object
};

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };

// console.log(addTwo(10, 20)); // 30

// implicit return
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(10, 20)); // 30

// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(10, 20)); // 30

// const addTwo = (num1, num2) => ({ username: "ashish" });
// console.log(addTwo(3, 4));
