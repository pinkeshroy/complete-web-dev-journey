// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

function findSingleElementCount(arr) {
    const obj = {}
    for (const elem of arr) {
        if (obj[elem]) {
            obj[elem]=obj[elem]+1
        } else {
            obj[elem] = 1;
        }
    }
    for (const [key,val] of Object.entries(obj)) {
        if (val === 1) {
            return key
        }
    }

    
}

const nums = [4, 1, 2, 1, 2];

console.log(findSingleElementCount(nums));
