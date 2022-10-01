import StateI from "../models/state";
import {IconBaseProps} from "react-icons";

const initialState:StateI = {
    error: null,
    isLoading: true,
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