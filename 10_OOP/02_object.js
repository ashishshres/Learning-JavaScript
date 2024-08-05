/*
Everything is Object in JavaScript
    Array -> Object -> null
    String -> Object -> null
    Function -> Object -> null
*/

function multipleBy5(num) {
    return num * 5;
}

// console.log(multipleBy5(5)); // 25

multipleBy5.power = 2;
// console.log(multipleBy5.power); // 2

// console.log(multipleBy5.prototype); // {}

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
};

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
};

// const userOne = createUser("bishal", 38); // Cannot read properties of undefined (reading 'printMe')
const userOne = new createUser("bishal", 38);
const userTwo = new createUser("diwakar", 35);

userOne.printMe();
