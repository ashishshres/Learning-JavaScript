const fruits = ["apple", "banana", "cherry"];
const veggies = ["tomato", "potato", "carrot"];

// fruits.push(veggies);

// console.log(fruits); // [ 'apple', 'banana', 'cherry', [ 'tomato', 'potato', 'carrot' ] ]
// console.log(fruits[3]); // [ 'tomato', 'potato', 'carrot' ]
// console.log(fruits[3][0]); // tomato

// let foods = fruits.concat(veggies);
// console.log(foods); // [ 'apple', 'banana', 'cherry', 'tomato', 'potato', 'carrot' ]

let allFoods = [...fruits, ...veggies]; // prefered
// console.log(allFoods); // [ 'apple', 'banana', 'cherry', 'tomato', 'potato', 'carrot' ]

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [1, 2]]];
const myAnotherArr = anotherArr.flat(Infinity);
// console.log(myAnotherArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2]

console.log(Array.isArray("Ashish")); // false
console.log(Array.from("Ashish")); // [ 'A', 's', 'h', 'i', 's', 'h' ]

console.log(Array.from({name: "ashish"})); // gives empty array (keys or values should be specified)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

