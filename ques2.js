// Implement Binary Search
// constraint - given array will be sorted always
// function binarySearch(arr, num) - this function will return the index of the element if found, if not found return -1
// const arr = [3, 5, 7, 8, 11, 41, 52];
// const num = 8;
// output = 3;

// const arr = [3, 5, 7, 8, 11, 41, 52];
// const num = 9;
// output = -1;

function binarySearch(arr, num) {
    let start = 0;
    let end=arr.length-1;
    
    while (end != start) {
        if (arr[end / 2] <= num) {
            end = end / 2;
        }
    }
    
}

const arr = [3, 5, 7, 8, 11, 41, 52];
const num = 8;
console.log(binarySearch(arr, num));