function calculateQuizResults(studentsMarks) {
    const arr = []
    for (let i = 0; i < studentsMarks.length; i++){
        let totalMarks=0
        for (let j = 0; j < studentsMarks[i].length; j++){
            totalMarks += studentsMarks[i][j]
        }
        if (totalMarks> 200) {
            arr[i] = [totalMarks, "passed"]
        }
        else {
            arr[i] = [totalMarks, "failed"]
        }
    }
    return arr

}
const studentsMarks = [
    [80, 70, 55],
    [45, 90, 75],
    [70, 60, 65]
];
console.log(calculateQuizResults(studentsMarks));
