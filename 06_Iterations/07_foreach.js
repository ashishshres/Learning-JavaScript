// forEach

// array.forEach(element => {

// });

// const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item) {
//     console.log(item); // js ruby java python cpp
// });

// coding.forEach((item) => {
//     console.log(item);
// });

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

const myCoding = [
    {
        languageName: "javascript",
        languageExtension: "js",
    },
    {
        languageName: "java",
        languageExtension: "java",
    },
    {
        languageName: "python",
        languageExtension: "py",
    },
];

myCoding.forEach((item) => {
    console.log(item.languageName);
});

// forEach loop do not return anything
const coding = ["js", "ruby", "java", "python", "cpp"];
const values = coding.forEach((item) => {
    // console.log(item);
    // return item;
});

console.log(values); // undefined
