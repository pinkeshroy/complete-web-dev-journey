// Easy - Find the peak of the mountain
// const arr = [ 1,2,3,6,3,1 ]
// output - 6
// function getPeak(arr) - this function will return peak of the mountain, 6 is greater among all so 6 is the peak

function getPeak(arr) {
    return arr.reduce((acc, elem) => {
        if (acc < elem) return elem;
        else return acc;
    },0)
}

const arr = [1, 2, 3, 6, 3, 1];

console.log(getPeak(arr));