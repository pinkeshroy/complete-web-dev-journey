function calculateTotalPrice(age) {
    let totalPrice=0
    for (let i = 0; i < age.length; i++){
        if (age[i] < 12) totalPrice+=5
        else if (age[i] >= 12 && age[i] <= 17) totalPrice+=10
        else if (age[i] >= 18 && age[i] <= 59) totalPrice += 15
        else totalPrice += 8
    }
    return totalPrice
}
console.log(calculateTotalPrice([1,3,2,4,5]))