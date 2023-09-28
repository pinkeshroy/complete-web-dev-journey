// Remove all the smaller characters from a string
// function removeSmallChars(string) - this function will return an string which does not have any small character
// const string = "AaBBccdeF"
// output - "ABBF"

function removeSmallChars(string) {
    let str = "";
    for (let i = 0; i < string.length; i++){
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            str += string.charAt(i);
        }
    }
    return str;

    
}

const string = "AaBBccdeF";
console.log(removeSmallChars(string))