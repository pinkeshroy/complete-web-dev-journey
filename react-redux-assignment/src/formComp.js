import { useSelector, useDispatch } from 'react-redux'
import { InputComponent } from './InputComp'
import { formActions, noteAction } from './slice';
import { ButtonComp } from './buttonComp'

export function FormComp() {

    const { currentNoteData } = useSelector(state => {
        return { currentNoteData: state.inputNote }
    })   

    const dispatch = useDispatch()
    const { setNotes, updateNote } = formActions
    const { setNoteTitle, setNoteDescription,setUpdate } = noteAction

    const update=currentNoteData.update.payload
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <InputComponent data={'input'} />
            <InputComponent data={'textArea'} />
            {update ? <><ButtonComp onClick={() => {
                dispatch(setUpdate(false))
                    dispatch(updateNote({
                        title: currentNoteData.title.payload, description: currentNoteData.description.payload,
                        id: currentNoteData.id.payload
                    }))
                dispatch(setNoteTitle(''))
                dispatch(setNoteDescription(''))
                    console.log(currentNoteData.id.payload)
                }} buttonType='Upadte' />
                    <ButtonComp buttonType='Cancel' /></>
                : <ButtonComp buttonType='Create' onClick={() => {
                    dispatch(setNotes(currentNoteData))
                    dispatch(setNoteTitle(''))
                    dispatch(setNoteDescription(''))
                }} />
            }
        </form>
    )
}