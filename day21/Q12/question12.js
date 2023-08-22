// Open sidebar on click a "Open Modal" and then change button text to "Close Modal", When user clicks on "Close Modal" the hide modal and change text to "Open Modal".

const sidebar = document.getElementById("sideBar")
sidebar.style.display = 'none'
console.log(sidebar.innerHTML)
const eventOnSidebar = document.getElementById('btn')
eventOnSidebar.addEventListener('click', (event) => {
    sidebar.style.display='block'
})