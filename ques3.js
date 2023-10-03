// Write a function to remove all the numbers which divides the given number
// const arr = [2,3,5,6,7,9]
// const num = 60
// function removeAllDivisibleNumbers(arr) - this function will return array of numbers which cannot divide given number
// output - [7,9]

function removeAllDivisibleNumbers(arr, num) {
    const newArr = [];
    for (const elem of arr) {
        if (num % elem !== 0) {
            newArr.push(elem)
        }
    }
    return newArr;
    
}

const arr = [2, 3, 5, 6, 7, 9];
const num = 60;
console.log(removeAllDivisibleNumbers(arr,num))