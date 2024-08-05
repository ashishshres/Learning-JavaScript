// object literal
const user = {
    username: "Ashish",
    loginCount: 4,
    signedIn: false,
    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this); // {} in node environment
// console.log(this); // window object in browser environment

// constructor function
// const promiseOne = new Promise();
// const data = new Date();

function User(username, loginCount, isloggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;
    // this.greeting = function () {
    //     console.log(`Welcome ${this.username}`);
    // };
    return this; // optional because implicitly defined
}

// userTwo will overwrite the values of userOne
// const userOne = User("Ashish", 12, true);
// const userTwo = User("Shikshya", 14, false);
// console.log(userOne);

// new instance
const userOne = new User("Ashish", 12, true);
const userTwo = new User("Shikshya", 14, false);
console.log(userOne); // User { username: 'Ashish', loginCount: 12, isloggedIn: true }
console.log(userTwo); // User { username: 'Shikshya', loginCount: 14, isloggedIn: false }
console.log(userOne.constructor); // [Function: User]
