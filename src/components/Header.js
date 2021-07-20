import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions/index';
import './Header.css';

class Header extends React.Component {
    render(){
        return (
            <div className="ui stackable menu">
                <Link to="/dashboard" className="item">Dashboard</Link>
                <Link to="/transactions" className="item">Transactions</Link>
                <Link to="/add_transaction" className="item">Add Transaction</Link>
                <Link to="/" className="right item" onClick={e => this.props.signOut()}>Sign Out</Link>
            </div>
        );
    }
};

export default connect(null, { signOut })(Header);