function leapYearChecker(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) )
        console.log("Leap Year");
    else 
        console.log("year is not leap year")
}
leapYearChecker(1700)