// Design an input field. Implement a keyup event listener that displays an alert with the current value of the input field whenever a key is released (Event: keyup).

const inputTarget = document.getElementById('name')
inputTarget.addEventListener('keyup', (event) => {
    //   console.log(event)
    alert(inputTarget.value)
})