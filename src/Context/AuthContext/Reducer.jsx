const reducer =(state, action)=> {
    switch (action.type) {
        
        case "LOGIN_SUCCESS":
            console.log(state);
            return{...state, token:action.payload}
        case "LOGIN_FAILURE":
            return{...state, error:action.payload}
        case "AUTH_SUCCESS":
            return{...state, auth:action.payload}
        case "ALERT_SUCCESS":
            return{...state, alert:action.payload}
        default:
            return state;
    }
    
}
export default reducer;