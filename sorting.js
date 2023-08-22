// const insertionSort = (array) => {
//     const n = array.length
//     for (let i = 1; i < n; i++){
//         let current = array[i];
//         let j = i - 1;
//         while (j >= 0 && array[j] > current) {
//             array[j + 1] = array[j]
//             // console.log(array.toString())
//             j--;
//         }
//         array[j+1]=current
//        console.log(array)
//     }
// }
// insertionSort([47, 61, 88, 28, 92, 16, 15, 34, 59, 71]);

// const selectionSort=(array)=> {
//     for (let i = 0; i < array.length; i += 1) {
//         let minIndex = i;
//         let temp = array[i];
//         for (let j = i + 1; j < array.length; j += 1) {
//             if (array[j] > array[minIndex]) minIndex = j;
//         }
//         array[i] = array[minIndex];
//         array[minIndex] = temp;
//         console.log(array)
//     }
// }
// selectionSort([47, 61, 88, 28, 92, 16, 15, 34, 59, 71]);


// function bubbleSort(arr){
//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             const temp=arr[j];
//             arr[j]=arr[i]
//             arr[i]=temp
//         }
//     }
//  }
//     return arr;
// }
// const arr=[47,61,88,28,92,16,34,59,71,55,61];
// console.log(bubbleSort(arr))

// const arr = [47, 61, 88, 28, 92, 16, 34, 59, 71, 55, 61].map(num => [num])

// function mergeSort(array, initialidx, endidx) {
//     if (initialidx >= endidx) return;
//     let mid=initialidx+(endidx-initialidx)/2
//     mergeSort(array, initialidx, mid)
//     mergeSort(array, mid + 1, endidx);
//     mergeSorted(array,initialidx,mid,endidx)
// }

// function mergeSorted(array, startIdx, mid, endIdx) {
//     let temp = [endIdx-startIdx+1]
//     let k = 0;
//     let i = startIdx;
//     let j = mid + 1;
    
//     while (i <= mid && j <= endIdx) {
//         if (array[i] < array[j]) {
//             temp[k++]=array[i++]
//         }
//         else {
//             temp[k++]=array[j++]
//         }
//     }
//     while (i <= mid)
//         temp[k++] = array[i++]
    
//     while (j <= endIdx)
//         temp[k++] = array[j++]
    
//     for (k=0,i=startIdx; k< temp.length; k++,i++){
//         array[i]=temp[k]
//     }
//     console.log(array)

// }

function mergeSort(leftarray, rightarray) {
    const resultarray = []
    while (leftarray.length && rightarray.length) {
        if (leftarray[0] <= rightarray[0])
            resultarray.push(leftarray.shift())
        else 
            resultarray.push(rightarray.shift())
    }
    if (leftarray.length)resultarray.concat(leftarray)
    if (rightarray.length) resultarray.concat(resultarray)
    console.log(resultarray)
    return resultarray
}

mergeSort([1,4],[2,3,5])
















// function mergeSortedArray(leftarray, rightarray) {
//     let resultarray = [];

//     while (leftarray.length && rightarray.length) {
//         if (leftarray[0] <= rightarray[0]) 
//             resultarray.push(leftarray.shift());
//         else 
//             resultarray.push(rightarray.shift());
//     }
//     if (leftarray.length) resultarray = resultarray.concat(leftarray);
    
//     if (rightarray.length) resultarray = resultarray.concat(rightarray);

//     return resultarray;
// }
// function mergeSort(unsortedArray) {
//     const array = [...unsortedArray];

//     if (array.length <= 1) return array;
//     const mid = Math.floor(array.length / 2);

//     const leftSortedArray = mergeSort(array.slice(0, mid)); 
//     const rightSortedArray = mergeSort(array.slice(mid, array.length)); 

//     return mergeSortedArray(leftSortedArray, rightSortedArray);
// }
// console.log(mergeSort([47, 61, 88, 28, 92, 16, 34, 61, 59, 71]))


