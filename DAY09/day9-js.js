 //Bind

const obj1={
    studentName:"Pinkesh",
    math:60,
     phy:50,
     getTotal:function () {
        return this.math+this.phy   
     }
}

const obj2={
    studentName:"roy",
    math:68,
     phy:55,
}
// bind 
// call
const objectTotal=obj1.getTotal.call(obj2)
// console.log({obj1:obj1.getTotal(),obj2:obj2Total})
objectTotal