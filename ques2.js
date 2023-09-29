// Find the greatest dublicate number among dublicates
// function findMaxDublicate(arr) - this function will return the max dublicate number of an array
// const arr = [11,1,12,2,5,5,6,11,14,11]
// output - 11 - 11 is dublicate and the biggest number among all dublicates

function findMaxDublicate(arr) {
    const map = new Map()
    const max=[0,0]
    for (let i = 0; i < arr.length; i++){
        if (map.get(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        else {
            map.set(arr[i], 1)
            if (max[0] < arr[i]) {
                max[0] = arr[i]
                max[1] = 1
            }
        }
        
    }
    
}

const arr = [11, 1, 12, 2, 5, 5, 6, 11, 14, 11];

console.log(findMaxDublicate(arr))

