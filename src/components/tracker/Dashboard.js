import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Graph from './Graph';
import history from '../../history';
import Holdings from './Holdings';
import Header from '../Header';
import fire from '../../firebase';
import { cryptoPrices } from '../../actions';

const Dashboard = ({ cryptoPrices, transactions, uniqueCrypto }) => {
    useEffect(() => {
        fire.auth().onAuthStateChanged((user) => {
            if (!user) {
                history.push('/');
            }

            const uniqueCryptoList = () => {
                if (Object.keys(uniqueCrypto).length !== 0){
                    const ulist = uniqueCrypto.data.map(crypto => {
                        return cryptoPrices(crypto.coin_id);
                        });
                        return ulist;
                    }
                }
                return uniqueCryptoList(); 
            } 
        )
        
    }, [cryptoPrices, transactions, uniqueCrypto]);

    return (
        <div>
            <Header />
            <Graph />
            <Holdings />
        </div>
    );
};

const mapStateToProps = (state) => {
    return { 
        crypto: state.crypto,
        transactions: state.transactions,
        uniqueCrypto: state.uniqueCrypto
    };
};

export default connect(mapStateToProps, { cryptoPrices })(Dashboard);
