/* 
# Creating a object in JavaScript
- singleton (using a constructor)
- object literals
*/

// singleton
// Object.create

// object literals
const mySym = Symbol("key1");

const user = {
    name: "Ashish", // "name": "Ashish"
    "full name": "Ashish Shrestha",
    // mySym: "mykey1",
    [mySym]: "mykey1",
    age: 20,
    location: "Nepal",
    email: "ashish@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(user.email); // ashish@example.com
// console.log(user.[email]); // error
console.log(user["email"]); // ashish@example.com
// console.log(user.full name); // error
console.log(user["full name"]); // Ashish Shrestha

console.log(user[mySym]); // access symbol

console.log(user.email); // ashish@example.com
user.email = "ashish@exampleone.com";
console.log(user.email); // ashish@exampleone.com

// Object.freeze(user);
console.log(user);

user.email = "ashish@exampletwo.com";
console.log(user.email); // ashish@exampleone.com

user.greeting = function(){
    console.log("Hello user");
};

console.log(user.greeting); // Function
console.log(user.greeting()); // Hello user

user.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`);
};

console.log(user.greetingTwo()); // Hello user, Ashish