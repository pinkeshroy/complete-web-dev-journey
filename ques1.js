// Write a function to move all the negative numbers on the odd index and positive numbers on the even index, 0 considered as positive
// const arr = [-1,1,2,-2,3,4,-6,-7]
// function movePositiveAndNegativeNumbers(arr)
// output - [1,-1,2,-2,3,-6,4,-7]

function movePositiveAndNegativeNumbers(arr) {
    const newArr = new Array(arr.length);
    let evenindex = 0;
    let oddIndex = 1;
    for (const elem of arr) {
        if (elem < 0) {
            newArr[oddIndex] = elem;
            oddIndex+=2
        }
        else {
            newArr[evenindex] = elem
            evenindex += 2;
        }
    }
    return newArr    
}
const arr = [-1, 1, 2, -2, 3, 4, -6, -7];

console.log(movePositiveAndNegativeNumbers(arr));