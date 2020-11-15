import React, { Fragment } from 'react';
import Header from '../../../../Containers/Header/Header';
import Footer from '../../../../Containers/Footer/Footer';
import MenuItem from '../../../../Containers/MenuItem/MenuItem';
import classes from './FoodPage.module.css';

const foodPage = () => {
    return (
        <Fragment>
            
            <Header />
            <p className={classes.Appetizers} >&#8230;&#8230;&#8230;&#8230;&#119964;&#120005;&#120005;&#8495;&#120009;&#119998;&#120015;&#8495;&#120007;&#120008;&#8230;&#8230;&#8230;&#8230;</p>
            <MenuItem   Image='/Images/Dumplings.jpg'
                        MenuItemName='Jiaozi' 
                        Description='Hand made Chinese styled dumblings. These jiaozi are filled with a delectible meat and vegetable filling. Our original jiaozi sauce is served on the side. ' 
                        Price='6.00'/>
            <div className={classes.Divider} />
                        
            <MenuItem   Image='/Images/ChickenWings.jpg'
                        MenuItemName='Chinese Chicken Wings' 
                        Description='These chicken wings offer more than meets the eye with our special blended spices. Coated in delicious Asian-inspired flavors these chicken wings are an excellent start to any dinner. '
                        Price='7.80'/>

            
            <p className={classes.Entrees}>&#8230;&#8230;&#8230;&#8230;&#8496;&#120003;&#120009;&#120007;&#8495;&#8495;&#120008;&#8230;&#8230;&#8230;&#8230;</p>
            <MenuItem   Image='/Images/Pork.jpg'
                        MenuItemName='Hot Pot' 
                        Description='Thin strips of pork and beef marinated to the highest degree. These meats come out along side a boiling hot bowl filled to the brim with our unique hotpot mix. This is a must try for any one who has not experienced our hotpot.'
                        Price='13.50'/>
            <MenuItem   Image='/Images/Kimbap.jpg'
                        MenuItemName='Kim Bap' 
                        Description='A traditional Korean dish that is known for its mix of anything that is desired. We offer a large selection of ingredients to choose from, but recommend letting the chef decide.'  
                        Price='14.50'/>
                        <div className={classes.Divider} />
            <MenuItem   Image='/Images/Ramen.jpg'
                        MenuItemName='Ramen' 
                        Description='No menu could be ccomplete with a ramen dish. These noodles are thinned and fluffled to give a lightness that could only be rivaled by the clouds. The default is pork, but beef and vegetarian is also available. '
                        Price='10.50'/>
                        <div className={classes.Divider} />
            <MenuItem   Image='/Images/Fish.jpg'
                        MenuItemName='Salmon Dish' 
                        Description='Served on a platter of vegetables this salmon is cooked at the perfect tempeture. The origin of the salmon is none other than tthat rural mountain-side of the Yellow River.'
                        Price='15.00'/>



            <Footer />            
        </Fragment>
        
    )
}

export default foodPage