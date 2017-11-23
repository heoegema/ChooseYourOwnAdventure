document.addEventListener("DOMContentLoaded", function (event) {
    playGame();
});

//I am a comment! I don't actually do much. But I can tell you what's going on! 


//This is a 'function' 
//It is a piece of code that runs when you call it (playGame())
//We put things in functions when we might want to use them multiple times 
function playGame(){ 
    
    //Confirm is a box that displays "Cancel" or "Ok"
    //If the user enters "OK" it will return true, if they press "Cancel" it will return false
    var enter = confirm("You are outside a forest cabin. Press OK to enter.");

    //If the User presses "OK" and wants to play the game
    if (enter === true) {

        var bowl = prompt("You walk into the cabin and see a lovely kitchen. On the table there are three bowls of porridge. Do you try 1, 2 or 3?"); 
        
       

    } 
    //In this case the User pressed "Cancel" and doesn't want to play our game
    else {
        //User presses Cancel 
        //Don't go into the cabin 
        alert("You don't go into the cabin. Well...That's all Folks. The End.")
    }
    
    //Does the user want to play again? 
    //If yes we will just recall the function! 
    var playAgain = confirm("Do you want to play again?"); 
    if(playAgain) { 
        playGame(); 
    }
}