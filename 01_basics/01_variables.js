// how to declare constant in variable

const accountId = 144553     // its never change 
let accountEmail = "dhananjay@gamil.com"
var accountPassword = "12332"
accountCity = "Dhanbad"
let accountState;

// accountId = 2 //not allowed

accountEmail = "hc@fh.com"
accountPassword = "3245156"
accountCity = "hazaribagh"

console.log(accountId);

/*
Prefer not to use var 
Because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
