import React from 'react';
import classes from './FooterButton.module.css'

const footerButton = (props) => {
    return (
    <button className={classes.FooterButton}>{props.Label}</button>
    )
}

export default footerButton