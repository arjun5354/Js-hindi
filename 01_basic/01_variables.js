const accountId=144553
let accountEmail="arjun@google.com"
var accountPassward="12345"
accountCity="Kolkata"
let accountState;
// accountId=2 // Not allowed

accountEmail="ar@qw.email"
accountPassward="543"
accountCity="Hydrabad"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassward);
console.log(accountCity);

/* Prefer not to use var
because of issue in block scope and functional scope..
*/
console.log();

console.table([accountId,accountEmail,accountPassward,accountCity,accountState])