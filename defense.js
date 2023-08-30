/*var condition1 = typeof(word) == "string" && word.length >=2;
var condition2 = typeof(match) && match.length=1*/
/*var condition1 =typeof(word);
var condition2 =typeof(match);
if (condition1  && word.length >=2){
    console.log("condition1 is true")

}elseif (condition2 && match.length==1) {
    console.log()

}*/
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")

function consoleLog(val){
    console.log(val)
    return val 
}
consoleLog(5)
consoleLog("hello")

function ageMaker(val){
    return {
        prop:val
    }
}
var display = ageMaker(40);
console.log(display)


