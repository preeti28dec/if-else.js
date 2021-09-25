// Take two numbers as input from the user. Console the number which is greater.
var readlineSync=require("readline-sync");
var varx=readlineSync.questionInt("Enter the number")
var vary=readlineSync.questionInt("Enter the number")
if (varx>vary){
    console.log(varx,"greater then ",vary)
}
else{
    console.log(varx,"less then",vary)
}