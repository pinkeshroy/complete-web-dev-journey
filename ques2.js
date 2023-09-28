// Find the majority element in the array
// function findMajorityElement(arr) - this function will return first majority element from an array
// const arr= [3, 3, 4, 2, 4, 4, 2, 4, 4]
// output - 4

// const arr = [1,1,1,3,3,3,2,2]
// output - 1

function findMajorityElement(arr) {

    let count = 0
    let countElem=arr[0]
    let current = 1;
    let prev=arr[0]
    for (let i = 1; i < arr.length; i++){
        if (arr[i] === prev) {
            current++;
            if (count < current) {
                countElem=arr[i]
            }
        }
        if (arr[i] !== prev) {
            prev = arr[i]
            if (current > count) {
                count = current;
                countElem=arr[i]
            }
            current=1;
        }
        
    }
    if (current > count)
        count = current
    
    return countElem
   
    
}
const arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
//  const arr = [1, 1, 1, 3, 3, 3, 2, 2];
arr.sort()

console.log(findMajorityElement(arr))