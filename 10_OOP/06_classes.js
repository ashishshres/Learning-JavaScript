// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`;
//     }

//     changeUserName() {
//         return `${this.username.toUpperCase()}`;
//     }
// }

const userOne = new User("userone", "user@one.com", "123");
// console.log(userOne.encryptPassword());
// console.log(userOne.changeUserName());

// behind the scene
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};

User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}abc`;
};

const userTwo = new User("usertwo", "user@two.com", "123");
console.log(userTwo.encryptPassword());
console.log(userTwo.changeUserName());
