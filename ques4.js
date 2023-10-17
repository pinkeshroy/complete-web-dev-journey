// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2


function countbinaryConsecutiveOnes(arr=[]) {
  let tempcount=0, maxCount = 0;
    
  for (const elem of arr) {
    if (elem === 1) {
      ++tempcount;
    } else {
      if (tempcount > maxCount) maxCount = tempcount;
      tempcount = 0;
    }
  }
  if (tempcount > maxCount)
    return tempcount;
  return maxCount;
}
const nums = [1, 1, 0, 1, 1, 1];
console.log(countbinaryConsecutiveOnes(nums));