function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++)
        if(arr[i]===val) return i
    return -1;
}

console.log(linearSearch([7,8,2,9,5,2],2))