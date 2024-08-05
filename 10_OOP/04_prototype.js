// let myName = "ashish";
// console.log(myName.length);
// console.log(myName.trim().length);

// let myName = "ashish     ";
// console.log(myName.trueLength);

let fruits = ["apple", "banana"];
let fruitColor = {
    apple: "red",
    banana: "yellow",
    getFruitColor: function () {
        console.log(`Apple color is ${this.apple}`);
    },
};

Object.prototype.ashish = function () {
    console.log("ashish is present in all objects");
};

// fruitColor.ashish();
// fruits.ashish();

Array.prototype.heyAshish = function () {
    console.log("Ashish says hello");
};

// fruits.heyAshish();
// fruitColor.heyAshish();

// inheritance
const User = {
    name: "ashish",
    email: "ashish@example.com",
};

const Teacher = {
    makeVideo: true,
};

const TeachingSupport = {
    isAvailable: false,
};

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport,
};

Teacher.__proto__ = User;
// console.log(TASupport.isAvailable); // false

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let myName = "ashish     ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
};

myName.trueLength();
"aaryaman".trueLength();
