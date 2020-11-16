import React from 'react';
import classes from './HeaderButton.module.css'

const headerButton = (props) => {
    
    let message = props.Label
    let marginStyled = {marginTop: props.MarginTop}

    console.log(props.IsMobile)


    return (
        
    <button className={classes.HeaderButton} style={
        marginStyled
    }>{message}</button>
    )
}

export default headerButton