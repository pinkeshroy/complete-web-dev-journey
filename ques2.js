// Move multiple of 2 in left side and multiple of 3 on right side, the numbers which are divisible by both or not divisible by any of them should be removed from array.
// const arr = [9,4,6,2,7,12,14,21]
// num1 = 2
// num2 = 3
// output - [4,2,14,9,21]
// function findElemenetsDivisibleBy(arr. num1, num2) - this function will return array

function findElemenetsDivisibleBy(arr, num1, num2) {
    const newArr1 = []
    const newArr2 = [];
    for (const elem of arr) {
        if (elem % num1 === 0 && elem % num2 === 0) {
            continue;
        } else if (elem % num1 == 0) {
            newArr1.push(elem)
        } else {
            newArr2.push(elem);            
        }
        
    }
    return newArr1.concat(newArr2);
    
    
}
const arr = [9, 4, 6, 2, 7, 12, 14, 21];
const num1 = 2;
const num2 = 3;
console.log(findElemenetsDivisibleBy(arr, num1, num2))