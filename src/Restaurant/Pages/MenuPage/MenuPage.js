import React, { Fragment } from 'react';
import Header from '../../Containers/Header/Header';
import Menus from './Menus/Menus';
import Footer from '../../Containers/Footer/Footer';
import classes from './MenuPage.module.css';

const menuPage = (props) => {
    const mql = window.matchMedia('(max-width: 880px)')
    mql.addEventListener('change', (e) => {
        const mobileView = e.matches;
        props.Resize(mobileView)
    })
    return (
        <Fragment>
            <Header IsMobile={props.IsMobile}/>
            <Menus />
            <div className={classes.Blank}></div>
            <Footer />
        </Fragment>
    )
}

export default menuPage