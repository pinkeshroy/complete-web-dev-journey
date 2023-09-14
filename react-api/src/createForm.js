import './App.css';
import { useEffect, useState } from "react";
import { CreateNoteList } from "./createUI";

export function CreateForm() {
    const [notes, setNotes] = useState([])
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDecsription] = useState('');
    const [id, setId] = useState("");

    async function getApi() {
        console.log("getApi")
        const resData = await fetch("./get-router")
        const data = await resData.json()
        setNotes(data)
    }

    useEffect(() => {
        getApi();
    }, [])

    async function addNewNotesInState(title, description) {
        fetch("/post-router", {
            method: "POST",
            body: JSON.stringify({
                id: title[0].split("").reduce((acc, elem) => {
                    return acc + `${elem}_${Math.round(Math.random() * 100)}`
                }),
                title: title[0],
                description: description[0]
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        await getApi();
        
    }

    async function deleteNotes(e) {
        const idx = e.target.id;
        fetch(`/delete-router/${idx}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        await getApi();
        
    }

    async function updateOnChangeNote(props) {
        const id = props.id
        fetch(`/update-router/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                id: id,
                title: props.title,
                description: props.description
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
         await getApi();
        
    }


    return (
        <div className="App">
            {isEditing ?
                <form onSubmit={(e) => {
                    e.preventDefault();
                    updateOnChangeNote({ id, title, description });
                    setIsEditing(false)
                    setTitle('');
                    setDecsription('');
                }}>
                    <input type="text" placeholder="Title" value={title}
                        onChange={(e) => { setTitle(e.target.value) }} required
                    />
                    <textarea value={description} rows={5} type="textarea" placeholder="Description"
                        onChange={(e) => { setDecsription(e.target.value) }} required
                    />
                    <button >Update Note</button>
                    <button >Cancel</button>
                </form> :
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const tit = e.target.children[0].value, desc = e.target.children[1].value
                    addNewNotesInState([tit], [desc]);
                    setTitle('');
                    setDecsription('');
                }}>
                    <input type="text" placeholder="Title" value={title}
                        onChange={(e) => { setTitle(e.target.value) }} required
                    />
                    <textarea value={description} rows={8} type="textarea" placeholder="Description"
                        onChange={(e) => { setDecsription(e.target.value) }} required
                    />
                    <button id='addNotesButton'>Add Notes</button>
                </form>
            }
            <div id="notesConatiner">
                <CreateNoteList allNotes={notes} deleteNote={deleteNotes} setIsEdit={setIsEditing} setIds={setId} setTit={setTitle} setDes={setDecsription} />
            </div>
        </div>
    );
}
