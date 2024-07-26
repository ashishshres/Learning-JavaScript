// const tinderUser = new Object(); // singleton
const tinderUser = {}; // object literals

// console.log(tinderUser); // {} empty object

tinderUser.id = "123";
tinderUser.name = "Bishal";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // { id: '123', name: 'Bishal', isLoggedIn: false }

const regularUser = {
    email: "some@example.com",
    fullname: {
        userFullName:{
            firstName: "Ashish",
            secondName: "Shrestha"
        }
    }
};

// console.log(regularUser.fullname); // { userFullName: { firstName: 'Ashish', secondName: 'Shrestha' } }
// console.log(regularUser.fullname.userFullName.firstName); // Ashish

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};
// const obj3 = {obj1, obj2};
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign(obj1, obj2); // Object.assign({}, obj1, obj2)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);

const obj3 = {...obj1, ...obj2};
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: 1,
        email: "user@one.com"
    },
    {
        id: 2,
        email: "user@two.com"
    },
];

console.log(users[1]); // { id: 2, email: 'user@two.com' }
console.log(users[1].email); // user@two.com

const newObj = {
    id: 1,
    email: "example@example.com"
};

console.log(Object.keys(newObj)); // [ 'id', 'email' ]
console.log(Object.values(newObj)); // [ 1, 'example@example.com' ]
console.log(Object.entries(newObj)); // [ [ 'id', 1 ], [ 'email', 'example@example.com' ] ]   

console.log(newObj.hasOwnProperty("email")); // true
console.log(newObj.hasOwnProperty("city")); // false

