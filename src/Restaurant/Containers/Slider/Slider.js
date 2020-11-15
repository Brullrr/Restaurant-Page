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
    
        console.log('[slider] ' + currentNum)
    let currentSlide = props.SliderArray[currentNum].image
    let marginTop = 5
    let sliderArray = [];
    console.log(props.SliderOn)

    if(props.SliderOn) {
        setTimeout(() => {props.TurnSliderOff()}, 1)
        setInterval(() => {
        props.AutomaticSlider() }, 10000 )
        console.log('This is running again')
    }


    props.SliderArray.map((element) => {
        marginTop = marginTop + 30

        let sliderButtonDiv = <div  style= {
            {
                marginTop: marginTop + 'px',
                backgroundColor: element.filledColor ? 'black' : 'transparent'
            }
        }className={classes.SliderButton} onClick={
            (e) => {
                props.Clicked(element.key)
                console.log(e.target.attributes.getNamedItem('style'))
            }
        }></div>

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