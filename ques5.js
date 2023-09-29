// Reverse all the words of a string - do not use built-in method
// function reverseWords(string) - this function will return an string having reversed words
// const string - "webMaster is Best"
// output - "retsaMbew si tesB"

function reverseWords(string) {

    const arr = string.split(" ")
    let revStr=""
    for (let i = 0; i < arr.length; i++){
        let tempStr = "";
        for (let j = arr[i].length; j >= 0; j--){
           tempStr+= arr[i].charAt(j)
        }
        revStr=revStr+" "+tempStr
    }

    return revStr.trim()
}

const string ="webMaster is Best"

console.log(reverseWords(string));