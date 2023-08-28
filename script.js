const LOCAL_STORAGE_TABLE_KEY = 'tableStateData'

let tableState = {
    header: [],
    body: []
}

if (localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)) {
    tableState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TABLE_KEY));
} else {
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
}
const containerBody = document.getElementById('container');
const addInTableHead = document.getElementById('thead')
const addInTableBody = document.getElementById('tbody')
const addRowbutton = document.getElementById('addRowbutton')
const addColumnbutton = document.getElementById('addColumnbutton')
const clearLocalData = document.getElementById('clearLocalData');

const getInput = document.getElementsByTagName('textarea')

console.log({ getInput });

const updateTableData = (tableState) => {
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
    createTableUi(tableState)
}

function clearTableUi() {
    addInTableHead.innerHTML = "";
    addInTableBody.innerHTML = "";
}

function createInputElement(celltype, value, id) {
    const elementType = celltype === 'headCell' ? 'input' : 'textarea'
    const inputElement = document.createElement(elementType);
    inputElement.value = value;
    inputElement.setAttribute('id', id)

    if (celltype === 'headCell') {
        inputElement.setAttribute('placeholder', 'Column Name');
    } else if (celltype === 'bodyCell') {
        inputElement.setAttribute('placeholder', 'Row Data');
    }
    inputElement.setAttribute('type', 'text');
    // inputElement.addEventListener('keyup', () => {
    //     handleInputChange(id)
    // });
    return inputElement;
}
const createTableElement = (elementType) => {
    const element = document.createElement(elementType);
    return element
}
function createTableUi(tablestate) {
    clearTableUi();
    // createHeader
    tablestate.header.forEach((element) => {
        const th = createTableElement(element.elementType);
        const inputElement = createInputElement('headCell', "", `head-0-${element.columnNumber}`)
        inputElement.value=element.columnName
        th.append(inputElement);
        addInTableHead.append(th)
    })
    //  createBody
    tablestate.body.forEach((element) => {
        const tr = document.createElement(element.elementType);
        element.columnDetails.forEach((element) => {
            const tdElement = document.createElement(element.elementType);
            const textAreaElement = createInputElement('bodyCell', "", `body-${element.rowNumber}-${element.columnNumber}`)
            textAreaElement.value = element.cellValue
            tdElement.append(textAreaElement)
            tr.append(tdElement)
        })
        addInTableBody.append(tr);
    })
}
createTableUi(tableState);

const addNewColumnDetails = (columnNumber) => {
    tableState.body.forEach((element, idx) => {
        const tdObject = {
            elementType: "td",
            columnNumber: columnNumber,
            rowNumber: idx,
            cellValue: `Cell ${Math.floor(Math.random() * 10)}`
        }
        element.columnDetails.push(tdObject)
    })
}
const addNewColumn = () => {
    const headerObj = {
        elementType: "th",
        columnName: "A",
        columnNumber: tableState.header.length,
        sort: "",
    };
    addNewColumnDetails(headerObj.columnNumber);
    tableState.header.push(headerObj);
    updateTableData(tableState)
}

function addNewRow() {
    const bodyRow = {
        elementType: "tr",
        rowNumber: tableState.body.length,
        columnDetails: []
    }
    tableState.header.forEach(headerObj => {
        bodyRow.columnDetails.push({
            elementType: 'td',
            columnNumber: headerObj.columnNumber,
            rowNumber: bodyRow.rowNumber,
            cellValue: `Cell ${Math.floor(Math.random() * 10)}`
        })
    })
    tableState.body.push(bodyRow)
    updateTableData(tableState);
}

addColumnbutton.addEventListener('click', (event) => {
    addNewColumn();
})

addRowbutton.addEventListener('click', (event) => {
    addNewRow()
})

clearLocalData.addEventListener('click', (event) => {
    localStorage.clear()
    clearTableUi();
})

addInTableBody.addEventListener("keyup", (event) => {
    const [isBody, rowNumber, columnNumber] = event.target.id.split("-") // body-2-3
    tableState.body[rowNumber].columnDetails[columnNumber].cellValue = event.target.value
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
})


addInTableHead.addEventListener("keyup", (event) => {
    const [ishead, rowNumber, columnNumber] = event.target.id.split("-") // head-0-3
    tableState.header[columnNumber].columnName=event.target.value
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
})