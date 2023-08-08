// let arr=[1,2,3,4,5]

// let reduced=arr.reduce((r,val,inx,arr)=>{
//     return r*val
// },1)

const itemsPrice=[100,200,300]
const gst=18

const getGross=(itemsPrice,gst)=>itemsPrice.map(val=> {const gross=val + val*gst/100
                                                      return gross} )
const amounts=getGross(itemsPrice,gst)

const totalOfGross=(amounts1)=>{
    return amounts1.reduce((r,val)=>{
        console.log({r, val})
        return r+val
    }, 0)
}
const totalSumOfGross=totalOfGross(amounts)
// console.log(amounts,+"  Total Gst collection: "+totalSumOfGross)


const reduceSeriveCharge=(totalSumOfGross,ServiceCharge)=>{
    return totalSumOfGross*(100-ServiceCharge)/100
}
const serviceCharge=24.8975;
const reducedServiceCharges=reduceSeriveCharge(totalSumOfGross,serviceCharge)

console.log(`${amounts} Totals Gst collection : ${totalSumOfGross} Reduced service charge : ${reducedServiceCharges}`)

const caluatePercentage=(billAmount,percent)=>{
    return billAmount*percent/100
}

const tipsCalculateFun=(reducedServiceCharges)=>{
    switch(true){
        case (reducedServiceCharges < 250):
            console.log(reducedServiceCharges)
            const tipPercent=caluatePercentage(reducedServiceCharges,25)
            console.log(`cST: ${tipPercent}`)
            return reducedServiceCharges+tipPercent
            break
        case (reducedServiceCharges < 500):
            const tipPercent1=caluatePercentage(reducedServiceCharges,15)
            console.log(`cST: ${tipPercent1}`)
            return reducedServiceCharges+tipPercent1
            break
        case (reducedServiceCharges <1000):
            const tipPercent2=caluatePercentage(reducedServiceCharges,10)
            console.log(`cST: ${tipPercent2}`)
            return reducedServiceCharges+tipPercent2
            break
    }
}

const sumOfTipAmount=tipsCalculateFun(reducedServiceCharges)
console.log(`Sum of tip amount: ${sumOfTipAmount}`)