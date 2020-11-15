import React, { Fragment } from 'react';
import classes from './AboutPage.module.css';
import Header from '../../Containers/Header/Header';
import Footer from '../../Containers/Footer/Footer';


const aboutPage = () => {
    return <Fragment>
        <Header />
        <div className={classes.AboutPage}>
            <div className={classes.FirstDiv}><p className={classes.FirstDivWords}>Our</p><p className={classes.FirstDivWordsTwo}>History</p></div>
            <div className={classes.Divider}></div>
            <div className={classes.SecondDiv}>
                <img  src='/Images/StorePhotoOne.jpg' alt="store one" className={classes.ImageOne}></img>
                <div className={classes.SecondDivWords}>
                    <p className={classes.SecondDivTitle}>Where we began</p>
                    <p className={classes.SecondDivDescription}>Originally a small restaurant in the outskirts of town. The founder began to sell his wife's cooking to much success. However, he thought the food would appeal more to those without a Chinese decent if some of the flavor refleccted American food. This fusion led to the specialty plates that we serve today.</p>
                </div>
            </div>
            <div className={classes.ThirdDiv}>
                
                <div className={classes.ThirdDivWords}>
                    <p className={classes.ThirdDivTitle}>Where we are now</p>
                    <p className={classes.ThirdDivDescription}>The foods that have evolved from the early days currently hold some of the most prestigous awards that can be obtain in the culinary world. </p>
                </div>
                <img  src='/Images/StorePhotoTwo.jpg' alt="store two" className={classes.ImageTwo}></img>
            </div>
            <div className={classes.SecondDiv}>
                <img  src='/Images/StorePhotoThree.jpg' alt="store three" className={classes.ImageOne}></img>
                <div className={classes.SecondDivWords}>
                    <p className={classes.SecondDivTitle}>Where we are headed</p>
                    <p className={classes.SecondDivDescription}>The world is changing are so is our restaurant. We would never let our food go stale and it is the ssame with our atmosphere. But we can not do it alone. Your feedback is important to us, so the next time you stop by please fill out a questionaire.</p>
                </div>
            </div>
            
            
            

            
        </div>

        <Footer />
    </Fragment>
}


export default aboutPage