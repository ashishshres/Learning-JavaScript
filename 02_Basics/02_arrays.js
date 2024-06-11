const marvelHeros = ["ironman", "spiderman", "thor"];
const dcHeros = ["superman", "batman", "wonderwomen"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3]);
// console.log(marvelHeros[3][1]);

// const superheros = marvelHeros.concat(dcHeros);
// console.log(marvelHeros);
// console.log(superheros);

const newHeros = [...marvelHeros, ...dcHeros];
// console.log(newHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const realAnotherArr = anotherArr.flat(Infinity);

// console.log(realAnotherArr);

// console.log(Array.isArray("Ashish"));
// console.log(Array.from({ name: "Ashish" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
