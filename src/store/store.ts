import {configureStore} from "@reduxjs/toolkit";
import dragonSlice from "./reducers/dragonSlice";

export const setupStore = () => {
    return configureStore({
        reducer: dragonSlice,
    })
}

export type RootState = ReturnType<typeof dragonSlice>;