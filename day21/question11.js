// Create a button and when user click on button then it show a modal with user's name, age, gender and email with a "Close" text on the top right side and hide modal click of this text.

const card = document.getElementById('card')
card.style.display = 'none'
const btnToShow = document.getElementById('btn')
btnToShow.addEventListener('submit', (event) => {
    card.style.display = 'initial'
})