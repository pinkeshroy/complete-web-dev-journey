
export function CreateNoteList({ allNotes, deleteNote, setIsEdit, setIds, setTit, setDes }) { 
      const arr= allNotes.map((note) => {
        return (<>
            <div id="titleDes"> <h3>{note.title}</h3>
                <p>{note.description}</p>
            
            <button onClick={() => {
                setIsEdit(true)
                setTit(note.title)
                setDes(note.description)
                setIds(note.id)
            }}>
                Edit
            </button>
            <button id={note.id} onClick={(e) => deleteNote(e)}>
                Delete
                </button>
            </div>
        </>)
   })
    return arr
}