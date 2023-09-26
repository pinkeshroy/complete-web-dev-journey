// Move all negative numbers to beginning.

// Output: [-12 ,- 13 ,- 5 ,- 7 ,- 3 ,- 6 ,11 ,6 ,5]

const input= [-12, 11, -13, -5, 6, -7, 5, -3, -6]
const resultArray = []

input.forEach(ele => {
    if (ele < 0)
        resultArray.unshift(ele)
    else resultArray.push(ele)
})
// let i = 0;


// while (i < input.length) {
//     if (input[i] < 0) {
//         resultArray.push(input[i])
//     }
//     i++
// }
// i = 0

// while (i < input.length) {
//     if (input[i] > 0)
//         resultArray.push(input[i])
//     i++
// }
console.log({resultArray})