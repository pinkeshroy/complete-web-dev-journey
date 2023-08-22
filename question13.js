// Find the index of the last matching item of an array (polyfill for Array.prototype.findLastIndex, do with both)

function findLastIndex(arr, searchItem) {
    for (let i = arr.length-1; i >= 0; i--){
        if (arr[i] === searchItem) {
            return {[searchItem]:i}
        }
    }
    return{"Not found":searchItem}
}

const arr = [4, 1, 4, 78, 9, 0, 17, 9, 12, 25, 678, 90, 9, 6543, 33, 2]
console.log(findLastIndex(arr,17))