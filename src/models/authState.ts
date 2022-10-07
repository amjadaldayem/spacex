interface AuthStateI{
    email: null | string,
    entered: boolean | null,
    status: {
        login: boolean,
        sign: boolean,
    },
}

export default AuthStateI;