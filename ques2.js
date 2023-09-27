// const arr = [1,2,3,4,5,6]
// const swapLeftBy = 2
// output - [3,4,5,6,1,2]
// function getLeftSwappedArrayByIndex(arr, swapLeftBy) - this will return an swapped array with given index

function getLeftSwappedArrayByIndex(arr, swapLeftBy) {
    const newArr=[...arr]
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < swapLeftBy; j++){
            const elem = newArr.shift()
            newArr.push(elem)
            
        }
    }
    console.log(newArr)
}

const arr = [1, 2, 3, 4, 5, 6];
const swapLeftBy = 2;
getLeftSwappedArrayByIndex(arr,swapLeftBy)