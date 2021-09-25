// You have a variable called var num1 with the value as shown:
// var num1 = 300 - 123
// Take one user input and check that number is equal or not.
// If the new user input is equal to num1, console "Equal" else console "Not equal".
var num1=300-123;
var readlineSync = require("readline-sync");
var Number= readlineSync.questionInt("Enter the number: ");
if (num1==Number) {
    console.log("Equal");
}
else {
    console.log("Not Equal");
}
