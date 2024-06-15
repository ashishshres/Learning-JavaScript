// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// {} // scope

// var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  // var c = 30;
  // console.log("inner a:", a);
}

// console.log("outer a:", a);
// console.log(b);
// console.log(c);

function one() {
  const username = "ashish";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  console.log(website);

  // two();
}

// one();

if (true) {
  const username = "ashish";
  if (username === "ashish") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

// +++++ interesting +++++

// addOne(5);

function addOne(val) {
  return val + 1;
}

addOne(5);

//function expressions

// addTwo(5);

const addTwo = function (val) {
  return val + 2;
};

// addTwo(5);
