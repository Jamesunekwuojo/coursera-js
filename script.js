// plane js
//js frameworks
// js can also be used in building or programming Internet Of Things
console.log("%cHello world", "color:yellow; font-size:45px")
// concatenating multiplewords
console.log("Hello " + "there, " + "world ");
console.log("Hellow ", "there, ", "world ");
//Variables
var person = "James"
var greeting = "Hello"
console.log(greeting)
console.log("Hellow ", person)
person ="John"
greetings ="Hi"
console.log(greeting, person)

//Exercise on variables
var petDog ="Rex"
var petCat = "pepper"
console.log(petDog);
console.log(petCat);
console.log("my pet dog's name is:", petDog);
console.log("my pet cat's name is:", petCat);
var catSound ="purr"
var dogSound = "woof"
console.log(petDog, "says ", dogSound);
console.log(petCat, "says ", catSound);
catSound = "meow"
console.log(petCat, "now says ", catSound);
var age = 12
console.log(age);
//Datatypes
// null
//undefined
//BigInt 
// numbers
//strings
// Operators
//Arithemathic operators
// Comparison operators
//Assignment operators
//Logical operators:
// && - check for both conditions to be true.
// || check for atleast one condition is true.
// ! - (not) return false if the value the result is true 
console.log(2+3);
console.log(4<3)
console.log(10**2)
console.log(5%8);
console.log(9%8);
var firstItem = 12
var secondItem = 13
console.log(firstItem < secondItem );
console.log(4!==4)
// == compare value not the type
// === compare va;ue and the datatype strict equality sign
var mon = 1;
var Tue = 3
var Wen = 4
console.log(mon + Tue + Wen );
// Addittion assignment operators
var overtime =1;
overtime += 4;
overtime += 3;
overtime += 5;
console.log(overtime);

var overtime = "once "
overtime += "upon "
overtime += "a "
overtime += "Time"
console.log(overtime);
var score =8
console.log("Mid-level Skills:", score>0 && score<10);

var timeRemaining =0
var energy= 10 
console.log("Game over:", timeRemaining == 0 || energy ==0)

var num2 =5;
var num1 =2;
var test1 = num1%2;
var test2 = num2%2;
var result1= test1==0
var result2 = test2 ==0
console.log("Is ", num1, "an even number?", result1 );
console.log("Is ", num2, "an even number?", result2 );

var now = "Now in "
var three= 3;
var d = "D!"
console.log(now + three + d);
// conditional statement
var result = 30;
if (result > 40) {
    console.log("You passed the test");

} else {
    console.log("You did not pass the test")

}
// else if 
// note you can use as many "else if" of ur choice depeding on the numer of conditions to be meet.
var place = "fifth"
if(place == "first"){
    console.log("Gold");

} else if(place == "second") {
    console.log("silver");

} else if (place == "Third"){
    console.log("blue")

} else if (place =="fourth"){
    console.log("orange");
}else {
    console.log("No model");
}
//switch statement
var place = "ten"
switch(place){
    case "first":
        console.log("Gold")
        break;
    
    case "second":
        console.log("silver");
        break;
    case "Third":
        console.log("blue")
        break;

    case "fourth":
        console.log("orange");
        break;
    default:
        console.log("No model");  



}
    

