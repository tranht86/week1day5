function countLetters(char) {
  console.log("The number of characters for the word " + char + " is: " + char.length)
}

function repeatWord(word) {
  console.log("You typed the word: " word);
}

module.exports = {
  countLetters: countLetters;
  repeatWord: repeatWord;
}