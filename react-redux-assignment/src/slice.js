import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "notes",
    initialState: [],
    reducers: {
        setNotes: (state, action) => {
            let { title, description } = action.payload
            title = title.payload
            description = description.payload
            state.push({ title: title, description: description })
            return state;
        },
        updateNote: (state, action) => {
            let { title, description, id } = action.payload;
            const arr = state.map((elem, idx) => {
                if (idx == id) return { title: title, description: description }
                else return elem
            })
            return arr
        },
        deleteNote: (state, action) => {
            const idx=action.payload
            state.splice(idx, 1)
            return state
        }
    }
})
export const noteData = createSlice({
    name: "note",
    initialState: {
        title: "",
        description: "",
        id: 0,
        update: false
    },
    reducers: {
        setNoteTitle: (state, action) => {
            state.title = action
            return state;
        },
        setNoteDescription: (state, action) => {
            state.description = action
            return state;
        },
        setIndex: (state, action) => {
            const { idx } = action.payload
            state.id = action
            return state
        },
        setUpdate: (state, action) => {
            state.update = action
            console.log({ stateINToggle:state.update })
            return state
        }
    }

})


export const { actions: formActions, reducer: formReducer } = noteSlice
export const { actions: noteAction, reducer: noteReducer } = noteData
// export const { actions: editAction, reducer: editReducer } = editToggle

