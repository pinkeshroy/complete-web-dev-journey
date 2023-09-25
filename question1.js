// "1. Capitalize first letter of the string -> "webmaster" -> "Webmaster"."

function captalizeTheFirstWord(str) {
    let firstAlpha = "" + str.charAt(0)
    firstAlpha = firstAlpha.toUpperCase()
    return firstAlpha+str.substring(1)    
}

console.log(captalizeTheFirstWord("string"))