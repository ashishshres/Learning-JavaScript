const user = {
    username: "ashish",
    price: 199,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    },
};

// user.welcomeMessage(); // ashish, welcome to website
// user.username = "sam";
// user.welcomeMessage(); // sam, welcome to website

// console.log(this); // {} empty object in node environment
// console.log(this); // window object in browser environment

function chai() {
    let username = "ashish";
    // console.log(this);
    // console.log(this.username); // undefined
}

// chai();
