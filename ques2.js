// Word Pattern
// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

function validatePattern(pattern, s) {
    const obj = {}
    const data = s.split(" ")
    for (let i = 0; i < pattern.length; i++) {
        if (obj[pattern.charAt(i)]) {
            if (obj[pattern.charAt(i)]!==data[i]) {
                return false;
            }
        } else {
            obj[pattern.charAt(i)] = data[i];
        }
    }
    return true;
    
}

const pattern = "abba",
    s = "dog cat cat dog";
  console.log(validatePattern(pattern,s));