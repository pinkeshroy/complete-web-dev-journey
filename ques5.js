// Swap even index number to next odd index number
// const arr = [10,8,5,2,11,15,13,19,12]
// output - [8, 10, 2, 5, 15, 11, 19, 13, 12]
// function swapNumbers(arr) - this function will return swapped array

function swapNumbers(arr=[]) {
    for (let i = 1; i < arr.length; i+=2){
        const temp = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = temp;
    }
    return arr;
}

const arr = [10, 8, 5, 2, 11, 15, 13, 19, 12];

console.log(swapNumbers(arr));