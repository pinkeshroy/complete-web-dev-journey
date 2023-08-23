const apiCall = document.getElementById("apiCallButton")

apiCall.addEventListener("click", (event) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => console.log(data))
    .catch((error)=>console.error(error))
})

// async function apiFetchCall(URL) {
//     const response = await fetch(URL)
//     const data =await response.json()
//     console.log(data)
// }