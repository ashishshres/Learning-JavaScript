console.log(Math); // Object 

// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.3)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)) // 4
// console.log(Math.sqrt(16)); // 4
// console.log(Math.pow(2,3)); // 8
// console.log(Math.max(4, 3, 6, 8)); // 8
// console.log(Math.min(4, 3, 6, 8)); // 3

console.log(Math.random()); // retuns a random value between 0 to 1

console.log(Math.floor(Math.random() * 10)); // 0 to 9
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 10

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min + 1)) + min))