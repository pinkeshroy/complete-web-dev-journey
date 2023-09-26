// "1. Create a function to check if the string contains any vowel
// const string = "qwrtyp"
// function isContainsVowel(string) - complete this function if contains vowel return true otherwise false


function isContainsVowel(string) {
    
    for (let i = 0; i < string.length; i++){
        const letter = "" + string.charAt(i)
        if (letter === "a" || letter === "e" || letter ==='i' || letter ==="o" || letter === "u")
            return true
    }
    return false
}

console.log(isContainsVowel("qwrityp"))