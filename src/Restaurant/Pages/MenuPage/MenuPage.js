import React, { Fragment } from 'react';
import Header from '../../Containers/Header/Header';
import Menus from './Menus/Menus';
import Footer from '../../Containers/Footer/Footer';
import classes from './MenuPage.module.css';

const menuPage = (props) => {
    
    return (
        <Fragment>
            <Header />
            <Menus />
            <div className={classes.Blank}></div>
            <Footer />
        </Fragment>
    )
}

export default menuPage