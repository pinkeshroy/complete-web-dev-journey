// Reverse words in a string
// const string = "WebMaster Batch One"
// output - "One Batch WebMaster"
// function getReversedWords(string) - this function will return string of the reversed words

function getReversedWords(string) {
    const newStr = string.split(" ")
    string = "";
    for (let i = newStr.length-1; i>=0; i--) {
        string=string+" "+newStr[i]
    }
    string.trim()
    // return  string
    console.log(string)
}
const string = "WebMaster Batch One";

getReversedWords(string)