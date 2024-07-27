// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// {} // scope

// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(a); // not defined
// console.log(b); // not defined
// console.log(c); // 30

// var c = 100;

// if (true) {
//     let a = 10;
//     const b = 20;
//     // var c = 30;
//     c = 30;
// }

// console.log(c); // 30

// let c = 100;

// if (true) {
//     let a = 10;
//     const b = 20;
//     let c = 30;
//     console.log("INNER: ", c); // 30
// }

// console.log("OUTER:", c); // 100

function one() {
    const username = "Ashish";

    function two() {
        const website = "youtube";
        console.log(username); // Ashish
    }
    // console.log(website); // not defined

    two();
}

// one();

if (true) {
    const username = "Ashish";
    if (username === "Ashish") {
        const website = " youtube";
        // console.log(username + website); // Ashish youtube
    }
    // console.log(website); // not defined
}

// console.log(username); // not defined

// ++++++++++ interesting ++++++++++

// console.log(addone(5)); // 6

function addone(num) {
    return num + 1;
}

// console.log(addone(5)); // 6

// function expression

// console.log(addTwo(5)); // cannot access before initialization

const addTwo = function (num) {
    return num + 1;
};

console.log(addTwo(5)); // 6
