    // Count the occurrences of all array elements (frequency counter)
// — create a function that takes 1 arg: arr array of random numbers or string
// — this function returns an object which has arr element as key, and it count as value.

function occurrenceCounter(arr) {
    const frequency = {}
    arr.forEach((element) => {
        if (frequency[element])frequency[element]++;
        else frequency[element] = 1
    });
    return frequency
}


console.log(occurrenceCounter([4,4,5,9,6,7,8,9,1,4]))