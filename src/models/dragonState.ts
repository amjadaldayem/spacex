import DragonI from "./dragon";

interface DragonStateI {
    savedInStorage: boolean,
    error: null | string,
    isLoading: boolean,
    dragons : DragonI[] | [],
}

export default DragonStateI;