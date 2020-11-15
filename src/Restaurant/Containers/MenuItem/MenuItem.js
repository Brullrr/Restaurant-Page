import React from 'react';
import classes from './MenuItem.module.css';

const menuItem = (props) => {

    
    


    return (
        <div className={classes.MenuItem}>
            <div className={classes.ImageHolder}>
                <p>{props.MenuItemName}</p>
                <img className={classes.Image} src={props.Image} alt='MenuItem'/>
            </div>
            <div className={classes.Paragraph}>
                <p>{props.Description}</p>
                <p>${props.Price}</p>
            </div>
        </div>
    )
}

export default menuItem