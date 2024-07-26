let myDate = new Date();
console.log(myDate); // 2024-07-26T05:30:39.110Z
console.log(myDate.toString()); // Fri Jul 26 2024 11:15:39 GMT+0545 (Nepal Time)
console.log(myDate.toDateString()); // Fri Jul 26 2024
console.log(myDate.toLocaleString()); // 7/26/2024, 11:16:23 AM
console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 12); // year, month, day [month starts from 0, 1, 2 ..., 11]
// console.log(myCreatedDate.toDateString()); // Thu Jan 12 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2024-07-26");
// console.log(myCreatedDate.toLocaleString()); 

let myCreatedDate = new Date("01-14-2024");
// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now(); // returns milliseconds exact
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

console.log(newDate.toLocaleString("default", {
    weekday: "long",
}))