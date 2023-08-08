
const convertTemperature = (temperature, unit) => {
    if (unit ==='C') {
        return { temp1: (temperature * 9 / 5) + 32, unit:'F' }
    }
    else if(unit==='F'){
        return { temp1: (temperature - 32) * 5 / 9, unit: 'C' }
    }
}

const temp = convertTemperature(98.6, 'F')
console.log(`Temperature is ${temp.temp1}${temp.unit}`)