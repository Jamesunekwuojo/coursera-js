var sales = {

    meat:12,
    flour:14,
    totalSales: function (){
        var calculation =sales.meat + sales.flour
        console.log(calculation)
    }
    
}


// Task 1: Code a Person class
class Person{
    constructor(name, age, energy) {
        this.name = "Tom";
        this.age = 20;
       this. energy = 100;

    }
    sleep() {
        this.energy += 10;
        
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}
class Worker extends Person {
    constructor(name, age, energy, xp, hourlyWage) {
        super(name, age, energy);
        this.xp = 10;
        this.hourlyWage = 10;
        
    }
    goToWork() {
        (this.xp += 10)
    }
}

// Task 2: Code a Worker class


// Task 3: Code an intern object, run methods
function intern() {
    var newintern = new Worker('Bob', 21, 110, 0)
    newintern.goToWork();
    return newintern

}

// Task 4: Code a manager object, methods
function manager() {
    var managerObject = new Worker("Alice", 30, 120, 100, 30);
    managerObject.doSomethingFun();
    return managerObject;

}

const testIntern = intern();
const testManager = manager();

console.log ("intern object", testIntern);
console.log("manager object", testManager);


class Cake{
    constructor(lyr){
        this.layers =  lyr +1;
    }
}
var result = new Cake(1);
console.log(result.layers)

class Animal{
    constructor(lg){
        this.legs =lg;
    }
}
class Dog extends Animal{
    constructor(){
        super(4);
    }
}
var result = new Dog();
console.log(result.legs);


class Cat {

}
class Rat extends Cat {
    constructor(){
        super ();
        this.noise = "meow";
    }
}
var result = new Cat();
console.log (result.noise);

let {PI} = Math;
PI;