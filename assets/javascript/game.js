var wins = 0;
var currentIndex;
var remGuess = 0;
var alrGuessed = [];
var maxTries = 10;
var started = false;
var ended = false;

// Create an array of words.
var word = ["popsicle", "cheesecake", "brownie", "danish", "macaroon", "cupcake", "bonbon", "gingerbread", "pudding", "beignet", "churro", "sorbet", "gelato", "crepe", "mochi", "milkshake", "tiramisu", "sundae", "parfait", "brittle", "turnover", "cobbler"]

// Randomly choose word from the array above.
var randNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randNum];

// Create underscores based on the length of the word.

// Below is an empty array so that underscores, based on the randomly chosen word, can be pushed into it. 
var underscore = [];

console.log(chosenWord);

// Below is the function that will generate the underscores based on the randomly chosen word. The underscores will be pushed into the empty array above.
var genUnderscore = function () {
    for (var i = 0; i < chosenWord.length; i++) {
        underscore.push("_");
    }
    return underscore;
}

console.log(genUnderscore());

// Capture user's guess (input).

// Below are empty arrays into which the user's guesses will be pushed, based on whether the guessed letter is in the randomly chosen word.
var rightGuess = [];
var wrongGuess = [];

// Below is a function that captures the user's guess, makes sure it is a lowercase letter, and evaluates whether the letter is a part of the randomly chosen word.
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);

    if (chosenWord.indexOf(userGuess) > -1) {
        rightGuess.push(userGuess);
        // If user chooses a letter in the randomly chosen word, replace appropriate underscore w/ right letter.
        underscore[chosenWord.indexOf(userGuess)] = userGuess;
        console.log(rightGuess);
    } else {
        wrongGuess.push(userGuess);
        console.log(wrongGuess);
    }
}