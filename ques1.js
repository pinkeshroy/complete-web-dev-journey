// Find the substring exists in a string or not - do not use built in method (includes or substring)
// const arr = [ "abcd", "advc", "babd", "cde" ]
// const substring = "ab"
// output - ["abcd", "babd"]
// function getStringsBySubstring(arr, substring) -this function will return an array of string which includes given substring
function getStringsBySubstring(arr, substring) {
   const newArr=[]
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length - 1; j++){
            let str = arr[i].charAt(j) + arr[i].charAt(j + 1);
            if (str === substring) {
                newArr.push(arr[i])
            }
        }
    }
    return newArr;

    
}
const arr = ["abcd", "advc", "babd", "cde"];
const substring = "ab";
 
console.log(getStringsBySubstring(arr, substring));