const containerBody = document.getElementById('container');
const addInthead = document.getElementById('thead')
const addIntbody = document.getElementById('tbody')
const addRowbutton = document.getElementById('addRowbutton')
const addColumnbutton = document.getElementById('addColumnbutton')
const targetTable=document.getElementById('table')

const table = {
    header: [{ elementType: 'th', columnName: "A", order: 1, sort: 'undefined' },
        { elementType: 'th', columnName: "B", order: 2, sort: 'undefined' },
        { elementType: 'th', columnName: "B", order: 2, sort: 'undefined' },
       ],
    body: [{elementType: "tr", rowOrder: 1,
        columnElement: [{ elementType: "td", columnName: "inputValue", rowOrder: "1", value: "0" },
            { elementType: "td", columnName: "inputValue", rowOrder: "1", value: "90" },
            { elementType: "td", columnName: "inputValue", rowOrder: "1", value: "45" }]
    }]
}

function clearTable() {
    addInthead.innerHTML = "";
    addIntbody.innerHTML = "";
}

const headerData= {
    elementType: "",
    columnName: "",
    order: 1,
    sort: undefined,
};

const bodyData = {
    elementType: "",
    rowOrder: 1,
    columnElement:[]
}

const columnElement= {
    elementType: "",
    columnName: "",
    rowOrder: "",
    value:""
}


targetTable.style.border = "1px solid black";
targetTable.style.padding = "px";
addIntbody.style.padding = "10px";
addInthead.style.padding="20px"
let count = 1;

function createInputElement() {
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.style.padding = "10px"
    inputElement.style.fontSize = "15px";
    return inputElement;
}
const createTableElement = (elementType) => {
    const element = document.createElement(elementType);
    element.style.padding = "10px"
    element.style.border = "1px solid black";
    return element
}
function createTableUi() {
    clearTable();
    table.header.forEach((element) => {
        const th = createTableElement(element.elementType);
        th.append(element.columnName);
        addInthead.append(th)
        // console.log(element)
    })
    table.body.forEach((element) => {
        const tr = createTableElement(element.elementType);
        element.columnElement.forEach((columnElement) => {
            const td = createTableElement(columnElement.elementType);
            td.append(columnElement.columnName);
            tr.append(td)
        })
        addIntbody.append(tr);
        // console.log(tr)
    })
}
createTableUi()

const createThead = () => {
    const th = createTableElement('th');
    th.append(createInputElement())
    addInthead.append(th);
    const childrenbody = addInthead.children
    if (childrenbody.length) { 
        createTbody()
    }
}
const createTbody = () => {
    const childrenbody = addIntbody.children
    if (!childrenbody.length) {
        const tr = document.createElement('tr');
        tr.setAttribute('id','bodyTr')
        const td = document.createElement('td');
        td.append(createInputElement());
        tr.append(td)
        addIntbody.append(tr)
    }
    else {
        for (let i = 0; i < childrenbody.length;i++){
            const td =createTableElement('td');
            td.append(createInputElement());
            td.style.padding = "10px"
            td.style.border = "1px solid black";
            childrenbody[i].append(td)
        };
    }
}
function appendNewRowInBody() {
    const childrenbody = addIntbody.children
    if (!childrenbody.length) {
        alert("Table Empty!");
        return;
    }
    const bodyTr = document.getElementById("bodyTr")
    const tr = document.createElement('tr');
    console.log(bodyTr)
    for (let i = 0; i < bodyTr.children.length ; i++){
        const td = document.createElement('td');
        td.append(createInputElement());
        td.style.padding = "10px"
        td.style.border = "1px solid black";
        tr.append(td)
    }
    addIntbody.append(tr)
}

addColumnbutton.addEventListener('click', (event) => {
    createThead();

})

addRowbutton.addEventListener('click', (event) => {
    appendNewRowInBody();
})