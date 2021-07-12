import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import history from '../../history';
import fire from '../../firebase';
import './Graph.css';

const Graph = ({ crypto, transactions }) => {
    useEffect(() => {
        fire.auth().onAuthStateChanged((user) => {
            if (!user) {
                history.push('/');
            } 
        })
        
    }, []);

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
                    res[value.coin] = { x: value.coin, y: 0 };
                    result.push(res[value.coin])
                }
                res[value.coin].y += +value.quantity*currentPrice(value.coin_id);  
                return res;
                }, {});
        }
        return result;
    }

    const groupedCurrentProfit = () => {
        const result = [];

        if (Object.keys(transactions).length > 0) {
            transactions.transactions.reduce(function(res, value) {
                if (!res[value.transaction_date]) {
                    res[value.transaction_date] = { x: value.transaction_date, y: 0 };
                    result.push(res[value.transaction_date])
                }
                res[value.transaction_date].y += +value.total_value;  
                return res;
                }, {});
        }
        return result;
    }

    const chartData = {
        datasets:[{
                data: groupedTransactions(),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
        }]
    }      

    const chartOptions = { 
            plugins: {
                title: {
                    display: true,
                    text: 'Current Value by Coin',
                    padding: {
                        top: 10,
                        bottom: 10
                    }
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }     
            }
        }

    const chartDataProfit = {
    datasets:[{
            data: groupedCurrentProfit(),
            backgroundColor: [
                
                'rgba(54, 162, 235, 0.2)',
                
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
    }]
    }   
    
    const chartOptionsProfit = { 
        plugins: {
            title: {
                display: true,
                text: 'Value of Transactions by Date',
                padding: {
                    top: 10,
                    bottom: 10
                }
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }     
        }
    }
   
  
    return (
        <div className="ui segment teal">
            <h3 className="ui dividing header">Current Portfolio Breakdown</h3>
            <div className="ui grid">
                <div className="eight wide column"><Bar data={chartData} options={chartOptions} /></div>
                <div className="eight wide column"><Bar data={chartDataProfit} options={chartOptionsProfit} /></div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        crypto: state.crypto,
        transactions: state.transactions   
    };
};

export default connect(mapStateToProps)(Graph);