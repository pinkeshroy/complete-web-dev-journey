// Implement Insertion Sort in ascending order
// const arr = [10,8,5,2,11,15,13,19,12]
// output - [ 2,5,8,10,11,12,13,15,19 ]
// function insertionSort(arr) - this function will return sorted Array

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
          for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
              let temp = arr[j];
              arr[j] = arr[j - 1];
              arr[j - 1] = temp;
            }
          }
        }
    }
    return arr;
}

const arr = [10, 8, 5, 2, 11, 15, 13, 19, 12];

console.log(insertionSort(arr));
