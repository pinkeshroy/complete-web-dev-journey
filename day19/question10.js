let arr = [4, 56, 77, 93, 12, 78]
let i = 0;
arr.forEach(() => {
    arr[i] = Math.pow(arr[i++], 2)
})
console.log(arr)