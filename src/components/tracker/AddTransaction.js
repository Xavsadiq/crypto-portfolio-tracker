import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from "react-final-form";
import { useHistory } from 'react-router-dom';
import Header from '../Header';
import { cryptoList, writeTransaction } from '../../actions';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { format, isValid, toDate, parseISO } from "date-fns";
import fire from '../../firebase';
import NumberFormat from 'react-number-format';
import './AddTransaction.css';
import "react-datepicker/dist/react-datepicker.css";


const AddTransaction = ({ cryptoList, coinList, writeTransaction }) => {
    let history = useHistory();
    useEffect(() => {
        fire.auth().onAuthStateChanged((user) => {
            if (!user) {
                history.push('/');
            }
       
            if (user && Object.keys(coinList).length === 0 ){
                    cryptoList();
            }
        })

    }, [coinList, cryptoList, history]);

    const onSubmit = (formValues) => {
        try {
            fire.auth().onAuthStateChanged((user) => {
                writeTransaction(formValues, user.uid);
            });
            history.push('/transactions');
        }
        catch (e) {
            console.log(e);
        }
    }

    const renderDropDown = ({ input, label, meta }) => {
        const className = `form-style ui field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label className="label-style">{label}</label>
                <Select {...input} autoComplete="off" type="text" options={coinList.data} className="input-style" />
                
            </div>
        );   
    };

    const RenderDatePicker = ({ name, label, input, meta, input: { value, onChange } }) => {
        const className = `form-style ui field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
            <label className="label-style">{label}</label>
                <DatePicker
                {...input}
                className="input-style"
                placeholderText="Enter date"    
                dateFormat="P"
                selected={value && isValid(parseISO(value)) ? toDate(parseISO(value)): null} // needs to be checked if it is valid date
                disabledKeyboardNavigation
                name={name}
                onChange={(date) => {
                // On Change, you should use final-form Field Input prop to change the value
                if (isValid(date)) {
                    input.onChange(format(new Date(date), "dd-MM-yyyy"));
                }
                else {
                input.onChange(null);
                }
                }}
            />
        </div>
        );
      };
      

    const renderQuantity = ({ label, input, meta, placeholder }) => {
        const className = `form-style ui field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label className="label-style">{label}</label>
                <NumberFormat {...input} autoComplete="off" type="text" className="input-style" placeholder={placeholder} thousandSeparator={true} />
                
            </div>
        );   
    };

    const renderValue = ({ label, input, meta, placeholder }) => {
        const className = `form-style ui field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label className="label-style">{label}</label>
                <NumberFormat {...input} autoComplete="off" type="text" className="input-style" placeholder={placeholder} prefix={'£'} thousandSeparator={true} />
            </div>
            
        );   
    };

    const renderRadio = ({ label, input, meta, placeholder }) => {
        const className = `ui field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" type="radio" placeholder={placeholder} />
            </div>
        );   
    };

    return (
        <div>
            <Header />
            <div className="ui container">
                <div className="ui segment teal">
                        <h3 className="ui dividing header">Add Transaction</h3>
                        <Form
                            onSubmit={onSubmit}
                            validate={(formValues) => {
                                const errors = {};
                                if (!formValues.type) {
                                    errors.type = 'You must select a transaction type';
                                }

                                if (!formValues.selectDate) {
                                    errors.selectDate = 'You must select a transaction date';
                                }

                                if (!formValues.selectCoin) {
                                    errors.selectCoin = 'You must select a coin';
                                }

                                if (!formValues.quantity) {
                                    errors.quantity = 'You must enter a quantity';
                                }

                                if (!formValues.totalValue) {
                                    errors.totalValue = 'You must enter a value';
                                }
                                return errors;

                            }}>
                            {({ handleSubmit }) => (
                                <form onSubmit={handleSubmit} className="ui form error">
                                    <div className="form-container">
                                        <div className="radio-style right">
                                            <Field name="type" component={renderRadio} type="radio" label="Bought" value="Bought"/>
                                            <Field name="type" component={renderRadio} type="radio" label="Sold "value="Sold" />
                                        </div>
                                        <Field name="selectDate" component={RenderDatePicker} label="Transaction Date" />
                                        <Field name="selectCoin" component={renderDropDown} label="Select Coin" />
                                        <Field name="quantity" component={renderQuantity} label="Quantity" />
                                        <Field name="totalValue" component={renderValue} label="Total Value" placeholder="£" />
                                        <button className="ui fluid teal submit button">Save</button>
                                    </div>

                                </form> 
                            )}  
                        </Form>
                    </div>
            </div> 
        </div>
    );
};

const mapStateToProps = (state) => {
    return { 
        coinList: state.cryptoList
    };
};

export default connect(mapStateToProps, { cryptoList, writeTransaction })(AddTransaction);