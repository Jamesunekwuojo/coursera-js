var year = 2018
while(year < 2023){
    console.log(year);  
    year++;
}

for (var year =2023; year<2026; year++){
    console.log(year)
    for(var month =6; month<9; month++){
        console.log(month)

    }

}
// uses of nested loops 
var cubes = "ABCDEFG"
for(var i=0; i<cubes.length; i++ ){
    var styles = "font-size:40px; border-radius:10px; border:1px-solid; background-color:yellow;color: blue; "
    console.log("%c" + cubes[i], styles)

}
//excercise
for (var i = 1; i<11; i++){
    if(i==1){
        console.log("Gold medal")
    }else if(i==2){
        console.log("Silver medal")

    }else if(i==3){
        console.log("Bronze medal")
    }else{
        console.log(i)
    }
}

for(var i=1; i<11; i++){
    switch(i) {
        case 1:
            console.log("Gold medal");
            break;
        case 2 :
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            console.log(i);
        
    }
}
