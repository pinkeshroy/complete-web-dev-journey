// Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function findCommonPrefix(strs) {
    let maxPrefix = "";
    let tempPre = "";
    for (let i = 0; i < strs[0].length; i++) {
        let checker = strs[0]
        tempPre = tempPre + checker.charAt(i);
        for (let j = 1; j < strs.length; j++) {
            let a = strs[j].substring(0, i+1); 
            if (a !== tempPre) {
                return maxPrefix;
            }   
        }
        maxPrefix = tempPre;        
    }
    return maxPrefix;
}

const strs = ["flower", "flow", "flight"];
// const strs = ["dog", "racecar", "car"];

console.log(findCommonPrefix(strs));