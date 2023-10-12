// Write a function to find dublicates elements without using an set and map, do it O(n), do not use nested loops
// const arr = [1,1,2,3,4,4,4,5,6,6,7]
// output - [1,4,6]
// function getDublicates(arr) - this function will return array of dublicates in O(n)

function getDublicates(arr) {
    const obj = {};
    for (const elem of arr) {
        if (obj[elem]) {
            obj[elem]=obj[elem]+1
        } else {