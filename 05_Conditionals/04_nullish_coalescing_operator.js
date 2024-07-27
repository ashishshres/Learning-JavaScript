// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 10 ?? 20;
console.log(val1); // 10

let val2;
val2 = null ?? 10;
console.log(val2); // 10

let val3;
val3 = undefined ?? 10;
console.log(val3); // 10

let val4;
val4 = undefined ?? 20 ?? 30;
console.log(val4); // 20
