const score = 400;
console.log(score); // 400

const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); // 124

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);