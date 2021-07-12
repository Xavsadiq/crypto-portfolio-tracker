const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    errorMessage: ""  
};


const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true, userId: action.payload };
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, userId: null };
        case 'SIGN_UP':
            return { ...state, isSignedIn: true, userId: action.payload };
        case 'ERROR_SIGN_IN':
            return { ...state, isSignedIn: true, userId: null, errorMessage: action.payload };
        default:
            return state;
    };
};

export default authReducer;