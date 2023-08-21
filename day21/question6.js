// Create a paragraph of text.Add a contextmenu event listener that displays an alert saying "Right-clicked!" when the user right - clicks on the paragraph(Event: contextmenu).

document.querySelector('p').addEventListener('contextmenu', (event) => {
    alert("right-clicked ")
})