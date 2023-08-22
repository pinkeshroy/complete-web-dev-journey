// Get the unique values of an array
// — create a function that takes 2 args: arr
// — this function returns a new array of values from arr, only those which occur only once in that array

function singleOccurenceElement(arr) {
    const sinleOccurElement = []
    const frequency={}
    arr.forEach((element)=> {
        frequency[element]=1
    });
    for (const i of Object.keys(frequency)) {
        sinleOccurElement.push(i)
    }
    return sinleOccurElement;
}

console.log(singleOccurenceElement([8,56,7,8,9,25,6,5,25,17,21,6]))