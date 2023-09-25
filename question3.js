// 3. Reverse an array. [1, 2, 3, 4, 5, 6] -> [6, 5, 4, 3, 2, 1](do not use built -in method)

function revreseArray(arr) {
    const newArr1 = []
    for (let i = arr.length-1; i >= 0; i--){
        newArr1.push(arr[i])
    }
    return newArr1;
}
const arr = revreseArray([1, 2, 3, 4, 5, 6])
console.log(arr)