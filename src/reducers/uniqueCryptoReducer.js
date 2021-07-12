const uniqueCryptoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UNQIUE_CRYPTO':
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default uniqueCryptoReducer;