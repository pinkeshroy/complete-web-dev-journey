import { AddNewNotes } from './AddNewNotes';
import { useEffect, useState } from "react";
import { CreateNotesUIFromLocalStorage } from './CreateUI.js'
import './App.css';
const LOCAL_STORAGE_NOTE_KEY = "StateData";
function getLocalNotes() {
  if (localStorage.getItem(LOCAL_STORAGE_NOTE_KEY)) {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_NOTE_KEY));
  }
  else return [];
}

export default function App() {
  const [notes, setNotes] = useState(getLocalNotes())
  const [id, setId] = useState(0)
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_NOTE_KEY,JSON.stringify(notes))
  },[notes])
  function addNewNotesInState(props) {
    const { title, description } = props
    setNotes([{
      id: id, title: title,
      description: description
    }, ...notes]
    );
    setId(id + 1)
  }

  function deleteNotes(e) {
    const id = e.target.id;
    setNotes(notes.filter((elem) => {
      if (elem.id != id) {
        return elem;
      }
    }))
  }

  function updateOnChangeNote(props) {
    setNotes(notes.map(note => {
      if (note.id === props.id)
        return props;
      else return note;
    })) 
  }


  return (
    <div className="App">
      <AddNewNotes onAddNotes={addNewNotesInState} />
      <CreateNotesUIFromLocalStorage stateNotes={notes} onDeleteNotes={deleteNotes} onEditNote={updateOnChangeNote} />
    </div>
  );
}


