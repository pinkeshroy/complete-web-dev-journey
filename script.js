// const studentObj = {
//     name: 'Pinkesh Roy',
//     rollNumber: 23,
//     class: 9,
//     section: 'A',
//     gender: 'Male',
//     Country: 'India'
// }
// for (const value in studentObj) console.log(value)
// console.log(Object.keys(studentObj))
// console.log(Object.values(studentObj))
// console.log(Object.entries(studentObj))

// const obj1 = {
//     name: 'pratik',
//     gender: 'male'

// }
// const obj2 = {
//     section: 'B',
//     gender:'orther'
// }
// const obj3 = {
//     national:'Turkmenistan'
// }
// console.log(Object.assign(obj1,obj2,obj3))
// const obj1 = {
//     name: 'pratik',
//     gender:'male',
//     printIntroduction: function(){
//         console.log(`My name is ${this.name} And gender is ${this.gender} and ${this.age} and   gf: ${this.girlfriend} , commited  ${this.committed}`)
//     },
// };
// const student1 = Object.create(obj1)
// student1.age = 22;
// student1.girlfriend = 'many';
// student1.committed = false;
// student1.printIntroduction()

// const obj = {
//     pro1: 10
// }
// const changeobj = Object.defineProperties({}, {
//     pro1: {
//         value: 10,
//         writable: true
//     },
//     prot2: {
//         value: 'manish',
//         writable: true
//     }
// })
// Object.defineProperty(obj, 'proto2', { value: 'Sunil' })
// console.log({ changeobj})
// const obj = {
//     name:'praik',
// }
// Object.defineProperties(obj, { name: { value: 'hemen' },  add: { value: 888 } })

// // Object.preventExtensions(obj)
// Object.seal(obj)
// console.log(obj)
