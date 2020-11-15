import React from 'react';
import classes from './HeaderButton.module.css'

const headerButton = (props) => {
    return (
    <button className={classes.HeaderButton}>{props.Label}</button>
    )
}

export default headerButton