// If water in the filter is less than 1L then more water needs to be filled. 
// If the water quantity is between 1L and 10L then there is no need to fill water.
// If water is more than 10L then the water will overflow. 
// take user input in a variable named water .
var readlineSync= require("readline-sync");
var Water=readlineSync.questionInt("Enter the number ");
if (Water<1){
    console.log("more water needs to be filled")
}
else if (Water>1 && Water<10){
    console.log("No need to fill water")
}
else{
    console.log("overflow")
}