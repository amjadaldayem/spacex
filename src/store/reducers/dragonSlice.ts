import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initialState from "../../state/state";
import DragonI from "../../models/dragon";

export const dragonSlice = createSlice({
    name: 'Dragon',
    initialState,
    reducers: {
        fetch(state){
            state.isLoading = true;
        },
        failed(state,action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        getSuccess(state,action:PayloadAction<DragonI>){
            state.isLoading = false;
            state.dragon = action.payload;
        }
    }
})

export default dragonSlice.reducer;