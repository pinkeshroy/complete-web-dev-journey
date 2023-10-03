// Write a function to find the sum of all the non-repeating elements
// const arr = [1,1,2,4,5,5,3]
// function getUniqueNumberSum(arr) - this function will return sum of all unique numbers
// output - 2 + 4 + 3 = 9

function getUniqueNumberSum(arr) {
    const map = new Map();
    for (const elem of arr) {
        if (map.has(elem)) {
            map.set(elem,map.get(elem)+1)
        }
        else {
            map.set(elem,1)
        }
    }
    let sum=0
    for (const [key,val] of map) {
        if (val <= 1) {
            sum+=key
        }
    }
    return sum;
}

const arr = [1, 1, 2, 4, 5, 5, 3];
console.log(getUniqueNumberSum(arr));

