import AuthStateI from "../models/authState";

const initialState:AuthStateI = {
    email: null,
    entered : null,
    status: {
        login: true,
        sign: false,
    },
}

export default initialState;