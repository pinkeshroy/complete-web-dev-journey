// Get indices of all occurrences of a value in an array(almost polyfill of Array.prototype.findIndex)
// — create a function that takes 2 args: arr, value
// — this function returns a an array of numbers, where each number is the index position of the value in arr
function checkIndices(arr, value) {
    const indexArray = []
    arr.forEach((element,i) => {
        if (element === value) indexArray.push(i)
    });
    return indexArray
}


const arrayIndices = checkIndices([4, 6, 9, 1, 23, 6, 1, 99, 34, 67,], 6)

console.log(arrayIndices)