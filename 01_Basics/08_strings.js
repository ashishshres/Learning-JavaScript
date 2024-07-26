// console.log("hello" + "world");

const name = "ashish";
const repoCount = 20;

// console.log(name + repoCount + "Value"); // not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // readable

const profileName = new String("ashishshr");
console.log(typeof profileName); // object

console.log(profileName[0]); // a
console.log(profileName[1]); // s
console.log(profileName[2]); // h

console.log(profileName.__proto__); // empty object in node

console.log(profileName.__proto__.length); // 0 in node but 9 in browser
console.log(profileName.length); // 9
console.log(profileName.toUpperCase()); // original value is not changed because of primitive type
console.log(profileName.charAt(3)); // i
console.log(profileName.indexOf("s")); // 1

const fruit = "pine-apple";
const newFruit = fruit.substring(0, 4); // pine
console.log(newFruit); 

const secondFruit = fruit.substring(-10, 4); // pine (treat negative index as 0)
console.log(secondFruit);

const anotherFruit = fruit.slice(0, 4); // pine
console.log(anotherFruit);

const nextFruit = fruit.slice(-5, 10); // apple
console.log(nextFruit);

/*
slice in negative
slice(negative start, end)

- if the start index is negative, it is treated as `string.length + start index`
- slice(-5, 10) => slice(10 + (-5), 10) => slice(5, 10) => apple

*/

const newFruitOne = "   banana     ";
console.log(newFruitOne); //    banana     
console.log(newFruitOne.trim()); // banana

const url = "https://example.com/example%20one";
console.log(url.replace("%20", "-")); // https://example.com/example-one
console.log(url.includes("example")); // true
console.log(url.includes("two")); // false

const newFruitTwo = "pine-apple";
console.log(newFruitTwo.split("-")); // splits and return a array based on "-"