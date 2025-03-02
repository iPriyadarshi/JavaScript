const accountId = 144553
let accountEmail = "john.doe@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;   //undefined

// accountId = 2 // not allowed
accountEmail = "john.diggle@google.com"
accountPassword = "212121"
accountCity = "Kolkata"

console.log(accountId);

/*
Prefer not to use "var" because of issue in block space and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])