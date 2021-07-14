import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './tracker/Dashboard';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AddTransaction from './tracker/AddTransaction';
import Transactions from './tracker/Transactions';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div>
                    <Route path="/" exact component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/add_transaction" component={AddTransaction} />
                    <Route path="/transactions" component={Transactions} />
                </div>
           </BrowserRouter>
        </div>
    )
};

export default App;