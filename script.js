
function mergeSort(leftarray, rightarray) {
    let resultarray = []
    while (leftarray.length && rightarray.length) {
        if (leftarray[0] <= rightarray[0])
            resultarray.push(leftarray.shift())
        else
            resultarray.push(rightarray.shift())
    }
    if (leftarray.length) resultarray = resultarray.concat(leftarray)
    if (rightarray.length) resultarray = resultarray.concat(rightarray)

    console.log(resultarray)
    return resultarray
}

function mergeSorted(unsortedarray) {
    const array = [...unsortedarray]
    if (array.length <= 1) return array
    const mid = Math.floor(array.length / 2)
    const leftSortedarray = mergeSorted(array.slice(0,mid))
    const righSortedtarray = mergeSorted(array.slice(mid, array.length))
    return mergeSort(leftSortedarray, righSortedtarray)
    // return result
}
console.log(mergeSorted([2,1,5,9,7,8,0,11,15,10]))