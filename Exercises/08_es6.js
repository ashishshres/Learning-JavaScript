// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let personName = "Diwakar";
let personAge = "20";
console.log(`Person is ${personName} and age is ${personAge}`);

// Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`
    I want you forever you and me everyday,
    Will you do something for me please,
    You just picture your life for me,
    30 years from now, 40 years from now.
    `);

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const arr = [10, 20, 30, 40, 50];
const [first, second] = arr;
console.log(first, second); // 10 20

// Task 4: Use object destructuring to extract the title and author from a book object andlog them to the console.
const book = {
    title: "The Rudest Book Ever",
    author: "Shwetabh Gangwar",
    year: 2022,
};
const { title, author } = book;
console.log(title, author); // The Rudest Book Ever Shwetabh Gangwar

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const myArr = [10, 20, 30, 40, 50];
const newArr = [...myArr, 3, 21];
console.log(newArr); // [ 10, 20, 30, 40, 50, 3, 21 ]

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function calculateCart(...prices) {
    let totalPrice = prices.reduce((acc, price) => acc + price, 0);
    return totalPrice;
}
console.log(calculateCart(100, 200, 300)); // 600s

// Task 7: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const bookTitle = "The Rudest Book Ever";
const bookAuthor = "Shwetabh Gangwar";

const book1 = {
    title: bookTitle,
    author: bookAuthor,
    year: 2022,

    // Enhanced object literal method
    getBookInfo() {
        return `${this.title} by ${this.author}`;
    },

    getBookSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    },
};

console.log(book1);
console.log(book1.getBookInfo()); // Output: "The Rudest Book Ever by Shwetabh Gangwar"
console.log(book1.getBookSummary()); // Output: "The Rudest Book Ever was written by Shwetabh Gangwar in 2022."

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const key1 = "title";
const key2 = "author";

const book2 = {
    [key1]: "The Rudest Book Ever",
    [key2]: "Shwetabh Gangwar",
    year: 2022,

    // Method with computed property names
    getBookInfo() {
        // console.log(typeof this[key1]);
        return `${this[key1]} by ${this[key2]}`;
    },
};

// Log the object to the console
console.log(book2);
console.log(book2.getBookInfo()); // Output: "The Rudest Book Ever by Shwetabh Gangwar"
