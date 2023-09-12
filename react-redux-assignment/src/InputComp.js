import { noteAction } from './slice';
import { useSelector, useDispatch } from 'react-redux'

export function InputComponent(props) {
    const { data } = props
    const noteDataState = useSelector(state => {
        return state.inputNote
    })
    const dispatch = useDispatch()
    const { setNoteTitle, setNoteDescription } = noteAction
    return (
        <>
            <div id="inputTextArea">
                {data === 'input' ? <input value={noteDataState.title.payload} id='input' type="text" onChange={(e) => {
                    dispatch(setNoteTitle(e.target.value))
                }} /> : <textarea value={noteDataState.description.payload} id='input' onChange={(e) => {
                    dispatch(setNoteDescription(e.target.value))
                }} />
                }
            </div>
        </>
    )
}