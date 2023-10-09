// Find the max sum of left and right neighbour and return the mid element index
// const arr = [5,12,3,4,6,11,2,1]
// output - 2
// function getMaxSumNeighbourIndex(arr)
// explanation - 5 has only 12 as a neighbour so sum will be 0 + 12 = 12
// 12 has 2 neighbours 5 and 3 so sum will be 8
// 3 has 2 neighbours 12 and 4 so sum will be 16
// and so on..
// 16 is the maximum sum on index 2 which has number 3 and neighbours are 12 and 4

function getMaxSumNeighbourIndex(arr) {
    if (arr.length === 1) return 0;
    const data=[arr[1],0]
    for (let i = 1; i < arr.length; i++){
        if (i === arr.length - 1) {
            if (arr[i - 1] > data[0]) {
                data[0] =arr[i - 1];
                data[1] = i;
            }
         }
        if (arr[i + 1] + arr[i - 1] > data[0]) {
            data[0] = arr[i + 1] + arr[i - 1];
            data[1]=i
        }
    }
    return data[1];

}
const arr = [5, 12, 3, 4, 6, 11, 2, 1];
console.log(getMaxSumNeighbourIndex(arr));