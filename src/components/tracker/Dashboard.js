import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Graph from './Graph';
import Holdings from './Holdings';
import Header from '../Header';
import { useHistory } from 'react-router-dom';
import fire from '../../firebase';
import { cryptoPrices } from '../../actions';

const Dashboard = ({ cryptoPrices, transactions, uniqueCrypto }) => {
    let history = useHistory();
    useEffect(() => {
        fire.auth().onAuthStateChanged((user) => {
            if (!user) {
                history.push(process.env.PUBLIC_URL);
            }

            const uniqueCryptoList = () => {
                if (Object.keys(uniqueCrypto).length !== 0 && user){
                    const ulist = uniqueCrypto.data.map(crypto => {
                        return cryptoPrices(crypto.coin_id);
                        });
                        return ulist;
                    }
                }
                return uniqueCryptoList(); 
            } 
        )
        
    }, [cryptoPrices, transactions, uniqueCrypto, history]);

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
