let DoTheThing = function() {
    //LOOP NOTES
    //Computer picks a number

    /* Loops have three parts, Control variable; Control Boolean expression; Control increment/decrement/update
       T he control variable - controls when the loop executes
        Control boolean expresion - boolean expression using the control variable which should at some point evaluate to false
        Control update- assigning a new value to the control variable inside the loop so that the boolean expression eventually evaluates to false
     */

    // === comparsion
    // == assigning a variable
    // ++ Adds one to previous number and reassigns value
    let restart = "Yes";
    //this is a while loop and it has to be called before the code
    while (restart === "Yes") {

        let computerNumber = Math.floor((Math.random() * 10) + 1);
        //Alert to get players guess

        let playersGuess = parseInt(prompt("Guess a number between 1 and 10."), 10);
        while (playersGuess !== computerNumber) {
            //Compare players guess to number
            //if higher - alert too high and then get players guess- repeat
            //if lower - alert too low and then get players guess - repeat
            if (playersGuess > computerNumber) {
                playersGuess = parseInt(prompt("Too high, guess again"), 10);
            } else
                playersGuess = parseInt(prompt("Too low, guess again"), 10);
        }

        //if equal - alert you win and then ask to restart
        //if yes- repeat from beginning
        //if no- set computer on fire and escape
        alert("YOU GUESSED IT ");
        restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive)");
    }
};
let DoTheOtherThing =function(){
    //same program with a do-while loop, in do-while the check is at the end
    let restart;

        do{
            let computerNumber = Math.floor((Math.random()*10)+1);
            let playersGuess;

            do {
                playersGuess = parseInt(prompt("Guess a number bewteen 1 and 10"),10);
                if(playersGuess > computerNumber){
                    playersGuess = parseInt(prompt("Too high guess again."), 10);

                }else
                playersGuess = parseInt(prompt("Too low guess again."), 10);

            }while(playersGuess != computerNumber)

            restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive)");

        }while(restart === "Yes");

};