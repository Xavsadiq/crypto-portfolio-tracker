import React, { useEffect } from 'react';
import { Form, Field } from "react-final-form";
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import fire from '../firebase';
import './SignUp.css';

const SignIn = ({ signIn, auth }) => {
    let history = useHistory();
    
    useEffect(() => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                history.push('/dashboard');
            }
        });
    })

    const renderError = ({ error, touched}) => {
        if (touched && auth.errorMessage){
            return (
                <div className="ui error message">
                    <div className="header">{auth.errorMessage}</div>
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
        try {
            signIn(formValues);
        }
        catch(e) { 
            console.log(e); 
        }

    }

    const guestAccount = (e) => {
        try {
            signIn(e);
        }
        catch(e) { 
            console.log(e); 
        }
        
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
                                if (!formValues.email) {
                                    errors.email = 'You must enter an email';
                                }
                            
                                if (!formValues.password) {
                                    errors.password = 'You must enter a password';
                                }
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
                    <div className="ui message signup-content">Don't have an account? <Link to="/signup">Sign-up</Link><div>Or, snoop around with the <Link to="/dashboard" onClick={e=> {guestAccount(guestDetails)}}>Demo Account</Link></div></div>
                </div>
            </div> 
    );
}

const mapStateToProps = (state) => {
    return { auth: state.auth}
}
 
export default connect(mapStateToProps, { signIn })(SignIn);

