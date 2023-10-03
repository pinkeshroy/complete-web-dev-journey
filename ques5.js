// Write a function to get the pair which have maximum sum
// const arr = [2,3,11,5,7,9]
// function getMaxPair(arr) - this function will return the pairs which have maxium sum
// output - [11, 9]
// 11 + 9 = 20 are the pairs which have maximum sum

function getMaxPair(arr) {
    arr.sort((a,b)=>a-b);
    const newArr = [arr[arr.length - 2], arr[arr.length - 1]]
    return newArr;
}
console.log(getMaxPair([2, 3, 11, 5, 7, 9]));