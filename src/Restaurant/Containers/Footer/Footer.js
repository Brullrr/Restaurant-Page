import React, { Fragment } from 'react';
import classes from './Footer.module.css';
import FooterButton from '../../UI/Buttons/FooterButton/FooterButton';
import FooterLogo from '../../Assests/Logos/RestaurantLogo/FooterLogo/FooterLogo';
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <Fragment>
            <div className={classes.Footer}>
                <Link to='/'> <FooterLogo /></Link>
                
                <div className={classes.FooterWrap} >
                    <Link to='/menu' ><FooterButton Label='Menu'/></Link>
                    <Link to='/about' ><FooterButton Label='About Us'/></Link>
                    <Link to='/reservations' ><FooterButton Label='Reservations'/></Link>
                    <Link to='/contact' ><FooterButton Label='Information'/></Link>
                    
                   
                    
                    
                </div>
            </div>
            <div className={classes.Bottom}>The Golden Castle &copy; <i>All Rights Reserved</i> &nbsp;</div>
            
        </Fragment>
    )
}

export default footer
