function ageMaker(val){
    return {
        prop:val
    }
}
ageMaker(30);

// recursive function
let counter = 3;
function example(){
    console.log(counter);
    counter = counter -1;
    if (counter===0) return
    example();
}
example();
// In functional programming data is being kept from functionality and function is seperated from the data.
// Function return a value which is being used in the latter part of the code
function multiplyTwonum(base, height){
    return base * height
} 
var base =10;
var height = 12;
var answer = multiplyTwonum(base, height);
console.log(answer);
//In OOp data and functionality are being group as properties and methods in an object
//In OOP the  method can be used to update the properties
var classTable ={
    height :3,
    width:function(){
        this.height =5;
    
    }
}
console.log(classTable.height);
classTable.width() ;
console.log(classTable.height);

function generateLogMessage(action, entity) {
    const timestamp = new Date().toLocaleString();
    return `[${timestamp}] ${action} ${entity}`;
}

// Example usage
const action = "User clicked";
const entity = "button"
const logMessage = generateLogMessage(action, entity);
console.log(logMessage);

// Task 1: Build a function-based console log message generator
var message = "%c" + txt;
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color:${color};`
    style += `background:${background};`
    style += `font-size:${fontSize};`   
    console.log(message, style);
    
}
consoleStyler("#1d5c63", "#ede6db", "40px", "congrats");









// Task 2: Build another console log message generator

function celebrateStyler(reason) {
    var fontStyle = "color:tomato; font-size:50px";


    if (`reason == "birthday"`) {
        console.log(`%cHappy birthday`, fontStyle);
        
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
        
    } else {
        console. log(message, style);
    }
    
}
celebrateStyler("birthday");




// Task 3: Run both the consoleStyler and the celebrateStyler functions
celebrateStyler("wedding");
consoleStyler("black", "blue", "15px", "test here");

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
    
    
}
styleAndCelebrate("ef7c8e", "fae8e0", "30px", "You made it!", "champions");
// Call styleAndCelebrate


