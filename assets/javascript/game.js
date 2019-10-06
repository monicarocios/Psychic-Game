//create random generator for numbers that the computer goes through: array?
// computer chooses one of those alphabet variables
// user can click any keyboard letter (guess), guess count documents the letter guessed 
// if user guess=computer answer, then true
// if true then wins score i++, AND start game over again
/* if false then guesses left i--,
    until guesses left=0, then losses=i++ and game restarts);*/
    
let alphabet= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];


let wins = document.getElementById('#wins')
let winScore = 0;

let losses = document.getElementById('#losses')
let lossesScore = 0;

let GuessesLeft = document.getElementById('#GuessesLeft')
let GuessesLeftScore = 9;

let GuessChoices = document.getElementById('#GuessChoices')
let GuessChoicesScore = [];

let scoreCounter = function () {
    wins.innerHTML = "Wins: " + winScore;
    losses.innerHTML = "Losses: " + lossesScore;
    GuessesLeft.innerHTML = "Guesses Left: " + GuessesLeftScore;
    GuessChoices.innerHTML = "Your Guesses So Far" + GuessChoicesScore
}

document.onkeyup = function(event) {

    let userGuess = event.key;

    let computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    let options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    

   if (options.indexOf(userGuess) > -1) {

       if (userGuess === computerGuess) {
           wins++;
           GuessesLeft = 9;
           GuessChoices = [];
           console.log(options.indexOf(userGuess))
       }

       if (userGuess != computerGuess) {
           GuessesLeft --;
           
       }

       if (GuessesLeft === 0) {

       GuessesLeft = 9;
       losses ++;
       GuessChoices = [];
 
   }

   document.getElementById('')


   }
};

//Need to either fix html link or .innerHTML to get my functions to show up 
