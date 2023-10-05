// Running Sum
// const arr = [11, 20, 3, 14, 50, 9]
// output - [ 11, 31, 34, 48, 98, 107 ]
// constraint - avoid nested loops
// function findRunningSum(arr) - this function will return an array which at every index has sum of all the numbers starting from 0 to that


function findRunningSum(arr) {
    const newArr = []
    arr.reduce((acc, elem) => {
        acc += elem;
        newArr.push(acc)
        return acc
    },0)

    return newArr;
    
}
const arr = [11, 20, 3, 14, 50, 9];
console.log(findRunningSum(arr))