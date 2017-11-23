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
        //User presses Ok
        //go into the cabin
        
        //Prompts ask for input from the user
        //The user's answer will be assigned to the variable called 'bowl' 
        //A variable is something that holds data
        var bowl = prompt("You walk into the cabin and see a lovely kitchen. On the table there are three bowls of porridge. Do you try 1, 2 or 3?"); 
        
        //Based on the User's answer we want to do different things
        //We are going to use something called an IF STATEMENT 
        // If (condition is true) { 
        //      Do something
        // }
        // else if(a condition is true (and the one above isn't)) { 
        //      Do something
        //}
        // else { 
        //      Neither of the above are true! Let's do something else
        //}
        
        //If the user chooses bowl 1 
        if (bowl == 1) {
            //Alert the user that the porridge is too hot!
            alert("The porridge is too hot! The End!");
        } 
        //If the user chooses bowl 2
        else if (bowl == 2) {
            // The porridge is too cold!
            alert("The porridge is too cold! The End!");
        } 
        //Our last option is option 3. If the user chooses option 3
        else {
            //The porridge is just right!
            //Let's continue the game
            alert("The porridge is just right!");
            
             // Now we will ask the user what chair they want to sit in
             var chair = prompt("You walk into the living room and see three chairs. A big one, medium one and small one. Which one do you choose?"); 
            
            //If the user chooses the big chair
            if(chair == "big") { 
                //The chair is too big
                alert("The chair is way too big! The End!");
            
            } 
            //If the User chooses the medium chair
            else if(chair == "medium") { 
                //The chair is too big
                alert("This chair is too big. The End!");
            
            } 
            //Our last option is the small chair
            //If the user doesn't choose the other two! They must have chosen the small chair
            else { 
                
                //The chair is just right!
                alert("This chair is just right!");
                
                //Now we will ask the user what bed they want to sleep in
                var bed = prompt("You walk into the next room over and see three beds, A big one, a medium one and a small one. Which one do you choose?"); 
                
                //If they choose the big one
                if(bed == "big") { 
                    //The bed is too hard
                    alert("It's too hard and you can't sleep. The End!");
                
                } 
                //If the user chooses the medium one
                else if(bed == "medium") {  
                    //The bed is too soft
                    alert("It's too soft and you can't sleep. The End!");
                
                } 
                //If the user chooses the small one
                else { 
                    //Then the user falls asleep and meets some bears!
                    alert("It's just right and you fall into a deep slumber."); 
                    alert("You wake up to see three bears looking at you."); 
                    alert("Shocked you get up and run away never to return again.");
            
                }
            
            }
        
        }

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