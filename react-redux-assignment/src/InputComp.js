import { noteAction } from './slice';
import { useSelector, useDispatch } from 'react-redux'

export function InputComponent(props) {
    const { data } = props
    const noteDataState = useSelector(state => {
        console.log({ state }, "sds");
        return state.noteData
    })
    const dispatch = useDispatch()
    const { setNoteTitle, setNoteDescription } = noteAction
    let todoComponent;
    if (data === 'input') {
        todoComponent = (
            <>
                <input value={noteDataState.title.payload} id='input' type="text" onChange={(e) => {
                    dispatch(setNoteTitle(e.target.value))
                }} />
            </>
        )
    }
    else {
        todoComponent = (
            <>
                <textarea value={noteDataState.description.payload} id='input' onChange={(e) => {
                    dispatch(setNoteDescription(e.target.value))
                }} />
            </>
        )
    }
    return (
        <>
            <div id="inputTextArea">
                {todoComponent}
            </div>
        </>
    )
}