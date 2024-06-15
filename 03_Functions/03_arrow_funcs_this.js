const user = {
  username: "ashish",
  price: 999,
  //   welcomeMessage: function () {
  //     console.log(`${username}, welcome to website`);
  //   },

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

/*
    this -> empty object in node environment
    this -> window object in browser environment
*/

function one() {
  let username = "ashish";
  //   console.log(this);
  //   console.log(this.username); // undefined
}

// one();

const newFunc = function () {
  let username = "ashish";
  console.log(this);
  console.log(this.username); // undefined
};

// newFunc();

const arrFunc = () => {
  let username = "ashish";
  console.log(this);
  console.log(this.username);
};

// arrFunc();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => (num1 + num2);

// console.log(addTwo(3, 4));

const addTwo = () => ({
  username: "ashish",
});

// console.log(addTwo());
