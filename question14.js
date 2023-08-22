// Find the index of the maximum item of an array

function findIndexOfMax(arr) {
    let index = 0
    arr.forEach((element,i) => {
        if (element > arr[index]) index = i;
    });
    return index;
}

const arr = [4, 5, 83, 9, 2, 4,7, 44, 85, 4]
console.log(arr[findIndexOfMax(arr)]);