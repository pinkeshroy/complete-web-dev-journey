// Given an integer x, return true if x is a palindrome
// , and false otherwise.
// Example 1:
// Input: x = 121
// Output: true

// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

function validatePalindrome(num1) {
  let newNum = 0
  let num = Math.abs(num1);
  while (num != 0) {
    if (newNum === 0) newNum = num % 10;
    else {
      newNum = (newNum * 10 )+ (num % 10);
    }
    num = Math.floor(num / 10)
  }
  if (Number(num1) === Number(newNum)) return true
  return false
}

const x = 121;

console.log(validatePalindrome(x));