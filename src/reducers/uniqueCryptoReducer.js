const uniqueCryptoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UNQIUE_CRYPTO':
            return { ...state, data: action.payload };
        case 'CLEAR_UNIQUE_CRYPTO':
            return { ...state = {} };
        default:
            return state;
    }
};

export default uniqueCryptoReducer;