const arr = [45, 3,104, 5, 88, 99, 90, 34]

const sum = arr.reduce((a, num) => {
    if (num > a) a = num
    return a
})
console.log(sum)