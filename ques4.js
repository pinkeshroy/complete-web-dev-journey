// Find string with given prefix - do not use built-in method
// function getStringByPrefix(arr) - this function will return all the string which have given prefix
// arr - [abc, bcd, bc, abcd, abb, acbds, ceab, abds]
// const prefix ="ab"
// output - [abc, abcd, abb, abds]

function getStringByPrefix(arr, pre) {
    const newArr = []
    for (let i = 0; i < arr.length; i++){
        const str = arr[i].substring(0, pre.length)
        if (str === prefix) {
            newArr.push(arr[i])
        }
    }
    return newArr    
}

 const arr = ["abc", "bcd", "bc", "abcd", "abb", "acbds", "ceab", "abds"];
const prefix = "ab";
console.log(getStringByPrefix(arr,prefix))