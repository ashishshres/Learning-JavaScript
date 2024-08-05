class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username is ${this.username}`);
    }

    // createId() {
    //     return `123`;
    // }

    // avoid access
    static createId() {
        return `123`;
    }
}

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const sameer = new User("sameer");
// console.log(sameer.createId()); // 123
// console.log(sameer.createId()); // sameer.createId is not a function

const teacherOne = new Teacher("teacherone", "teacher@one.com");
teacherOne.logMe();
console.log(teacherOne.createId()); // teacherOne.createId is not a function
