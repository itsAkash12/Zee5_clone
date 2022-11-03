export const LoginSuccess =(value)=> {
    return {
        type:"LOGIN_SUCCESS",
        payload : value,
    }
}
export const AuthSuccess =(value)=> {
    return {
        type:"AUTH_SUCCESS",
        payload : value,
    }
}
export const LoginFailure =(value)=> {
    return {
        type:"LOGIN_FAILURE",
        payload : value,
    }
}
export const AlertSuccess =(value)=> {
    return {
        type:"ALERT_SUCCESS",
        payload : value,
    }
}