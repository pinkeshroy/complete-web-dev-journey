function arrayGen(num) {
    const outputArray = []
    for (let i = 1; i <= num; i++)
        outputArray.push(Math.round(Math.random()*10))
    return outputArray
}
function sumOfEven(array) {
    let calculate = 0;
    for (const elem of array) {
        if (elem % 2 === 0) calculate += elem
    }
    console.log(calculate)
}
sumOfEven(arrayGen(8))