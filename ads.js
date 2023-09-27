const meal =['soup', 'steak', 'ice cream']
//let [starter] = meal;
//console.log(starter);
console.log(meal)

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);
console.log(set)

let obj ={
    key:1,
    value:4
};
let output = {...obj};
output.value -= obj.key;
console.log(output.value);

function count(...basket){
    console.log(basket.length)
}
count(10, 9, 8, 7, 6);
//  Before the advent of JSON by Douglas Crockford (a standard data iterchange format ) XML(Extensible Markup Language) was the common data interchange format.

// To convert a JSON string to regular js prop $methods
// assign  JSON strng to a variable
// use JSON.parse(varName)
// To convert plane JS to JSON string use JSON.stingnify(varName)