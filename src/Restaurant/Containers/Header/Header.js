import React, { Fragment } from 'react';
import classes from './Header.module.css'
import HeaderButton from '../../UI/Buttons/HeaderButton/HeaderButton'
import RestaurantLogo from '../../Assests/Logos/RestaurantLogo/RestaurantLogo'
import { Link } from 'react-router-dom';

const header = (props) => {
    return (
        <Fragment>
            <div className={classes.Header}>
                <Link to='/menu'><HeaderButton IsMobile={props.IsMobile} MarginTop='0px ' Label='Menu'/></Link>
                <Link to='/about'><HeaderButton IsMobile={props.IsMobile} MarginTop='30px ' Label='About Us'/></Link>
                <Link to='/'><RestaurantLogo /></Link>
                <Link to='/reservations'><HeaderButton IsMobile={props.IsMobile} MarginTop='60px ' Label='Reservations'/></Link>
                <Link to='/contact'><HeaderButton IsMobile={props.IsMobile} MarginTop='90px ' Label='Information'/></Link>
            </div>
        </Fragment>
    )
}

export default header
