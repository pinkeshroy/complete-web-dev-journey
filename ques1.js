// Find the objects with satisfy below conditions
// name should start with A or B
// age should be less than 25
// const arr = [ { name:"bca", age:21 }, { name:"ba", age:25 }, { name:"aa", age:12 },{ name:"da", age:21 }, { name:"Ab", age:26 },{ name:"Aa", age:21 } ]
// output - [ { name:"bca", age:21 }, { name:"aa", age:12 },{ name:"Aa", age:21 } ]
// function getEligibleMembers(arr) - this function will return an array with the satisfied conditions

function getEligibleMembers(arr) {
    const newArr = [];
    for (const obj of arr) {
        const name =obj.name.toLowerCase()
        if ((name.charAt(0) === "a" ||name.charAt(0) === "b") && obj.age < 25) {
          newArr.push(obj);
        }
    }
    return newArr;
    
}
const arr = [
  { name: "bca", age: 21 },
  { name: "ba", age: 25 },
  { name: "aa", age: 12 },
  { name: "da", age: 21 },
  { name: "Ab", age: 26 },
  { name: "Aa", age: 21 },
];

console.log(getEligibleMembers(arr));