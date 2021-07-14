const firebaseReducer = (state = {}, action) => {
    switch (action.type) {
        case 'WRITE_TRANSACTIONS':
            return { ...state, transactions: action.payload };
        case 'GET_TRANSACTIONS':
            return { ...state, transactions: action.payload };
        case 'CLEAR_TRANSACTIONS':
            return { ...state = {} };
        default:
            return state;
    };
};

export default firebaseReducer;