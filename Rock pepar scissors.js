var loses = 0;
var wins = 0;
var play = function(userChoice){
if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
} 
else if (userChoice == "rope") {
}
var computerChoice = Math.random();
if (computerChoice < 0.34) {
computerChoice = "rock";
} 
else if(computerChoice <= 0.67) {
computerChoice = "paper";} 
else {
computerChoice = "scissors";
}
var compare = function (choice1,choice2) {
if (choice1 == choice2) {
return "The result is a tie!";
} else if (choice1 == "rock"){
if (choice2 =="scissors") {
wins++;
return "rock wins. rock on.":