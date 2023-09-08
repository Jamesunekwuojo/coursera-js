function toDisplay(value){
    document.getElementById("Display").value+=value;
}
function toDelete(){
    document.getElementById("Display").value ='';
}
/*function toCalculate() {
    const result = eval(document.getElementById("Display").value);
    document.getElementById("Display") = result;
    /*try {
        const result = eval(document.getElementById("Display").value);
        document.getElementById("Display") = result;
    } catch (error) {
       document.getElementById("Display").value = "Error" ;
    }
    
}*/