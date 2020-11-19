import React, { Fragment, useState } from 'react';
import Header from '../../Containers/Header/Header'
import Slider from '../../Containers/Slider/Slider'
import Menus from '../MenuPage/Menus/Menus';
import SmallAbout from '../../Containers/SmallAbout/SmallAbout';
import classes from './HomePage.module.css';
import PhotoHolder from '../../Containers/PhotoHolder/PhotoHolder';
import Footer from '../../Containers/Footer/Footer';
import Reviews from '../../Containers/Reviews/Reviews';

const HomePage = (props) => {
    const mql = window.matchMedia('(max-width: 880px)')
    const [loadedOnce, useLoadedOnce] = useState({
        loaded: props.IsMobile
    })

        
        
    const Handler = (updatedLoad) => {
        useLoadedOnce({
            loaded: updatedLoad
        })
    }
       
    
    if(!loadedOnce.loaded){
            const mobileView = mql.matches;
            props.Resize(mobileView)
            props.TurnSliderOff();
            let updatedLoad = {...loadedOnce}
            let updatedLoadLoaded = {...updatedLoad.loaded}
            updatedLoadLoaded = true
            Handler(updatedLoad);
               
    }
        
    

    
    
    mql.addEventListener('change', (e) => {
        const mobileView = e.matches;
        props.Resize(mobileView)
    })

    




    
    
    return ( 
        
        <Fragment>
            <div className={classes.Body}>
            <Header IsMobile={props.IsMobile}/>
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

export default HomePage