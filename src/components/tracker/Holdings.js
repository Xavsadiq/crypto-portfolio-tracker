import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../../actions';
import fire from '../../firebase';
import history from '../../history';
import NumberFormat from 'react-number-format';

const Transactions = ({ transactions, getTransactions, crypto }) => {
    useEffect(() => {
        fire.auth().onAuthStateChanged((user) => {
            if (!user) {
                history.push('/');
            }

            if (user && Object.keys(transactions).length === 0){
                getTransactions(user.uid);
            }
                
        })  
        
    }, [getTransactions, transactions, crypto]);
        
    const currentPrice = (coin) => {
        if (crypto[coin]){
            const prices = crypto[coin];
            return prices[prices.length-1].y;
        }    
    }

    const groupedTransactions = () => {
        const result = [];

        if (Object.keys(transactions).length > 0) {
            transactions.transactions.reduce(function(res, value) {
                if (!res[value.coin]) {
                    res[value.coin] = { coin: value.coin, quantity: 0, total_value: 0, current_value: 0 };
                    result.push(res[value.coin])
                }
                res[value.coin].quantity += +value.quantity;
                res[value.coin].total_value += +value.total_value;  
                res[value.coin].current_value += +value.quantity*currentPrice(value.coin_id);  
                return res;
                }, {});
        }
        return result;
    }

    const sumQuantity= () => {
        if(Object.keys(transactions).length > 0) {
            const sumList = transactions.transactions.reduce((a, b) => {
                return a + +b.quantity;
            }, 0);
            return sumList;
        }  
    }
    const sumValue = () => {
        if(Object.keys(transactions).length > 0) {
            const sumList = transactions.transactions.reduce((a, b) => {
                return a + +b.total_value;
            }, 0);
            return sumList;
        }  
    }

    const currentValue = () => {
        if(Object.keys(transactions).length > 0) {
            const sumList = groupedTransactions().reduce((a, b) => {
                return a + +b.current_value;
            }, 0);
            return sumList;
        }  
    }

    const renderTransactions = () => {
        if (Object.keys(transactions).length > 0){
            const list = groupedTransactions().map(t => {
            return (
                <tbody key={t.coin}>
                    <tr>
                        <td data-label="Coin">{t.coin}</td>
                        <td data-label="Quantity"><NumberFormat value={t.quantity} decimalScale={2} thousandSeparator={true} displayType={'text'} /></td>
                        <td data-label="Price per coin"><NumberFormat value={Math.abs(t.total_value/t.quantity)} decimalScale={2} thousandSeparator={true} prefix={'£'} displayType={'text'} /></td>
                        <td data-label="Cost"><NumberFormat value={t.total_value} thousandSeparator={true} decimalScale={4} prefix={'£'} displayType={'text'} /></td>
                        <td data-label="Current Value"><NumberFormat value={t.current_value} decimalScale={2} thousandSeparator={true} prefix={'£'} displayType={'text'} /></td>
                        <td data-label="Net Gain"><NumberFormat value={t.current_value-t.total_value} decimalScale={2} thousandSeparator={true} prefix={'£'} displayType={'text'} /></td>
                        <td data-label="% Change"><NumberFormat value={((t.current_value-t.total_value)/t.total_value)*100} decimalScale={2} thousandSeparator={true} suffix={'%'} displayType={'text'} /></td>
                    </tr>
                </tbody>
            );
        })
        return list;
    }
    
}
    return (
        <div>
            <div className="ui segment">
                <h3 className="ui dividing header">View your holdings</h3>
                <table className="ui celled table unstackable">
                    <thead>
                            <tr>
                                <th>Coin</th>
                                <th>Quantity</th>
                                <th>Average Price</th>
                                <th>Cost</th> 
                                <th>Current Value</th>
                                <th>Profit/Loss</th>
                                <th>% Change</th>
                            </tr>
                        </thead>
                    {renderTransactions()}
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <th><NumberFormat value={sumQuantity()} displayType={'text'} decimalScale={2} thousandSeparator={true} /></th>
                            <th><NumberFormat value={Math.abs(sumValue()/sumQuantity())} decimalScale={2} displayType={'text'} prefix={'£'} thousandSeparator={true} /></th>
                            <th><NumberFormat value={sumValue()} displayType={'text'} prefix={'£'} decimalScale={2} thousandSeparator={true} /></th>
                            <th><NumberFormat value={currentValue()} displayType={'text'} decimalScale={2} prefix={'£'} thousandSeparator={true} /></th>
                            <th><NumberFormat value={currentValue()-sumValue()} displayType={'text'} decimalScale={2} prefix={'£'} thousandSeparator={true} /></th>
                            <th><NumberFormat value={(currentValue()-sumValue())/sumValue()*100} displayType={'text'} decimalScale={2} suffix={'%'} thousandSeparator={true} /></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return ({ 
        transactions: state.transactions,
        crypto: state.crypto
     })
};

export default connect(mapStateToProps, { getTransactions })(Transactions);