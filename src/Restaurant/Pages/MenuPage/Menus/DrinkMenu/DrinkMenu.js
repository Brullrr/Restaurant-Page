import React from 'react';
import classes from './DrinkMenu.module.css';
import { Link } from 'react-router-dom';

const drinkMenu = () => {
    return (
    <div className={classes.DrinkMenu} >
        <p className={classes.DrinkTitle}>Beverages</p>
        <div className={classes.DrinkPicture}>
            <div className={classes.Overlay}></div>
            <Link to='/menu/drinks'><button className={classes.InnerButton}> {'>'} </button></Link>
            <img className={classes.DrinkImage} src='./Images/Juice.jpg' alt="drink"></img>
            
        </div>
        <p className={classes.Description}>Sporting a variety of flavors our beverages are sure to quench any thirst level. Both alcoholic and non-alcoholic are available.</p>
        <Link to='/menu/drinks'><button className={classes.ViewMenuButton}>View Menu</button></Link>
    </div>
    
    )
}

export default drinkMenu