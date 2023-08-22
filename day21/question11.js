// Create a button and when user click on button then it show a modal with user's name, age, gender and email with a "Close" text on the top right side and hide modal click of this text.

const card = document.getElementById('card')
card.style.display = 'none'
const btnToShow = document.getElementById('btn')
// console.log(btnToShow);
btnToShow.addEventListener('click', () => {
    // console.log("event")
    card.style.display = 'block'
})
const closeDisplay = document.getElementById('close')

closeDisplay.addEventListener('click', () => {
    card.style.display = 'none'
})