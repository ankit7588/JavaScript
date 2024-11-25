const accountId = 123456
let accountEmail = "ankit@gmail.com"
var accountPassword = "12345"
accountCity = "Surat"
let accountState;

//accountId = 1234
accountEmail = "ankit.de@googlemail.com"
accountPassword = "abc@123"
accountCity = "Botad"

console.log(accountId);

/*
Prefre not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);

 