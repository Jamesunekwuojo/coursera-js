function playguessGame(){
    let minNumber =1;
    let maxNumber =100;
    const targetNumber = Math.floor (Math.random ()* maxNumber - minNumber + 1);
    let attempts =0;
    console.log("Hi guesss a random number between from 1 to 100 , both one $ hundred inclusive")
    let correctGuess = false;

    while(!correctGuess){
        let guess = parseInt(prompt("Enter your guess number"));
        if (isNaN(guess) || guess>maxNumber|| guess<minNumber){
            alert( `Please enter a correct number from ${minNumber} to ${maxNumber}` )
        }else{
            /*attempts++;*/
        }
        if (guess===targetNumber){
            alert("Congratulations u guessed de right number")
        }else if(guess< minNumber){
            alert("Try something higher");
        }else{
            alert("Try something lesser")
        }

    }
    let playAgain = prompt("Do u want to play again (yes/no)");
    if(playAgain===yes){
        playguessGame();
    }else{
        console.log("Thank u for playing") 
    }

}
playguessGame();