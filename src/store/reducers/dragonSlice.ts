import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initialState from "../../state/state";
import DragonI from "../../models/dragon";

export const dragonSlice = createSlice({
    name: 'Dragon',
    initialState,
    reducers: {
        startLoading(state){
          state.isLoading = true;
        },
        stopLoading(state){
          state.isLoading = false;
        },
        failed(state,action:PayloadAction<string>){
            state.error = action.payload;
        },
        getSuccess(state,action:PayloadAction<DragonI>){
            state.dragon = action.payload;
            localStorage.setItem('dragon',JSON.stringify(action.payload));
        },
        setDataFromLocalStorage(state){
            const data = localStorage.getItem('dragon');
            state.dragon = JSON.parse(data as string);
            state.isLoading = false;
        }
    }
})

export default dragonSlice.reducer;