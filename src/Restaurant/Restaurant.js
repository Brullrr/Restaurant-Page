import classes from './Restaurant.module.css';
import React, {Fragment, Component} from 'react';
import HomePage from './Pages/HomePage/HomePage';
import { Route } from 'react-router-dom';
import MenuPage from './Pages/MenuPage/MenuPage';
import FoodPage from './Pages/MenuPage/MenuPages/FoodPage/FoodPage';
import DrinkPage from './Pages/MenuPage/MenuPages/DrinkPage/DrinkPage';
import DessertPage from './Pages/MenuPage/MenuPages//DessertPage/DessertPage';
import AboutPage from './Pages/AboutPage/AboutPage'
import ReservationsPage from './Pages/ReservationsPage/ReservationsPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ConfirmationPage from './Pages/ReservationsPage/ConfirmationPage/ConfirmationPage';

class Restaurant extends Component {
    state = {
        sliderArray: [  {image: process.env.PUBLIC_URL + '/Images/Lantern.jpg', key: 0, filledColor: true },
                        {image: process.env.PUBLIC_URL + '/Images/Dumplings.jpg', key: 1, filledColor: false },
                        {image: process.env.PUBLIC_URL + '/Images/Soup.jpg', key: 2, filledColor: false },
                        {image: process.env.PUBLIC_URL + '/Images/CaramelDessert.jpg', key: 3, filledColor: false },
                        {image: process.env.PUBLIC_URL + '/Images/GreenTeaCake.jpg', key: 4, filledColor: false },
                        {image: process.env.PUBLIC_URL + '/Images/Wall.jpg', key: 5, filledColor: false }],
        currentSlideNumber: 0,
        automaticSliderOn: true,
        reviewNumber: 0
    }

    
    
    

    automaticSlideChanger = () => {
        let copySliderArray = [...this.state.sliderArray]; 

        for(let i=0;i<copySliderArray.length;i++){
            if(i === (copySliderArray.length - 1) && copySliderArray[i].filledColor){
                copySliderArray[i].filledColor = false;
                copySliderArray[0].filledColor = true;
                break;
            }else if(copySliderArray[i].filledColor){
                copySliderArray[i].filledColor = false;
                copySliderArray[i + 1].filledColor = true
                break;
            } else {
                continue
            }    
        };
        let copyState = {...this.state}
        let copyCurrentSlideNumber = copyState.currentSlideNumber
        if(copyCurrentSlideNumber > copySliderArray.length - 2 ) {
            copyCurrentSlideNumber = 0
        } else {
            copyCurrentSlideNumber = copyCurrentSlideNumber + 1
        }


        let copyNumber = copyState.reviewNumber
            if(copyNumber >= 3) {
                copyNumber = 0;
            } else {
                copyNumber = copyNumber + 1;
            }


        this.setState({
            currentSlideNumber: copyCurrentSlideNumber,
            sliderArray: copySliderArray,
            reviewNumber: copyNumber
        })
        
    }

    turnSliderOffHandler = () => {
        this.setState({
            automaticSliderOn: false,
        })
    }
    

    changeSlideHandler = (currentNumber) => {
        let copiedSliderArray = [...this.state.sliderArray]; 

        for(let i=0;i<copiedSliderArray.length;i++){
            copiedSliderArray[i].filledColor = false;
        };
        copiedSliderArray[currentNumber].filledColor = true;


        this.setState({
            currentSlideNumber: currentNumber,
            sliderArray: copiedSliderArray
            })
    };
    
    
    render() {
        

        
        
        return (
            <Fragment>
                
                <div className={classes.Restaurant} >
                    <Route path="/" exact render={ () => 
                        <HomePage SliderArray={this.state.sliderArray} 
                        CurrentSlideNumber={this.state.currentSlideNumber}
                        SliderOn = {this.state.automaticSliderOn}
                        AutomaticSlider = {this.automaticSlideChanger}
                        Clicked= { this.changeSlideHandler}
                        TurnSliderOff = {this.turnSliderOffHandler}
                        ReviewNumber={this.state.reviewNumber}
                        Resize={(e) => {this.resizeHandler(e)}}/> 
                    } />
                    <Route path="/menu" exact render={ () => <MenuPage />} />
                    <Route path="/menu/food" exact render={ () => <FoodPage />} />  
                    <Route path="/menu/drinks" exact render={ () => <DrinkPage />} />  
                    <Route path="/menu/desserts" exact render={ () => <DessertPage />} />  
                    <Route path="/about" exact render={ () => <AboutPage />} />  
                    <Route path="/reservations" exact render={ () => <ReservationsPage />} />
                    <Route path="/contact" exact render={ () => <ContactPage />} />  
                    <Route path='/reservations/confirmation' exact render={ () =><ConfirmationPage /> }></Route>
                         
                </div>
                
            </Fragment>
        
        )
        
    }
}

export default Restaurant