// "4. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

function checkPalindrome(str) {
    let revStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revStr+=str.charAt(i)
    }
    if (str === revStr) {
        return true;
    }else {
        return false
    }
}

console.log(checkPalindrome("nitin"))