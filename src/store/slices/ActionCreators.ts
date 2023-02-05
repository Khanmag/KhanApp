import {AppDispatch} from "../index";
import {getWordsGS} from "../../api/dictionaryAPI";
import {dictionarySlice} from "./dictionarySlice"

const {dictFetching, dictFetchingSuccess, dictFetchingError} = dictionarySlice.actions

export const fetchDict = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(dictFetching())
        const res = await getWordsGS()
        dispatch(dictFetchingSuccess(res.data))
    } catch (err: any) {
        dispatch(dictFetchingError(err.message))
    }
}