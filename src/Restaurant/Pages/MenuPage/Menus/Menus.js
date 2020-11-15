import React, { Fragment} from 'react';
import classes from './Menus.module.css';
import FoodMenu from './FoodMenu/FoodMenu';
import DrinkMenu from './DrinkMenu/DrinkMenu';
import DessertMenu from './DessertMenu/DessertMenu';


const menus = () => {
    return (
        <Fragment> 
            <div className={classes.Menus}> 
                <FoodMenu />
                <DrinkMenu />
                <DessertMenu />
            </div>
        </Fragment>
    )
}

export default menus