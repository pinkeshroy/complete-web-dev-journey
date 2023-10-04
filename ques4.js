// Find frequency of all dublicate elements
// const arr = [1,1,2,3,3,3,4,5,5,5,5]
// function findDublicatesFrequency(arr) - this function will return object with frequency
// output - { 1:2, 3:3, 5:4 }


function findDublicatesFrequency(arr) {
    const obj = {}
    
    for (const elem of arr) {
        if (obj[elem]) {
            obj[elem]=obj[elem]+1
        } else {
            obj[elem]=1
        }
        
    }
    const newobj={}
    for (const [key,val] of Object.entries(obj)) {
        if (val > 1) {
              newobj[key]=val
          }
    }
    
    console.log(newobj);
}
const arr = [1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 5];

console.log(findDublicatesFrequency(arr));