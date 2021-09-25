// Take user input in a variable named varx.
// Check if this number is divisible by 2.
// Console that number is divisible by 2 or not
// If number is divisible by 2 console 2 se “divisible hai” else “not divisible”
var readlineSync= require("readline-sync");
var number=readlineSync.questionInt("Enter the number ");
if (number%2==0){
    console.log("divisible hai")
}
else{
    console.log("not divisible")
}