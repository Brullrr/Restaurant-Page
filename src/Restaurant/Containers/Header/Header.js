import React, { Fragment } from 'react';
import classes from './Header.module.css'
import HeaderButton from '../../UI/Buttons/HeaderButton/HeaderButton'
import RestaurantLogo from '../../Assests/Logos/RestaurantLogo/RestaurantLogo'
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <Fragment>
            <div className={classes.Header}>
                <Link to='/menu'><HeaderButton 
                    ExtraClass='1'
                    MarginTop='0px ' 
                    Label='Menu'/></Link>
                <Link to='/about'><HeaderButton 
                    ExtraClass='2'
                    MarginTop='30px ' 
                    Label='About Us'/></Link>
                <Link to='/'><RestaurantLogo /></Link>
                <Link to='/reservations'><HeaderButton 
                    ExtraClass='3'
                    MarginTop='60px ' 
                    Label='Reservations'/></Link>
                <Link to='/contact'><HeaderButton 
                    ExtraClass='4'
                    MarginTop='90px ' 
                    Label='Information'/></Link>
            </div>
        </Fragment>
    )
}

export default header
