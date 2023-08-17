function sumOfDigitsToPower(num) {
    let str = "" + num
    let n = str.length
    // console.log(n)
    let sumPow = 0
    while (num > 0) {
        let baseNum = num % 10
        sumPow += Math.pow(baseNum, n)
        // console.log(sumPow)
        num=Math.floor(num/10)
    }
    return sumPow
}
console.log(sumOfDigitsToPower(123))