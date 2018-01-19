// list variables for wins, losses, guesses left, and guesses so far
// create empty array to push guesses into
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

// list possible options for computer
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Computer guesses a letter
var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
// console.log(computerGuess);


// make sure code will only run if the user picks a letter
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

// function to capture user guesses/keystrokes
// convert userGuess to lower case to make computer comparisons easier
// alert user if they did not pick a letter and start over if need be
document.onkeyup = function(event) {
    var userGuess = event.key.toLocaleLowerCase();
    if (!isLetter(userGuess)) {
        alert("Oops! You chose something other than a letter. Please pick a letter and try again!");
        return;
}

// push user guesses to empty guessesSoFar array, so that user knows what letters they have already tried
// log to make sure correct values are being captured
guessesSoFar.push(userGuess);
// console.log(guessesSoFar);

// create reset function that sets guesses left back to 10 and erases guesses so far
// wins and losses should not reset
// computer needs to pick a new letter with each reset
function resetGame() {
    guessesLeft = 10;
    guessesSoFar = [];
    computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    // console.log(computerGuess);
}

// compare user guess to computer guess to determine outcome
// if user guesses the letter the computer guessed, the user wins, earns 1 point, and the game will reset
if (userGuess === computerGuess) {
    alert("You Win!!");
    wins++;
    resetGame();
}

// if the user guess does not match the computer guess, the user loses
// the losses increase by 1, and the game resets
else if (guessesLeft === 0) {
   alert("You Lose, Try Again!");
   losses++;
   resetGame();
}

// if user guess does not match computer guess and guessesLeft does not = 0, guessesLeft decrement by 1
else {
    guessesLeft--;
}

//Wins, Losses, and Guesses Left are updated on the screen
var html = "<h1>The Psychic Game!</h1>" +
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "<p>" +
    "<p>Guesses So Far: " + guessesSoFar + "</p>";

document.querySelector('#game').innerHTML = html;
};

