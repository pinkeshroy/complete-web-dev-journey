// const map=new Map();
// const character={
//     firstName:"pinkesh",
//     lastName:"roy"
// }

// const map=new Map(Object.entries(character))
// map.set('age',20)
// map.get('age')

// map.values()
// map.keys()
// map.set('age',21)

// map.valueOf()
// map.size

// map.delete('age')
// map.clear()
// console.log(map)
// map.set('age',20)
// map.has('age')

// let arr=[['2',2],[4],[9]]
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j])
//     }
// }
// for(const brr of arr)
//     console.log(brr)

// traversing 2-D array using map()
// arr.map((a)=>{
//     a.map((b1)=>{
//         console.log(b1)
//     })
// })

const set = new Set();
let str1 = "Abcdef ghiJKL jkjn mnopQrstuvwwyz".toLowerCase()
const str = str1.replaceAll(" ", "")
for (let i = 0; i < str.length; i++) {
    set.add(str.charAt(i))
}
if (set.size == 26) console.log("true")
else console.log(false)

// console.log(a11.size)
// for(let i=0;i<str.length;i++){
//     set.add(str.charAt(i))
// }
// set.size===26
// set.add('A')
// set.add(10);
// set.add(5)
// const val=set.values()
// console.log(val.next().value)
// console.log(val.next().value)
// set.has(10)

