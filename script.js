const LOCAL_STORAGE_TABLE_KEY = "tableStateData";

const table = document.getElementById("table");
const tHead = document.getElementById("thead");
const tBody = document.getElementById("tbody");
const addRowButton = document.getElementById("addRowButton");
const addColumnButton = document.getElementById("addColumnButton");
const clearLocalData = document.getElementById("clearLocalData");
const sortForm = document.getElementById("sortForm");
const selectOption = document.querySelector(".columnsDropDown");
let tableState = {
  header: [],
  body: [],
};

/**
 * when the page loads for first-time or when it's refreshed,
 * we check the localStorage if it has table data,
 */
document.addEventListener("DOMContentLoaded", syncUIWithLocalStorage);

sortForm.addEventListener("submit", sortTableByColumn);

addColumnButton.addEventListener("click", addNewColumn);

addRowButton.addEventListener("click", addNewRow);

clearLocalData.addEventListener("click", () => {
  localStorage.clear();
  clearTableUI();
  // window.location.reload();refresh the UI
});

tBody.addEventListener("keyup", (event) => {
  const [rowNumber, columnNumber] = event.target.id.split("-"); // 2-3
  tableState.body[rowNumber].columnDetails[columnNumber].cellValue =
    event.target.value;
  localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
});

tHead.addEventListener("keyup", (event) => {
  if (event.target.type === "search") return;
  // this syntax is called object destructuring of array
  const { 1: columnNumber } = event.target.id.split("-"); // id = "0-3" => after .split => [0, 3]
  tableState.header[columnNumber].columnName = event.target.value;
  localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
});

function createSortForm(element) {
  const optionElement = document.createElement("option");
  optionElement.setAttribute("id", "ColumnNameList");
  optionElement.innerText = element.columnName;
  optionElement.value = element.columnName;
  selectOption.append(optionElement);
}

function updateTableDataInLocalStorage(tableStateData) {
  if (!tableStateData) return;
  localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableStateData));
  createTableUIFromLocalStorage();
}

function clearTableUI() {
  tHead.innerHTML = "";
  tBody.innerHTML = "";
  selectOption.innerHTML = "";
  tableState.body = [];
  tableState.header = [];
}

function getCellTextAreaElement(cellValue, cellAddress) {
  const textAreaElement = document.createElement("textarea");
  textAreaElement.setAttribute("id", cellAddress);
  textAreaElement.setAttribute("placeholder", `Cell ${cellAddress}`);
  textAreaElement.setAttribute("type", "text");
  textAreaElement.setAttribute('draggable', 'true');
  textAreaElement.ondragstart = function (e){
    e.dataTransfer.setData('text/plain',e.target.id)
  }
  textAreaElement.value = cellValue;
  return textAreaElement;
}

function getColumnNameInputElement(columnName, cellAddress) {
  const columnNameInputElement = document.createElement("input");
  columnNameInputElement.value = columnName;
  columnNameInputElement.setAttribute("id", cellAddress);
  columnNameInputElement.setAttribute('draggable', 'true');
  columnNameInputElement.ondragstart = function (e) {
    e.dataTransfer.setData('text/plain', e.target.id)
  }
  return columnNameInputElement;
}

function getColumnSearchInputElement(columnNumber) {
  const columnSearchInputElement = document.createElement("input");
  columnSearchInputElement.setAttribute("id", `search-${columnNumber}`);
  columnSearchInputElement.setAttribute("type", "search");
  columnSearchInputElement.onkeyup = function columnSearch(e) {
    const searchInput = e.target.value;
    const tableDataFromLocalStorage = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)
    );

    tableState.body = tableDataFromLocalStorage.body.filter((rowObject) => {
      return rowObject.columnDetails[columnNumber].cellValue
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    updateTableBodyData(tableState.body);
  };
  return columnSearchInputElement;
}

