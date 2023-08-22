// forEach
// function countOccurence(arr, value) {
//     let count = 0;
//     arr.forEach((element )=> {
//         if (element === value) count++;
//     });
//     if(count===0) return -1
//     return count
    
// }

// function countOccurence(arr, value) {
//     let count = 0;
//     for (let i = 0; i < arr.length;i++) {
//         if (arr[i] === value) count++;
//     }
//     if (count === 0) return -1
//     return count

// }

function countOccurence(arr, value) {
    let count = 0;
    for (const element of arr) {
        if (element === value) count++;
    }
    if (count === 0) return -1
    return count

}

console.log(countOccurence([4,6,8,9,2,44,5,7,8,8,90,15,78],55))