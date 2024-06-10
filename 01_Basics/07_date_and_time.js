// Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myNewDate = new Date(2024, 2, 23); // year, month(0-11), date
// let myNewDate = new Date("2024-02-23"); // year, month(0-11), date
// let myNewDate = new Date("03-23-2024"); // year, month(0-11), date
// console.log(myNewDate.toDateString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
});
