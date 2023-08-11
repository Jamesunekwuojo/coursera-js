var age = 18
if  (age==65 || age>65){
    console.log("You will get your income from your pension");
}else if (age<65 && age>=18 /*|| age==18*/){
    console.log("Each month you will get an allowance");  

}else if(age<18){
    console.log("You get an allowance");

}else  {
    console.log("The value of the age is not numerical");
}

var day = "sunday"
switch (day){
    case "monday":
    console.log("Go to school");
    break;
    case "Tuesday":
    console.log("maths lecture");
    break;
    case "Wenesday":
    console.log ("phy lecture");
    break;
    case "sunday":
    console.log("Go to church")
    break;
    default:
    console.log("There is no such day");

}
//Loops
// for, While and Nested  loops
// counter variable - i
for (var i = 0; i <= 3; i++) {
    console.log("This is line ", i)
}
for (var i =0; i<4; i++) {
    console.log("integer", i)
}
for (var i =10; i>0; i--){
    console.log(i)
}
console.log("Happy new year");
// While loop
var i = 0
while(i<4){
    console.log(i)
    i++
}
console.log("Happy new month")

var i = 1
while(i<6){
    console.log(i)
    i = i++;
}


var i =5;
while (i>0) {
    console.log(i);
    i = i - 1;
};
console.log("countdown finished")
