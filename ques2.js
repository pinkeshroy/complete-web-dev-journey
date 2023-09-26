// "2. Create a function to check if all the elements in the array is divisible by given num
// const arr = [2, 4, 6, 7]
// const num = 2;
// function getDivisibleNumbers(arr, num) - this function will return array of all elements completely divisible by num


function getDivisibleNumbers(arr, num) {
    
    return arr.filter(element => {
        if(element%num===0)return element
    });

}

console.log(getDivisibleNumbers([2, 4, 6, 7],2))