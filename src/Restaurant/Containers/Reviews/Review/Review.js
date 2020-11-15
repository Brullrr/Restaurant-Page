import React from 'react';
import classes from './Review.module.css';

const review = (props) => {

    let starsArray= [];
    for(let i=0;i<props.Stars;i++){
        starsArray.push(<div className={classes.Stars} key={i}>
            <div className={classes.Star} key={i}></div>
        </div>)
    }


    return (
        <div className={classes.Review}>
            <div className={classes.ImageHolder}>
                <p>{props.PersonName}</p>
                <img className={classes.Image} src={props.Image} alt='Review'/>
                {starsArray.map((element) => {
                return element
            })}
            </div>
            <div className={classes.Paragraph}>
                <p>"{props.WrittenReview}"</p>
            </div>
            
        </div>
    )
}

export default review