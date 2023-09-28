// Find the first missing number in the sorted array
// function findFirstMissingNumber(arr) - this function will return the first first number, if we don't have any missing number then return the last expected number
// const arr = [4,5,8,9,10]
// output - 6

// const arr = [11,12,13,15]
// output - 16

function findFirstMissingNumber(arr) {
    for (let i = 1; i < arr.length; i++){
        if(arr.length<2) return 
        if (1 !== (arr[i] - arr[i - 1])) {
            return arr[i-1]+1
        }
    }
    return (arr[arr.length-1]+1)
}

const arr = [4, 5, 8, 9, 10];
// const arr = [11,12,13,14,15]
console.log(findFirstMissingNumber(arr))