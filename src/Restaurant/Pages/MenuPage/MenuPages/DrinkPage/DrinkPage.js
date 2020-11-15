import React, { Fragment } from 'react';
import Header from '../../../../Containers/Header/Header';
import Footer from '../../../../Containers/Footer/Footer';
import MenuItem from '../../../../Containers/MenuItem/MenuItem';
import classes from './DrinkPage.module.css';



 const drinkPage = () => {
     return (
         <Fragment>
             <Header />
                <p className={classes.Beverages}>&#8230;&#8230;&#8230;&#119977;&#8500;&#120003;-&#119964;&#120001;&#119992;&#8500;&#119997;&#8500;&#120001;&#119998;&#119992; &#8492;&#8495;&#120011;&#8495;&#120007;&#119990;&#8458;&#8495;&#120008;&#8230;&#8230;&#8230;</p>

                <MenuItem 
                    Image='./Images/Juice.jpg'
                    MenuItemName='Fruit Juice'
                    Description='Not the ordinary fruits like apples and bananas, but a huge range of exotic fruits to choose from.'
                    Price='4.00'
                />

                

                <p className={classes.Beverages}>&#8230;&#8230;&#8230;&#8230;&#119964;&#120001;&#119992;&#8500;&#119997;&#8500;&#120001;&#119998;&#119992; &#8492;&#8495;&#120011;&#8495;&#120007;&#119990;&#8458;&#8495;&#120008;&#8230;&#8230;&#8230;&#8230;</p>
                

                <MenuItem 
                    Image='./Images/Martini.jpg'
                    MenuItemName='Martinis'
                    Description='Think of a flavor. Our martini specialists can prepare you a martini with that flavor as a base. Just let us know. '
                    Price='7.00'
                />
                <div class={classes.Divider}></div>
                <MenuItem 
                    Image='./Images/LimeDrink.jpg'
                    MenuItemName='Lime Sawa'
                    Description='An alcohol Lime Sawa. A popular drink in Asia. Extremely popular among young women.'
                    Price='3.50'
                />
                <div class={classes.Divider}></div>


             <Footer />

         </Fragment>
     )
 }


 export default drinkPage