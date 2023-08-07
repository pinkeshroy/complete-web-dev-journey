
// const newArr = arr.slice(4)
// console.log(`SubArray:- ${newArr}`)

// const newArr=arr.splice(2,1,11,12)
// console.log(`Deleted item:- ${newArr} modified Array:- ${arr}`)
// const index = arr.indexOf(4,5)
// // console.log(index)

// const stringOfArray = arr.join(",")
// console.log(stringOfArray)

// const arr = [1, 2, 3, 4, 5, 6, 7, 4,8,9]
// const present = arr.includes(4)
// console.log(present)

// const array = [3, 5, 7, 19, 1, 45, 67, 4, 2, 6]
// const sortedArray = ["harry", "Mahesh", "Pratik", "Khati"].sort((a, b) => {
//     if (a > b)
//         return -1
//     else if (b > a) return 1
//     else return 0
// })
// console.log(`Sorted array:- ${sortedArray}`)


// const filterredArray = arr.filter((element) => element > 20 )
// console.log(filterredArray)

// const squareElement = arr.map(element => {
//     return element>20?element:false
// })
// console.log(squareElement)

// const newArray=arr.forEach((element)=>console.log(element+10))

// const findElement = arr.find(element => element > 90)

// const findLastElement = arr.findLast(element=>element>20)
// console.log(findLastElement)

// const findIndex = arr.findIndex(element => element > 100)
// console.log(findIndex)

// const findlastIndex =arr.findLastIndex (element => element > 30)
// console.log(arr,findlastIndex)

// const arraySome=arr.some(element=> element===32)
// console.log(arraySome)

// const allEelementCondition=arr.every(element1=>element1%2===0)
// console.log(allEelementCondition)

// arr.reverse()
// console.log(arr)
// const arr = [4, 18,26, [42, 10, 2,[ 8, 32, 2],34,66], 4, 20, 56, 22]

// const flatArray = arr.flat(2)
// console.log(flatArray)


// const flatMap = arr.flatMap(element => {
//     if (typeof element === "number") {
//         return element ** 2
//     }
//     else
//         return element
// })
// console.log(flatMap.flat(1))

const studentDetails = [
    { name: "Mohan", marks: 59 },
    { name: "Pratik", marks: 66 },
    { name: "kunal", marks: 56 },
    { name: "sohan", marks: 30 },
    { name: "golhan", marks: 24 }
];

let newStudentDetails = [];

studentDetails.forEach(studentData => {
    if (studentData.marks >33) {
        newStudentDetails.push({
            name: studentData.name,
            marks: studentData.marks,
            status: "Pass",
            // passWith:studentData.marks-33
        })
    }
    else {
        newStudentDetails.push({
            name: studentData.name,
            marks: studentData.marks,
            status: "Fail",
            failingMarks:33-studentData.marks
        })
    }
})
console.log(newStudentDetails)







