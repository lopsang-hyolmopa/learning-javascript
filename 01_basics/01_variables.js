const accountId = 14305
let accountEmail = "lopsang@gmail.com"
var accountPassword = "109432"
accountCity = "Bhaktapur"
let accountState

// accountId = 2

accountEmail = "lop@goggle.com"
accountPassword = "20253984"
accountCity = "Kathmandu"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])