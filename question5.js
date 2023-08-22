function arrayGenerator(startNum, endNum,steps) {
    const array = []
    while (startNum <= endNum) {
        array.push(startNum);
        startNum += steps;
    }
    return array
}

console.log(arrayGenerator(5,20,4))