import React from 'react';
import { Router, Route } from 'react-router-dom';
import Dashboard from './tracker/Dashboard';
import SignUp from './SignUp';
import SignIn from './SignIn';
import history from '../history';
import AddTransaction from './tracker/AddTransaction';
import Transactions from './tracker/Transactions';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Route path="/" exact component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/dashboard" component={Dashboard} forceRefresh={true}/>
                    <Route path="/add_transaction" component={AddTransaction} />
                    <Route path="/transactions" component={Transactions} />
                </div>
           </Router>
        </div>
    )
};

export default App;