const accountId = 32186;
let accountEmail = "ashish@example.com";
var accountPassword = "example123";
accountCity = "Hetauda"; // not prefered way to declare variable
let accountState;

// accountId = 4; // not allowed

accountEmail = "ashshr@example.com";
accountPassword = "example321";
accountCity = "Dhading";

console.log(accountId); // undefined value

/*
    prefer not to use var 
    because of the issue in 
    block and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
