const arr=[45,3,5,88,99,90,34]
const sum = arr.reduce((a,num)=> {
    return a+=num
}, 0)
console.log(sum)