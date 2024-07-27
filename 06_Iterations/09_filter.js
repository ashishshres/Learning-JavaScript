// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

// const newNums = myNums.filter((num) => {
//     num > 4;
// });

// console.log(newNums); // []

// const newNums = myNums.filter((num) => {
//     return num > 4;
// });

// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

// using forEach
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = [];

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// });

// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

const books = [
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        publishYear: 1960,
        edition: "1st",
        readersCount: 25000,
    },
    {
        title: "1984",
        genre: "Dystopian",
        publishYear: 1949,
        edition: "1st",
        readersCount: 18000,
    },
    {
        title: "Moby Dick",
        genre: "Adventure",
        publishYear: 1851,
        edition: "2nd",
        readersCount: 12000,
    },
    {
        title: "Pride and Prejudice",
        genre: "Romance",
        publishYear: 1813,
        edition: "3rd",
        readersCount: 10000,
    },
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        publishYear: 1925,
        edition: "2nd",
        readersCount: 15000,
    },
    {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        publishYear: 1951,
        edition: "4th",
        readersCount: 16000,
    },
    {
        title: "Brave New World",
        genre: "Science Fiction",
        publishYear: 1932,
        edition: "5th",
        readersCount: 14000,
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publishYear: 1937,
        edition: "6th",
        readersCount: 20000,
    },
    {
        title: "The Lord of the Rings",
        genre: "Fantasy",
        publishYear: 1954,
        edition: "6th",
        readersCount: 30000,
    },
    {
        title: "The Road",
        genre: "Dystopian",
        publishYear: 2006,
        edition: "1st",
        readersCount: 22000,
    },
    {
        title: "The Kite Runner",
        genre: "Drama",
        publishYear: 2003,
        edition: "2nd",
        readersCount: 19000,
    },
    {
        title: "The Hunger Games",
        genre: "Science Fiction",
        publishYear: 2008,
        edition: "3rd",
        readersCount: 24000,
    },
];

// filter books having genre "Fiction"
// let userBooks = books.filter((book) => book.genre === "Fiction");
// console.log(userBooks);

// filter books having publish date after 2000
// userBooks = books.filter((book) => {
//     return book.publishYear >= 2000;
// });
// console.log(userBooks);

// filter books having publish date after 1900 and genre "Fantasy"
userBooks = books.filter((book) => {
    return book.publishYear >= 1900 && book.genre === "Fantasy";
});
console.log(userBooks);
