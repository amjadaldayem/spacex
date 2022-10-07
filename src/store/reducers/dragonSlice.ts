import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initialState from "../../state/dragonState";
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
        failed(state,action:PayloadAction<string | null>){
            state.error = action.payload;
        },
        getSuccess(state,action:PayloadAction<DragonI[]>){
            const data = JSON.parse(localStorage.getItem('spacex-dragon') as string);
            state.dragons = action.payload;
            localStorage.setItem('spacex-dragon',JSON.stringify({...data,content: action.payload}));
        },
        setDataFromLocalStorage(state){
            const data = JSON.parse(localStorage.getItem('spacex-dragon') as string).content;
            if(data){
                state.dragons = data;
                state.isLoading = false;
            }
        }
    }
})

export default dragonSlice.reducer;