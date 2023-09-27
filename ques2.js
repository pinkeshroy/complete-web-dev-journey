// const arr = [1,2,3,4,5,6]
// const swapLeftBy = 2
// output - [3,4,5,6,1,2]
// function getLeftSwappedArrayByIndex(arr, swapLeftBy) - this will return an swapped array with given index

function getLeftSwappedArrayByIndex(arr, swapLeftBy) {
    let newArr = []
    for (let i = 0; i < swapLeftBy; i++){
        newArr.push(arr.shift())
    }
    newArr=[...arr,...newArr]
    console.log(newArr);

}

const arr = [1, 2, 3, 4, 5, 6];
const swapLeftBy = 2;
getLeftSwappedArrayByIndex(arr,swapLeftBy)