import React from 'react';
import { Form, Field } from "react-final-form";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../actions';
import './SignUp.css';

const SignUp = ({ signUp }) => {
    const renderError = ({ error, touched }) => {
        if (touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
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
        signUp(formValues);
    }

    return (
        <div className="signup-form-container">
            <div className="ui segment teal signup-form">
                <div className="column">
                    <h2 className="ui header">Sign up</h2>
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
                            
                                if (!formValues.confirmPassword) {
                                    errors.confirmPassword = 'You must enter a password';
                                }
                            
                                if (formValues.password !== formValues.confirmPassword) {
                                    errors.confirmPassword = 'You must enter a matching password';
                                } 
                            
                                return errors;
                            }}>
                            {({ handleSubmit }) => (
                                <form onSubmit={handleSubmit} className="ui form error">
                                        <Field name="email" type="text" component={renderInput} label="Email" icon="user icon" />
                                        <Field name="password" type="password" component={renderInput} label="Password" icon="lock icon" />
                                        <Field name="confirmPassword" type="password" component={renderInput} label="Confirm Password" icon="lock icon" />
                                        <button className="ui fluid teal submit button">Create Account</button>
                                </form>
                            )}
                        </Form>
                </div>
                <div className="ui message signup-content">Already have an account? <Link to="/">Sign-in</Link></div>
            </div>
        </div>
    );
}

export default connect(null, { signUp })(SignUp);

