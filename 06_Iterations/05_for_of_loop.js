// for of loop
// used for arrays [{}, {}, {}]

// for (const iterator of object) {

// }

// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "hey there!";
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Maps [Object holds key-value pairs that are unique]
const map = new Map();
map.set("NP", "Nepal");
map.set("USA", "United States of America");
map.set("FR", "France");

console.log(map);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

const myObject = {
    game1: "NFS",
    game2: "Spiderman",
};

// myObject is not iterable
// for (const [key, value] of myObject) {
//     console.log(`${key}: ${value}`);
// }
