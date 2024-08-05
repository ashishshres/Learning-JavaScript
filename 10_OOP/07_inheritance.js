class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username); // pass this implicitly to User
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacherOne = new Teacher("teacherone", "teacher@one.com", "123");
teacherOne.logMe();
teacherOne.addCourse();

const userOne = new User("userone");
userOne.logMe();
// userOne.addCourse(); // cannot access

console.log(teacherOne === userOne); // false
console.log(teacherOne === Teacher); // false

console.log(teacherOne instanceof Teacher); // true
console.log(teacherOne instanceof User); // true
