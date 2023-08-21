function reverseString(string) {
    let revString = ""
    for (let i = string.length; i >= 0; i--){
        revString+=string.charAt(i)
    }
    console.log(revString);
}
reverseString("fgjfbfei")