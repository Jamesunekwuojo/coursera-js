// (undefined, null and empty strings) empty values

var letters ="abc"
letters.match(/a/);
console.log(letters.match(/a/))

try {
    throw new Errow();
    console.log(hello)

} catch(err) {
    console.log("caught")
}
try {
    Number(5).toPrecision(300)
} catch (b){
    console.log("There was an error")

}

var str = "hello";
console.log(str.match("jellow"))

var age= typeof("2")
console.log(age);

function addTwoNums(a,b) {
    try{
        if (typeof(a)!="number"){
            throw new ReferenceError("1st arg is not a number");
    
        } else if (typeof(b)!="number"){
            throw new ReferenceError("2nd arg is not a number")
        } else {
            console.log(a+b)
        }
        


    } catch(err){
        console.log("!Error" ,err)
    }
    
    
}
addTwoNums (5,"5");

console.log("It still works")
