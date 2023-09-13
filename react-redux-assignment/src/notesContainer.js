import { useDispatch, useSelector } from 'react-redux';
import { ButtonComp } from './buttonComp';
import { formActions, noteAction } from './slice';

export function NotesConatiner() {
    const  allNotes = useSelector(state => {
        return  state.allNotesData
    })

    const dispatch = useDispatch()
    const { setNoteTitle, setNoteDescription, setIndex, setUpdate } = noteAction
    const {deleteNote}=formActions
    return (
        <div>
            {
                allNotes.map((elem, idx) => {
                    let { description, title } = elem
                    return (<div><h4>{title}</h4>
                        <p>{description}</p>
                        <ButtonComp buttonType={"Edit"} onClick={() => {
                            dispatch(setUpdate(true))
                            dispatch(setNoteTitle(title))
                            dispatch(setNoteDescription(description))
                            dispatch(setIndex(idx))
                        }} />
                        <ButtonComp buttonType={"Delete"} onClick={() => {
                            dispatch(deleteNote(idx))
                        }} />
                    </div>)

                })
            }
        </div>
    )
}