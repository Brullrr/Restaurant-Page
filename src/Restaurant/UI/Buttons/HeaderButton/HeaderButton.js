import React from 'react';
import classes from './HeaderButton.module.css'

const headerButton = (props) => {
    
    let message = props.Label
    let theClassName; 

    

    switch(props.ExtraClass) {
        case '1' : {
            theClassName = classes.HeaderButton1
            break;
        }
        case '2' : {
            theClassName = classes.HeaderButton2
            break;
        }
        case '3' : {
            theClassName = classes.HeaderButton3
            break;
        }
        case '4' : {
            theClassName = classes.HeaderButton4
            break;
        }
        default : {
            theClassName = classes.HeaderButton4
        }
    } 


    return (
        
    <button className={theClassName} >{message}</button>
    )
}

export default headerButton