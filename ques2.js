// Write a polyfill of map (same function which works as array map does)

function myMap(arr, callBack) {
    if (!arr.length||!callBack) return arr;
    const newArr = [];

    for (let i = 0; i < arr.length; i++){
        newArr.push(callBack(arr[i],i,arr))
    }
    
    return newArr
}

function callBackFun(elem, idx, arr) {
    return elem * elem;
}

console.log(myMap([2,3,4,5],callBackFun));
