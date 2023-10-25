// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false

function validateWord(word = "") {

    let newWord = word.substring(0, 1)
    newWord += word.substring(1).toLowerCase()

    if (word.toLowerCase() === word) {
        return true;
    }
    else if (word.toUpperCase() === word) {
        return true
    } else if (newWord === word) return true;
    else return false;

    
}
const word="USA"
console.log(validateWord(word));