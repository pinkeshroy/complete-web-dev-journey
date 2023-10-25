// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.A divisor of an integer x is an integer that can divide x evenly.
// Given an integer n, return true if n is a perfect number, otherwise return false.

// Example 1:

// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.
// Example 2:

// Input: num = 7
// Output: false

function validatePositiveInteger(n= 0) {
    let divisorSum = 0;
    for (let i = 1; i <= n / 2; i++){
        if (n % i === 0) {
            divisorSum += i;
        }
    }
    if (divisorSum === n) return true;
    return false;
}

const n = 28;
console.log(validatePositiveInteger(n));