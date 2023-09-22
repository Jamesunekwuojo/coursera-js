/*In this project, you will create a simple number guessing game where the computer selects a random number between a specified range, and the player has to guess the number. The player continues to guess until they correctly guess the number.

Requirements:

The computer should generate a random number between a minimum and maximum value (e.g., between 1 and 100).

The player should be prompted to guess the number.

Use a while loop to repeatedly prompt the player for their guess until they guess the correct number.

Provide feedback to the player after each guess, letting them know if the correct number is higher or lower than their guess.

Keep track of the number of attempts it takes for the player to guess correctly.

Once the player guesses the correct number, display a message congratulating them and show the number of attempts it took.

Allow the player to play again if they want.

Optional Enhancements:

Add a limit to the number of guesses a player can make.

Implement error handling to validate that the player's input is a valid number within the specified range.

Add a scoring system to keep track of the player's performance over multiple games.

Tips:

Use the Math.random() function to generate a random number.
You can use the Math.floor() function to round down the random number to an integer.
Use a while loop to keep prompting the player until they guess correctly.
Use if statements to provide feedback on whether the guess is higher or lower than the target number.
Track the number of attempts using a counter variable.
Consider using prompt() and alert() for user input and feedback.
This project will give you practice in using both for and while loops for control flow, handling user input, and providing feedback. It's also a fun and interactive way to learn JavaScript programming.
*/
/*var guessNumber = 0;
while ( guessNumber < 101 ){
    console.log(guessNumber);
    guessNumber++;

}
*/
let multiline = `
    place
    holders
    are used
    in the input element


`;
console.log(multiline)

// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']


// Task 2
function logDairy(){
    for(var items of dairy){
        console.log(items);
    }
}
logDairy();


const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan (){
    for (var keys of Object.keys(bird)){
        console.log(keys, ":", bird[keys])
    }
}
birdCan();

// Task 3
function animalCan(){
    for (var prop in animal){
        console.log(prop, ':', animal[prop])
    }
}
animalCan();


// Spread operator
const top5 =[
    'Computer Science',
    'physics',
    'Mathematics',
    'CMP212',
    'MTH 213',
    

]
console.log(...top5)

//Add new members to arrays without using the push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

//convert a string to an array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

//copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)

// rest operator - note:must be the last parameter in a function
const top6 = [
    'james',
    'emmanuel',
    'emidion',
    'majud',
    'chenshan'
    
]

// Join arrays, objects using the rest operator

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array



