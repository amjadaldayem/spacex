import DragonStateI from "../models/dragonState";

const initialState:DragonStateI = {
    savedInStorage: !!localStorage.getItem('spacex-dragon'),
    error: null,
    isLoading: false,
    dragons : [],
}

export default initialState;