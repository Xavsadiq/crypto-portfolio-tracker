import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTransactions, removeTransaction } from '../../actions';
import { useHistory } from 'react-router-dom';
import fire from '../../firebase';
import NumberFormat from 'react-number-format';
import Header from '../Header';
import './Transactions.css';

const Transactions = ({ transactions, getTransactions, removeTransaction }) => {
    let history = useHistory();
    useEffect(() => {
        fire.auth().onAuthStateChanged((user) => {
            if (!user) {
                history.push('/');
            }

            if (user && Object.keys(transactions).length === 0){
                getTransactions(user.uid);
            }
        })  
        
    }, [getTransactions, transactions, history]);

    const sumQuantity= () => {
        if(transactions) {
            const sumList = transactions.transactions.reduce((a, b) => {
                return a + +b.quantity;
            }, 0);
            return sumList;
        }  
    }
    const sumValue = () => {
        if(transactions) {
            const sumList = transactions.transactions.reduce((a, b) => {
                return a + +b.total_value;
            }, 0);
            return sumList;
        }  
    }

    const renderTransactions = () => {
        if (transactions){
            const list = transactions.transactions.map(t => {
            return (
                <tbody key={t.id}>
                    <tr>
                        <td data-label="Transaction Date">{t.transaction_date}</td>
                        <td data-label="Coin">{t.coin}</td>
                        <td data-label="Type">{t.type}</td>
                        <td data-label="Quantity"><NumberFormat value={t.quantity} decimalScale={2} thousandSeparator={true} displayType={'text'} /></td>
                        <td data-label="Price per coin"><NumberFormat value={t.total_value/t.quantity} decimalScale={2} thousandSeparator={true} prefix={'£'} displayType={'text'} /></td>
                        <td data-label="Value"><NumberFormat value={t.total_value} thousandSeparator={true} prefix={'£'} displayType={'text'} /></td>
                        <td><i className="red close icon" onClick={e => removeTransaction(t.id)}></i></td>
                    </tr>
                </tbody>
            );
        })
        return list;
    }
    
}

    if (Object.keys(transactions).length === 0){
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <div className="ui segment teal" style={{overflow:"auto"}}>
                <h3 className="ui dividing header">View your transactions</h3>
                <table className="ui celled table unstackable">
                    <thead>
                            <tr>
                                <th>Transaction Date</th>
                                <th>Coin</th>
                                <th>Type</th>
                                <th>Quantity</th>
                                <th>Price per coin</th>
                                <th>Value</th> 
                                <th>Options</th>
                            </tr>
                        </thead>
                    {renderTransactions()}
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <th></th>
                            <th></th>
                            <th><NumberFormat value={sumQuantity()} displayType={'text'} decimalScale={2} thousandSeparator={true} /></th>
                            <th><NumberFormat value={sumValue()/sumQuantity()} decimalScale={2} displayType={'text'} prefix={'£'} thousandSeparator={true} /></th>
                            <th><NumberFormat value={sumValue()} displayType={'text'} prefix={'£'} decimalScale={2} thousandSeparator={true} /></th>
                            <th></th>
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
     })
};

export default connect(mapStateToProps, { getTransactions, removeTransaction })(Transactions);