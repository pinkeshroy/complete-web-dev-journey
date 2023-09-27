// Convert the capital character to lowercase and lowercase character to uppercase
// given string = "WebMaster"
// output - "wEBmASTER"
// function toggleEachCharacter(string) - this function will return the converted string

function toggleEachCharacter(string) {
    let str = "";
    for (let i = 0; i < string.length; i++) {
        if ((string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90))
        {
            str+=string.charAt(i).toLowerCase()
        }
        else if ((string.charCodeAt(i) > 96 && string.charCodeAt(i) <= 122)) {
          str += string.charAt(i).toUpperCase();
        }
            
    }

    console.log(str);
    
}

toggleEachCharacter("WebMaster")