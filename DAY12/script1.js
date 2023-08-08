const calculatePerAvg = (studentdetailsObj) => {
    const { math, science, history, english, art } = studentdetailsObj;
    const totalMarks = math + science + history + english + art;
    const averageMarks = totalMarks / 5;
    const percentageGain = totalMarks * 100 / 400;
    return {averageMarks,percentageGain}
}
const studentDetails={
    math:80,
    science: 75,
    history :70,
    english :65,
    art:72,
}

const calcutedData = calculatePerAvg(studentDetails)
console.log(`Average marks is: ${calcutedData.averageMarks}, Percentage: ${calcutedData.percentageGain}`)