const cryptoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CRYPTO_PRICES':
            return { ...state, [action.name]: action.payload };
        case 'CLEAR_PRICES':
            return { ...state = {} };
        default: 
            return state;
    }
};

export default cryptoReducer;