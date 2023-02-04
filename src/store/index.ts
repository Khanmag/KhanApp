import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dictionarySlice from "./slices/dictionarySlice";

const rootReducer = combineReducers({
    dictionarySlice
})

const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

// export default configureStore({
//     reducer: {
//         dictionary: dictionarySlice,
//     }
// })
export default setupStore()
