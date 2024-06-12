// singleton [using constructor]
// Object.create

// object literals
// const user1 = {
//   name: "Ashish",
//   "full name": "Ashish Shrestha",
//   age: 20,
//   isLoggedIn: false,
//   email: "example@example.com",
//   lastLoginDays: ["Monday", "Friday"],
// };

// console.log(user.email);
// console.log(user["email"]);
// console.log(user.full name); // not allowed
// console.log(user["full name"]);

const mySym = Symbol("key1");

const user2 = {
  name: "Bihan",
  "full name": "Bihan Shrestha",
  //   mySym: "mykey1",
  [mySym]: "mykey1",
  age: 20,
  isLoggedIn: false,
  email: "example@example.com",
  lastLoginDays: ["Monday", "Friday"],
};

console.log(user2.mySym);
// console.log(typeof user2.mySym);
console.log(user2);
console.log(user2[mySym]);
// console.log(user2.mySym);

user2.email = "bihan@example.com";
console.log(user2);
// Object.freeze(user2);
// user2.email = "bihan1@example.com";
// console.log(user2);

user2.greeting = function () {
  console.log("Hello user2");
};

user2.greetingTwo = function () {
  console.log(`Hello user2, ${this.name}`);
};

console.log(user2);
// console.log(user2.greeting);
console.log(user2.greeting());
console.log(user2.greetingTwo());
