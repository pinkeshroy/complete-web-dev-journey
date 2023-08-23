const apiCall = document.getElementById("apiCallButton")
const datUi = document.getElementById("dataShowOnUI")
async function apiFetchCall(URL) {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}
const handleFormSubmit = async (event) => {
    event.preventDefault();
    const objIdValue = document.getElementById('objId').value
    if (objIdValue > 200 || objIdValue < 1) {
        console.log("Please enter right id number between 1-200 only")
    } else {
        const api = (`https://jsonplaceholder.typicode.com/todos/${objIdValue}`)
        const receivedData=await apiFetchCall(api)
        datUi.innerHTML = `<p><strong>Id: ${receivedData.id}<br>Title: ${receivedData.title}`

    }
}