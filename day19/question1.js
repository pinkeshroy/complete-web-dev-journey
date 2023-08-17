function arrayGen(num) {
    const outputArray = []
    for (let i = 1; i <= num; i++)
        outputArray.push(i)
    return outputArray
}
// for loop
function squareArrayEle(arr) {
    for (let i = 0; i < arr.length;i++)
        console.log(Math.pow(arr[i], 2))
}

//while
function squareArrayEle(arr) {
    let i = 0;
    while (i < arr.length) {
        console.log(Math.pow(arr[i], 2))
        i++;
    }
}

//forEach
function squareArrayEle(arr) {
    arr.forEach((ele) => {
        console.log(Math.pow(ele, 2))
    })
}
squareArrayEle(arrayGen(8))