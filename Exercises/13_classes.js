// Task 1: Define a class `Person` with properties name and age , and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Welcome, ${this.name}`;
    }

    updateAge(age) {
        this.age = age;
    }

    static genericGreeting() {
        return "Hello! This is a generic greeting message.";
    }
}

const personOne = new Person("Shikshya", "20");
console.log(personOne.greet());

// Task 2: Add a method to the `Person` class that updates the age property and logs the updated age.
personOne.updateAge(21);
console.log(personOne.age);

// Task 3: Define a class `Student` that extends the `Person` class. Add a property studentld and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
    }

    displayId() {
        return `Your student id is ${this.studentId}`;
    }

    // Override the greet method to include the student ID
    greet() {
        return `Welcome, ${this.name}. Your student ID is ${this.studentId}`;
    }
}

// const studentOne = new Student("123");
// console.log(studentOne.displayId());

// Task 4: Override the greeting method in the `Student` class to include the student ID in the message. Log the overridden greeting message.
// const studentTwo = new Student("ashish", 21, "123");
// console.log(studentTwo.greet());

// Task 5: Add a static method to the `Person` class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
console.log(Person.genericGreeting()); // Hello! This is a generic greeting message.

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
const student1 = new Student("Alice", 20, "S123");
const student2 = new Student("Bob", 22, "S456");

// Log the total number of students
console.log(`Total number of students: ${Student.studentCount}`); // Total number of students: 2

// Task 7: Add a getter method to the Person class to return the full name (assume a FirstName and lastName property). Create an instance and log the full name using the getter.
class newPerson {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
}

const personNew = new newPerson("ashish", "shrestha");
console.log(personNew.fullName); // Hello, ashish shrestha

// Task 8: Add a setter method to the Person class to update the name properties ( FirstName and last-Name). Update the name using the setter and log the updated full name.
class PersonSecond {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter method to update the name properties
    set fullName(name) {
        const [firstName, lastName] = name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        return `Welcome, ${this.firstName}`;
    }

    updateAge(age) {
        this.age = age;
    }
}

const personSecond = new PersonSecond("John", "Doe", 30);

console.log(personSecond.fullName); // John Doe

personSecond.fullName = "Jane Smith";

console.log(personSecond.fullName); // Jane Smith

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    // Private field for balance
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.#balance) {
                this.#balance -= amount;
                console.log(`Withdraw: $${amount}`);
            } else {
                console.log("Insufficient funds.");
            }
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    // Method to check balance
    getBalance() {
        return this.#balance;
    }
}

// Create an instance of Account
const myAccount = new Account(100);

// Deposit money
myAccount.deposit(50); // Deposited: $50

// Withdraw money
myAccount.withdraw(30); // Withdraw: $30

// Check balance
console.log(`Current balance: $${myAccount.getBalance()}`); // Current balance: $120

// console.log(myAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
class NewAccount {
    // Private field for balance
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
        this.logBalance(); // Log balance after deposit
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.#balance) {
                this.#balance -= amount;
                console.log(`Withdrew: $${amount}`);
            } else {
                console.log("Insufficient funds.");
            }
        } else {
            console.log("Withdrawal amount must be positive.");
        }
        this.logBalance(); // Log balance after withdrawal
    }

    // Method to check balance
    getBalance() {
        return this.#balance;
    }

    // Method to log balance
    logBalance() {
        console.log(`Current balance: $${this.getBalance()}`);
    }
}

// Create an instance of Account with an initial balance of $100
const newAccount = new NewAccount(100);

// Test deposit and withdraw methods
newAccount.deposit(50); // Logs: Deposited: $50
// Logs: Current balance: $150

newAccount.withdraw(30); // Logs: Withdrew: $30
// Logs: Current balance: $120

newAccount.deposit(-20); // Logs: Deposit amount must be positive.
// Logs: Current balance: $120

newAccount.withdraw(200); // Logs: Insufficient funds.
// Logs: Current balance: $120

newAccount.withdraw(20); // Logs: Withdrew: $20
// Logs: Current balance: $100
