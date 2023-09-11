import { useSelector, useDispatch } from 'react-redux'
import { InputComponent } from './InputComp'
import { formActions, noteAction } from './slice';
import { ButtonComp } from './buttonComp'

export function FormComp() {
    const { currentNoteData } = useSelector(state => {
        return { currentNoteData: state.noteData }
    })
    const { allNotes } = useSelector(state => {
        return { allNotes: state.allNotesData, }
    })
    const dispatch = useDispatch()
    const { setNotes, updateNote } = formActions
    const { setNoteTitle, setNoteDescription } = noteAction

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            dispatch(setNotes(currentNoteData))
            dispatch(setNoteTitle(''))
            dispatch(setNoteDescription(''))
        }}>
            <InputComponent data={'input'} />
            <InputComponent data={'textArea'} />
            {currentNoteData.update
                ? <><ButtonComp onClick={() => {
                    dispatch(updateNote({ title: currentNoteData.title.payload, description: currentNoteData.description.payload }))
                }} buttonType='Upadte' /><ButtonComp buttonType='Cancel' /></>
                : <ButtonComp buttonType='Create' />}
        </form>
    )
}