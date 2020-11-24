import React, { Fragment, useState } from 'react';
import Header from '../../Containers/Header/Header';
import Footer from '../../Containers/Footer/Footer';
import Input from '../../Assests/Input/Input';
import classes from './ReservationsPage.module.css';
import { Link } from 'react-router-dom';


const ReservationsPage = (props) => {
    
    let d = new Date();
    let currentDate = d.getFullYear().toString() + '-' + (d.getMonth() + 1).toString() + '-' + (d.getDate() + 1).toString()

    const [orderFormState, useOrderFormState] = useState({
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                    maxLength: 10
                },
                valid: false,
                validationErrorMessage: 'Please enter a name with less than 10 characters.',
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                validationErrorMessage: 'Please enter a valid Email.',
                touched: false
            },
            phoneNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'Phone Number'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 7,
                    maxLength: 10
                },
                valid: false,
                validationErrorMessage: 'Please enter the area code and 7 digit number. No \'-\'. ',
                touched: false
            },
            date: {
                elementType: 'input',
                elementConfig: {
                    type: 'date'
                },
                value: '',
                validation: {
                    required: true,
                    currentYear: '2020',
                    thisDate: currentDate
                },
                valid: false,
                validationErrorMessage: 'Reservations must be made at least a day in advance and this year. ',
                touched: false
            },
            time: {
                elementType: 'input',
                elementConfig: {
                    type: 'time'
                },
                value: '',
                validation: {
                    required: true,
                    openTime: '09:00',
                    closeTime: '19:30'
                },
                valid: false,
                validationErrorMessage: 'Reservations can be made between the hours of 9AM and 7:30PM. ',
                touched: false
            },
            partyNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Guest Number'
                },
                value: '',
                validation: {
                    required: true,
                    minGuests: 1,
                    maxGuests: 20
                },
                valid: false,
                validationErrorMessage: 'For parties of more than 20 please call to book.',
                touched: false
            },
            comments: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Comments...'
                },
                validation:  false,
                value: '',
                touched: false
                
            },



        },
        formIsValid: false
    })

    let tf = true
    let stayOnPage = '/reservations'
    let toConfirmationPage = '/reservations/confirmation'

    const formElementsArray = [];

    for(let key in orderFormState.orderForm) {
        formElementsArray.push({
            id: key,
            config: orderFormState.orderForm[key]
        })
    }

    
    const checkValidity = (value, rules) => {
        let isValid = true;
        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength) {
            isValid = value.length >=rules.minLength && isValid;
        }

        if(rules.maxLength) {
            isValid = value.length <=rules.maxLength && isValid;
        }
        if(rules.openTime) {
            isValid = value >= rules.openTime && isValid;
        }
        if(rules.minGuests) {
            isValid = value >= rules.minGuests && isValid;
        }
        if(rules.maxGuests) {
            isValid = value <= rules.maxGuests && isValid;
        }
        if(rules.closeTime) {
            isValid = value <= rules.closeTime && isValid;
        }
        
        if(rules.currentYear) {
            let val = [];
            for(let i =0; i<4; i++){
                val.push(value.charAt(i))
            }
            isValid = val.join('') === rules.currentYear && isValid;
        }
        if(rules.thisDate) {
            isValid = value >= rules.thisDate && isValid;
        }

        return isValid
    }

    const InputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...orderFormState.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        updatedFormElement.touched = true
        
        let formIsValid = true;
        for(let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        console.log("[ReservationsPage]  Is the form valid beforehand?    " + orderFormState.formIsValid)
        useOrderFormState({
            orderForm : updatedOrderForm,
            formIsValid: formIsValid
        })
    }
    console.log("[ReservationsPage]  Is the form valid?    " + orderFormState.formIsValid)

    return (<Fragment>
        <Header IsMobile={props.IsMobile}/>
        
        <div className={classes.ReservationsPage}>
            <div className={classes.Title}>&#8492;&#8500;&#8500;&#120000; &#119990; &#8475;&#8495;&#120008;&#8495;&#120007;&#120011;&#119990;&#120009;&#119998;&#8500;&#120003;</div>
            <img className={classes.Image} src={process.env.PUBLIC_URL + '/Images/Table.jpg'} alt='table'></img>
            
            <div className={classes.InputForm}>

                {formElementsArray.map(formElement => (
                    <Input key={formElement.id} 
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig} 
                    value={formElement.config.value} 
                    changed={(event) => {InputChangedHandler(event, formElement.id)}}
                    shouldValidate={formElement.config.validation}
                    Touched={formElement.config.touched}
                    Invalid={!formElement.config.valid}
                    ValidationErrorMessage={formElement.config.validationErrorMessage}/>
                ))}
                

                <Link to={ tf ? toConfirmationPage : stayOnPage }><button disabled={!orderFormState.formIsValid} className={classes.Button}>Submit</button></Link>
            </div>
            
            
        </div>
        <div className={classes.Contact}>
                <p>Questions or Concerns?</p>
                <Link to='/contact'><p>Contact Us!</p></Link>

            </div>
        
        
        <Footer />
    </Fragment>)
}

export default ReservationsPage