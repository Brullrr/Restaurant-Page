import React from 'react';
import classes from './FoodMenu.module.css';
import { Link } from 'react-router-dom';

const foodMenu = () => {
    return (
    <div className={classes.FoodMenu} >
        <p className={classes.FoodTitle}>Food</p>
        <div className={classes.FoodPicture}>
            <div className={classes.Overlay}></div>
            <Link to='/menu/food'><button className={classes.InnerButton}> {'>'} </button></Link>
            <img className={classes.FoodImage} src='./Images/Fish.jpg' alt="food"></img>
            
        </div>
        <p className={classes.Description}>Some of the most traditional eastern foods accented beautifully with a vareity of delicous american toppings.</p>
        <Link to='/menu/food'><button className={classes.ViewMenuButton}>View Menu</button></Link>
    </div>
    
    )
}

export default foodMenu