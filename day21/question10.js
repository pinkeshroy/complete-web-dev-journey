// Create a div of full 100vh and 100vw width and when user right click on div then changes background color to a random color on each click.

const divTarget = document.getElementById('div1')
divTarget.style.width = '100vw'
divTarget.style.height = '100vh'
divTarget.style.backgroundColor='yellow'
console.log(divTarget)
divTarget.addEventListener('contextmenu', (event) => {
    divTarget.style.backgroundColor="crimson"
})