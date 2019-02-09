// Create an array of words.
var word = ["popsicle", "cheesecake", "brownie", "danish", "macaroon", "cupcake", "bonbon", "gingerbread", "pudding", "beignet", "churro", "sorbet", "gelato", "crepe", "mochi", "milkshake", "tiramisu", "sundae", "parfait", "brittle", "turnover", "cobbler"]

//Choose word randomly.
var randNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randNum];

//Create underscores based on the length of the word.
var underscore = [];
console.log(chosenWord);

var genUnderscore = function() {
    for (var i = 0; i < chosenWord.length; i++) {
        underscore.push("_");
    }
    return underscore;
}

console.log(genUnderscore());