import React from 'react';
import classes from './HeaderButton.module.css'

const headerButton = (props) => {
    
    let message = props.Label
    let marginStyled

    console.log("Header Button:   " + props.IsMobile)


    if(props.IsMobile) {
        marginStyled = {marginTop: props.MarginTop}
        
    } else {
        marginStyled = {marginTop: '0px'}
    }


    return (
        
    <button className={classes.HeaderButton} style={
        marginStyled
    }>{message}</button>
    )
}

export default headerButton