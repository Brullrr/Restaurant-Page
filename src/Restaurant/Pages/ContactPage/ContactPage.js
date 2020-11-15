import React, { Fragment } from 'react';
import Header from '../../Containers/Header/Header';
import Footer from '../../Containers/Footer/Footer';
import classes from './ContactPage.module.css';


const contactPage = () => {

    


    return (<Fragment>
        <Header />
        
        <div className={classes.ContactPage}>
            <div className={classes.ContactInformation}>
                <p  className={classes.OperatingHoursOne}>Operating Hours</p>
                <p><strong>Weekdays:</strong> 10am - 9pm</p>
                <p><strong>Weekends & Holidays:</strong> 10am - 10pm</p>
            </div>
            <div className={classes.ContactInformation}>
                <p className={classes.ContactInformationOne}>Contact Information</p>
                <p><strong>Phone:</strong> 505-867-5309</p>
                <p><strong>E-mail:</strong> theGoldenCastle@email.com</p>
            </div>
            <div className={classes.ContactInformation}>
                <p className={classes.ContactInformationOne}>Location</p>
                <p> 420 Executive Drive </p>
                <p> Los Angeles, California </p>
                <p> 12345 USA </p>
            </div>
            
        </div>
        
        
        <Footer />
    </Fragment>)
}

export default contactPage