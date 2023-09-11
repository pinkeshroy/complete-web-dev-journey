import { useDispatch, useSelector } from 'react-redux';
import { ButtonComp } from './buttonComp';
import { noteAction } from './slice';

export function NotesConatiner() {
    const { allNotes } = useSelector(state => {
        return { allNotes: state.allNotesData, }
    })
    // console.log({ allNotes })

    const dispatch = useDispatch()
    const { setNoteTitle,
        setNoteDescription, setNoteUpdating, } = noteAction
    return (
        <div>
            {
                allNotes.map((elem, indxx) => {
                    let { title, description,idx } = elem.payload
                    console.log({idx})
                    title = title.payload
                    description = description.payload
                    return (<div><h4>{title}</h4>
                        <p>{description}</p>
                        <ButtonComp buttonType={"Edit"} onClick={() => {
                            dispatch(setNoteTitle(title))
                            dispatch(setNoteDescription(description))
                            dispatch(setNoteUpdating({ status: true,indxx }))
                        }} />
                    </div>)

                })
            }
        </div>
    )
}