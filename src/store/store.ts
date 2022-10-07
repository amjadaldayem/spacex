import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dragonSlice from "./reducers/dragonSlice";
import authSlice from "./reducers/authSlice";

const rootReducer = combineReducers({dragonSlice, authSlice});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;