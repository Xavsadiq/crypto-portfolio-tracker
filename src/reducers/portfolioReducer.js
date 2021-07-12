const portfolioReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PORTFOLIO_VALUE':
            return { ...state, [action.name]: action.payload };
        default:
            return state;
    }
};

export default portfolioReducer;