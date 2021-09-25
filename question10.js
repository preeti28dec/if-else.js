// Take two numbers as input from the user in variables varx and vary.
// Check whether varx is divisible by vary.
// If yes, console Divisible else console Not Divisible.
var readlineSync=require("readline-sync");
var varx=readlineSync.questionInt("Enter the number")
var vary=readlineSync.questionInt("Enter the number")
if (varx%vary==0){
    console.log("Divisible hai")
}
else{
    console.log("Not Divisible")
}