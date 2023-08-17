function factorial(number) {
    let fact = 1
    while (number>0) {
        fact*=number--;
    }
    console.log(fact)
}
factorial(15)