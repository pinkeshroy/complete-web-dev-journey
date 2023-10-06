// remove all the next multiples of the number in an array
// const arr = [ 3, 4, 8 , 9, 10, 5, 11, 12, 13, 14, 15 ]
// output - [ 3, 4, 10, 5, 11, 13, 14 ]
// function removeNextMultiple(arr)- this function will return an array
// explanation -
// 3 - no number divides 3 before 3 - cannot remove
// 4 - no number divides 4 before 4 - cannot remove
// 8 - 4 divides 8 before 8 - remove
// 9 - 3 divides 9 before 9 - remove
// 10 - no number divides 10 before 10
// and so on

function removeNextMultiple(arr) {
    const newArr = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        let boolean = true;
        for (const elem of newArr) {
            if (arr[i] % elem === 0) {
                boolean = false; 
                break;
            }
        }
        if (boolean) {
            newArr.push(arr[i])
        }
    }
    return newArr;
    
}
const arr = [3, 4, 8, 9, 10, 5, 11, 12, 13, 14, 15];
 console.log(removeNextMultiple(arr));
