const arr = [93, 2, 6, 54, 51, 73, 8]

const newArr = arr.filter((num) => {
    let flag = true;
    for (let i = 2; i < num / 2; i++){
        if (num %i===0) {
            flag=false
        }
    }
    if(flag)return num
})

console.log(newArr)