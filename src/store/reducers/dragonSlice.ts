import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initialState from "../../state/state";
import DragonI from "../../models/dragon";

export const dragonSlice = createSlice({
    name: 'Dragon',
    initialState,
    reducers: {
        fetch(state){
          if(!state.savedInStorage){
              state.isLoading = true;
          }
        },
        failed(state,action:PayloadAction<string>){
            if(!state.savedInStorage){
                state.isLoading = false;
                state.error = action.payload;
            }
        },
        getSuccess(state,action:PayloadAction<DragonI>){
            state.isLoading = false;
            state.dragon = action.payload;
            localStorage.setItem('dragon',JSON.stringify(action.payload));
        },
        getDataFromLocalStorage(state){
            const data = localStorage.getItem('dragon');
            state.dragon = JSON.parse(data as string);
            state.isLoading = false;
        }
    }
})

export default dragonSlice.reducer;