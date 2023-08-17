let array=["ngkjwgb","jbhdfgkj","fhyewiur"]

for (let i = 0; i < array.length; i++) {
    let str = `` + array[i].charAt(0)
    str=str.toUpperCase()
    let str1 = array[i].substring(1)
    array[i]=str.concat(str1)
}

console.log({ array })
