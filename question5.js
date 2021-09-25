// If this number is less than 10 then print "number is less than 10". 
// If it is greater than 10 and less than 20 then print "number is less than 20" 
// Else if it is greater than 20 then print "greater than 20".
var readlineSync = require("readline-sync");
var Number= readlineSync.questionInt("Enter the number: ");
if (Number<10) {
 console.log("number is less than 10");
}
else if (Number>10 && Number<20 ) {
 console.log("number is less than 20");
}
else{
    console.log("greater than 20")
} 
console.log(Number);
