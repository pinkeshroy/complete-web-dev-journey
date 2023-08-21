// Create a div element with some text inside. Implement a mousedown event listener that changes the text to "Clicked!" when the user clicks on the div (Event: mousedown).

const divTarget = document.getElementById('div')
divTarget.addEventListener('mousedown', (event) => {
    divTarget.innerText ="Clicked!"
})