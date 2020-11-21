import React from 'react';
import classes from './FooterLogo.module.css';

const footerlogo = () => {
    return (
        <img src={process.env.PUBLIC_URL + '/Images/logo-before.PNG'} className={classes.Logo} alt="restaurantLogo"></img>
    )
}

export default footerlogo