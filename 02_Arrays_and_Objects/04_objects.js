// singleton
// const user = new Object();

const user = {};

user.id = "321abc";
user.name = "Sam";
user.isLoggedIn = false;

// console.log(user);

const user2 = {
  email: "some@example.com",
  fullname: {
    userfullname: {
      firstname: "Ashish",
      lastname: "Shrestha",
    },
  },
};

// console.log(user2.fullname);
// console.log(user2.fullname.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

// Merge objects
// const obj3 = { obj1, obj2 };
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "user1@example.com",
  },
  {
    id: 2,
    email: "user2@example.com",
  },
];

console.log(users[1].email);

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
// console.log(user.hasOwnProperty("isLoggedIn"));
// console.log(user.hasOwnProperty("isLoggedOut"));
