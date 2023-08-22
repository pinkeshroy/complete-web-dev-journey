// Shuffle an array
function shuffle(array) {
    array.forEach((eleemt, i) => {
        const j = Math.floor(Math.random() * i);
        [array[i], array[j]] = [array[j], array[i]]
    })
}
const array = [1, 2, 3,4, 5, 6, 7, 8, 9]
shuffle(array)
console.log(array);