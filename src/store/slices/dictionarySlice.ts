import {createSlice} from "@reduxjs/toolkit";
import {IWord} from "../../models/dictionary";

interface dictionaryState {
    words: IWord[],
    isLoading: boolean,
    hasError: string | null,
}

const initialState: dictionaryState = {
    words: [{eng: 'test', ru: "test2"}],
    isLoading: false,
    hasError: null,
}


const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState,
    reducers: {
        addWord(state, action) {},
        removeWord() {},
        toggleOrder() {},
    },
});

export const {addWord} = dictionarySlice.actions

export default dictionarySlice.reducer
