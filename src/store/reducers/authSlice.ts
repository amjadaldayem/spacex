import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initialState from "../../state/authState";
import UserI from "../../models/user";

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleFormStatus(state){
            switch (true){
                case state.status.login:
                    state.status.login = false;
                    state.status.sign = true;
                break;
                case state.status.sign:
                    state.status.login = true;
                    state.status.sign = false;
                break;
            }
        },
        authUserSuccess(state,action:PayloadAction<string | null>){
            state.email = action.payload;
            state.entered = true;
            const data = JSON.parse(localStorage.getItem('spacex-dragon') as string) ?? {};
            const users:UserI[] | [] = {...data}.users ?? [];
            const selectedUser = !!users.length ? {...users.find(({email}) => email === action.payload),entered: true} : {email: action.payload,entered: true};
            const editedUsers = [...users.filter(({email}) => email !== action.payload),selectedUser];
            localStorage.setItem('spacex-dragon',JSON.stringify({...data,users: editedUsers}));
        },
        logInValidate(state){
            const users:UserI[] | [] = {...JSON.parse(localStorage.getItem('spacex-dragon') as string)}.users ?? [];
            const user = users.find(({entered}) => entered);
            if(user) {
                state.email = user.email;
                state.entered = true;
            }else{
                state.entered = false;
            }
        },
        logOut(state){
            state.entered = false;
            const data = JSON.parse(localStorage.getItem('spacex-dragon') as string);
            const users:UserI[]= {...data}
                .users
                .map((user:UserI) => {
                    return {...user,entered: false}
                });
            localStorage.setItem('spacex-dragon',JSON.stringify({...data,users: users}));
        },
    }
})

export default authSlice.reducer;