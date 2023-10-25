// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false

function validatePostion(s = "", goal = "") {

    for (const elem of s) {
        if (s === goal) return true;
        else {
            const first = s.substring(0,1)
            s=s.substring(1)+first
        }
    }

    if (s === goal) return true;
    return false;
    
}
const s = "abcde", goal = "abced"

console.log(validatePostion(s,goal));
