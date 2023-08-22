// Find the length of the longest string in an array

function findLonestString(string) {
    let longestString = "";
    string.forEach((element) => {
        if (longestString.length < element.length) {
            longestString = element
        }
    })
    return {longestString:longestString.length}
}

const stringOfArray = ["efefef", "fef", "ergtfegr"]
console.log(findLonestString(stringOfArray))