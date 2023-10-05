// Find the elements the divides the sum of all elements
// const arr = [1,2,3,4,5]
// output - [1, 3, 5]
// function findDivisibleElements(arr) - this function will return the array of elements

function findDivisibleElements(arr) {

    const sum = arr.reduce((acc, elem) => {
        return acc+=elem
    }, 0)
    const newArr=arr.filter(elem=>sum%elem===0)

    return newArr;
    
}
const arr = [1, 2, 3, 4, 5];
console.log(findDivisibleElements(arr));