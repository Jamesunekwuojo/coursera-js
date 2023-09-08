// OOP principles
// * Inheritance
//To create an using the Object.create method(Animal) object
class Car{};
var Lamboginy = Object.create(Car);
console.group(Car);

class House{};
var Lamboginy = new House();
console.group(House);

// inheritance-  sub-classes inheritig the base class or superclass using the extends keyword
class Human{};
class Male extends Human
{};
class Female extends Human {};
// *Ecapsulation-Making the code implementation 'hidden' from other  users, in the sense that they don't know how the codes work in other to avoid my code from being 'consume'
console.log("abc".toUpperCase() )
// *Abstraction - making the code to be generalized
// *Polymorphism -multiple forms

class Foods{
    useofMeals(){
        console.log("For growth,")
    }
}
class Proteins extends Foods{
    useofMeals(){
        super.useofMeals();
        console.log("and repair of worn out tissues")
    }
}
class Carbohydrates extends Foods{
    useofMeals(){
        
        console.log("It provides energy")
    }
}
var fishProteins/*Instances(objects) to the class due to the instance method used core reason for creating this new object */ = new Proteins();
var yamCarboydrates = new Carbohydrates();
fishProteins.useofMeals();
yamCarboydrates.useofMeals();


console.log (new Date())