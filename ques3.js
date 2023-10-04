// Implement Bubble Sort
// const arr = [11,4,6,14,2,51,1]
// output - [1,2,4,6,11,14,51]
// function bubbleSort(arr) - this function will return sorted array

function bubbleSort(arr) {
    const newArr=[...arr]
    
    for (let i = 0; i < arr.length;i++) {
        for (let j = i; j < arr.length; j++){
            
            if (newArr[i] > newArr[j]&&i!==j) {
                let temp = newArr[j];
                newArr[j] = newArr[i];
                newArr[i]=temp
            }

        }
    }
        return newArr;

}
const arr = [11,4,6,14,2,51,1]
console.log(bubbleSort(arr));