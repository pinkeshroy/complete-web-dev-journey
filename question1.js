// "1. Capitalize first letter of the string -> "webmaster" -> "Webmaster"."

function captalizeTheFirstWord(str) {
    let firstAlpha = "" + str.charAt(0)
    const newAlpha = firstAlpha.charCodeAt() - 32
    firstAlpha=String.fromCharCode(newAlpha);
    return firstAlpha+str.substring(1)
}

console.log(captalizeTheFirstWord("string"))