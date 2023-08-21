function reverseNumber(num) {
    let revnum = ""
    while (num !== 0) {
        revnum=revnum+(num%10)
        num=Math.floor(num/10)
    }
    console.log(revnum)
}
reverseNumber(354)