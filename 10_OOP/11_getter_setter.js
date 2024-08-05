// using class
// class User {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password;
//     }

//     get email() {
//         return this._email.toUpperCase();
//     }

//     set email(value) {
//         this._email = value;
//     }

//     get password() {
//         return this._password.toUpperCase();
//     }

//     set password(value) {
//         this._password = value;
//     }
// }

// const userOne = new User("user@one.com", "abc");
// console.log(userOne.email);
// console.log(userOne.password);

// using function
// function User(email, password) {
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this, "email", {
//         get: function () {
//             return this._email.toUpperCase();
//         },
//         set: function (value) {
//             this._email = value;
//         },
//     });
//     Object.defineProperty(this, "password", {
//         get: function () {
//             return this._password.toUpperCase();
//         },
//         set: function (value) {
//             this._password = value;
//         },
//     });
// }

// const userOne = new User("user@one.com", "abc");
// console.log(userOne.email);
// console.log(userOne.password);

// using object
const User = {
    _email: "a@as.com",
    _password: "abc",

    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    },
    get password() {
        return this._password.toUpperCase();
    },
    set password(value) {
        this._password = value;
    },
};

const tea = Object.create(User);
console.log(tea.email);
console.log(tea._email);
