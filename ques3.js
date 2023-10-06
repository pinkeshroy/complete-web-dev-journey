// Find the square root of a given number - do not use built in method
// const num = 16
// output - 4
// function getSqrt(num) - this function will return square root of a number

function getSqrt(num) {
    let cuurentRoot = 0
    
    for (let i = 1; i < num / 2; i++){
        if ((i * i) <= num) {
            cuurentRoot = i * i;
        }
        if ((i * i) > num)
            break;
    }
    return cuurentRoot
}
const num = 16;
console.log(getSqrt(num));