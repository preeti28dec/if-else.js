// You have a variable called number with the value as shown:
// var number1 = 44 * 30
// Check if this number1 is greater than or equal to number2. 
// If the entered number2 is greater than or equal to number1, 
// console "number2 is greater than or equal" else console "number2 is lesser".
var number1 = 44 * 30
var readlineSync= require("readline-sync");
var number2=readlineSync.questionInt("Enter the number ");
if (number2>=number1){
    console.log("number2 is greater than or equal");
}
else{
    console.log("number2 is lesser");
}