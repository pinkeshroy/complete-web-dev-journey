import { configureStore } from '@reduxjs/toolkit';

import { formReducer ,noteReducer } from './slice';
export default configureStore({
    reducer: {
        allNotesData: formReducer,
        noteData: noteReducer,
    }
})