function fibonacciSeries(count) {
    if (count === 1) { console.log(0); return}
    const arr=[0,1]
    for (let i = 2; i < count; i++){
        arr.push(arr[i-1]+arr[i-2])
    }
    console.log(arr)
}
fibonacciSeries(5)