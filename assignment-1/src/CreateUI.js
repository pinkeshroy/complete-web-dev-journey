import { useState } from "react";
import './App.css';
export function CreateNotesUIFromLocalStorage({ stateNotes, onDeleteNotes, onEditNote }) {
    return (
        <div className="dataNode">
            {stateNotes.map(note => (
                <div key={note.id}>
                    <CreateNotesFromLocalStorage note={note} deleteNotes={onDeleteNotes} updateChangeNote={onEditNote} />
                </div>
            ))}
        </div>
    );

}
function CreateNotesFromLocalStorage({ note, deleteNotes, updateChangeNote }) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if (isEditing) {
        todoContent = (
            <>
                <input id={note.id} value={note.title}
                    onChange={e => {
                            updateChangeNote({ ...note, title: e.target.value })
                    }
                    }/>
                <textarea id={note.id}
                    value={note.description}
                    onChange={e => {
                        updateChangeNote({
                            ...note,
                            description: e.target.value
                        })
                    }
                    } />
                
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
                <button id={note.id} onClick={(e) => deleteNotes(e)}>
                    Delete
                </button>
            </>
        );
    } else {
        todoContent = (
            <div id='dataList'>
               <div id="titleDes"> <h3>{note.title}</h3>
                    <p>{note.description}</p>
                </div>
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
                <button id={note.id} onClick={(e) => deleteNotes(e)}>
                    Delete
                </button>
            </div>
        );
    }
    return (
        <div id="notesList">
            {todoContent}
        </div>
    );
}