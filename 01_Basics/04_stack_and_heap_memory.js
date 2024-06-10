// Stack(Primitives) | Heap(Non-Primitives)

// let userOne = "userOne@example.com";

// let userTwo = userOne; // copies the value
// console.log(userTwo);
// console.log(userOne);

// userTwo = "userTwo@example.com";

// console.log(userTwo);
// console.log(userOne);

let userOne = {
  username: "user1",
  useremail: "user1@example.com",
};

let userTwo = userOne; // copies reference

console.log(userTwo);
console.log(userOne);

userTwo.username = "user2";
userTwo.useremail = "user2@example.com";

console.log(userTwo);
console.log(userOne);

let arr1 = [1, 2, 3];
let arr2 = arr1;

console.log(arr2);
console.log(arr1);

arr2[0] = 8;

console.log(arr2);
console.log(arr1);
