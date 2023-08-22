// Split an array into chunks
// — create a function that takes 2 args: arr, array of numbers or strings, chunkSize
// — this function returns an array of arrays where each array is of size equal to chunkSize

function arrayToArrayOfArray(arr, chunkSize) {
    const array = []
    let arrayofChunkSize = []
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (count < chunkSize) {
            arrayofChunkSize.push(arr[i])
            count+=1
        }
        else if (count === chunkSize) {
            array.push(arrayofChunkSize)
            arrayofChunkSize = []
            arrayofChunkSize.push(arr[i])
            count = 1
        }
    }
    array.push(arrayofChunkSize)
    return array
}

console.log(arrayToArrayOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));