// Write a function to find unique elements without using an set and map, do it O(n), do not use nested loops
// const arr = [1,1,2,3,4,4,4,5,6,6,7]
// output - [2,3,5,7]
// function getUniqueNumbers(arr) - this function will return array of unique numbers in O(n)

function getUniqueNumbers(arr) {
  const obj = {};
  for (const elem of arr) {
    if (obj[elem]) {
      obj[elem] = obj[elem] + 1;
    } else {
      obj[elem] = 1;
    }
  }
  const newArr = [];
  let i = 0;
  for (const [key, value] of Object.entries(obj)) {
    if (value ===1) {
      newArr[i++] = Number(key);
    }
  }
  return newArr;
}
const arr = [1, 1, 2, 3, 4, 4, 4, 5, 6, 6, 7]
console.log(getUniqueNumbers(arr));