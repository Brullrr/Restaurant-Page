import React from 'react';
import classes from './Dessert.module.css';
import { Link } from 'react-router-dom';

const dessertMenu = () => {
    return (
    <div className={classes.DessertMenu} >
        <p className={classes.DessertTitle}>Desserts</p>
        <div className={classes.DessertPicture}>
            <div className={classes.Overlay}></div>
            <Link to='/menu/desserts' ><button className={classes.InnerButton}> {'>'} </button></Link>
            <img className={classes.DessertImage} src='/Images/Brownie.jpg' alt="dessert"></img>
            
        </div>
        <p className={classes.Description}>Dragon's tongue. Green Tea. Are these really deserts? Check out our list of the most enticing sweets you will ever come across.</p>
        <Link to='/menu/desserts' ><button className={classes.ViewMenuButton}>View Menu</button></Link>
    </div>
    
    )
}

export default dessertMenu