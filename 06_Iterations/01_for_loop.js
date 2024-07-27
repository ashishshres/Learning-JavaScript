// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
    }
}

// multiplication table of 1 to 10
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

let mates = ["Bishal", "Aryan", "Shikshya"];
for (let i = 0; i < mates.length; i++) {
    console.log(mates[i]);
}
