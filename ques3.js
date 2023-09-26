// "3. Create a function to check if the elements on odd index is an odd number
// const arr = [0, 11, 4, 3, 6]
// function checkOddIndexNumber(arr) - this function will return true if all elements in odd index are odd numbers

function checkOddIndexNumber(arr) {
    arr.forEach((element, idx) => {
        if (idx === 1 && element % 2 === 0) return false
        if(idx%2!==0&& element%2===0) return false 
    });
     return true
}


const arr = [0,11, 4, 3, 6]
console.log(checkOddIndexNumber(arr));