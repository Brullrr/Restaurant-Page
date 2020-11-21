import React,{ Fragment}  from 'react';
import classes from './SmallAbout.module.css';
import { Link } from 'react-router-dom';


const smallAbout = () => {
    return (
        <Fragment>
            <div className={classes.SmallAbout}>
                <img className={classes.BackgroundImage} src={process.env.PUBLIC_URL + "/Images/Table.jpg"} alt='background'/>
                <div className={classes.Overlay}>
                    <p className={classes.AboutUs}>About Us</p>
                    <p className={classes.Title}>The Best of East and West</p>
                    <p className={classes.Paragraph}> Here at the The Golden Castle we strive for original taste. Our dishes are based off of traditional Eastern cuisuine with added western flavors which results in some of the most delicious food you will ever taste. </p>
                    <Link to='/about' ><button className={classes.Button}>FIND OUT MORE</button></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default smallAbout