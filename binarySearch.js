function binarySearch(arr, searchValue) {
    if (arr.length === 1 && arr[0] === searchValue) return 0
    let startidx = 0, endIdx = arr.length - 1
    while (startidx < endIdx) {
        const mid = Math.floor((startidx + endIdx) / 2)
        if (arr[mid] === searchValue) {
            return mid
        }
        if (searchValue > arr[mid])
            startidx = mid + 1
        else 
            endIdx = mid
    }
    return -1;
}
console.log(binarySearch([2, 3, 8, 9, 12, 13, 45], 9))