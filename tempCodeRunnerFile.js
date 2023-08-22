// unsortedArray) {
//     const array = [...unsortedArray];

//     if (array.length <= 1) return array;
//     const mid = Math.floor(array.length / 2);

//     const leftSortedArray = mergeSort(array.slice(0, mid)); 
//     const rightSortedArray = mergeSort(array.slice(mid, array.length)); 

//     return mergeSortedArray(leftSortedArray, rightSortedArray);
// }
// console.log(mergeSort([47, 61, 88, 2