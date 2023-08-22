// Rotate an array by steps
// — create a function that takes 2 args: arr, array of numbers or strings, stepSize
// — this function returns same array: each value of the array shifted by stepSize
 
function shiftElementOfArray(arr, stepSize) {
    const arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if ((i + stepsize) < arr.length) {
            arr1[i + stepsize] = arr[i]
        }
        else if ((i + stepsize) > arr.length - 1) {
            const index = (i + stepsize) - (arr.length)
            arr1[index] = arr[i]
        }
    }
    arr1.forEach((element,i) => {
        arr[i]=element
    })
}

const arr = [1, 2, 3, 4, 5, 6]
const stepsize = 2
shiftElementOfArray(arr,stepsize)
console.log({arr})