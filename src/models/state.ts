import DragonI from "./dragon";

interface StateI {
    error: null | string,
    isLoading: boolean,
    dragon : DragonI,
}

export default StateI;