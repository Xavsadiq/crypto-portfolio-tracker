import React from 'react';
import { Form, Field } from "react-final-form";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import './SignUp.css';

const SignIn = ({ signIn, auth_errors }) => {
    const renderError = ({ error, touched}) => {
        if (touched && auth_errors){
            return (
                <div className="ui error message">
                    <div className="header">{auth_errors}</div>
                </div>
            );
        }
    }

    const renderInput = ({ input, label, meta, type, icon }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <div className="ui left icon input">
                    <i className={icon}></i>
                    <input {...input} autoComplete="off" type={input.type} />
                </div>
                {renderError(meta)}
            </div>
        );   
    };

    const onSubmit = (formValues) => {
        signIn(formValues);
    }

    const guestAccount = (e) => {
        signIn(e);
    }

    const guestDetails = {
        email: 'guest-account@xavdev.io',
        password: 'guestaccount123!',
    }

    return (
            <div className="signup-form-container">
                <div className="ui segment teal signup-form">
                    <div className="column">
                        <h2 className="ui header">Sign In</h2>
                        <Form
                            onSubmit={onSubmit}
                            validate={(formValues) => {
                                const errors = {};
                                //add field level validation
                                return errors;

                            }}>
                            {({ handleSubmit }) => (
                                <form onSubmit={handleSubmit} className="ui form error">
                                        <Field name="email" type="text" component={renderInput} label="Email" icon="user icon" />
                                        <Field name="password" type="password" component={renderInput} label="Password" icon="lock icon" />
                                        <button className="ui fluid teal submit button">Sign In</button>
                                </form> 
                            )}
                        </Form>
                    </div>
                    <div className="ui message signup-content">Don't have an account? <Link to="/signup">Sign-up</Link><div>Or, snoop around with the <Link to="/" onClick={e=> {guestAccount(guestDetails)}}>Demo Account</Link></div></div>
                </div>
            </div> 
    );
}

const mapStateToProps = (state) => {
    return { auth_errors: state.auth.errorMessage }
}
 
export default connect(mapStateToProps, { signIn })(SignIn);

