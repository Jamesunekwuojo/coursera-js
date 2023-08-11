function listArrayItems(arr){
    for (var i=0; i < arr.length; i++) {
       console.log(i*100, arr[i]) 
    }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);

function letterFinder(word, match){
    for (var i=0; i< word.length; i++){
        if(word[i]==match){
            console.log("found the", match, "at", i)
        } else{
            console.log("--No match", i)
        }

    }
}
letterFinder("word", "match")