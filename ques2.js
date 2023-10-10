// Easy - Capitalize first letter of every string in an array
// const arr = [ "abcd", "Pqrs", "xyz", "lmno" ]
// output - [ "Abcd", "Pqrs", "Xyz", "Lmno" ]
// function capitalizeFirstChar(arr) - this function will return array of strings with the first character as capital
function capitalizeFirstChar(arr) {
   arr.forEach((str,idx) => {
       let char = ""+str.charAt(0)
       char = char.toUpperCase()
       char+=str.substring(1)
       arr[idx]=char
   });
    return arr;
}

const arr = ["abcd", "Pqrs", "xyz", "lmno"]
console.log(capitalizeFirstChar(arr));