// Consider the following rules:
var readlineSync=require("readline-sync");
var people=readlineSync.questionInt("Enter the number")
// People 5 years and above in age can go to school.
if (people>=5 ){
    console.log(" go to school")
}
// People 18 years and above in age can vote in elections.
if (people>=18 ){
    console.log(" You can vote in elections")
}
// People 21 years and above in age can drive a car.
if (people>=21 ){
    console.log(" You can drive a car")
}
// People 24 years and above in age can marry.
if (people>=24 ){
    console.log(" You can marry")
}
// People 25 years and above in age can legally drink.
if (people>=25){
    console.log("You can legally drink")
}



