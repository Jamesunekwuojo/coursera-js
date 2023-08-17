function addtwonums() {
    var a = 2
    var b = 3
    var c = a + b
    console.log(c)
}
addtwonums ();

function addTwoNums(a, b ) {
    var c = a * b;
    console.log(c)

}
addTwoNums(4, 5);
//Array
var train1 = ["wheat", "melon", "beans", "bread", "tea"];
console.log(train1[0]);
console.log(train1[3]);

function listArrayItems(arr) {
    for (var i =0; i < arr.lenght; i++) {
        console.log( arr[i])

    }
    var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
    listArrayItems(colors);

}
//Objects
var house = {
    age:14,
    colors:"blue",
    priceNaira: 1000
}
console.log(house);
console.log(house.age)
house.colors ="red";
console.log(house);


var house = {};
house.age = 12;
console.log(house);
//arrays are objects
var fruits= ["mango", "success"];
fruits.push("apple");
console.log(fruits);

function listOfstudents(one, two, three){
    var students=[];
    students.push(one) ;
    students.push(two);
    students.push(three);
    console.log(students)

}
listOfstudents("Abba", "Abba", "James");

// method in javascript
var car= {}; //an  object
car.key="Iron";// a property of the object
car.Turnkey = function (){// a method
    console.log("The engine is running")
}

car.Lighton = function (){
    console.log("The lights are on");
}
console.log(car);
car.Turnkey();
car.Lighton();

//var test = typeof(12)
var test = typeof(function showStrings(){console.log("hi")});
console.log(test)



