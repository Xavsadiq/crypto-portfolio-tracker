import coingecko from "../apis/coingecko";
import fire from "../firebase";
import history from '../history';
import { format } from 'date-fns';
import _ from 'lodash';

export const signUp = (formValues) => async dispatch => {
    try {
        const response = await fire.auth().createUserWithEmailAndPassword(formValues.email, formValues.password);

        dispatch({
            type: 'SIGN_UP',
            payload: response.user.uid
            });
        
        history.push('/dashboard');
    }
    catch (e) { console.error(e); }
};


export const signIn = (formValues) => async dispatch => {
    try {
        const response = await fire.auth().signInWithEmailAndPassword(formValues.email, formValues.password);

        dispatch({
            type: 'SIGN_IN',
            payload: response.user.uid
        });

        history.push('/dashboard');
    }
    catch (e) { 
        console.log(e);
        dispatch({
            type: 'ERROR_SIGN_IN',
            payload: e.message
        });
    }
};

export const signOut = () => async dispatch => {
    try {
        await fire.auth().signOut();
        
        dispatch({
            type: 'SIGN_OUT'
        });

        history.push('/');
    }
    catch (e) { console.error(e); }
};

export const writeTransaction = (formValues, user) => (dispatch) => {
    try {
        const transactions = {
            userId: user,
            type: formValues.type,
            coin: formValues.selectCoin.label,
            coin_id: formValues.selectCoin.value,
            quantity: formValues.type === 'Sold' ? `-${formValues.quantity.replace(',', '')}`: formValues.quantity.replace(',', ''),
            total_value: formValues.type === 'Sold' ? '-'+formValues.totalValue.replace('£', '').replace(',', '') : formValues.totalValue.replace('£', '').replace(',', ''),
            transaction_date: formValues.selectDate,
            date_added: format(new Date(), "dd-MM-yyyy"),
            
        };

        fire.database().ref('Transactions').push(transactions);

        dispatch({
            type: 'WRITE_TRANSACTION',
            payload: transactions
        })

        history.push('/transactions');
    }
    catch (e) { console.error(e); }
};

export const getTransactions = (user) => async (dispatch) => {
    try {
        const response = await fire.database().ref('Transactions').orderByChild('userId').equalTo(user);
        
        response.on('value', (snapshot) => {
            const transactions = [];

            snapshot.forEach((childSnapshot) => {
                transactions.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

        const uniqueTransactions = _.uniqBy(transactions, 'coin');

        dispatch({ type: 'GET_TRANSACTIONS', payload: transactions })
        dispatch({ type: 'UNQIUE_CRYPTO', payload: uniqueTransactions })
        });
    }   
    catch (e) { console.error(e); }
};

export const removeTransaction = (key) => async (dispatch) => {
    try {
        const response = await fire.database().ref('Transactions');
        
        response.child(key).remove();
       
    }   
    catch (e) { console.error(e); }
};

export const cryptoPrices = (coin) => async dispatch => {
    try {
        const response = await coingecko.get(`/coins/${coin}/market_chart`, { 
            params: {
            vs_currency: 'gbp',
            days: '90',
            interval: 'daily'
            }
        });

        const formattedData = await response.data.prices.map(price => {
            return {
                x: format(new Date(price[0]), "dd-MM-yyyy").toLocaleString("en-GB"),
                y: price[1]
            };   
        });

        dispatch({ type: 'CRYPTO_PRICES', payload: formattedData, name: coin})

    } 
    catch (e) { console.error(e); }
};

export const cryptoList = () => async dispatch => {
    try {
        const response = await coingecko.get('/coins/markets', {
            params: {
                vs_currency: 'gbp',
                order: 'market_cap_desc',
                per_page: 150
        }
        });

        const formattedData = response.data.map(coin => {
            return {
                    label: coin.name, 
                    value: coin.id
            };
        });
        
        dispatch({ type: 'CRYPTO_LIST', payload:formattedData })

    } 
    catch (e) { console.error(e); }
};

export const portfolioValue = (coin, dates) => async (dispatch, getState) => {
    try {
        
        
        const formattedData = (date) => getState().crypto[coin].map(c => {
                return ({
                    x: c.x,
                    y: c.x.includes(date) ? c.y : 0
                });

            })
            
        const eachDate = dates.map(d => { return formattedData(d.date) });

        
        dispatch({ type: 'PORTFOLIO_VALUE', payload: eachDate, name: coin })
    }
    catch (e) { console.error(e); }
}   
