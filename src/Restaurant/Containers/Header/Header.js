import React, { Fragment } from 'react';
import classes from './Header.module.css'
import HeaderButton from '../../UI/Buttons/HeaderButton/HeaderButton'
import RestaurantLogo from '../../Assests/Logos/RestaurantLogo/RestaurantLogo'
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <Fragment>
            <div className={classes.Header}>
                <Link to='/menu'><HeaderButton Label='Menu'/></Link>
                <Link to='/about'><HeaderButton Label='About Us'/></Link>
                <Link to='/'><RestaurantLogo /></Link>
                <Link to='/reservations'><HeaderButton Label='Reservations'/></Link>
                <Link to='/contact'><HeaderButton Label='Information'/></Link>
            </div>
        </Fragment>
    )
}

export default header
