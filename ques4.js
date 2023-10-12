// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).
// Example 1:.
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

function findMedian(arr1, arr2) {

    const arr = arr1.concat(arr2);
    let sortedArr = arr.sort((a, b) => a - b);
    
    if (sortedArr.length % 2 === 0) return ((sortedArr[sortedArr.length / 2] + sortedArr[(sortedArr.length / 2)-1]) / 2).toFixed(5);
    return  (sortedArr[Math.floor(sortedArr.length / 2)]).toFixed(5)    
}
const nums1 = [1, 3],
  nums2 = [2,4];
  
    console.log(findMedian(nums1,nums2));