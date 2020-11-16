import React, { Fragment } from 'react';
import Header from '../../../../Containers/Header/Header';
import Footer from '../../../../Containers/Footer/Footer';
import MenuItem from '../../../../Containers/MenuItem/MenuItem';
import classes from './DessertPage.module.css';



 const dessertPage = () => {
     return (
         <Fragment>
             <Header />
                <p className={classes.Desserts}>&#8230;&#8230;&#8230;&#8230;&#119967;&#8495;&#120008;&#120008;&#8495;&#120007;&#120009;&#120008;&#8230;&#8230;&#8230;&#8230;</p>


                <MenuItem 
                    Image={process.env.PUBLIC_URL + '/Images/Brownie.jpg'}
                    MenuItemName='Oriental Brownie'
                    Description='This brownie come topped with an explosion of hot chocoloate sauce that would rival the eruption of Mount Fuji. It is not all sweet hot chocolate. The brownie is centered around our ice cream created from home-grown vanilla beans.'
                    Price='5.00'
                />
                <div class={classes.Divider}></div>
                <MenuItem 
                    Image={process.env.PUBLIC_URL + '/Images/CaramelDessert.jpg'}
                    MenuItemName='Caramel Cake'
                    Description='Rich Eurasian style cake lathered with a caramel sauce. This multi-layered tower of bliss can come stacked at any height. Our cake is set at a standard 3 layers, but feel free to order more on top.'
                    Price='6.75'
                />
                <div class={classes.Divider}></div>
                <MenuItem 
                    Image={process.env.PUBLIC_URL + '/Images/Dragon Fruit.jpg'}
                    MenuItemName='Dragon Tongue'
                    Description='The exotic asian fruit known as dragon fruit is a much try. Here we have incoporated it into our cake and ice cream mix to give a taste that can only be described as the tongue of a dragon.'
                    Price='7.00'
                />
                 <div class={classes.Divider}></div>
                <MenuItem 
                    Image={process.env.PUBLIC_URL + '/Images/GreenTeaCake.jpg'}
                    MenuItemName='Matcha Cake'
                    Description='Straight from the city of Kyoto in Japan, this cake features the taste of the most traditional tea in Japan.' 
                    Price='9.00'
                />


             <Footer />

         </Fragment>
     )
 }


 export default dessertPage