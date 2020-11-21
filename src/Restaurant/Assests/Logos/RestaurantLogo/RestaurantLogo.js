import React from 'react';
import classes from './RestaurantLogo.module.css';
const logo = () => {
    return (
        <img src={process.env.PUBLIC_URL + '/Images/logo-before.PNG'} className={classes.Logo} alt="restaurantLOGO"></img>
    )
}

export default logo