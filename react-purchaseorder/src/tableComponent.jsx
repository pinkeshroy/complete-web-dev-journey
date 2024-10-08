import { useState } from "react";
import { createPortal } from "react-dom";
import "./styles.css";
const Table = () => {
    const [tableState, setTableState] = useState({
        columns: [], // {columnName: '', columnComponentType: ''}
        rows: [] // { cells: [] }
    });
    const [modalOpen, setModalOpen] = useState(false);
    const [showAddRowAlert, setShowAddRowAlert] = useState(false);
    // const [modalOpen, setModalOpen, ModalComponent] = useModal()
    // const [columnName, setColumnName] = useState("");
    const [addColumnFormState, setAddColumnFormState] = useState({
        columnName: "",
        columnComponentType: ""
    });

    const resetColumnForm = () => {
        setAddColumnFormState({
            columnName: "",
            columnComponentType: ""
        });
    };

    const addColumnPrompt = () => setModalOpen(true);
    const handleAddColumn = (columnName) => {
        // const columnName = prompt('Add column Name');
        const newTable = { ...tableState };
        newTable.columns.push({
            columnComponentType: addColumnFormState.columnComponentType,
            columnName: columnName ?? `Col_${newTable.columns.length + 1}`
        });
        //  adding cells for columns
        newTable.rows.forEach((rowObj, rowIdx) =>
            rowObj.cells.push({
                cellValue: `Cell_${rowIdx}_${newTable.columns.length}`
            })
        );
        setTableState(newTable);
    };

    const handleAddRow = () => {
        if (tableState.columns.length < 1) {
            setShowAddRowAlert(true);
            return;
        }
        const newTable = { ...tableState };
        newTable.rows.push({
            cells: newTable.columns.map((columnHeader, colIdx) => ({
                cellValue: `Cell_${newTable.rows.length}_${colIdx}`
            }))
        });
        setTableState(newTable);
    };

    const addColumnModalProps = {
        handleAddColumn,
        resetColumnForm,
        setModalOpen,
        addColumnFormState,
        setAddColumnFormState
    };

    const addRowAlertProps = {
        message: "Please add atleast 1 column to add rows.",
        setShowAddRowAlert
    };

    // console.log({ addColumnFormState });
    return (
        <div>
            <button onClick={addColumnPrompt}>Add Column</button>
            <button onClick={handleAddRow}>Add Row</button>
            {/* <button onClick={() => setModalOpen(true)}>Open Modal</button> */}
            {modalOpen && <AddColumnModal {...addColumnModalProps} />}
            {showAddRowAlert && <AddRowAlert {...addRowAlertProps} />}

            <table>
                <thead>
                    {tableState.columns.map((columnObj, idx) => (
                        <th>
                            <Input
                                onChange={(e) => {
                                    const newTable = { ...tableState };
                                    newTable.columns[idx].columnName = e.target.value;
                                    setTableState(newTable);
                                }}
                                value={columnObj.columnName}
                            />
                        </th>
                    ))}
                </thead>
                <tbody>
                    {tableState.rows.map((rowObj, rowIdx) => {
                        const { cells = [] } = rowObj;
                        return (
                            <tr>
                                {cells.map((cellData, colIdx) => {
                                    const ComponentType =
                                        tableState.columns[colIdx].columnComponentType;
                                    return (
                                        <td>
                                            <ComponentType
                                                onChange={(e) => {
                                                    const newTable = { ...tableState };
                                                    newTable.rows[rowIdx].cells[colIdx].cellValue =
                                                        e.target.value;
                                                    setTableState(newTable);
                                                }}
                                                value={cellData.cellValue}
                                            />
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

const Input = (props) => {
    const { value, onChange } = props;
    return <input value={value} onChange={onChange} />;
};
const TextArea = (props) => {
    const { value, onChange } = props;
    return <textarea value={value} onChange={onChange}></textarea>;
};

const ModalComponent = (props) => {
    const { setModalOpen, children } = props;
    return createPortal(
        <div className="modal-div">
            <button
                className="modal-close"
                type="button"
                onClick={() => setModalOpen(false)}
            >
                Close
            </button>
            {children}
        </div>,
        document.body
    );
};

const AddColumnModal = (props) => {
    const {
        handleAddColumn,
        resetColumnForm,
        setModalOpen,
        addColumnFormState,
        setAddColumnFormState
    } = props;
    return (
        <ModalComponent setModalOpen={setModalOpen}>
            <form>
                <input
                    placeholder="Column Name"
                    value={addColumnFormState.columnName}
                    onChange={(e) =>
                        setAddColumnFormState((formState) => ({
                            ...formState,
                            columnName: e.target.value
                        }))
                    }
                />
                <input
                    list="column-comp"
                    placeholder="Component type"
                    value={addColumnFormState.columnComponentType}
                    onChange={(e) =>
                        setAddColumnFormState((formState) => ({
                            ...formState,
                            columnComponentType: e.target.value
                        }))
                    }
                />
                <datalist id="column-comp">
                    <option value="Input" />
                    <option value="TextArea" />
                </datalist>
                <div>
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            handleAddColumn(addColumnFormState.columnName);
                            resetColumnForm();
                            setModalOpen(false);
                        }}
                    >
                        Save
                    </button>
                    <button type="reset" onClick={() => resetColumnForm()}>
                        Clear
                    </button>
                </div>
            </form>
        </ModalComponent>
    );
};

const AddRowAlert = (props) => {
    const { message, setShowAddRowAlert } = props;
    return (
        <ModalComponent setModalOpen={setShowAddRowAlert}>
            <div>{message}</div>
        </ModalComponent>
    );
};

// const [modalOpen, setModalOpen, ModalComponent] = useModal(AddColumnModal);
// const useModal = (AddColumnModal) => {
//   const [modalOpen, setModalOpen] = useState(false);
//   return [modalOpen, setModalOpen, AddColumnModal];
// };

export default Table;


