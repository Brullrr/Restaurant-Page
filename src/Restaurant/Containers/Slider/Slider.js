import React, { Fragment } from 'react';
import classes from './Slider.module.css'


// const sliderArrayFunction = (num) => {
//     let sliderArray = []
//     let currentNum = 0;
//     for(let i = 0;i<num;i++) {
//         sliderArray.push(<div className={classes.SliderButton} onClick={
//             () => {
//                 currentNum = i
//             }
//         }></div>)
//     }
//     return [sliderArray, currentNum]
// }
const slider = (props) => {
    
    let currentNum = props.CurrentSlideNumber
    
    let currentSlide = props.SliderArray[currentNum].image
    let marginTop = 5
    let sliderArray = [];
    

    if(props.SliderOn) {
        console.log( '[Slider]:  The slider is running:   ' + props.SliderOn)
        setTimeout(() => {props.TurnSliderOff()}, 1)
        setInterval(() => {
        props.AutomaticSlider() }, 10000 )
    }


    props.SliderArray.forEach((element) => {
        marginTop = marginTop + 30

        let sliderButtonDiv = <div  style= {
                                                {
                                                    marginTop: marginTop + 'px',
                                                    backgroundColor: element.filledColor ? 'black' : 'transparent'
                                                }
                                            }
                                    className={classes.SliderButton} 
                                    onClick={   () => 
                                                {
                                                    props.Clicked(element.key)
                                                    console.log(element.key)
                                                }
                                            } 
                                    key={element.key}></div>

        sliderArray.push(sliderButtonDiv)
    })
    
    
    return (
        <Fragment>
            <div className={classes.Slider}>
                <img className={classes.Image} src={currentSlide} alt='Chinese Food'/>
                {sliderArray}
            </div>
        </Fragment>
    )
    
} 

export default slider