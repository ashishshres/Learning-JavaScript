const accountId = 54321;
let accountEmail = "ashish@example.com";
var accountPassword = "12345";
accountCity = "Hetauda"; // not good practice
let accountState; // undefined by default if declared only

// accountId = 12345 // not allowed because of constant type

accountEmail = "as@shr.com";
accountPassword = "123456789";
accountCity = "Chitwan";

/*
Prefer not to use var, 
because of the issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);
