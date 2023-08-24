const idInput = document.getElementById('idInput');
const todoList = document.getElementById('todoList');
const submitButton = document.getElementById('submitButton');
const dataRespose = document.getElementById('dataRespose');
const searchInput = document.getElementById('searchInput');
const todoLidata=[]
const GET_URL = (idInputVal) => `https://jsonplaceholder.typicode.com/todos/${idInputVal}`

const clearTodoList = () => {
    todoList.innerHTML=""
}
const addLi = (element) => {
    const liTagElement = document.createElement('li')
    liTagElement.innerText = element;
    todoList.append(liTagElement)
}
const updateUi = () => {
    clearTodoList();
    todoLidata.forEach((element) => {
        addLi(element)
    })
}

const storeDataInArray = (indexValue)=>{
    todoLidata.push(indexValue)
}

const changeButtonText = (buttonText) => {
    submitButton.innerText = buttonText;
}

const apiCallFunction = async (API) => {
    const todoResponseData = await fetch(API);
    const dataTodo = await todoResponseData.json();
    return dataTodo;
}

const handleAddTaskSubmit = async (event) => {
    event.preventDefault();
    const idInputVal = idInput.value;
    if (idInputVal === '' || idInputVal <= 0 || idInputVal > 200) {
        alert("invalid input Id!");
        return;
    }
    changeButtonText("Adding");
    const dataTodo = await apiCallFunction(GET_URL(idInputVal));

    if (!dataTodo.title) {
        alert("Failed to get data");
        changeButtonText("Add");
    }
    storeDataInArray(dataTodo.title); 
    updateUi();
    idInput.value = "";
    changeButtonText("Add");
    dataRespose.setAttribute('style', "display:block");
}
const getDataSearchData=(serachValue)=>{
    clearTodoList();
    todoLidata.forEach((element) => {
        if (element.includes(serachValue)) {
            addLi(element)
        }
    })
}
const handleSearchInput = (event) => {
    const searchValue = event.target.value;
    if(todoLidata.length!==0)
        getDataSearchData(searchValue);
    else {
        alert("No data in memory!")
    }
}