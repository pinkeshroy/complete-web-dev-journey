// "2. Find if the given number exists in an array - ( do not use built-in function ) [11,34,22,21,5,22] -> find 21 if exists return true otherwise false

function findNumber(arr,num) {
    for (let i = 0; i < arr.length; i += 1){
        if (arr[i] === num) return true;
    }
    return false
}

const arr = [11, 34, 22, 21, 5, 22]

const find = 21;

console.log(findNumber(arr,find))
