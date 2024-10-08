import { elementType, func } from "prop-types";
import { useState } from "react";
import { createPortal } from "react-dom";
export function CreateTableComponent() {
    const [headers, setHeaders] = useState([])
    const [body, setBody] = useState([])
    const [searchValue, setSearchValue] = useState({ value: "", index: 0 })
    const [modalOpen, setModalOpen] = useState(false);
    const [addColumnForm, setAddColumnform] = useState({ name: "", elementType: "" });
    
    const addColumnPrompt = () => setModalOpen(true);
    const handleAddColumn = (columnName, elemType) => {
        console.log({elemType})
        // const columnName = prompt('Add column Name');
        const newHeader = [...headers, { name: columnName,elementType:elemType }]
        //  adding cells for columns
        setBody(body.map((row, idx) => {
            row.cells.push({
                cellValue: `Cell ${idx}-${headers.length}`,
                elementType:elemType
            });
            return row;
        }))
        setHeaders(newHeader);
    };
    const handleAddRow = () => {
        if (!headers.length) {
            alert("To add row, please add column first")
            return;
        }
        else {
            const newRows = [...body,
            {
                rowName: `Row ${body.length}`,
                cells: headers.map((obj, idx) => ({
                    cellValue: `Cell ${body.length}-${idx}`,
                    elementType: obj.elementType
                }))
            }]
            setBody(newRows)
        }
    }
    function submitForm(e) {
        e.preventDefault();
        handleAddColumn(addColumnForm.name, addColumnForm.elementType);
        setAddColumnform({ name: "", elementType: "" });
        setModalOpen(false);
    }
    return (
        <>
            <header className="Button-header">
                <button onClick={addColumnPrompt} >Add Column</button>
                <button onClick={handleAddRow}>Add Row</button>
            </header>
            {modalOpen && <CreateModalComponent setAddColumnform={setAddColumnform} setModalOpen={setModalOpen} submitForm={submitForm}  />}
            <table id="tableContainer" >
                <thead id="thead">
                    {
                        headers.map((obj, idx) => {
                            return <CreateThElement name={obj.name} idx={idx} setHeaders={setHeaders} setSearchValue={setSearchValue} />
                        })
                    }
                </thead>
                <tbody id="tbody">
                    {
                        body.map((obj, idx) => {
                            if (obj.cells[searchValue.index].cellValue.includes(searchValue.value))
                                return <RowComponent rowData={obj} idx={idx} setBody={setBody} headers={headers} />

                        })
                    }</tbody>
            </table>
        </>
    )
}

function CreateThElement(props) {
    const { idx = 0, name = '', setHeaders, setSearchValue } = props
    return (<th id={`id_${idx}`} >
        <span id="inputButton">
            <input type='text' value={name} onChange={(e) => setHeaders(header => {
                header[idx].name = e.target.value
                return [...header]
            })
            } />
            <input type='search' onChange={(e) => setSearchValue(searchValue => {
                searchValue.value = e.target.value;
                searchValue.index = idx;
                return { ...searchValue }
            })} />
        </span>
    </th>)
}
function RowComponent(props) {
    const { rowData, idx, setBody,headers } = props
    const { rowName, cells } = rowData
    return (<tr id={rowName}>
        {
            cells.map((cellObj, index) => {
                const { cellValue } = cellObj
                return (
                    <td key={index}>
                        {(cellObj.elementType === 'input') ? <InputComponent cellValue={cellValue} idx={idx} index={index} setBody={setBody} /> : <TextAreaComponent cellValue={cellValue} idx={idx} index={index} setBody={setBody} />
                        }
                    </td>
                )
            })
        }
    </tr>)
}
function InputComponent(props) {
    const { cellValue,idx,index, setBody } = props
    return (< input value={cellValue} onChange={(e) => setBody(body => {
        body[idx].cells[index].cellValue = e.target.value;
        return [...body]
    })} />)
}
function TextAreaComponent(props) {
    const { cellValue, idx, index, setBody}=props
    return (< textarea value={cellValue} onChange={(e) => setBody(body => {
        body[idx].cells[index].cellValue = e.target.value;
        return [...body]
    })} />)
}
function CreateModalComponent(props) {
    console.log({props})
    const { setAddColumnform, setModalOpen, submitForm, } = props
    return(createPortal(
        <div className="modal-div">
            <div className="close-btn"><button type="button" onClick={() => setModalOpen(false)}>
                ❌
            </button></div>
            <FormComponent setAddColumnform={setAddColumnform} submitForm={submitForm} />
        </div>,
        document.body)
    )
}
function FormComponent(props) {
    const { setAddColumnform, submitForm, } = props
    return (<form>
        <div className="inputName-Btn">
            <input onChange={(e) => setAddColumnform(addColumnForm => ({ ...addColumnForm, name: e.target.value }))} />
        </div>
        <select onChange={(e) => {
            console.log({ elementType: e.target.value })
            setAddColumnform(addColumnForm=>({ ...addColumnForm, elementType: e.target.value }))
        }} className="cellType" >
            <option >Select</option>
            <option value='input'>Input Type</option>
            <option value='textarea'>TextArea Type</option>
        </select>
        <div className="saveClearBtn">
            <button
                type="submit"
                onClick={submitForm}>Save
            </button>
            <button type="reset" onClick={() => setAddColumnform({ name: "", elementType: "" })}>
                Clear
            </button>
        </div>
    </form>)
}
