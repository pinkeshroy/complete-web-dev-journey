// Compare two Arrays (polyfill of Array.prototype.every)
// — create a function that takes 2 args: arr1, arr2
// — this function returns either true or false, if each element of both the arrays are equal with ===

// function elementEqual(arr1, arr2) {
//     if(arr1.length !== arr2.length) return false;
//     for (let i = 0; i < arr1.length; i++){
//         if (arr1[i] !== arr2[i]) return false;
//     }
//     return true;
// }

function elementEqual(arr1, arr2) {
     
    if (arr1.length !== arr2.length) return false;
    const ans=arr1.reduce((acc, ele1, idx) => {
        if (ele1 !== arr2[idx]) return acc = false
        else if (acc !== false) return acc =true
        else return acc=false
    },true)
    return ans
}

console.log(elementEqual([1,2,3,4,5],[1,2,3,4,5]))