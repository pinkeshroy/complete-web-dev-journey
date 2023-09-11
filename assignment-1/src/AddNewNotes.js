import { useState } from "react";
import './App.css';
export function AddNewNotes({onAddNotes}) {
    const [title, setTitle] = useState('');
    const [description, setDecsription] = useState('');

    // function editNotes(e) {
        
    // }
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                onAddNotes({ title ,description});
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

        </div>

    )

}
