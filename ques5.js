// Remove all the special characters from a string
// const string = "We;b*M:a!s;te**:r!"
// function removeSpecialCharacters(string) - this function will return an string which do not have any special character (alphabets and numbers are not considered as special characters)
// output - WebMaster

function removeSpecialCharacters(string) {
    let str = ""
    for (let i = 0; i < string.length; i++){
        
        if ((string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) || (string.charCodeAt(i) > 96 && string.charCodeAt(i) <= 122))
            str+=string.charAt(i)
    }
    console.log(str)
}

const string = "We;b*M:a!s;te**:r!";
removeSpecialCharacters(string)