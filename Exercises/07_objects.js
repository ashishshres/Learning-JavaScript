// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
    title: "The Rudest Book Ever",
    author: "Shwetabh Gangwar",
    year: 2022,
};
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log(book.title); // The Rudest Book Ever
console.log(book.author); // Shwetabh Gangwar

// Task 3: Add a method to the book Object that returns a string with the book's title and author.
book.details = function () {
    return `title: ${this.title}, author: ${this.author}`;
};
// console.log(book);
console.log(book.details());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, the log the updated object
book.update = function (year) {
    this.year = year;
};

console.log(book.update(2024));
console.log(book);

// Task 5: Create a nested object representing a library with properties like name and books (an array of book Objects , and log the library object to the console.
const library = {
    name: "Central City Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
        },
        {
            title: "Moby Dick",
            author: "Herman Melville",
            year: 1851,
        },
    ],
};

console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);
library.books.forEach((book) => {
    console.log(book.title);
});

// Task 7: Use a `for...in` loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}

// Task 8: Use `Object.keys` and `Object.values` methods to log all the keys and values of the book object
console.log(Object.keys(book));
console.log(Object.values(book));
