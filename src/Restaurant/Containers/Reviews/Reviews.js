import React, { Fragment } from 'react';
import classes from './Reviews.module.css';
import Review from './Review/Review';

const reviews = (props) => {
    let num = props.ReviewNumber;
    let arrayOfReviews =[

            <Review 
            PersonName="Anthony Garcia"
            WrittenReview='I do not think I have had a better dining experience in my life. The amount of quality food for the price is amazing to say the least. I could not eat it all!'
            Image={process.env.PUBLIC_URL + '/Images/Rant.jpg'}
            Stars='5'/>,

            <Review 
            PersonName="Ricardo Gonzalez"
            WrittenReview='Great Food. Good Fun. The atmoshpere absolutely blows away any expectations.'
            Image={process.env.PUBLIC_URL + '/Images/Ricardo.jpg'}
            Stars='5'/>,

            <Review 
            PersonName="Cuong Dinh"
            WrittenReview=' I wanted to see if this place was just another watered down asian food restaurant, but I was absolutely astounded by the amazing food.'
            Image={process.env.PUBLIC_URL + '/Images/Cuong.jpg'}
            Stars='4'/>,

            <Review 
            PersonName="Oscar Delgado"
            WrittenReview='This is a review about the current restaurant that is being displayed. It was input dynamically by using REACT.'
            Image={process.env.PUBLIC_URL + '/Images/Oscar.jpg'}
            Stars='3'/>
    ];



    return   (
        <Fragment>
            <div className={classes.ReviewBanner}>A word from our customers. </div>
            {arrayOfReviews[num]}
        </Fragment>
    ) 
}

export default reviews