function createTableUIFromLocalStorage() {
  clearTableUI();

  tableState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TABLE_KEY));
  tableState.header.forEach((element) => {
    createSortForm(element);
    const columnElement = document.createElement(element.elementType);

    columnElement.ondragover = function (ev){
      ev.preventDefault();
    }
    columnElement.ondrop = function (ev) {
      const dropedElemIdx = ev.dataTransfer.getData('text/plain').split('-')[1];
      const dropZoneIdx = ev.target.id.split('-')[1];
      let swapVal = tableState.header[dropedElemIdx].columnName
      tableState.header[dropedElemIdx].columnName = tableState.header[dropZoneIdx].columnName
      tableState.header[dropZoneIdx].columnName = swapVal;
      updateTableDataInLocalStorage(tableState);
    }
    const columnNameInputElement = getColumnNameInputElement(
      element.columnName,
      `0-${element.columnNumber}`
    );
    columnElement.append(columnNameInputElement);

    const columnSearchInputElement = getColumnSearchInputElement(
      element.columnNumber
    );
    columnElement.append(columnSearchInputElement);

    tHead.append(columnElement);
  });

  tableState.body.forEach((element) => {
    const rowElement = document.createElement(element.elementType);
    element.columnDetails.forEach((cellDetail) => {
      const tdElement = document.createElement(cellDetail.elementType);

      tdElement.ondragover = function (ev) {
        ev.preventDefault();
      }
      tdElement.ondrop = function (ev) {
        const [ rowDropedElemIdx, colDropedElemIdx]  = ev.dataTransfer.getData('text/plain').split('-');
        const [ rowDropZoneIdx, colDropZoneIdx ] = ev.target.id.split('-');
        let swapVal = tableState.body[rowDropedElemIdx].columnDetails[colDropedElemIdx].cellValue
        tableState.body[rowDropedElemIdx].columnDetails[colDropedElemIdx].cellValue = tableState.body[rowDropZoneIdx].columnDetails[colDropZoneIdx].cellValue
        tableState.body[rowDropZoneIdx].columnDetails[colDropZoneIdx].cellValue= swapVal;
        updateTableDataInLocalStorage(tableState)   
      }
      const textAreaElement = getCellTextAreaElement(
        cellDetail.cellValue,
        `${cellDetail.rowNumber}-${cellDetail.columnNumber}`
      );
      tdElement.append(textAreaElement);
      rowElement.append(tdElement);
    });
    tBody.append(rowElement);
  });
}

function addCellsInEachRowForNewColumn(columnNumber) {
  tableState.body.forEach((element, idx) => {
    const tdObject = {
      elementType: "td",
      columnNumber: columnNumber,
      rowNumber: idx,
      cellValue: `Cell ${idx} - ${columnNumber}`,
    };
    element.columnDetails.push(tdObject);
  });
}

function addNewColumn() {
  const headerObj = {
    elementType: "th",
    columnName: `Column ${tableState.header.length}`,
    columnNumber: tableState.header.length,
    sort: "",
  };
  tableState.header.push(headerObj);
  addCellsInEachRowForNewColumn(headerObj.columnNumber);
  updateTableDataInLocalStorage(tableState);
}

function addCellsInEachColumnForNewRow(bodyRowObject) {
  tableState.header.forEach((headerObj) => {
    bodyRowObject.columnDetails.push({
      elementType: "td",
      columnNumber: headerObj.columnNumber,
      rowNumber: bodyRowObject.rowNumber,
      cellValue: `Cell ${bodyRowObject.rowNumber} - ${headerObj.columnNumber}`,
    });
  });
  return bodyRowObject;
}

function addNewRow() {
  const bodyRow = {
    elementType: "tr",
    rowNumber: tableState.body.length,
    columnDetails: [],
  };
  tableState.body.push(addCellsInEachColumnForNewRow(bodyRow));
  updateTableDataInLocalStorage(tableState);
}

function syncUIWithLocalStorage() {
  if (!localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)) {
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
  }
  createTableUIFromLocalStorage();
}

function sortTableByColumn(event) {
  event.preventDefault();
  const selectedColumnName = event.target.columnsDropdown.value;
  const sortingOrder = event.target.sort.value;

  const columnNumber = tableState.header.find(
    (headerObj) => headerObj.columnName === selectedColumnName
  ).columnNumber;
   
  const myCustomSort = (obj1, obj2) => {
    const numA = parseFloat(obj1.columnDetails[columnNumber].cellValue);
    const numB = parseFloat(obj2.columnDetails[columnNumber].cellValue);
    if (!isNaN(numA) && !isNaN(numB)) {
      if (sortingOrder === 'ascending') {
        return numA - numB
      } else {
        return numB- numA
      }
    } else if (obj1.columnDetails[columnNumber].cellValue > obj2.columnDetails[columnNumber].cellValue){
      if (sortingOrder === 'ascending') {
        return 1;
      } else return -1;
    }else {
      if (sortingOrder ===  "ascending") return -1;
      else return 1;
    }
  }
  tableState.body.sort(myCustomSort)

  updateTableBodyData(tableState.body);
}

function updateTableBodyData(tableBodyData) {
  tableState.body = tableBodyData;
  tBody.innerHTML = "";
  tableState.body.forEach((element) => {
    const rowElement = document.createElement(element.elementType);
    element.columnDetails.forEach((cellDetail) => {
      const tdElement = document.createElement(cellDetail.elementType);
      const textAreaElement = getCellTextAreaElement(
        cellDetail.cellValue,
        `${cellDetail.rowNumber}-${cellDetail.columnNumber}`
      );
      tdElement.append(textAreaElement);
      rowElement.append(tdElement);
    });
    tBody.append(rowElement);
  });
}
