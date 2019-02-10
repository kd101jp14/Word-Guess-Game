// Global variables
var wins = 0;
var randWord;
var remGuesses = 0;
var guessedLet = [];
var numTries = 10;
var guessingWord = [];
var started = false;
var ended = false;

var wordBank = ["popsicle", "cheesecake", "brownie", "danish", "macaroon", "cupcake", "bonbon", "gingerbread", "pudding", "beignet", "churro", "sorbet", "gelato", "crepe", "mochi", "milkshake", "tiramisu", "sundae", "parfait", "brittle", "turnover", "cobbler"];

// How to get the game to start or reset
var reset = function() {
    remGuesses = 10;
    started = false;
    // Generate a random word from the word bank
    randWord = Math.floor(Math.random() * (wordBank.length));
    guessedLet = [];
    guessingword = [];
    // Create underscores for blanks at each index of the random word
    for (var i = 0; i< wordBank[randWord].length; i++) {
        guessingWord.push("_");
    }
    update ();
};

// Update HTML once the game has been started or reset
var update = function() {
    document.getElementById("winsDisplay").innerHTML = "Wins: " + wins;
    document.getElementById("wordDisplay").innerHTML = "";
    for (var i = 0; i < randWord.length; i++) {
        document.getElementById("wordDisplay").innerHTML += guessingWord[i];
    }
    document.getElementById("remainDisplay").innerHTML = "Number of guesses remaining: " + remGuesses;
    document.getElementById("guessedDisplay").innerHTML = "Letters already guessed: " + guessedLet;
    // Game ends when user has 0 guesses remaining.
    if (remGuesses <= 0) {
        ended = true;
    }
};