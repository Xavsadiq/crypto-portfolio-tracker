const cryptoListReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CRYPTO_LIST':
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default cryptoListReducer;