import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "notes",
    initialState:[],
    reducers: {
        setNotes: (state, action) => {
            state.push(action)
            return state;
        },
        addNote: (state, action) => {
            state.push(action)
            return state;
        },
        updateNote: (state, action) => {
            const { idx, updatedNoteData } = action
            state.splice(idx, 1, updatedNoteData)
            return state
        }
    }
})
export const noteData = createSlice({
    name: "note",
    initialState: {
        title: "",
        description: "",
        update: false,
        idx: 0
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
            state.idx = action
            return state
        },
        setNoteUpdating: (state, action) => {
            console.log({ action });
            return {
                ...state,
                update: action.payload.status,
                idx: action.idx
            }
        }
    }

})
export const editing = createSlice({
    name: 'editing',
    initialState: { isEditing: false },

    reducers: {
        setEditing: (state, action) => {
            if (action === 'edit')
                state.isEditing = true;
            else state.isEditing = false;
            return state
        }
    }

})


export const { actions: formActions, reducer: formReducer } = noteSlice
export const { actions: noteAction, reducer: noteReducer } = noteData
