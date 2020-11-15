import classes from './ConfirmationPage.module.css';
import React, { Fragment } from 'react';
import Footer from '../../../Containers/Footer/Footer';

const confirmationPage = () => {
    return (
        <Fragment> 
            <div className={classes.Confirmation}>
                <p><strong>Thank you!</strong></p>
                <p>Your reservation has successfully been booked.</p>
                <p>A confirmation notice has been sent to your email.</p>
                <img src='./Images/Panda.jpg' alt='panda'></img>
            </div>
            
            <Footer />
        </Fragment>
    )
}

export default confirmationPage