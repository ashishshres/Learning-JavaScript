// for in loop

// for (const key in object) {
//
// }

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple",
};

for (const key in myObject) {
    // console.log(key); // js cpp rb swift
    console.log(myObject[key]);
}

const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
    // console.log(key); // 0 1 2 3 4
    console.log(programming[key]); // js rb py java cpp
}

// const map = new Map();
// map.set("NP", "Nepal");
// map.set("USA", "United States of America");
// map.set("FR", "France");

// not iterable
// for (const key in map) {
//     console.log(key);
// }
