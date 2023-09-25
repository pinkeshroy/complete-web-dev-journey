// "5. Group items on the basis of age of given array of object.
// const peoples = [
//     { name: "a", age: 71 },
//     { name: "b", age: 20 },
//     { name: "c", age: 22 },
//     { name: "d", age: 21 },
//     { name: "e", age: 22 },
//     { name: "f", age: 22 }
// ]
// expected output = {
//     21: [{ name: "a", age: 21 }, { name: "d", age: 21 }],
//     20: [{ name: "b", age: 20 }],
//     22: [{ name: "c", age: 22 }, { name: "e", age: 22 },
//     { name: "f", age: 22 }]
// }

function validatePeoples(peoples) {
    const output = {}
    for (let i = 0; i < peoples.length; i++) {
        if (output[peoples[i].age]) {
            output[peoples[i].age] = [...output[peoples[i].age], peoples[i]]
        }
        else {
            output[peoples[i].age] = [peoples[i]]
        }
    }
     return output
}
const peoples = [
    { name: "a", age: 71 },
    { name: "b", age: 20 },
    { name: "c", age: 22 },
    { name: "d", age: 21 },
    { name: "e", age: 22 },
    { name: "f", age: 22 }
]

console.log(validatePeoples(peoples))
