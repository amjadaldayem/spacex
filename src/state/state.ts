import StateI from "../models/state";
import {IconBaseProps} from "react-icons";

const initialState:StateI = {
    savedInStorage: !!localStorage.getItem('dragon'),
    error: null,
    isLoading: false,
    dragon : {
        images : [],
        description: null,
        wikipedia: undefined,
        name: null,
        first_flight: {
            content: null ,
            title: null,
        },
        diameter: {
            content: null ,
            title: null,
        },
        dry_mass:{
            content: null ,
            title: null,
        },
    },
}

export default initialState;