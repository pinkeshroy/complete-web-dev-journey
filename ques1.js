// Notice that the solution set must not contain duplicate triplets.
// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

function findTriplets(nums = []) {
    
    const triplet=[]

    for (let i = 0; i < nums.length; i++){
        const temp=[nums[i]]
        for (let j = i + 1; j < nums.length; j++){
            if (temp.length < 3) temp.push(nums[j]);
            if((temp[0]+temp[1]+nums[j])===0) triplet.push([temp[0] , temp[1] , nums[j]]);
        }
    }
    return triplet


}

const nums = [-1, 0, 1, 2, -1, -4];
console.log(findTriplets(nums));
