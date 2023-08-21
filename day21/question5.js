// Design a form with an input field. Implement a focus event listener that changes the input's border color to blue when it gains focus (Event: focus).

document.getElementById('name').addEventListener('focus', (event) => {
    document.getElementById('name').style.border='2px solid crimson'
})