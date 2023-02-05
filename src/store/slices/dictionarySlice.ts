import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IWord} from "../../models/dictionary";

interface dictionaryState {
    words: IWord[],
    isLoading: boolean,
    hasError: string | null,
}

const initialState: dictionaryState = {
    words: [],
    isLoading: false,
    hasError: null,
}


export const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState,
    reducers: {
        dictFetching(state) {
            state.isLoading = true;
        },
        dictFetchingSuccess(state, action: PayloadAction<IWord[]>) {
            state.isLoading = false;
            state.hasError = null;
            state.words = action.payload;
        },
        dictFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.hasError = action.payload;
        },
        shuffleWords(state) {
            state.words = [...state.words].sort(() => Math.random() > 0.5 ? 1 : -1)
        },
    },
});


export default dictionarySlice.reducer
