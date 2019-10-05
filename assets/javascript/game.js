//create random generator for numbers that the computer goes through: array?
// computer chooses one of those alphabet variables
// user can click any keyboard letter (guess), guess count documents the letter guessed 
// if user guess=computer answer, then true
// if true then wins score i++, AND start game over again
/* if false then guesses left i--,
    until guesses left=0, then losses=i++ and game restarts);*/

let alphabet= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];

let computerguess = compRandletter(alphabet);

function compRandletter(alphabet) {
    console.log (alphabet[Math.floor(Math.random() * alphabet.length)]);
 };
 
 compRandletter(alphabet); 

 
