import React, { Fragment } from 'react';
import Header from '../../Containers/Header/Header'
import Slider from '../../Containers/Slider/Slider'
import Menus from '../MenuPage/Menus/Menus';
import SmallAbout from '../../Containers/SmallAbout/SmallAbout';
import classes from './HomePage.module.css';
import PhotoHolder from '../../Containers/PhotoHolder/PhotoHolder';
import Footer from '../../Containers/Footer/Footer';
import Reviews from '../../Containers/Reviews/Reviews';

const homePage = (props) => {
    return ( 
        <Fragment>
            <div className={classes.Body}>
            <Header />
            <Slider SliderArray={props.SliderArray} 
                    CurrentSlideNumber={props.CurrentSlideNumber} 
                    SliderOn = {props.SliderOn}
                    AutomaticSlider = {props.AutomaticSlider}
                    Clicked={props.Clicked}
                    TurnSliderOff = {props.TurnSliderOff}/>
            <Menus />
            <SmallAbout />
            <Reviews ReviewNumber={props.ReviewNumber} />
            <PhotoHolder />
            <Footer />         
            </div>
            
        </Fragment>
    )
}

export default homePage