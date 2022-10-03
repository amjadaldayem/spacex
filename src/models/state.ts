import DragonI from "./dragon";

interface StateI {
    savedInStorage: boolean,
    error: null | string,
    isLoading: boolean,
    dragon : DragonI,
}

export default StateI;