// Implement Selection Sort - ascending order
// const arr = [11, 20, 3, 14, 50, 9]
// function selectionSort(arr) - this function will return array of sorted elements in ascending order
// output = [3,9,11,14,20,50]

function selectionSort(arr) {

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < arr[i - 1]) {
            for (let j = i; j > 0; j--){
                if (arr[j] < arr[j - 1]) {
                    let temp = arr[j]
                    arr[j] = arr[j - 1]
                    arr[j-1]=temp
                }
            }
        }
    }
    return arr;
}

const arr = [11, 20, 3, 14, 50, 9];
console.log(selectionSort(arr));