document.addEventListener("DOMContentLoaded", function(event){
    playGame();
});

function playGame() { 
    //Your code goes here 
    var enter = confirm("You are outside a forest cabin. Press OK to enter.");

    if (enter) {
        //go into the cabin
        var bowl = prompt("You see three bowls of porridge. Eat bowl 1, 2, or 3?")
        if (bowl == 1) {
            alert("It's too hot! THE END");
        } else if (bowl == 2) {
            alert("It's too cold! THE END");
        } else {
            alert("It's delicious.");
        
            var hours = "The porridge makes you sleepy. Nap for how many hours?";
            var sleep = prompt(hours);
            sleep = Number(sleep);
        
            if (sleep < 2) {
                alert("You wake just in time, and scamper away!");
            } else {
                alert("You sleep to late, and are eaten by hungry bears.");
            }
            alert("THE END.");
        
        }
    } else {
        //didn't go in
        alert("And that's the world's shortest fable. THE END.")
    }


}