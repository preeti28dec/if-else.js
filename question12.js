// Takes a number as user input. Check if this number is divisible by 5 and 15 both
// If it is divisibe by both prints "Divisible by both".
// else prints "Not divisible by both"
var readlineSync=require("readline-sync");
var varx=readlineSync.questionInt("Enter the number")
if (varx%5==0 && varx%15==0 ){
    console.log("Divisible by both")
}
else{
    console.log("Not divisible by both")
}