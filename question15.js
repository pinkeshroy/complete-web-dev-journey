// false, 2, "", 3, null, undefined, NaN,
// Remove falsy values from array

function removeFalsyValue(arr) {
    const newArr=[]
    arr.forEach((element) => {
        if (element||element===0) {
            newArr.push(element)
        }
    });
    return newArr
}
const arr = [0, 1, false, 2, "", 3, null, undefined, NaN, 4]

console.log(removeFalsyValue(arr))

