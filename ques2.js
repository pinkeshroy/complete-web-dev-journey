// Write a function to find the sum of all the non-repeating elements
// const arr = [1,1,2,4,5,5,3]
// function getUniqueNumberSum(arr) - this function will return sum of all unique numbers
// output - 2 + 4 + 3 = 9

function getUniqueNumberSum(arr) {
    const set = new Set();
    for (const elem of arr) {
        if (set.has(elem)) {
            set.delete(elem)
        }
        else {
            set.add(elem)
        }
    }
    let sum=0
    for (const elem of set) {
        sum+=elem
    }
    return sum;
}

const arr = [1, 1, 2, 4, 5, 5, 3];
console.log(getUniqueNumberSum(arr));

